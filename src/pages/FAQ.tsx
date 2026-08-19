import Layout from '../components/Layout'

const faqs: { q: string; a: string }[] = [
  {
    q: 'Does Ledge work on a Mac without a notch?',
    a: 'Yes. On Macs with a physical notch, Ledge fuses with it. On Macs without one — including every Intel model — it shows a slim floating capsule at the top center of the screen: semi-transparent when idle, solid black when open. Everything works the same.',
  },
  {
    q: 'Which macOS version do I need?',
    a: 'macOS 14 Sonoma or newer. One universal build runs on both Apple silicon and Intel Macs.',
  },
  {
    q: 'Is Ledge free?',
    a: 'The public beta is completely free — no account, no trial timer, no subscription. A paid one-time license is planned for version 1.0, and everyone on the beta will get a launch discount.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Only on your Mac, in ~/Library/Application Support/Ledge. The core app makes zero network calls. The single exception is the update checker, which asks a feed on GitHub Pages whether a newer version exists — it sends nothing about you.',
  },
  {
    q: 'Does it really never read my password manager?',
    a: 'Correct. Clipboard capture (which is off by default) hard-blocks the concealed, transient, and auto-generated pasteboard types that 1Password and other password managers use. That content is never read, never stored.',
  },
  {
    q: 'How do I park a window in the notch?',
    a: 'Press Control + Option + L while any window is frontmost, and it folds into the island with a snapshot thumbnail. Click the card — or press Control + Option + Shift + L — and the window comes back. Window parking needs Accessibility permission; Ledge walks you through it the first time.',
  },
  {
    q: 'What happens to my files if I uninstall?',
    a: 'Nothing. Ledge stores references, not copies — your originals never move. Delete the app and the shelf data in Application Support, and everything else stays exactly where it was.',
  },
  {
    q: 'Why does macOS warn me when I first open it?',
    a: 'The beta is signed but not yet notarized with Apple, so Gatekeeper asks for one extra confirmation: System Settings → Privacy & Security → Open Anyway. Notarization is planned before the paid release.',
  },
]

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
          Ledge is built in the open — every issue and idea gets read.
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
