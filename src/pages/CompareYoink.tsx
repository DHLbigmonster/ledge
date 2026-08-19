import Layout from '../components/Layout'

const rows: { feature: string; ledge: string; rival: string }[] = [
  { feature: 'Price', ledge: 'Free public beta (paid 1.0 planned)', rival: '$8.99 one-time' },
  { feature: 'Where the shelf lives', ledge: 'The notch / top center', rival: 'Screen edge (left, right, or bottom)' },
  { feature: 'Files, folders, images, links', ledge: 'Yes', rival: 'Yes' },
  { feature: 'Text snippets as draggable cards', ledge: 'Yes — drop straight into any input field', rival: 'Clipboard widget' },
  { feature: 'Park whole windows', ledge: 'Yes — snapshot thumbnail, one click back', rival: 'No' },
  { feature: 'Batch stacking (drop many, move as one)', ledge: 'Yes', rival: 'Stacks' },
  { feature: 'Clipboard auto-capture', ledge: 'Optional, off by default', rival: 'Yes' },
  { feature: 'Jump back to the original browser tab', ledge: 'Yes', rival: 'No' },
  { feature: 'iPhone / iPad companion', ledge: 'No', rival: 'Yes (Handoff)' },
  { feature: 'Mac App Store', ledge: 'No — direct download', rival: 'Yes' },
  { feature: 'Local-only, zero account', ledge: 'Yes — core makes no network calls', rival: 'Yes' },
]

/** /compare/yoink/ — 目标关键词：Yoink alternative */
export default function CompareYoink() {
  return (
    <Layout>
      <header className="text-center">
        <p className="text-[13px] font-medium uppercase tracking-widest text-neutral-400">Comparison</p>
        <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
          Ledge vs Yoink
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[16px] leading-relaxed text-neutral-500">
          Yoink is the classic Mac drag-and-drop shelf — polished, mature, on the App Store since 2015.
          Ledge rethinks the same idea around the notch. Here&apos;s how they differ.
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
              <th className="px-4 py-3 font-medium">Yoink</th>
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
            You like the shelf idea but want it where your eyes already are — the top of the
            screen, fused with the notch. Ledge also goes beyond files: park entire windows
            with a keyboard shortcut, stage text snippets and drop them into any input field,
            and jump back to the exact browser tab a link came from. And during the public
            beta, it&apos;s free.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Choose Yoink if…</h2>
          <p className="mt-2">
            You want the battle-tested option with an iOS companion, Mac App Store convenience,
            and years of refinements. Yoink is excellent software — Ledge exists because we
            wanted the same flow in the notch, with windows and text as first-class citizens.
          </p>
        </section>
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">A note on maturity</h2>
          <p className="mt-2">
            Ledge is in public beta. It&apos;s stable and daily-driver ready, but Yoink has a
            decade of edge cases behind it. If you depend on a shelf for work all day,
            try both — Ledge costs nothing to test.
          </p>
        </section>
      </div>

      <div className="mt-14 rounded-2xl bg-black p-8 text-center text-white">
        <p className="text-lg font-semibold">The notch is a drawer. Try it free.</p>
        <p className="mx-auto mt-2 max-w-md text-[13px] text-white/60">
          Full app, no account, no timer. macOS 14+.
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
