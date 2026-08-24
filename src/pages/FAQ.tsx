import Layout from '../components/Layout'
import { faqs } from '../content/faqs'

/** FAQ 页：英文优先（主战场欧美），FAQPage 结构化数据由构建脚本注入 */
export default function FAQ() {
  return (
    <Layout>
      <header className="text-center">
        <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Frequently asked questions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-neutral-500">
          Everything about the notch, privacy, compatibility, and the free public beta.
        </p>
      </header>

      <div className="mt-12 divide-y divide-neutral-100">
        {faqs.map((f) => (
          <details key={f.q} className="group py-5" open={false}>
            <summary className="flex cursor-pointer list-none items-center justify-between text-left text-[15px] font-medium text-neutral-900 marker:hidden">
              {f.q}
              <span className="ml-4 shrink-0 text-neutral-300 transition group-open:rotate-45">＋</span>
            </summary>
            <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-neutral-500">{f.a}</p>
          </details>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-neutral-200/70 bg-neutral-50 p-6 text-center">
        <p className="text-[15px] font-medium">Still curious?</p>
        <p className="mt-1 text-[13px] text-neutral-500">
          Ledge improves through public-beta feedback. Reproducible reports are especially useful.
        </p>
        <a
          href="https://github.com/DHLbigmonster/ledge/issues/new/choose"
          className="mt-4 inline-flex rounded-full bg-black px-5 py-2 text-[13px] font-medium text-white transition hover:scale-[1.03] hover:bg-neutral-800 active:scale-100"
        >
          Open GitHub Issues
        </a>
      </div>
    </Layout>
  )
}
