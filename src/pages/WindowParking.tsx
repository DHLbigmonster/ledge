import ContentPage from '../components/ContentPage'

export default function WindowParking() {
  return <ContentPage
    eyebrow="Window parking"
    title="Put a Mac window away without losing your place."
    intro="Park the front window in Ledge when it is useful but not useful right now. A snapshot card keeps it recognizable; restoring brings the same window back instead of opening a replacement."
    sections={[
      { title: 'Two ways to park.', body: <><p>Drag a supported window by its title bar into the notch, or use the customizable window-parking shortcut. Ledge adds a snapshot card and hides the original window from the workspace.</p><p>Window parking uses macOS Accessibility permission because it needs to identify and move another app’s window. Ledge requests that permission only when this feature needs it.</p></> },
      { title: 'Restore the context, not a copy.', body: <><p>Click the window card or use the restore shortcut. Ledge returns the existing window rather than launching a new document or browser session.</p><p>This is most useful during tasks that temporarily need the whole screen: a meeting, a screen recording, a design review or a focused AI-agent run.</p></> },
      { title: 'Know the boundary.', body: <p>Some system-owned or unusual windows may not expose the controls macOS requires. Window parking is a workflow utility, not a session manager, and it does not preserve a closed app after that app quits.</p> },
    ]}
    related={[
      { href: '/features/file-shelf/', label: 'Mac file shelf', description: 'Keep the files and snippets from the same task beside the parked window.' },
      { href: '/use-cases/ai-agent-workspace/', label: 'Agent workspace', description: 'Use window parking to reduce context switching during Codex work.' },
      { href: '/privacy/', label: 'Permissions explained', description: 'Why window parking asks for Accessibility and what stays local.' },
      { href: '/compare/yoink/', label: 'Ledge vs Yoink', description: 'Compare a notch shelf with a classic edge-based drag shelf.' },
    ]}
  />
}
