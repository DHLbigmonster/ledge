import Layout from '../components/Layout'

const rows: { feature: string; ledge: string; rival: string }[] = [
  { feature: 'Price', ledge: 'Free public beta (paid 1.0 planned)', rival: '$25 one-time or $3/month' },
  { feature: 'File & link shelf in the notch', ledge: 'Yes — with batch stacking', rival: 'Yes' },
  { feature: 'Park whole windows in the notch', ledge: 'Yes — with snapshot thumbnails', rival: 'No' },
  { feature: 'Drag text out into any input field', ledge: 'Yes — native drag, works in web and Electron apps', rival: 'No' },
  { feature: 'Clipboard capture (images / text)', ledge: 'Optional, password managers hard-blocked', rival: 'No' },
  { feature: 'One click back to the original browser tab', ledge: 'Yes', rival: 'No' },
  { feature: 'Media controls / Now Playing', ledge: 'Not yet', rival: 'Yes' },
  { feature: 'Widgets (calendar, mirror, shortcuts)', ledge: 'Not yet', rival: 'Yes' },
  { feature: 'Works on Macs without a notch', ledge: 'Yes — slim opaque-black Top Handle', rival: 'Yes' },
  { feature: 'Local-only, zero account', ledge: 'Yes — core makes no network calls', rival: 'Yes' },
]

/** /compare/notchnook/ — 目标关键词：NotchNook alternative */
export default function CompareNotchNook() {
  return (
    <Layout>
      <header className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-widest text-neutral-400">Comparison</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Ledge vs NotchNook
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-neutral-500">
          NotchNook turned the Mac notch into a widget tray. Ledge turns it into a drawer.
          They overlap less than you&apos;d think — here&apos;s the honest breakdown.
        </p>
      </header>

      <div className="mt-12 overflow-hidden rounded-2xl border border-neutral-200/70">
        <table className="w-full text-left text-[13px]">
          <thead>
            <tr className="bg-neutral-50 text-neutral-500">
              <th className="px-4 py-3 font-medium">Feature</th>
              <th className="px-4 py-3 font-medium">
                <span translate="no" className="notranslate font-semibold text-neutral-900">Ledge</span>
              </th>
              <th className="px-4 py-3 font-medium">NotchNook</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-100">
            {rows.map((r) => (
              <tr key={r.feature}>
                <td className="px-4 py-3 text-neutral-600">{r.feature}</td>
                <td className="px-4 py-3 text-neutral-900">{r.ledge}</td>
                <td className="px-4 py-3 text-neutral-500">{r.rival}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-12 space-y-8 text-[15px] leading-relaxed text-neutral-600">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Choose Ledge if…</h2>
          <p className="mt-2">
            Your bottleneck is <em>moving stuff</em>: files between folders, screenshots into chats,
            text snippets into input fields, windows out of the way. Ledge is a staging drawer —
            drop things at the top of the screen, pull them out wherever you need them.
            It&apos;s also free right now, and the paid version will be a one-time purchase,
            not a subscription.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Choose NotchNook if…</h2>
          <p className="mt-2">
            You want the notch to be an <em>information hub</em> — music controls, calendar,
            camera mirror, Shortcuts. That&apos;s NotchNook&apos;s home turf, and it does it well.
            Ledge doesn&apos;t try to be a widget platform.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Can you run both?</h2>
          <p className="mt-2">
            People do. Many Ledge beta users keep a media widget app for Now Playing and use
            Ledge purely as the drop zone. They coexist on the same notch without conflict.
          </p>
        </section>
      </div>

      <div className="mt-14 rounded-2xl bg-black p-8 text-center text-white">
        <p className="text-lg font-semibold">Try the drawer, free.</p>
        <p className="mx-auto mt-2 max-w-md text-[13px] text-white/60">
          The public beta is the full app. No account, no timer, no card.
        </p>
        <a
          href="https://github.com/DHLbigmonster/ledge/releases/latest/download/Ledge.dmg"
          className="mt-5 inline-flex rounded-full bg-white px-6 py-2 text-[13px] font-medium text-black transition hover:scale-[1.03] active:scale-100"
        >
          Download Ledge for Mac
        </a>
      </div>
    </Layout>
  )
}
