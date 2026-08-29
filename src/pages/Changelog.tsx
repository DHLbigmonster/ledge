import Layout from '../components/Layout'
import { RELEASE_LINK, goatEvent, sitePath } from '../site'

export default function Changelog() {
  return (
    <Layout>
      <header className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-neutral-400">Changelog</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">Ledge public beta updates</h1>
        <p className="mx-auto mt-5 max-w-xl text-[16px] leading-relaxed text-neutral-500">A concise record of the current website-aligned release. GitHub remains the source for the complete archive and downloadable builds.</p>
      </header>

      <article className="mt-14 rounded-3xl border border-neutral-200/70 p-7 sm:p-9">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-semibold">v0.9.27</h2>
          <time dateTime="2026-08-29" className="text-[12px] text-neutral-400">Released August 29, 2026</time>
        </div>
        <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">The current universal build for Apple silicon and Intel Macs, with safer and more efficient multi-display interaction.</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-neutral-700">
          <li>Choose the main display or all displays; only the active screen expands and accepts drops.</li>
          <li>Cross-screen hover and drag routing now use one global pointer monitor.</li>
          <li>AirDrop and Beautify drop targets correctly follow the visible vertical tool tiles.</li>
          <li>Transient hover, selection and stack state reset when interaction moves between screens.</li>
          <li>Single-item selection deletion and display hot-plug state reconciliation are fixed.</li>
        </ul>
      </article>

      <article className="mt-6 rounded-3xl border border-neutral-200/70 p-7 sm:p-9">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="text-2xl font-semibold">v0.9.25</h2>
          <time dateTime="2026-08-23" className="text-[12px] text-neutral-400">Released August 23, 2026</time>
        </div>
        <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">The release that introduced marquee selection, protected pinning, configurable tool modules and local meeting recording.</p>
        <ul className="mt-6 list-disc space-y-2 pl-5 text-[14px] leading-relaxed text-neutral-700">
          <li>Notch and top-handle shelf for files, images, links, text and working windows.</li>
          <li>Vertical AirDrop, Beautify and audio-recording tools.</li>
          <li>Batch stacking, type organization, selection and protected pinned items.</li>
          <li>Optional image and text clipboard capture with password-manager pasteboard blocking.</li>
          <li>Dynamic screenshot visibility: hidden when collapsed and capturable while expanded.</li>
        </ul>
      </article>

      <div className="mt-10 text-center">
        <a href={RELEASE_LINK} target="_blank" rel="noopener noreferrer" {...goatEvent('release-notes')} className="inline-flex rounded-full bg-black px-6 py-2.5 text-[13px] font-medium text-white transition hover:scale-[1.03] active:scale-100">Read all GitHub releases</a>
      </div>

      <section className="mt-14 border-t border-neutral-100 pt-10 text-center">
        <h2 className="text-xl font-semibold">Before you install</h2>
        <p className="mx-auto mt-2 max-w-xl text-[13px] leading-relaxed text-neutral-500">The public beta is not notarized yet. Read the <a href={sitePath('/faq/')} className="font-medium text-neutral-900 underline underline-offset-4">installation FAQ</a> for the Gatekeeper confirmation steps.</p>
      </section>
    </Layout>
  )
}
