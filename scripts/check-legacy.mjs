import { access, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const dist = join(root, 'dist-legacy')
const brand = 'https://ledgeformac.github.io'
const { routeManifest } = await import(`${root}dist-ssr/entry-server.js`)
const errors = []

for (const page of routeManifest.filter((route) => route.indexable !== false)) {
  const output = join(dist, page.out)
  const target = `${brand}${page.path === '/' ? '/' : page.path}`
  try {
    const html = await readFile(output, 'utf8')
    if (!html.includes(`<link rel="canonical" href="${target}"`)) errors.push(`${page.out}: wrong canonical`)
    if (!html.includes(`http-equiv="refresh" content="0;url=${target}"`)) errors.push(`${page.out}: missing instant migration`)
  } catch {
    errors.push(`${page.out}: missing migration page`)
  }
}

for (const file of ['appcast.xml', 'robots.txt', '404.html']) {
  try {
    await access(join(dist, file))
  } catch {
    errors.push(`${file}: missing from legacy artifact`)
  }
}

const appcast = await readFile(join(dist, 'appcast.xml'), 'utf8')
const sourceAppcast = await readFile(join(root, 'public/appcast.xml'), 'utf8')
if (appcast !== sourceAppcast) errors.push('appcast.xml: legacy copy differs from release source')

try {
  await access(join(dist, 'sitemap.xml'))
  errors.push('sitemap.xml: legacy site must not advertise duplicate URLs')
} catch {
  // Expected: only the brand site publishes canonical URLs in a sitemap.
}

if (errors.length) {
  console.error(errors.join('\n'))
  process.exit(1)
}

console.log(`Legacy check passed: ${routeManifest.filter((route) => route.indexable !== false).length} old URLs migrate to the brand site; appcast preserved.`)
