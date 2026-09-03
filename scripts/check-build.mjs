import { access, readdir, readFile } from 'node:fs/promises'
import { dirname, extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const siteUrl = new URL(process.env.SITE_URL || 'https://ledgeformac.github.io/')
const basePath = siteUrl.pathname.replace(/\/$/, '')
const errors = []
const seenTitles = new Map()
const seenDescriptions = new Map()

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true })
  const nested = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name)
    return entry.isDirectory() ? walk(path) : [path]
  }))
  return nested.flat()
}

function localPath(value) {
  if (!value || /^(?:mailto:|tel:|data:|javascript:|#)/i.test(value)) return null
  const url = new URL(value, siteUrl)
  if (url.origin !== siteUrl.origin) return null
  let path = decodeURIComponent(url.pathname)
  if (basePath && path.startsWith(`${basePath}/`)) path = path.slice(basePath.length)
  if (path === basePath) path = '/'
  return path
}

function outputTarget(path) {
  if (path === '/') return join(dist, 'index.html')
  if (path === '/404/') return join(dist, '404.html')
  const clean = path.replace(/^\//, '')
  if (extname(clean)) return join(dist, clean)
  return join(dist, clean, 'index.html')
}

const files = await walk(dist)
const htmlFiles = files.filter((file) => file.endsWith('.html'))

for (const file of htmlFiles) {
  const html = await readFile(file, 'utf8')
  const label = relative(dist, file)

  // Search-engine ownership files can use an .html suffix without being pages.
  if (!/<html[\s>]/i.test(html)) continue

  if (!/<h1[\s>]/i.test(html)) errors.push(`${label}: missing H1`)
  if (!/<link rel="canonical" href="https:\/\//i.test(html)) errors.push(`${label}: missing absolute canonical`)
  if (!/<meta property="og:image:width" content="1200"/i.test(html)) errors.push(`${label}: missing OG width`)
  if (!/<meta property="og:image:height" content="630"/i.test(html)) errors.push(`${label}: missing OG height`)

  if (!/<meta name="robots" content="noindex/i.test(html)) {
    const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1]
    if (!title) errors.push(`${label}: missing title`)
    else if (seenTitles.has(title)) errors.push(`${label}: duplicate title also used by ${seenTitles.get(title)}`)
    else seenTitles.set(title, label)
    if (!description) errors.push(`${label}: missing description`)
    else if (seenDescriptions.has(description)) errors.push(`${label}: duplicate description also used by ${seenDescriptions.get(description)}`)
    else seenDescriptions.set(description, label)
  }

  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const path = localPath(match[1])
    if (!path) continue
    try {
      await access(outputTarget(path))
    } catch {
      errors.push(`${label}: broken internal reference ${match[1]}`)
    }
  }
}

const sitemap = await readFile(join(dist, 'sitemap.xml'), 'utf8')
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
if (locations.length < 10) errors.push(`sitemap.xml: expected at least 10 canonical URLs, found ${locations.length}`)

for (const location of locations) {
  const url = new URL(location)
  if (url.origin !== siteUrl.origin) errors.push(`sitemap.xml: wrong origin ${location}`)
  const path = localPath(location)
  try {
    await access(outputTarget(path))
  } catch {
    errors.push(`sitemap.xml: missing output for ${location}`)
  }
}

const notFound = await readFile(join(dist, '404.html'), 'utf8')
if (!/<meta name="robots" content="noindex, follow"/i.test(notFound)) {
  errors.push('404.html: must be noindex, follow')
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Build check passed: ${htmlFiles.length} HTML files, ${locations.length} canonical URLs, no broken internal references.`)
