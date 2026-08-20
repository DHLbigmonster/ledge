/**
 * 构建期预渲染：把每条路由渲染成真实 HTML 写进 dist，
 * 让 Google/Bing 不执行 JS 也能读到完整内容（修 SPA 空壳问题）。
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { render, faqs } = await import(join(root, 'dist-ssr/entry-server.js'))

const SITE = 'https://dhlbigmonster.github.io/ledge'
const OG_IMAGE = `${SITE}/og-image.png`

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
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
    description: 'Ledge turns your Mac\'s notch into a local drawer for files, windows, pinned items, and audio-only meeting recordings. Free public beta for macOS 14+.',
  },
  {
    path: '/zh/',
    out: 'zh/index.html',
    lang: 'zh-CN',
    title: '纳岛 Ledge — 把 Mac 刘海变成抽屉',
    description: '纳岛 Ledge 把 Mac 刘海变成文件、窗口与永久固定内容的本地抽屉，还能把系统声音和麦克风录成本地 m4a。免费公开测试版，macOS 14+。',
    keywords: 'Mac 灵动岛, 苹果电脑灵动岛, Mac 刘海利用, mac 文件暂存, 窗口收纳, 会议录音, 系统音频录制, 剪贴板管理, 纳岛, Ledge, dynamic island mac',
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
    description: 'NotchNook is a widget tray; Ledge is a drawer. Compare price, window parking, text drag-out, clipboard capture, and who should pick which.',
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

  // 页面语言（默认模板为 en）
  if (page.lang) {
    html = html.replace('<html lang="en">', `<html lang="${page.lang}">`)
  }
  // 页面独立关键词
  if (page.keywords) {
    html = html.replace(/(<meta name="keywords" content=")[^"]*(")/, `$1${page.keywords}$2`)
  }
  // 中英文首页互指，告诉搜索引擎同一内容的语言版本关系
  if (page.path === '/' || page.path === '/zh/') {
    html = html.replace('</head>',
      `    <link rel="alternate" hreflang="en" href="${SITE}/" />\n` +
      `    <link rel="alternate" hreflang="zh-CN" href="${SITE}/zh/" />\n` +
      `    <link rel="alternate" hreflang="x-default" href="${SITE}/" />\n  </head>`)
  }

  if (page.jsonLd) {
    html = html.replace('</head>',
      `    <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>\n  </head>`)
  }

  const outPath = join(root, 'dist', page.out)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${page.path} -> dist/${page.out} (${(html.length / 1024).toFixed(1)} KB)`)
}
