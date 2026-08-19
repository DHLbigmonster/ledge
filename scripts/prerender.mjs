/**
 * 构建期预渲染：把每条路由渲染成真实 HTML 写进 dist，
 * 让 Google/Bing 不执行 JS 也能读到完整内容（修 SPA 空壳问题）。
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { render } = await import(join(root, 'dist-ssr/entry-server.js'))

const SITE = 'https://dhlbigmonster.github.io/ledge'
const OG_IMAGE = `${SITE}/og-image.png`

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    ['Does Ledge work on a Mac without a notch?', 'Yes. On Macs without a notch it shows a slim floating capsule at the top center of the screen: semi-transparent when idle, solid black when open.'],
    ['Which macOS version do I need?', 'macOS 14 Sonoma or newer. The public beta is built for Apple silicon; a universal Intel build ships after hardware verification.'],
    ['Is Ledge free?', 'The public beta is completely free. A paid one-time license is planned for version 1.0.'],
    ['Where is my data stored?', 'Only on your Mac. The core app makes zero network calls.'],
    ['Does it really never read my password manager?', 'Correct. Clipboard capture hard-blocks the pasteboard types password managers use.'],
  ].map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

/** 每条路由的独立 head 元信息（title/description/canonical/OG） */
const pages = [
  {
    path: '/',
    out: 'index.html',
    title: 'Ledge 纳岛 — Your Mac\'s notch is a drawer',
    description: 'Ledge turns your Mac\'s notch into a private local drawer for files, screenshots, links, and windows. Free public beta for macOS 14+.',
  },
  {
    path: '/faq/',
    out: 'faq/index.html',
    title: 'FAQ — Ledge, the Mac notch drawer',
    description: 'Compatibility, privacy, window parking, and the free public beta — answers about Ledge, the app that turns your Mac\'s notch into a drawer.',
    jsonLd: faqJsonLd,
  },
  {
    path: '/compare/notchnook/',
    out: 'compare/notchnook/index.html',
    title: 'Ledge vs NotchNook — an honest comparison',
    description: 'NotchNook is a widget tray; Ledge is a drawer. Feature-by-feature comparison: price, window parking, text drag-out, clipboard capture, and who should pick which.',
  },
  {
    path: '/compare/yoink/',
    out: 'compare/yoink/index.html',
    title: 'Ledge vs Yoink — the notch shelf, compared',
    description: 'Yoink is the classic Mac drag-and-drop shelf. Ledge rethinks it around the notch, with window parking and text cards. Full comparison and which to choose.',
  },
]

const template = readFileSync(join(root, 'dist/index.html'), 'utf8')

for (const page of pages) {
  const url = `${SITE}${page.path}`
  let html = template
    .replace('<!--app-html-->', render(page.path))
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${page.description}$2`)
    .replace(/(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${page.title}$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${page.description}$2`)
    .replace(/(<meta name="twitter:title" content=")[^"]*(")/, `$1${page.title}$2`)
    .replace(/(<meta name="twitter:description" content=")[^"]*(")/, `$1${page.description}$2`)
    .replace(/(<meta property="og:image" content=")[^"]*(")/, `$1${OG_IMAGE}$2`)

  if (page.jsonLd) {
    html = html.replace('</head>',
      `    <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>\n  </head>`)
  }

  const outPath = join(root, 'dist', page.out)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${page.path} -> dist/${page.out} (${(html.length / 1024).toFixed(1)} KB)`)
}
