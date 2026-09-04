import Layout from '../components/Layout'
import { DOWNLOAD_LINK, goatEvent, sitePath } from '../site'

const rows = [
  { topic: 'Core direction', ledge: 'A shelf for moving work materials', rival: 'A broader notch utility and widget experience' },
  { topic: 'Files and links', ledge: 'Shelf cards, stacking, copy, open and drag-out actions', rival: 'Tray and file-oriented features described by NotchNook' },
  { topic: 'Window parking', ledge: 'Park and restore an existing Mac window', rival: 'Not listed as a core capability on the public product page' },
  { topic: 'Screenshot beautification', ledge: 'Eight one-drop presets rendered locally', rival: 'Not listed as a core capability on the public product page' },
  { topic: 'Media and widgets', ledge: 'Not part of the current release', rival: 'A visible part of the product direction' },
  { topic: 'Current distribution', ledge: 'Free, unnotarized public beta via direct download', rival: 'Check NotchNook’s current store and pricing pages' },
]

export default function CompareNotchNook() {
  return (
    <Layout>
      <header className="text-center"><p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">Comparison</p><h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Ledge vs NotchNook</h1><p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-neutral-500">NotchNook and Ledge both turn unused notch space into software, but the center of gravity is different: a broader notch utility versus a work-material drawer.</p></header>
      <div className="mt-12 overflow-x-auto rounded-2xl border border-neutral-200/70"><table className="w-full min-w-[680px] text-left text-[13px]"><thead><tr className="bg-neutral-50 text-neutral-500"><th className="px-4 py-3 font-medium">Topic</th><th className="px-4 py-3 font-semibold text-neutral-900">Ledge</th><th className="px-4 py-3 font-medium">NotchNook</th></tr></thead><tbody className="divide-y divide-neutral-100">{rows.map((row) => <tr key={row.topic}><td className="px-4 py-3 font-medium text-neutral-700">{row.topic}</td><td className="px-4 py-3 text-neutral-700">{row.ledge}</td><td className="px-4 py-3 text-neutral-500">{row.rival}</td></tr>)}</tbody></table></div>
      <div className="mt-12 space-y-9 text-[15px] leading-7 text-neutral-600">
        <section><h2 className="text-xl font-semibold text-neutral-900">Choose Ledge if your bottleneck is moving work.</h2><p className="mt-2">Ledge stages files, screenshots, links, text and windows at the top of the screen. Its small AirDrop, Beautify and Record targets are actions around those materials, not a dashboard of ambient information.</p></section>
        <section><h2 className="text-xl font-semibold text-neutral-900">Choose NotchNook if you want the notch to be a broader utility surface.</h2><p className="mt-2">NotchNook’s public site presents media, files and notch-based utilities as a wider experience. Check its current product page for the latest feature and purchase details.</p></section>
        <section><h2 className="text-xl font-semibold text-neutral-900">Sources and verification date</h2><p className="mt-2">Competitor descriptions were checked against the <a href="https://lo.cafe/notchnook" className="underline underline-offset-4">official NotchNook product page</a> on <time dateTime="2026-08-24">August 24, 2026</time>. Ledge details reflect v0.9.31. This table avoids user counts, ratings and unsupported claims.</p></section>
      </div>
      <div className="mt-14 rounded-3xl bg-black p-8 text-center text-white"><p className="text-lg font-semibold">Try the work shelf.</p><p className="mx-auto mt-2 max-w-md text-[13px] text-white/60">Free public beta for macOS 14+. Not notarized yet.</p><a href={DOWNLOAD_LINK} {...goatEvent('download-footer')} className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[13px] font-medium text-black">Download Ledge for Mac</a><p className="mt-4 text-[12px] text-white/50">See the <a href={sitePath('/features/file-shelf/')} className="underline">file shelf workflow</a> first.</p></div>
    </Layout>
  )
}
