import Layout from '../components/Layout'
import { DOWNLOAD_LINK, goatEvent, sitePath } from '../site'

const rows = [
  { topic: 'Primary job', ledge: 'Stage and move work materials', rival: 'Notch utilities and media controls' },
  { topic: 'Files and text', ledge: 'Shelf cards with copy, open and drag-out actions', rival: 'Shelf features documented by the project' },
  { topic: 'Window parking', ledge: 'Park and restore an existing Mac window', rival: 'Not presented as a core feature in the public project overview' },
  { topic: 'Screenshot beautification', ledge: 'Eight one-drop local presets', rival: 'Not presented as a core feature in the public project overview' },
  { topic: 'Source model', ledge: 'Free public beta; app source is not published', rival: 'Open-source project' },
  { topic: 'Platform', ledge: 'macOS 14+, Apple silicon and Intel universal build', rival: 'Check the current project requirements before installing' },
]

export default function CompareBoringNotch() {
  return (
    <Layout>
      <header className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">Comparison</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Ledge vs boring.notch</h1>
        <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-relaxed text-neutral-500">Both use the Mac notch, but they optimize for different moments. Ledge is a work-material shelf. boring.notch is an open-source notch utility with a broader media-and-widget direction.</p>
      </header>

      <div className="mt-12 overflow-x-auto rounded-2xl border border-neutral-200/70">
        <table className="w-full min-w-[680px] text-left text-[13px]">
          <thead><tr className="bg-neutral-50 text-neutral-500"><th className="px-4 py-3 font-medium">Topic</th><th className="px-4 py-3 font-semibold text-neutral-900">Ledge</th><th className="px-4 py-3 font-medium">boring.notch</th></tr></thead>
          <tbody className="divide-y divide-neutral-100">{rows.map((row) => <tr key={row.topic}><td className="px-4 py-3 font-medium text-neutral-700">{row.topic}</td><td className="px-4 py-3 text-neutral-700">{row.ledge}</td><td className="px-4 py-3 text-neutral-500">{row.rival}</td></tr>)}</tbody>
        </table>
      </div>

      <div className="mt-12 space-y-9 text-[15px] leading-7 text-neutral-600">
        <section><h2 className="text-xl font-semibold text-neutral-900">Choose Ledge when the notch should move work.</h2><p className="mt-2">Use it to keep files, screenshots, links, text and windows close to the task. AirDrop, screenshot beautification and audio recording sit beside the shelf as small action targets.</p></section>
        <section><h2 className="text-xl font-semibold text-neutral-900">Choose boring.notch when you want an open project and media experience.</h2><p className="mt-2">Its public repository and project overview emphasize a customizable notch experience with media controls and shelf utilities. Review the current documentation and releases before deciding which features matter to you.</p></section>
        <section><h2 className="text-xl font-semibold text-neutral-900">Sources and verification date</h2><p className="mt-2">Competitor descriptions were checked against the <a className="underline underline-offset-4" href="https://github.com/TheBoredTeam/boring.notch">official boring.notch repository</a> on <time dateTime="2026-08-24">August 24, 2026</time>. Ledge details reflect v0.9.27. Products change; follow the source links for the latest state.</p></section>
      </div>

      <div className="mt-14 rounded-3xl bg-black p-8 text-center text-white"><p className="text-lg font-semibold">Need a work shelf, not another dashboard?</p><a href={DOWNLOAD_LINK} {...goatEvent('download-footer')} className="mt-5 inline-flex rounded-full bg-white px-6 py-2.5 text-[13px] font-medium text-black">Download Ledge for Mac</a><p className="mt-4 text-[12px] text-white/50">Or read how Ledge handles <a className="underline" href={sitePath('/features/file-shelf/')}>files and clipboard materials</a>.</p></div>
    </Layout>
  )
}
