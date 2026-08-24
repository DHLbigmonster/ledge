import ContentPage from '../components/ContentPage'

export default function FileShelf() {
  return <ContentPage
    eyebrow="Mac file shelf"
    title="A temporary shelf at the top of your Mac."
    intro="Ledge gives files, screenshots, links and text a short path between where they are and where they need to go. Stage them in the notch, then copy, open or drag them back out."
    sections={[
      { title: 'Drop now. Decide later.', body: <><p>Drag regular files and folders to the top edge. Ledge keeps a reference to their existing location, so the original does not move. Clipboard images and generated beautified images are different: Ledge may keep a managed local copy in its Application Support folder so the card still works.</p><p>Items can be stacked by batch or organized by type. Temporary items follow the retention period you choose; pinned items stay until you unpin them.</p></> },
      { title: 'Every card has a predictable action.', body: <><p>Single-click copies an item. Double-click opens it. Right-click exposes preview, open, copy, pin and removal actions when they apply. You can also drag a card to Finder, a browser upload field or another app.</p><p>When several items belong together, use stacking and selection instead of hunting across desktop folders.</p></> },
      { title: 'Clipboard capture is optional.', body: <p>Image and text capture have separate switches. Password-manager pasteboard types are blocked. Turn capture off when you do not want copied content added to the shelf.</p> },
    ]}
    related={[
      { href: '/features/window-parking/', label: 'Window parking', description: 'Move a working window out of the way without losing its context.' },
      { href: '/privacy/', label: 'Local storage and privacy', description: 'See exactly what stays as a reference and what Ledge stores locally.' },
      { href: '/use-cases/ai-agent-workspace/', label: 'AI agent workspace', description: 'Stage prompts, screenshots and output files around an agent task.' },
      { href: '/faq/', label: 'Installation FAQ', description: 'Compatibility, permissions and the public-beta installation path.' },
    ]}
  />
}
