import type { ReactNode } from 'react'
import NewsletterSignup from './NewsletterSignup'
import { DOWNLOAD_LINK, GITHUB_LINK, goatEvent, sitePath } from '../site'

/** 子页面共享外壳：导航 + 页脚，视觉与首页一致（白底、石墨色、胶囊呼吸标） */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white font-sans text-neutral-900 antialiased">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] overflow-hidden">
        <div className="absolute -top-40 left-[8%] h-[420px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.10),transparent)] blur-3xl" />
        <div className="absolute -top-32 right-[4%] h-[360px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.06),transparent)] blur-3xl" />
      </div>

      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href={sitePath('/')} className="flex items-center gap-2.5">
          <div className="h-5 w-10 rounded-full bg-black" />
          <span className="text-[15px] font-semibold tracking-tight">
            <span translate="no" className="notranslate">Ledge for Mac</span>
          </span>
        </a>
        <div className="flex items-center gap-4 text-[13px] text-neutral-500">
          <a href={sitePath('/features/file-shelf/')} className="hidden transition hover:text-neutral-900 sm:inline">Features</a>
          <a href={sitePath('/faq/')} className="transition hover:text-neutral-900">FAQ</a>
          <a href={sitePath('/zh/')} {...goatEvent('language-switch')} className="transition hover:text-neutral-900">ZH</a>
          <a
            href={DOWNLOAD_LINK}
            {...goatEvent('download-hero')}
            className="hidden rounded-full bg-black px-4 py-1.5 font-medium text-white transition hover:scale-[1.03] hover:bg-neutral-800 active:scale-100 sm:inline-flex"
          >
            Download for Mac
          </a>
        </div>
      </nav>

      <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-12">{children}</main>

      <footer className="relative border-t border-neutral-100 px-6 py-12 text-[12px] text-neutral-500">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-semibold text-neutral-900">Ledge for Mac</p>
            <p className="mt-2 max-w-xs leading-relaxed">A work-focused Dynamic Island for files, windows and the small tools around them.</p>
            <div className="mt-5"><NewsletterSignup compact /></div>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Product</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href={sitePath('/features/file-shelf/')} className="hover:text-neutral-900">Mac file shelf</a>
              <a href={sitePath('/features/window-parking/')} className="hover:text-neutral-900">Window parking</a>
              <a href={sitePath('/features/screenshot-beautifier/')} className="hover:text-neutral-900">Screenshot beautifier</a>
              <a href={sitePath('/use-cases/ai-agent-workspace/')} className="hover:text-neutral-900">AI agent workspace</a>
              <a href={sitePath('/changelog/')} className="hover:text-neutral-900">Changelog</a>
            </div>
          </div>
          <div>
            <p className="font-semibold text-neutral-900">Trust & compare</p>
            <div className="mt-3 flex flex-col gap-2">
              <a href={sitePath('/privacy/')} className="hover:text-neutral-900">Privacy</a>
              <a href={sitePath('/faq/')} className="hover:text-neutral-900">FAQ</a>
              <a href={sitePath('/compare/boring-notch/')} className="hover:text-neutral-900">vs boring.notch</a>
              <a href={sitePath('/compare/notchnook/')} className="hover:text-neutral-900">vs NotchNook</a>
              <a href={sitePath('/compare/yoink/')} className="hover:text-neutral-900">vs Yoink</a>
              <a href={GITHUB_LINK} className="hover:text-neutral-900">GitHub releases & issues</a>
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-5xl border-t border-neutral-100 pt-6 text-neutral-400">The notch is a drawer · © 2026</p>
      </footer>
    </div>
  )
}
