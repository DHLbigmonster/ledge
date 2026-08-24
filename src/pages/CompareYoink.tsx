import Layout from '../components/Layout'
import { DOWNLOAD_LINK, goatEvent, sitePath } from '../site'

const rows = [
  { topic: 'Shelf location', ledge: 'Notch or top-center handle', rival: 'Configurable screen edge' },
  { topic: 'Files and folders', ledge: 'Reference cards with stacking and drag-out', rival: 'Mature temporary drag-and-drop shelf' },
  { topic: 'Text and clipboard', ledge: 'Text cards plus optional image/text capture', rival: 'Clipboard-oriented features documented by Yoink' },
  { topic: 'Window parking', ledge: 'Park and restore an existing Mac window', rival: 'Not presented as a core feature on the Mac product page' },
  { topic: 'Screenshot beautification', ledge: 'Eight one-drop local presets', rival: 'Not presented as a core feature on the Mac product page' },
  { topic: 'Distribution maturity', ledge: 'Direct-download public beta, not notarized yet', rival: 'Established Mac App Store product' },
]

export default function CompareYoink() {
  return (
    <Layout>
      <header className="text-center"><p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">Comparison</p><h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Ledge vs Yoink</h1><p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-neutral-500">Yoink is an established Mac drag-and-drop shelf. Ledge takes the staging idea to the notch and extends it to working windows and small material actions.</p></header>
      <div className="mt-12 overflow-x-auto rounded-2xl border border-neutral-200/70"><table className="w-full min-w-[680px] text-left text-[13px]"><thead><tr className="bg-neutral-50 text-neutral-500"><th className="px-4 py-3 font-medium">Topic</th><th className="px-4 py-3 font-semibold text-neutral-900">Ledge</th><th className="px-4 py-3 font-medium">Yoink</th></tr></thead><tbody className="divide-y divide-neutral-100">{rows.map((row) => <tr key={row.topic}><td className="px-4 py-3 font-medium text-neutral-700">{row.topic}</td><td className="px-4 py-3 text-neutral-700">{row.ledge}</td><td className="px-4 py-3 text-neutral-500">{row.rival}</td></tr>)}</tbody></table></div>
      <div className="mt-12 space-y-9 text-[15px] leading-7 text-neutral-600">
        <section><h2 className="text-xl font-semibold text-neutral-900">Choose Ledge for a notch-centered work pocket.</h2><p className="mt-2">It keeps staged files beside text, screenshots, links and parked windows. The vertical tool targets add one-step AirDrop, screenshot beautification and audio recording around that shelf.</p></section>
        <section><h2 className="text-xl font-semibold text-neutral-900">Choose Yoink for the mature classic shelf.</h2><p className="mt-2">Yoink has a long Mac product history, App Store distribution and a focused edge-shelf workflow. That maturity matters if a temporary drag shelf is already central to your day.</p></section>
        <section><h2 className="text-xl font-semibold text-neutral-900">Sources and verification date</h2><p className="mt-2">Competitor descriptions were checked against the <a href="https://eternalstorms.at/yoink/mac/" className="underline underline-offset-4">official Yoink for Mac page</a> on <time dateTime="2026-08-24">August 24, 2026</time>. Ledge details reflect v0.9.25. Prices and minor features are intentionally left to the live product pages.</p></section>
      </div>
      <div className="mt-14 rounded-3xl bg-black p-8 text-center text-white"><p className="text-lg font-semibold">Try the shelf in the notch.</p><p className="mx-auto mt-2 max-w-md text-[13px] text-white/60">Free public beta for macOS 14+. Direct download, not notarized yet.</p><a href={DOWNLOAD_LINK} {...goatEvent('download-footer')} className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[13px] font-medium text-black">Download Ledge for Mac</a><p className="mt-4 text-[12px] text-white/50">Read the <a href={sitePath('/features/file-shelf/')} className="underline">Mac file shelf guide</a>.</p></div>
    </Layout>
  )
}
