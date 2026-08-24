import { readFile } from 'node:fs/promises'

const key = process.env.INDEXNOW_KEY?.trim()
const siteUrl = process.env.SITE_URL?.trim()

if (!key || !siteUrl) {
  console.log('IndexNow skipped: INDEXNOW_KEY or SITE_URL is not configured.')
  process.exit(0)
}

if (!/^[A-Za-z0-9-]{8,128}$/.test(key)) {
  throw new Error('INDEXNOW_KEY must be 8–128 characters using letters, numbers, or hyphens.')
}

const origin = new URL(siteUrl)
const sitemap = await readFile(new URL('../dist/sitemap.xml', import.meta.url), 'utf8')
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])

if (urlList.length === 0) {
  throw new Error('No canonical URLs were found in dist/sitemap.xml.')
}

for (const url of urlList) {
  if (new URL(url).host !== origin.host) {
    throw new Error(`Sitemap URL does not belong to ${origin.host}: ${url}`)
  }
}

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify({
    host: origin.host,
    key,
    keyLocation: new URL(`${key}.txt`, origin).href,
    urlList,
  }),
})

if (!response.ok && response.status !== 202) {
  throw new Error(`IndexNow rejected the submission: HTTP ${response.status} ${await response.text()}`)
}

console.log(`IndexNow accepted ${urlList.length} canonical URLs (HTTP ${response.status}).`)
