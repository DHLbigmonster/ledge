import type { ComponentType } from 'react'
import Home from './pages/Home'
import ZhHome from './pages/ZhHome'
import FAQ from './pages/FAQ'
import CompareNotchNook from './pages/CompareNotchNook'
import CompareYoink from './pages/CompareYoink'
import FileShelf from './pages/FileShelf'
import WindowParking from './pages/WindowParking'
import ScreenshotBeautifier from './pages/ScreenshotBeautifier'
import AiAgentWorkspace from './pages/AiAgentWorkspace'
import CompareBoringNotch from './pages/CompareBoringNotch'
import Privacy from './pages/Privacy'
import Changelog from './pages/Changelog'
import NotFound from './pages/NotFound'

export type SchemaKind = 'software' | 'faq' | 'webpage' | 'article' | 'privacy'

export type RouteMeta = {
  path: string
  out: string
  component: ComponentType
  lang: 'en' | 'zh-CN'
  locale: 'en_US' | 'zh_CN'
  title: string
  description: string
  keywords: string
  ogImage: string
  ogAlt: string
  schema: SchemaKind
  lastmod: string
  priority: number
  changefreq: 'weekly' | 'monthly'
  indexable?: boolean
  alternates?: { en: string; 'zh-CN': string; 'x-default': string }
}

const homeAlternates = { en: '/', 'zh-CN': '/zh/', 'x-default': '/' } as const

/**
 * The single source of truth for routable pages and build-time SEO output.
 * prerender.mjs consumes this same list for head tags, Schema and sitemap.
 */
