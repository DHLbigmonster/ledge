import ContentPage from '../components/ContentPage'

export default function AiAgentWorkspace() {
  return <ContentPage
    eyebrow="AI agent workflow"
    title="Give your agent work a physical pocket."
    intro="Codex and other AI agents can produce a lot of working material: screenshots, prompts, exports, reference links and temporary windows. Ledge keeps those materials close while the agent does the thinking."
    sections={[
      { title: 'A harness accessory, not another dashboard.', body: <><p>Ledge does not control an agent, inspect its private state or claim to know whether a task is finished. It handles the surrounding desktop friction: moving inputs in, keeping outputs close and parking windows you need later.</p><p>That boundary makes the workflow simple. Your agent remains the agent; Ledge remains the local work shelf.</p></> },
      { title: 'A practical loop.', body: <ol className="list-decimal space-y-2 pl-5"><li>Stage the brief, screenshots and reference links in Ledge.</li><li>Park unrelated windows so the active task has room.</li><li>Drag the needed material into Codex or another app.</li><li>Keep generated files and review screenshots together until the task ships.</li><li>Pin durable references; let temporary working items expire.</li></ol> },
      { title: 'Good for human handoffs too.', body: <p>The same pocket helps when an agent stops at a permission prompt, a visual review or a choice only you can make. Keep the evidence together, complete the handoff, then drag the result back into the next step.</p> },
    ]}
    related={[
      { href: '/features/file-shelf/', label: 'Stage files and prompts', description: 'How the shelf handles regular files, clipboard images and text.' },
      { href: '/features/window-parking/', label: 'Park task windows', description: 'Reduce desktop clutter without closing the context.' },
      { href: '/features/screenshot-beautifier/', label: 'Share the result', description: 'Turn a review screenshot into a clean social or status image.' },
      { href: '/privacy/', label: 'Privacy boundary', description: 'What the app stores and which network connections it makes.' },
    ]}
  />
}
