#!/usr/bin/env node
// The old project site remains online because installed app versions still use
// its appcast. Every marketing URL is reduced to an instant migration page
// whose canonical points to the matching URL on the single brand site.
import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = fileURLToPath(new URL('..', import.meta.url))
const out = `${root}dist-legacy`
const brand = 'https://ledgeformac.github.io'
const { routeManifest } = await import(`${root}dist-ssr/entry-server.js`)

const html = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const brandUrl = (path) => `${brand}${path === '/' ? '/' : path}`

const stub = ({ lang, title, target }) => `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${html(title)}</title>
    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="${html(target)}" />
    <meta http-equiv="refresh" content="0;url=${html(target)}" />
    <script>location.replace(${JSON.stringify(target)});</script>
    <style>body{font-family:-apple-system,"PingFang SC",sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;color:#111;background:#fafaf8}p{padding:24px;text-align:center}a{color:inherit}</style>
  </head>
  <body>
    <p>${lang === 'zh-CN' ? 'Ledge 纳岛官网已迁移，正在前往新地址…' : 'The Ledge for Mac website has moved.'} <a href="${html(target)}">ledgeformac.github.io</a></p>
  </body>
</html>
`

await rm(out, { recursive: true, force: true })

for (const page of routeManifest.filter((route) => route.indexable !== false)) {
  const target = brandUrl(page.path)
  const output = `${out}/${page.out}`
  await mkdir(dirname(output), { recursive: true })
  await writeFile(output, stub({
    lang: page.lang,
    title: page.lang === 'zh-CN' ? '页面已迁移 — Ledge 纳岛' : 'Page moved — Ledge for Mac',
    target,
  }))
}

await writeFile(`${out}/404.html`, `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="robots" content="noindex, follow"><title>Page moved — Ledge for Mac</title></head>
<body><p>The Ledge for Mac website has moved to <a href="${brand}/">ledgeformac.github.io</a>.</p><script>location.replace(${JSON.stringify(brand)} + location.pathname.replace(/^\\/ledge/, '') + location.search + location.hash);</script></body></html>`)
await writeFile(`${out}/robots.txt`, 'User-agent: *\nAllow: /\n')
await copyFile(`${root}public/appcast.xml`, `${out}/appcast.xml`)

for (const file of ['google09ccf1c8710b4212.html', 'BingSiteAuth.xml']) {
  await copyFile(`${root}public/${file}`, `${out}/${file}`)
}

console.log(`dist-legacy ready: ${routeManifest.filter((route) => route.indexable !== false).length} migration pages plus appcast.xml`)
