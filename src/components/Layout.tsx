import type { ReactNode } from 'react'

const DOWNLOAD_LINK = 'https://github.com/DHLbigmonster/ledge/releases/latest/download/Ledge.dmg'

/** 子页面共享外壳：导航 + 页脚，视觉与首页一致（白底、石墨色、胶囊呼吸标） */
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white font-sans text-neutral-900 antialiased">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[480px] overflow-hidden">
        <div className="absolute -top-40 left-[8%] h-[420px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.10),transparent)] blur-3xl" />
        <div className="absolute -top-32 right-[4%] h-[360px] w-[520px] rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.06),transparent)] blur-3xl" />
      </div>

      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="/ledge/" className="flex items-center gap-2.5">
          <div className="h-5 w-10 rounded-full bg-black" />
          <span className="text-[15px] font-semibold tracking-tight">
            <span translate="no" className="notranslate">Ledge</span> 纳岛
          </span>
        </a>
        <div className="flex items-center gap-4 text-[13px] text-neutral-500">
          <a href="/ledge/faq/" className="transition hover:text-neutral-900">FAQ</a>
          <a
            href={DOWNLOAD_LINK}
            className="hidden rounded-full bg-black px-4 py-1.5 font-medium text-white transition hover:scale-[1.03] hover:bg-neutral-800 active:scale-100 sm:inline-flex"
          >
            Download for Mac
          </a>
        </div>
      </nav>

      <main className="relative mx-auto max-w-3xl px-6 pb-24 pt-12">{children}</main>

      <footer className="relative border-t border-neutral-100 py-8 text-center text-[12px] text-neutral-400">
        <p>The notch is a drawer · © 2026</p>
        <p className="mt-2">
          <a href="/ledge/" className="underline-offset-2 hover:underline">Home</a>
          <span className="mx-2">·</span>
          <a href="/ledge/faq/" className="underline-offset-2 hover:underline">FAQ</a>
          <span className="mx-2">·</span>
          <a href="https://github.com/DHLbigmonster/ledge" className="underline-offset-2 hover:underline">GitHub</a>
        </p>
      </footer>
    </div>
  )
}
