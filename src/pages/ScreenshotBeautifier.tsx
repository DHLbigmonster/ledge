import ContentPage from '../components/ContentPage'

export default function ScreenshotBeautifier() {
  return <ContentPage
    eyebrow="Screenshot beautifier"
    title="Drop a screenshot. Get a share-ready image."
    intro="The Beautify tool applies a curated background, spacing, rounded corners and a soft shadow in one step. It is for the moment when a raw screenshot needs to look intentional, not for pixel-by-pixel design work."
    image={{ src: '/beautify-current.jpg', alt: 'Four real screenshots beautified by Ledge with different curated backgrounds', width: 2100, height: 900 }}
    sections={[
      { title: 'Eight styles, zero sliders.', body: <><p>Choose a preset in settings, then drag one or more images onto the vertical Beautify tool. Its dashed border highlights to confirm the target before you release.</p><p>Ledge renders a PNG locally, adds the result to the shelf and puts it on the clipboard. This works even when automatic clipboard capture is turned off.</p></> },
      { title: 'The source remains untouched.', body: <p>Beautification creates a new local output. It does not overwrite the screenshot you dropped. The canvas becomes larger to create the background and breathing room; very large results may be scaled to the app’s output limit.</p> },
      { title: 'Made for fast sharing.', body: <p>Use it for a product update, a chat, a social post or a progress report. When you need custom layout, annotations or exact brand controls, use a dedicated design tool instead.</p> },
    ]}
    related={[
      { href: '/features/file-shelf/', label: 'File shelf', description: 'The finished PNG lands in the same shelf as the rest of your materials.' },
      { href: '/privacy/', label: 'Where images are stored', description: 'Understand Ledge-managed image copies and local cleanup.' },
      { href: '/use-cases/ai-agent-workspace/', label: 'Agent workflow', description: 'Turn agent output screenshots into images ready to share.' },
      { href: '/changelog/', label: 'Current release', description: 'See what changed in the latest public beta.' },
    ]}
  />
}
