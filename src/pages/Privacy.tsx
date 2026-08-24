import ContentPage from '../components/ContentPage'

export default function Privacy() {
  return <ContentPage
    eyebrow="Privacy"
    title="Local by default, with the boundaries written down."
    intro="Ledge is a desktop utility, so clear storage and permission boundaries matter more than a vague ‘private by design’ badge. This page explains the current public beta."
    sections={[
      { title: 'What Ledge stores locally.', body: <><p>Shelf metadata and Ledge-managed images are stored under <code className="rounded bg-neutral-100 px-1.5 py-0.5 text-[13px] text-neutral-800">~/Library/Application Support/Ledge</code>. Regular files and folders added from Finder stay at their original paths and are referenced by the shelf.</p><p>Clipboard images and images created by Beautify may be copied into Ledge’s local blobs folder so their cards remain available. Meeting recordings go to the folder you choose before the first recording.</p></> },
      { title: 'Clipboard and retention controls.', body: <><p>Image and text capture are separate, optional settings. Ledge blocks concealed, transient and auto-generated pasteboard types used by password managers. Temporary shelf items follow the retention period selected in settings; pinned items are protected until unpinned.</p><p>Clearing the shelf removes eligible Ledge items, not the original Finder files they reference.</p></> },
      { title: 'Permissions.', body: <ul className="list-disc space-y-2 pl-5"><li>Accessibility: required for window parking and restoration.</li><li>Screen and System Audio Recording: required by macOS to capture system audio for an audio-only meeting recording.</li><li>Microphone: required only when microphone audio is included.</li></ul> },
      { title: 'Network connections.', body: <p>The app has no account or cloud-sync system and does not send in-app usage telemetry. Sparkle checks the Ledge GitHub Pages appcast for updates and retrieves release files from GitHub. The website uses GoatCounter for privacy-friendly page and conversion-event counts; that website measurement is separate from the Mac app.</p> },
    ]}
    related={[
      { href: '/faq/', label: 'FAQ', description: 'Installation warnings, compatibility and permission questions.' },
      { href: '/features/file-shelf/', label: 'File shelf behavior', description: 'When Ledge uses a reference and when it creates a managed image.' },
      { href: '/features/screenshot-beautifier/', label: 'Beautified outputs', description: 'How the app creates a new local PNG without overwriting the source.' },
      { href: '/changelog/', label: 'Release history', description: 'Review what changed before installing an update.' },
    ]}
  />
}
