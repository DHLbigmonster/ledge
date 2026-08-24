/**
 * Build-time prerendering and SEO output.
 * src/routeManifest.ts is the only page inventory: the same records drive
 * routes, HTML metadata, Schema, sitemap and last-modified dates.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const { render, faqs, routeManifest } = await import(join(root, 'dist-ssr/entry-server.js'))

const SITE = (process.env.SITE_URL || 'https://dhlbigmonster.github.io/ledge').replace(/\/$/, '')
const VERSION = process.env.APP_VERSION || '0.9.25'

const htmlAttr = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')

const xml = htmlAttr
const pageUrl = (path) => `${SITE}${path === '/' ? '/' : path}`
const assetUrl = (path) => `${SITE}/${path.replace(/^\//, '')}`

function schemaFor(page) {
  const base = {
    '@context': 'https://schema.org',
    url: pageUrl(page.path),
    name: page.title,
    description: page.description,
    inLanguage: page.lang,
    dateModified: page.lastmod,
  }

  if (page.schema === 'software') {
    return {
      ...base,
      '@type': 'SoftwareApplication',
      name: page.lang === 'zh-CN' ? 'Ledge 纳岛' : 'Ledge for Mac',
      alternateName: page.lang === 'zh-CN' ? 'Ledge for Mac' : '纳岛',
      operatingSystem: 'macOS 14 or later',
      applicationCategory: 'UtilitiesApplication',
      softwareVersion: VERSION,
      processorRequirements: 'Apple silicon and Intel (universal build)',
      downloadUrl: 'https://github.com/DHLbigmonster/ledge/releases/latest/download/Ledge.dmg',
      isAccessibleForFree: true,
      featureList: [
        'Drag-and-drop shelf for files, folders, screenshots, links and text',
        'Window parking and restore',
        'AirDrop target',
        'Screenshot beautification presets',
        'Optional image and text clipboard capture',
        'Audio-only meeting recording for system audio and microphone',
        'Batch stacking, organization and protected pinning',
      ],
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    }
  }

  if (page.schema === 'faq') {
    return {
      ...base,
      '@type': 'FAQPage',
      mainEntity: faqs.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
      })),
    }
  }

  return {
    ...base,
    '@type': page.schema === 'article' ? 'Article' : page.schema === 'privacy' ? 'PrivacyPolicy' : 'WebPage',
    isPartOf: { '@type': 'WebSite', name: 'Ledge for Mac', url: pageUrl('/') },
  }
}

function replaceMeta(html, matcher, value) {
  return html.replace(matcher, (_match, before, after) => `${before}${htmlAttr(value)}${after}`)
}

function buildHead(template, page) {
  const url = pageUrl(page.path)
  const image = assetUrl(page.ogImage)
  const robots = page.indexable === false
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large'

  let html = template
    .replace(/<html lang="[^"]*">/, `<html lang="${page.lang}">`)
    .replace(/<title>[^<]*<\/title>/, `<title>${htmlAttr(page.title)}</title>`)
    .replace(/\s*<link rel="alternate" hreflang="[^"]+" href="[^"]+" \/>/g, '')
    .replace(/\s*<script type="application\/ld\+json">[\s\S]*?<\/script>/g, '')

  html = replaceMeta(html, /(<meta name="description" content=")[^"]*("\s*\/?>)/, page.description)
  html = replaceMeta(html, /(<meta name="keywords" content=")[^"]*("\s*\/?>)/, page.keywords)
  html = replaceMeta(html, /(<meta name="robots" content=")[^"]*("\s*\/?>)/, robots)
  html = replaceMeta(html, /(<link rel="canonical" href=")[^"]*("\s*\/?>)/, url)
  html = replaceMeta(html, /(<meta property="og:url" content=")[^"]*("\s*\/?>)/, url)
  html = replaceMeta(html, /(<meta property="og:title" content=")[^"]*("\s*\/?>)/, page.title)
  html = replaceMeta(html, /(<meta property="og:description" content=")[^"]*("\s*\/?>)/, page.description)
  html = replaceMeta(html, /(<meta property="og:image" content=")[^"]*("\s*\/?>)/, image)
  html = replaceMeta(html, /(<meta property="og:image:alt" content=")[^"]*("\s*\/?>)/, page.ogAlt)
  html = replaceMeta(html, /(<meta property="og:locale" content=")[^"]*("\s*\/?>)/, page.locale)
  html = replaceMeta(html, /(<meta name="twitter:title" content=")[^"]*("\s*\/?>)/, page.title)
  html = replaceMeta(html, /(<meta name="twitter:description" content=")[^"]*("\s*\/?>)/, page.description)
  html = replaceMeta(html, /(<meta name="twitter:image" content=")[^"]*("\s*\/?>)/, image)

  const extras = []
  extras.push('    <meta property="og:image:width" content="1200" />')
  extras.push('    <meta property="og:image:height" content="630" />')
  extras.push(`    <meta name="twitter:image:alt" content="${htmlAttr(page.ogAlt)}" />`)
  extras.push(`    <meta http-equiv="content-language" content="${page.lang}" />`)
  if (page.locale === 'en_US') extras.push('    <meta property="og:locale:alternate" content="zh_CN" />')
  if (page.locale === 'zh_CN') extras.push('    <meta property="og:locale:alternate" content="en_US" />')

  if (page.alternates) {
    for (const [language, path] of Object.entries(page.alternates)) {
      extras.push(`    <link rel="alternate" hreflang="${language}" href="${htmlAttr(pageUrl(path))}" />`)
    }
  }

  extras.push(`    <script type="application/ld+json">${JSON.stringify(schemaFor(page)).replaceAll('<', '\\u003c')}</script>`)
  return html.replace('</head>', `${extras.join('\n')}\n  </head>`)
}

const template = readFileSync(join(root, 'dist/index.html'), 'utf8')

for (const page of routeManifest) {
  let html = buildHead(template, page)
    .replace('<!--app-html-->', render(page.path))

  const outPath = join(root, 'dist', page.out)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html)
  console.log(`prerendered ${page.path} -> dist/${page.out} (${(html.length / 1024).toFixed(1)} KB)`)
}

const indexed = routeManifest.filter((page) => page.indexable !== false)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
  ...indexed.flatMap((page) => {
    const lines = [
      '  <url>',
      `    <loc>${xml(pageUrl(page.path))}</loc>`,
      `    <lastmod>${page.lastmod}</lastmod>`,
      `    <changefreq>${page.changefreq}</changefreq>`,
      `    <priority>${page.priority.toFixed(2)}</priority>`,
    ]
    if (page.alternates) {
      for (const [language, path] of Object.entries(page.alternates)) {
        lines.push(`    <xhtml:link rel="alternate" hreflang="${language}" href="${xml(pageUrl(path))}" />`)
      }
    }
    lines.push('  </url>')
    return lines
  }),
  '</urlset>',
  '',
].join('\n')

writeFileSync(join(root, 'dist/sitemap.xml'), sitemap)
writeFileSync(join(root, 'dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${pageUrl('/sitemap.xml')}\n`)
console.log(`generated sitemap.xml and robots.txt for ${SITE}`)
