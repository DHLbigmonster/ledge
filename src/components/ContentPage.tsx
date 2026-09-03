import type { ReactNode } from 'react'
import Layout from './Layout'
import BeautifyShowcaseImage from './BeautifyShowcaseImage'
import { DOWNLOAD_LINK, goatEvent, sitePath } from '../site'

type Section = {
  title: string
  body: ReactNode
}

export default function ContentPage({
  eyebrow,
  title,
  intro,
  sections,
  related,
  image,
  lang = 'en',
}: {
  eyebrow: string
  title: string
  intro: string
  sections: Section[]
  related: { href: string; label: string; description: string }[]
  image?: { src: string; alt: string; width: number; height: number }
  lang?: 'en' | 'zh'
}) {
  const zh = lang === 'zh'

  return (
    <Layout lang={lang}>
      <header className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">{eyebrow}</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-neutral-500">{intro}</p>
      </header>

      {image && (image.src === '/beautify-current.jpg'
        ? <BeautifyShowcaseImage alt={image.alt} loading="eager" className="mt-12 h-auto w-full rounded-2xl border border-neutral-100 shadow-[0_20px_60px_-22px_rgba(0,0,0,0.2)]" />
        : <img src={sitePath(image.src)} alt={image.alt} width={image.width} height={image.height} loading="eager" className="mt-12 h-auto w-full rounded-2xl border border-neutral-100 shadow-[0_20px_60px_-22px_rgba(0,0,0,0.2)]" />
      )}

      <div className="mt-14 space-y-10 text-[15px] leading-7 text-neutral-600">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">{section.title}</h2>
            <div className="mt-3 space-y-3">{section.body}</div>
          </section>
        ))}
      </div>

      <section className="mt-16 border-t border-neutral-100 pt-10">
        <h2 className="text-xl font-semibold tracking-tight">{zh ? '继续了解' : 'Keep exploring'}</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          {related.map((item) => (
            <a key={item.href} href={sitePath(item.href)} className="rounded-2xl border border-neutral-200/70 p-5 transition hover:-translate-y-0.5 hover:border-neutral-400">
              <span className="text-[14px] font-semibold text-neutral-900">{item.label}</span>
              <span className="mt-1 block text-[12.5px] leading-relaxed text-neutral-500">{item.description}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl bg-black px-7 py-10 text-center text-white">
        <h2 className="text-2xl font-semibold">{zh ? '让刘海真正有用。' : 'Make the notch useful.'}</h2>
        <p className="mx-auto mt-2 max-w-md text-[13px] leading-relaxed text-white/60">{zh ? 'macOS 14+ 免费公开测试版，Apple 芯片与 Intel 通用。当前版本暂未完成 Apple 公证。' : 'Free public beta for macOS 14+. Universal for Apple silicon and Intel. Not notarized yet.'}</p>
        <a href={DOWNLOAD_LINK} {...goatEvent('download-footer')} className="mt-6 inline-flex rounded-full bg-white px-6 py-2.5 text-[13px] font-medium text-black transition hover:scale-[1.03] active:scale-100">
          {zh ? '下载 Ledge 纳岛' : 'Download Ledge for Mac'}
        </a>
      </section>
    </Layout>
  )
}
