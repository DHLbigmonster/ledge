import ContentPage from '../components/ContentPage'

export default function MacNotchGuide() {
  return (
    <ContentPage
      eyebrow="MacBook notch app guide"
      title="Turn the MacBook notch into a Dynamic Island."
      intro="The notch does not have to be dead space. Ledge is a free public-beta Mac notch app that turns the top of your screen into a temporary shelf for files, screenshots, links, text and working windows."
      sections={[
        {
          title: 'What is a Dynamic Island app for Mac?',
          body: <><p>A Mac Dynamic Island app places useful controls or content around the MacBook notch. Ledge focuses on work rather than media widgets: hover at the top to open a shelf, put working material there, then drag it back out when the next app needs it.</p><p>It is a native macOS utility, not an iPhone Dynamic Island emulator. The goal is to make the space around the notch useful without permanently covering your desktop.</p></>,
        },
        {
          title: 'Use the notch as a temporary file shelf.',
          body: <><p>Drag a file, folder, screenshot, link or text snippet to the top edge. Ledge keeps regular files at their original paths and gives you a card you can copy, open, stack, pin or drag into another app.</p><p>You can also park a window in the island and restore it later. That is useful when a browser, chat window or AI agent is still working but should not occupy the desktop.</p></>,
        },
        {
          title: 'How to try Ledge in three steps.',
          body: <ol className="list-decimal space-y-2 pl-5"><li>Download the latest Ledge DMG from GitHub Releases and move the app to Applications.</li><li>Open Ledge. If macOS blocks the current unnotarized beta, confirm it under System Settings → Privacy &amp; Security → Open Anyway.</li><li>Hover over the notch and drag in a disposable file or screenshot. Drag the card back to Finder or another app to complete the loop.</li></ol>,
        },
        {
          title: 'No MacBook notch? The same app still works.',
          body: <p>On a Mac without a physical notch—including Intel models—Ledge uses a slim black Top Handle at the upper edge of the screen. The shelf and drag-and-drop workflow remain the same. One universal build supports Apple silicon and Intel on macOS 14 or later.</p>,
        },
        {
          title: 'Local by default, with permissions explained.',
          body: <><p>Your shelf metadata and Ledge-managed images stay on the Mac. Files dragged from Finder remain at their original paths. The app has no account, cloud sync or in-app usage telemetry.</p><p>Basic file shelving does not need Accessibility permission. Ledge asks for Accessibility only when you use window parking; audio recording uses the macOS system-audio and microphone permissions and saves an audio file to the folder you choose.</p></>,
        },
      ]}
      related={[
        { href: '/features/file-shelf/', label: 'Mac file shelf', description: 'See how files, screenshots, links and text move through Ledge.' },
        { href: '/features/window-parking/', label: 'Window parking', description: 'Fold a working window into the notch and restore it later.' },
        { href: '/compare/boring-notch/', label: 'Compare Mac notch apps', description: 'Choose between a work shelf and a media-focused notch utility.' },
        { href: '/faq/', label: 'Compatibility and install FAQ', description: 'Check macOS versions, privacy, permissions and installation.' },
      ]}
    />
  )
}
