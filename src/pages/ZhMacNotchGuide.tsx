import ContentPage from '../components/ContentPage'

export default function ZhMacNotchGuide() {
  return (
    <ContentPage
      lang="zh"
      eyebrow="Mac 灵动岛使用指南"
      title="把 MacBook 刘海变成真正能干活的灵动岛。"
      intro="Ledge 纳岛是一款免费公开测试中的 Mac 灵动岛软件。它把屏幕顶部变成临时文件架，用来暂存文件、截图、链接、文字，甚至正在使用的窗口。"
      sections={[
        {
          title: 'Mac 灵动岛软件到底能做什么？',
          body: <><p>这类工具会在 MacBook 刘海周围显示内容或操作。Ledge 不复刻 iPhone 动画，也不以音乐组件为主；它解决的是工作素材在不同应用之间来回移动的问题。</p><p>鼠标移到屏幕顶边，纳岛会展开。把当前素材放进去，需要时再拖到 Finder、浏览器上传框、聊天窗口或其他应用。</p></>,
        },
        {
          title: '先把刘海当成一个临时文件暂存架。',
          body: <><p>文件、文件夹、截图、链接和文字都可以拖入。普通文件不会被搬走，仍保留在原来的路径；纳岛只留下便于再次取用的卡片。卡片可以复制、打开、堆叠、固定或重新拖出。</p><p>当前窗口也能收进顶部，稍后再恢复。浏览器、聊天窗口或仍在运行的 AI Agent 不必一直占着桌面。</p></>,
        },
        {
          title: '三步开始使用。',
          body: <ol className="list-decimal space-y-2 pl-5"><li>从 GitHub Releases 下载最新 Ledge DMG，拖入“应用程序”。</li><li>首次打开若被 macOS 拦截，到“系统设置 → 隐私与安全性”选择“仍要打开”。当前公开测试版暂未完成 Apple 公证。</li><li>把一个不重要的文件或截图拖到刘海，再从卡片拖回 Finder 或另一个应用，完成第一次闭环。</li></ol>,
        },
        {
          title: '没有刘海的 Mac 也能用。',
          body: <p>没有实体刘海的机型（包括 Intel Mac）会在屏幕顶边显示一个细窄的黑色顶部把手，展开后的文件架与操作方式不变。同一个通用安装包支持 Apple 芯片和 Intel，系统要求为 macOS 14 或更高版本。</p>,
        },
        {
          title: '数据默认留在本机，权限按功能申请。',
          body: <><p>收纳元数据和纳岛管理的图片保存在这台 Mac；从 Finder 拖入的文件仍在原路径。应用没有账号、云同步或应用内使用行为遥测。</p><p>普通文件暂存不需要“辅助功能”权限。只有使用窗口收纳时才会申请辅助功能；录音会使用 macOS 的系统音频与麦克风权限，并保存到你指定的文件夹。</p></>,
        },
      ]}
      related={[
        { href: '/zh/', label: '返回 Ledge 纳岛首页', description: '查看全部功能、快捷键、兼容性与下载入口。' },
        { href: '/features/file-shelf/', label: '文件暂存功能', description: '了解文件、截图、链接与文字怎样进出纳岛。' },
        { href: '/privacy/', label: '本地存储与隐私', description: '看清哪些内容只做路径引用，哪些会保存本地副本。' },
        { href: '/faq/', label: '安装与兼容问题', description: '查看系统版本、权限和首次打开方式。' },
      ]}
    />
  )
}