export const routeManifest: RouteMeta[] = [
  {
    path: '/',
    out: 'index.html',
    component: Home,
    lang: 'en',
    locale: 'en_US',
    title: 'Ledge for Mac — A Dynamic Island that gets things done',
    description: 'Turn your Mac notch into a work shelf for files, screenshots, links, windows, AirDrop, beautification and audio recording. Free public beta for macOS 14+.',
    keywords: 'Dynamic Island for Mac, Mac notch app, Mac file shelf, drag and drop shelf, window parking Mac, Ledge for Mac',
    ogImage: '/og-image-en.png',
    ogAlt: 'Ledge for Mac expanded from the notch with work items ready to drag',
    schema: 'software',
    lastmod: '2026-08-24',
    priority: 1,
    changefreq: 'weekly',
    alternates: homeAlternates,
  },
  {
    path: '/zh/',
    out: 'zh/index.html',
    component: ZhHome,
    lang: 'zh-CN',
    locale: 'zh_CN',
    title: 'Ledge 纳岛 — 真正能干活的 Mac 灵动岛',
    description: '把 Mac 刘海变成工作抽屉：收纳文件、截图、链接、文字与窗口，还能投送、截图美化和录音。macOS 14+ 免费公测。',
    keywords: 'Mac 灵动岛, Mac 刘海工具, Mac 文件暂存, 窗口收纳, 截图美化, 纳岛, Ledge for Mac',
    ogImage: '/og-image-zh.png',
    ogAlt: 'Ledge 纳岛展开后收纳工作素材的 Mac 灵动岛',
    schema: 'software',
    lastmod: '2026-08-24',
    priority: 0.9,
    changefreq: 'weekly',
    alternates: homeAlternates,
  },
  {
    path: '/faq/', out: 'faq/index.html', component: FAQ, lang: 'en', locale: 'en_US',
    title: 'Ledge for Mac FAQ — Compatibility, privacy and installation',
    description: 'Answers about macOS compatibility, local storage, window parking, audio recording, pinning and installing the unnotarized Ledge public beta.',
    keywords: 'Ledge for Mac FAQ, Mac notch app compatibility, Ledge privacy, install unnotarized Mac app',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac product overview', schema: 'faq', lastmod: '2026-08-24', priority: 0.75, changefreq: 'monthly',
  },
  {
    path: '/features/file-shelf/', out: 'features/file-shelf/index.html', component: FileShelf, lang: 'en', locale: 'en_US',
    title: 'Mac File Shelf in the Notch — Ledge for Mac',
    description: 'Stage files, screenshots, links and text in a drag-and-drop Mac shelf. Copy, open, stack or drag each item back out when you need it.',
    keywords: 'Mac file shelf, drag and drop shelf Mac, temporary file shelf, notch shelf Mac',
    ogImage: '/og-image-en.png', ogAlt: 'Files and screenshots staged in the Ledge Mac notch shelf', schema: 'webpage', lastmod: '2026-08-24', priority: 0.9, changefreq: 'monthly',
  },
  {
    path: '/features/window-parking/', out: 'features/window-parking/index.html', component: WindowParking, lang: 'en', locale: 'en_US',
    title: 'Park Mac Windows in the Notch — Ledge for Mac',
    description: 'Temporarily park a Mac window in Ledge with a snapshot, then restore it to its previous place. A focused alternative to minimizing and hunting.',
    keywords: 'park Mac window, stash Mac window, hide window shortcut Mac, window shelf Mac',
    ogImage: '/og-image-en.png', ogAlt: 'A Mac window parked as a card inside Ledge', schema: 'webpage', lastmod: '2026-08-24', priority: 0.85, changefreq: 'monthly',
  },
  {
    path: '/features/screenshot-beautifier/', out: 'features/screenshot-beautifier/index.html', component: ScreenshotBeautifier, lang: 'en', locale: 'en_US',
    title: 'One-drop Screenshot Beautifier for Mac — Ledge',
    description: 'Drop a screenshot onto Ledge and get a share-ready PNG with spacing, rounded corners, shadow and a curated background. No sliders required.',
    keywords: 'screenshot beautifier Mac, pretty screenshot Mac, Xnapper alternative workflow, screenshot background Mac',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac with its one-drop screenshot beautifier', schema: 'webpage', lastmod: '2026-08-24', priority: 0.9, changefreq: 'monthly',
  },
  {
    path: '/use-cases/ai-agent-workspace/', out: 'use-cases/ai-agent-workspace/index.html', component: AiAgentWorkspace, lang: 'en', locale: 'en_US',
    title: 'A Mac Shelf for AI Agent Workflows — Ledge for Mac',
    description: 'Keep prompts, screenshots, output files, reference links and working windows close while you use Codex or another AI agent. Ledge stages materials; it does not control the agent.',
    keywords: 'AI agent workspace Mac, Codex workflow Mac, prompt shelf, AI work files Mac',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge holding working materials beside an AI agent workflow', schema: 'article', lastmod: '2026-08-24', priority: 0.85, changefreq: 'monthly',
  },
  {
    path: '/compare/notchnook/', out: 'compare/notchnook/index.html', component: CompareNotchNook, lang: 'en', locale: 'en_US',
    title: 'Ledge vs NotchNook — Work shelf or notch utility?',
    description: 'An evidence-linked comparison of Ledge and NotchNook: work-material staging and window parking versus a broader notch utility experience.',
    keywords: 'Ledge vs NotchNook, NotchNook alternative, Mac notch shelf comparison',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac work shelf', schema: 'article', lastmod: '2026-08-24', priority: 0.75, changefreq: 'monthly',
  },
  {
    path: '/compare/yoink/', out: 'compare/yoink/index.html', component: CompareYoink, lang: 'en', locale: 'en_US',
    title: 'Ledge vs Yoink — Two Mac drag-and-drop shelves compared',
    description: 'An evidence-linked comparison of Ledge and Yoink for temporary file staging, text, window parking, platform maturity and App Store availability.',
    keywords: 'Ledge vs Yoink, Yoink alternative Mac, Mac drag and drop shelf comparison',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac drag-and-drop shelf', schema: 'article', lastmod: '2026-08-24', priority: 0.75, changefreq: 'monthly',
  },
  {
    path: '/compare/boring-notch/', out: 'compare/boring-notch/index.html', component: CompareBoringNotch, lang: 'en', locale: 'en_US',
    title: 'Ledge vs boring.notch — Mac notch apps for different jobs',
    description: 'Compare Ledge’s work-material shelf and window parking with boring.notch’s open-source notch utilities and media-focused experience.',
    keywords: 'Ledge vs boring notch, boring.notch alternative, Mac Dynamic Island comparison',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac Dynamic Island work shelf', schema: 'article', lastmod: '2026-08-24', priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/privacy/', out: 'privacy/index.html', component: Privacy, lang: 'en', locale: 'en_US',
    title: 'Privacy and Local Storage — Ledge for Mac',
    description: 'What Ledge stores locally, when it creates managed image copies, which permissions it requests, and what network connections the app uses.',
    keywords: 'Ledge privacy, local Mac shelf, clipboard privacy Mac, Ledge data storage',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac local-first privacy overview', schema: 'privacy', lastmod: '2026-08-24', priority: 0.8, changefreq: 'monthly',
  },
  {
    path: '/changelog/', out: 'changelog/index.html', component: Changelog, lang: 'en', locale: 'en_US',
    title: 'Ledge for Mac Changelog — Public beta updates',
    description: 'Release notes for Ledge for Mac, including the current v0.9.27 public beta and links to the complete GitHub release history.',
    keywords: 'Ledge for Mac changelog, Ledge release notes, Ledge 0.9.27',
    ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac public beta release notes', schema: 'article', lastmod: '2026-08-29', priority: 0.7, changefreq: 'weekly',
  },
  {
    path: '/404/', out: '404.html', component: NotFound, lang: 'en', locale: 'en_US',
    title: 'Page not found — Ledge for Mac',
    description: 'That page is not in this drawer. Return to Ledge for Mac.',
    keywords: '', ogImage: '/og-image-en.png', ogAlt: 'Ledge for Mac', schema: 'webpage', lastmod: '2026-08-24', priority: 0, changefreq: 'monthly', indexable: false,
  },
]

export const routes: Record<string, ComponentType> = Object.fromEntries(
  routeManifest.map((route) => [route.path, route.component]),
)

export const notFoundRoute = routeManifest.find((route) => route.path === '/404/')!
