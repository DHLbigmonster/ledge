export const faqs: { q: string; a: string }[] = [
  {
    q: 'Is there a Dynamic Island app for Mac?',
    a: 'Yes. Ledge is a native Mac notch app that turns the area around the MacBook notch into a work shelf for files, screenshots, links, text and windows. It is currently a free public beta for macOS 14 or later.',
  },
  {
    q: 'Can I download the Mac notch app from GitHub?',
    a: 'Yes. Ledge is distributed through the DHLbigmonster/ledge GitHub Releases page. The latest DMG is a universal build for Apple silicon and Intel Macs. The public beta is not notarized yet, so macOS may require one manual confirmation on first launch.',
  },
  {
    q: 'Does Ledge work on a Mac without a notch?',
    a: 'Yes. On Macs with a physical notch, Ledge fuses with it. On Macs without one — including every Intel model — it attaches a slim, opaque-black Top Handle to the top edge. It stays compact when idle and expands into the same solid-black shelf. The solid finish keeps the handle crisp over the menu bar.',
  },
  {
    q: 'Which macOS version do I need?',
    a: 'macOS 14 Sonoma or newer. One universal build runs on both Apple silicon and Intel Macs.',
  },
  {
    q: 'Is Ledge free?',
    a: 'The current public beta is free — no account, trial timer, subscription, or payment details. Future pricing is not part of the current beta promise.',
  },
  {
    q: 'Where is my data stored?',
    a: 'Shelf metadata and Ledge-managed images stay in ~/Library/Application Support/Ledge. Before the first meeting recording, you choose its save folder; Ledge remembers that location and never silently falls back to Music. Files and folders you add remain at their original paths. Sparkle checks a GitHub Pages appcast and retrieves updates from GitHub Releases, but Ledge sends no app-usage telemetry.',
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
    q: 'What does meeting recording capture?',
    a: 'Ledge mixes Mac system audio and your microphone into one local AAC .m4a file in the folder you choose before the first recording. It registers only an audio output with ScreenCaptureKit, so it does not save screen frames or video. macOS asks for Screen Recording permission to provide system audio and Microphone permission for your mic.',
  },
  {
    q: 'What happens when I pin an item?',
    a: 'Pinned items do not expire and Clear leaves them in place. The card X, Command + Delete, bulk removal, and stack removal will not delete a pinned item. Unpin it first when you really want to remove it.',
  },
  {
    q: 'What happens to my files if I uninstall?',
    a: 'Regular files and folders added from Finder remain at their original paths. Ledge-managed clipboard images, beautified outputs, and shelf metadata can live in ~/Library/Application Support/Ledge; recordings live in the folder you selected. Removing the app does not automatically remove those local data folders.',
  },
  {
    q: 'Why does macOS warn me when I first open it?',
    a: 'The beta is not yet notarized with Apple, so Gatekeeper asks for one extra confirmation: System Settings → Privacy & Security → Open Anyway. Notarization is planned before a higher-trust public release.',
  },
]
