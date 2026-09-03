import { useState, type MouseEvent } from 'react'
import '../App.css'
import { Reveal } from '../hooks/useReveal'
import NewsletterSignup from '../components/NewsletterSignup'
import BeautifyShowcaseImage from '../components/BeautifyShowcaseImage'
import { DOWNLOAD_LINK, ISSUES_LINK, RELEASE_LINK, goatEvent, sitePath } from '../site'
import {
  FolderDown, Link2, MonitorDown, ClipboardList, Layers3,
  ShieldCheck, WifiOff, Feather, ArrowDownToLine, Languages,
  Cpu, CheckCircle2, MousePointerClick, Settings, MessageSquarePlus, Wand2,
  AudioLines, Pin, RefreshCw
} from 'lucide-react'

/* ================= 文案（英文为主，面向欧美市场） ================= */

const copy = {
  en: {
    download: 'Download for Mac',
    freeNote: 'macOS 14+ · Apple silicon & Intel · free public beta',
    openingNote: 'Free public beta. On first launch, macOS may ask you to confirm opening it in System Settings → Privacy & Security.',
    heroTitle1: 'A Dynamic Island for Mac',
    heroTitle2: 'that gets things done.',
    heroSub: 'Drop in files, screenshots, links, even windows. Pull them out whenever. The rest of the time, it stays out of your way.',
    heroDetail: 'Ledge turns the MacBook notch—or the top edge of a notchless Mac—into a temporary file shelf for files, screenshots, links, text and windows.',
    items: 'items',
    featuresTitle: 'What it does',
    featuresSub: 'Eight things. All of them about keeping stuff within reach.',
    features: [
      { title: 'Drop it in.', desc: 'Drag files, screenshots, links or text to the top of the screen. Regular files stay at their original paths; clipboard and generated images can be kept as local Ledge-managed copies.' },
      { title: 'Beautify a screenshot.', desc: 'Drop a screenshot onto the Beautify zone — it comes back wrapped in an aurora gradient with rounded corners and a soft shadow, straight to your shelf and clipboard. Eight curated styles, zero sliders.' },
      { title: 'Park a window.', desc: 'Drag a window by its title bar into the notch — or press Control + Option + L — and it folds away with a snapshot thumbnail. Click it and it comes back where it was.' },
      { title: 'Links without the detour.', desc: 'Keep a link beside the task. Single-click copies it; double-click opens it in your default browser. No separate bookmark cleanup required.' },
      { title: 'Clipboard, sorted.', desc: 'Turn on image or text capture separately. New clipboard items land on the island, then disappear after 24 hours. Password-manager content never gets in.' },
      { title: 'Record the meeting.', desc: 'Choose a save folder the first time, then one click mixes Mac system audio and your microphone into a local .m4a. Ledge records audio only — never screen video.' },
      { title: 'Pin what matters.', desc: 'Pinned items survive expiry and Clear. They stay protected from the card X, Command + Delete, and bulk removal until you unpin them.' },
      { title: 'Private by design.', desc: 'Shelf content stays on this Mac. Temporary items clear themselves, and password-manager clipboard content is never captured.' },
    ],
    showcaseTitle: 'One drop. Share-ready.',
    showcaseSub: 'Four of eight real outputs from the current app. Rounded corners, soft shadow, straight to your shelf and clipboard. No sliders, no watermark.',
    controlsTitle: 'Know every move.',
    controlsSub: 'The complete shortcut and gesture guide for the current public beta.',
    controls: [
      { keys: 'Option + Space', action: 'Open or close the island' },
      { keys: 'Control + Option + L', action: 'Park the current front window' },
      { keys: 'Control + Option + Shift + L', action: 'Restore the most recently parked window' },
      { keys: 'Command + V', action: 'Paste clipboard content while the island is open' },
      { keys: 'Command + Delete', action: 'Remove the item under your pointer while the island is open (unpin it first)' },
      { keys: 'Escape', action: 'Close the island immediately' },
      { keys: 'Mouse', action: 'Click to copy, double-click to open, right-click for more actions, or drag an item back out' },
    ],
    specsTitle: 'Built like a Mac app.',
    specsSub: 'Native where it matters. Local by default.',
    specs: [
      { value: 'Swift', label: 'native macOS app' },
      { value: '14+', label: 'minimum macOS' },
      { value: 'Local', label: 'core content storage' },
      { value: 'Universal', label: 'Apple silicon + Intel' },
    ],
    privacyTitle: 'Your shelf stays local.',
    privacyDesc: 'Shelf contents, clipboard captures, and meeting recordings stay on your Mac. The app has no account, cloud sync, or usage telemetry. Sparkle contacts Ledge\'s GitHub Pages update feed and GitHub Releases to check for and retrieve updates.',
    privacyPoints: [
      'Core shelf features work offline and content stays local',
      'Password-manager clipboard content never stored',
      'Sparkle checks GitHub Pages and retrieves updates from GitHub',
      'No in-app usage telemetry, account, or cloud sync',
    ],
    setupTitle: 'Install it in a minute.',
    setupSub: 'The latest public beta is a universal build — one download runs on both Apple silicon and Intel Macs.',
    setupSteps: [
      'Download the DMG and drag Ledge into Applications.',
      'Open Ledge once. If macOS blocks it, use System Settings → Privacy & Security → Open Anyway.',
      'Grant Accessibility only when you use window parking.',
      'The first recording asks you to choose a folder, then requests Screen Recording (system audio) and Microphone access; Ledge saves audio only.',
    ],
    compatibilityTitle: 'Compatibility',
    compatibility: ['macOS 14 Sonoma or newer', 'Works with or without a physical notch', 'Latest download: universal build (Apple silicon + Intel)'],
    pricingTitle: 'Free public beta.',
    pricingSub: 'Download the complete beta for free. No account, trial timer, subscription, or payment details.',
    pricingCta: 'Download Ledge',
    buyCta: 'Release notes',
    pricingNote: 'Latest public beta · Universal (Apple silicon + Intel) · macOS 14+ · not notarized yet',
    feedbackTitle: 'Found a bug? Have an idea?',
    feedbackDesc: 'Ledge develops through public-beta feedback. Report a reproducible issue or suggest a focused workflow improvement on GitHub.',
    feedbackCta: 'Open GitHub Issues',
    footerTag: 'The notch is a drawer · © 2026',
  },
  zh: {
    download: '免费下载',
    freeNote: 'macOS 14+ · Apple 芯片 / Intel · 免费公开测试版',
    openingNote: '免费公开测试版。首次打开时，macOS 可能要求前往“系统设置 → 隐私与安全性”确认打开。',
    heroTitle1: '真正能干活的',
    heroTitle2: 'Mac 灵动岛。',
    heroSub: '文件、截图、链接，甚至窗口，拖进去就好。要用的时候拿出来。其余时间，它安安静静待在顶上。',
    heroDetail: 'Ledge 纳岛是一款免费公开测试中的 Mac 灵动岛软件：把 MacBook 刘海（无刘海机型则是屏幕顶边）变成文件、截图、链接、文字和窗口的临时暂存架。',
    items: '项',
    featuresTitle: '它能做什么',
    featuresSub: '八件事。每一件都为了让东西触手可及。',
    features: [
      { title: '拖进去就行。', desc: '文件、截图、链接或文字拖到屏幕顶边。普通文件保留原路径；剪贴板图片与生成图片可能作为纳岛管理的本地副本保存。' },
      { title: '截图一键美化。', desc: '截图拖到「美化」区，回来就是带极光渐变底、圆角和柔和投影的分享图，同时落进架子和剪贴板。八种精选风格，不用调任何参数。' },
      { title: '窗口也能收。', desc: '拖着窗口标题栏到刘海，或者按 Control + Option + L，窗口就带着截图缩略图折进岛里。点一下，原样回来。' },
      { title: '链接少绕一步。', desc: '链接与当前任务放在一起：单击复制，双击用默认浏览器打开。' },
      { title: '剪贴板有着落了。', desc: '图片和文字可分别开启自动捕获；新内容落在岛上，24 小时后自己消失。密码管理器里的东西永远进不来。' },
      { title: '录下这场会议。', desc: '第一次先选择保存文件夹，之后点击一次，就把 Mac 系统声音和麦克风混成一个本地 .m4a。只录音频，不保存屏幕画面。' },
      { title: '重要内容，永久固定。', desc: '固定后的素材不会过期；“清空”、卡片 X、Command + Delete 和批量删除都动不了。先取消固定，才可以删除。' },
      { title: '只留在这台 Mac。', desc: '收纳内容只保存在本机；临时项目会自动清理，密码管理器剪贴板内容不会被捕获。' },
    ],
    showcaseTitle: '拖进去，就是成片。',
    showcaseSub: '下面是当前版本八种预设中的四种真实输出。圆角、柔和投影一次到位，成品同时进架子和剪贴板。零参数，无水印。',
    controlsTitle: '所有操作，一眼看懂。',
    controlsSub: '当前公开测试版完整的快捷键与鼠标操作说明。',
    controls: [
      { keys: 'Option + Space', action: '展开或收起纳岛' },
      { keys: 'Control + Option + L', action: '收纳当前最前方窗口' },
      { keys: 'Control + Option + Shift + L', action: '恢复最近收纳的窗口' },
      { keys: 'Command + V', action: '纳岛展开时粘贴剪贴板内容' },
      { keys: 'Command + Delete', action: '纳岛展开时移除鼠标悬停的项目（固定内容需先取消固定）' },
      { keys: 'Escape', action: '立即收起纳岛' },
      { keys: '鼠标', action: '单击复制、双击打开、右键查看更多操作，也可把项目直接拖出' },
    ],
    specsTitle: '像 Mac 应用一样构建。',
    specsSub: '关键体验原生实现，数据默认留在本地。',
    specs: [
      { value: 'Swift', label: '原生 macOS 应用' },
      { value: '14+', label: '最低 macOS 版本' },
      { value: '本地', label: '核心内容存储' },
      { value: '通用版', label: 'Apple 芯片 + Intel' },
    ],
    privacyTitle: '收纳内容，只留在本机。',
    privacyDesc: '收纳内容、剪贴板捕获与会议录音都留在你的 Mac 上。应用没有账号、云同步或使用行为遥测；Sparkle 会访问纳岛的 GitHub Pages 更新源，并从 GitHub 获取更新。',
    privacyPoints: [
      '核心收纳功能可离线使用，内容留在本机',
      '密码管理器的剪贴板内容绝不入库',
      'Sparkle 访问 GitHub Pages，并从 GitHub 获取更新',
      '没有应用内使用遥测、账号或云同步',
    ],
    setupTitle: '一分钟装好。',
    setupSub: '当前最新公开测试版为通用版本：一次下载，Apple 芯片和 Intel Mac 都能用。',
    setupSteps: [
      '下载 DMG，把 Ledge 拖入“应用程序”。',
      '先尝试打开一次；若被系统拦截，到“系统设置 → 隐私与安全性”选择“仍要打开”。',
      '只有使用窗口收纳时，才需要授予辅助功能权限。',
      '第一次录音先选择保存文件夹，再授权“屏幕与系统音频录制”（采集系统声音）和“麦克风”；只保存音频。',
    ],
    compatibilityTitle: '兼容性',
    compatibility: ['macOS 14 Sonoma 或更高版本', '有无实体刘海都能使用', '最新下载为通用版本（Apple 芯片 + Intel）'],
    pricingTitle: '免费公开测试版。',
    pricingSub: '完整测试版免费下载。无需账号，没有试用倒计时、订阅或付款信息。',
    pricingCta: '下载 Ledge 纳岛',
    buyCta: '查看版本说明',
    pricingNote: '最新公开测试版 · 通用版（Apple 芯片 + Intel）· macOS 14+ · 暂未公证',
    feedbackTitle: '遇到问题？有想法？',
    feedbackDesc: '纳岛通过公开测试反馈持续改进。欢迎在 GitHub 提交可复现的问题或聚焦的工作流建议。',
    feedbackCta: '去 GitHub 反馈',
    footerTag: '刘海是个抽屉 · © 2026',
  },
}

type Lang = keyof typeof copy

function IslandDemo({ lang }: { lang: Lang }) {
  const zh = lang === 'zh'
  const demoItems = [
    { icon: <ClipboardList size={20} />, title: zh ? '剪贴板 17:03' : 'Clipboard 17:03' },
    { icon: <MonitorDown size={20} />, title: zh ? '设计窗口' : 'Design window' },
    { icon: <Link2 size={20} />, title: zh ? '项目页面' : 'Project page' },
    { icon: <FolderDown size={20} />, title: zh ? '资料文件夹' : 'Assets folder' },
  ]
  const tools = [
    { icon: <WifiOff size={17} />, title: zh ? '投送' : 'AirDrop' },
    { icon: <Wand2 size={17} />, title: zh ? '美化' : 'Beautify' },
    { icon: <AudioLines size={17} className="text-red-400" />, title: zh ? '录音' : 'Record' },
  ]

  return (
    <div
      role="img"
      aria-label={zh ? '纳岛展开后的收纳界面示意' : 'Ledge expanded shelf interface'}
      className="relative mx-auto min-h-[260px] w-full max-w-3xl overflow-hidden rounded-[28px] border border-neutral-200/70 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.14),transparent_56%),linear-gradient(180deg,#f6f7fb,#ffffff)] shadow-[0_40px_90px_-24px_rgba(0,0,0,0.28)] sm:min-h-[330px]"
    >
      <div className="absolute left-1/2 top-0 w-[calc(100%_-_18px)] max-w-[640px] -translate-x-1/2 overflow-hidden rounded-b-[30px] bg-neutral-950 text-white shadow-2xl sm:w-[86%]">
        <div className="flex h-12 items-center gap-2 px-4">
          <div className="flex h-5 w-5 items-center justify-center rounded-md bg-white text-black">
            <span className="h-[3px] w-3 rounded-full bg-black" />
          </div>
          <span translate="no" className="notranslate text-[11px] font-semibold sm:text-[13px]">Ledge</span>
          <span className="text-[9px] text-white/40 sm:text-[11px]">4 {zh ? '项' : 'items'}</span>
          <span className="flex-1" />
          <span className="hidden text-[10px] text-white/40 sm:inline">{zh ? '清空' : 'Clear'}</span>
          <span className="ml-2 text-white/45"><Layers3 size={14} /></span>
          <span className="ml-2 text-white/45"><Settings size={14} /></span>
        </div>

        <div className="flex h-[194px] items-center gap-3 px-4 pb-3 sm:h-[216px]">
          <div className="flex w-12 shrink-0 flex-col gap-1.5 sm:w-14">
            {tools.map((tool) => (
              <div key={tool.title} className="flex h-12 flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-white/25 bg-white/[0.035] transition hover:scale-[1.04] hover:border-indigo-400 hover:bg-indigo-500/10 sm:h-[58px]">
                <span className="text-white/80">{tool.icon}</span>
                <span className="text-[7px] font-medium text-white/55 sm:text-[8px]">{tool.title}</span>
              </div>
            ))}
          </div>
          <div className="flex min-w-0 flex-1 items-center justify-center -space-x-3 sm:-space-x-2">
            {demoItems.map((item, index) => (
              <div key={item.title} className="relative shrink-0" style={{ transform: `rotate(${[-4, 3, -2, 4][index]}deg)` }}>
                <div className="flex h-[86px] w-[74px] flex-col items-center justify-center gap-2 rounded-2xl border border-white/[0.08] bg-white/[0.07] shadow-lg transition duration-300 hover:z-10 hover:scale-110 hover:bg-white/[0.13] sm:h-[108px] sm:w-[98px]">
                  <span className="text-white/75">{item.icon}</span>
                  <span className="max-w-[66px] truncate text-[8px] text-white/55 sm:max-w-[86px] sm:text-[9px]">{item.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- 首屏演示：与当前应用信息架构同步的响应式界面示意 ---------- */

export default function Home({ forceLang }: { forceLang?: Lang } = {}) {
  // Language is URL-bound: / is English and /zh/ is Chinese.
  const lang: Lang = forceLang ?? 'en'
  const t = copy[lang]

  // 首屏鼠标视差
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  function onHeroMouseMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x, y })
  }

  return (
    <div className="relative min-h-screen overflow-x-clip bg-white font-sans text-neutral-900 antialiased">
      {/* 极光氛围：石墨色系，留白里的一口呼吸 */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[720px] overflow-hidden">
        <div className="aurora-a absolute -top-40 left-[8%] h-[480px] w-[620px] rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.10),transparent)] blur-3xl" />
        <div className="aurora-b absolute -top-32 right-[4%] h-[420px] w-[560px] rounded-full bg-[radial-gradient(closest-side,rgba(0,0,0,0.07),transparent)] blur-3xl" />
      </div>

      {/* 导航 */}
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-2.5">
          <div className="capsule-breathe h-5 w-10 rounded-full bg-black" />
          <span className="text-[15px] font-semibold tracking-tight">
            {lang === 'en'
              ? <span translate="no" className="notranslate">Ledge for Mac</span>
              : <><span translate="no" className="notranslate">Ledge</span> 纳岛</>}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <a
            translate="no"
            aria-label={lang === 'en' ? '切换为中文' : 'Switch to English'}
            href={sitePath(lang === 'en' ? '/zh/' : '/')}
            {...goatEvent('language-switch')}
            className="notranslate inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-[12px] text-neutral-600 transition hover:border-neutral-400"
          >
            <Languages size={13} />
            {lang === 'en' ? '中文' : 'EN'}
          </a>
          <a
            href="#download"
            className="hidden rounded-full bg-black px-4 py-1.5 text-[13px] font-medium text-white transition hover:scale-[1.03] hover:bg-neutral-800 active:scale-100 sm:inline-flex"
          >
            {t.download}
          </a>
        </div>
      </nav>

      {/* Hero（鼠标视差） */}
      <section
        className="relative mx-auto max-w-5xl px-6 pb-10 pt-16 text-center sm:pt-24"
        onMouseMove={onHeroMouseMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      >
        <h1 className="hero-rise mx-auto max-w-3xl text-balance text-4xl font-semibold leading-[1.12] tracking-tight sm:text-6xl">
          {t.heroTitle1}
          <br />
          {t.heroTitle2}
        </h1>
        <p className="hero-rise mx-auto mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-neutral-500" style={{ animationDelay: '120ms' }}>
          {t.heroSub}
        </p>
        <p className="hero-rise mx-auto mt-3 max-w-2xl text-balance text-[13px] leading-relaxed text-neutral-400" style={{ animationDelay: '180ms' }}>
          {t.heroDetail}
        </p>
        <div className="hero-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
          <a
            id="download"
            href={DOWNLOAD_LINK}
            {...goatEvent('download-hero')}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:scale-[1.04] hover:bg-neutral-800 active:scale-100"
          >
            <ArrowDownToLine size={16} />
            {t.download}
          </a>
          <span className="text-[13px] text-neutral-400">{t.freeNote}</span>
        </div>
        <p className="hero-rise mx-auto mt-3 max-w-xl text-balance text-[12px] leading-relaxed text-neutral-400" style={{ animationDelay: '300ms' }}>
          {t.openingNote}
        </p>
        <div
          className="hero-rise parallax mt-16"
          style={{
            animationDelay: '380ms',
            transform: `translate3d(${tilt.x * 14}px, ${tilt.y * 10}px, 0) rotateX(${-tilt.y * 3}deg) rotateY(${tilt.x * 4}deg)`,
            perspective: '800px',
          }}
        >
          <IslandDemo lang={lang} />
        </div>
      </section>

      {/* 功能 */}
      <section className="relative border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight">{t.featuresTitle}</h2>
            <p className="mt-3 text-center text-[15px] text-neutral-500">{t.featuresSub}</p>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="lift h-full rounded-2xl border border-neutral-100 bg-white p-6 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.12)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
                    {[<FolderDown size={22} strokeWidth={1.8} />, <Wand2 size={22} strokeWidth={1.8} />, <MonitorDown size={22} strokeWidth={1.8} />, <Link2 size={22} strokeWidth={1.8} />, <ClipboardList size={22} strokeWidth={1.8} />, <AudioLines size={22} strokeWidth={1.8} />, <Pin size={22} strokeWidth={1.8} />, <ShieldCheck size={22} strokeWidth={1.8} />][i]}
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 截图美化：当前版本的真实输出，Guizang Swiss 编排 */}
      <section className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight">{t.showcaseTitle}</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-[15px] text-neutral-500">{t.showcaseSub}</p>
          </Reveal>
          <Reveal delay={120}>
            <BeautifyShowcaseImage
              alt="Ledge Beautify — four real outputs from the current app"
              className="lift mt-12 w-full rounded-2xl border border-neutral-100 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.18)]"
            />
          </Reveal>
        </div>
      </section>
      <section className="border-t border-neutral-100 bg-white">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal>
            <h2 className="text-center text-3xl font-semibold tracking-tight">{t.controlsTitle}</h2>
            <p className="mt-3 text-center text-[15px] text-neutral-500">{t.controlsSub}</p>
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-2">
            {t.controls.map((control, index) => (
              <Reveal key={control.keys} delay={(index % 2) * 70} className={index === t.controls.length - 1 ? 'md:col-span-2' : ''}>
                <div className="lift flex h-full flex-col gap-3 rounded-2xl border border-neutral-100 bg-neutral-50/60 p-5 sm:flex-row sm:items-center sm:justify-between">
                  <span className="text-[13.5px] leading-relaxed text-neutral-600">{control.action}</span>
                  <kbd
                    translate="no"
                    className="notranslate shrink-0 rounded-lg border border-neutral-200 bg-white px-3 py-2 font-mono text-[11px] font-medium text-neutral-800 shadow-sm"
                  >
                    {control.keys}
                  </kbd>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 安装与兼容性：在下载前把系统要求、权限与测试版边界讲清楚 */}
      <section className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto grid max-w-5xl gap-4 px-6 py-24 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-neutral-100 bg-white p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
                <MousePointerClick size={20} strokeWidth={1.8} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{t.setupTitle}</h2>
              <p className="mt-3 text-[14px] leading-relaxed text-neutral-500">{t.setupSub}</p>
              <ol className="mt-6 space-y-3">
                {t.setupSteps.map((step, index) => (
                  <li key={step} className="flex gap-3 text-[13.5px] leading-relaxed text-neutral-700">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-[10px] font-semibold text-white">{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-2xl border border-neutral-100 bg-white p-7">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
                <Cpu size={20} strokeWidth={1.8} />
              </div>
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">{t.compatibilityTitle}</h2>
              <div className="mt-6 space-y-3">
                {t.compatibility.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-[13.5px] leading-relaxed text-neutral-700">
                    <CheckCircle2 className="mt-0.5 shrink-0" size={16} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 指标 */}
      <section className="bg-black text-white">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight">{t.specsTitle}</h2>
            <p className="mt-3 text-[15px] text-white/50">{t.specsSub}</p>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {t.specs.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="spec-glow text-3xl font-semibold tracking-tight">{s.value}</div>
                <div className="mt-2 text-[13px] text-white/45">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 隐私 */}
      <section className="border-b border-neutral-100">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-6 py-24 sm:flex-row sm:gap-16">
          <Reveal className="flex-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 text-white">
              <ShieldCheck size={20} strokeWidth={1.8} />
            </div>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">{t.privacyTitle}</h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-neutral-500">{t.privacyDesc}</p>
          </Reveal>
          <div className="flex flex-1 flex-col gap-3">
            {t.privacyPoints.map((text, i) => (
              <Reveal key={text} delay={i * 90}>
                <div className="lift flex items-center gap-3 rounded-xl border border-neutral-100 bg-neutral-50/60 px-4 py-3.5 text-[14px] text-neutral-700">
                  <span className="text-neutral-900">
                    {[<WifiOff size={16} />, <ShieldCheck size={16} />, <RefreshCw size={16} />, <Feather size={16} />][i]}
                  </span>
                  {text}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 价格 + CTA */}
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold tracking-tight">{t.pricingTitle}</h2>
          <p className="mt-3 text-[15px] text-neutral-500">{t.pricingSub}</p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={DOWNLOAD_LINK}
              {...goatEvent('download-footer')}
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:scale-[1.04] hover:bg-neutral-800 active:scale-100"
            >
              <ArrowDownToLine size={16} />
              {t.pricingCta}
            </a>
            <a
              href={RELEASE_LINK}
              {...goatEvent('release-notes')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-neutral-900 px-8 py-3.5 text-[15px] font-medium text-neutral-900 transition hover:scale-[1.04] hover:bg-neutral-900 hover:text-white active:scale-100"
            >
              {t.buyCta}
            </a>
          </div>
          <p className="mt-4 text-[12px] text-neutral-400">{t.pricingNote}</p>
        </Reveal>
      </section>

      {/* 搜索入口和订阅：让每个高意图页在三次点击内可到达 */}
      <section className="border-t border-neutral-100 bg-neutral-50/60">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <Reveal><h2 className="text-center text-3xl font-semibold tracking-tight">{lang === 'zh' ? '从你现在的工作开始。' : 'Start with the job in front of you.'}</h2></Reveal>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { href: lang === 'zh' ? '/zh/guides/mac-lingdongdao/' : '/guides/macbook-notch-app/', en: 'Use the MacBook notch', zh: 'Mac 灵动岛怎么用' },
              { href: '/features/file-shelf/', en: 'Stage files and text', zh: '暂存文件与文字' },
              { href: '/features/window-parking/', en: 'Park a working window', zh: '收纳当前窗口' },
              { href: '/features/screenshot-beautifier/', en: 'Beautify a screenshot', zh: '截图一键美化' },
              { href: '/use-cases/ai-agent-workspace/', en: 'Build an agent work pocket', zh: '给 Agent 工作一个口袋' },
              { href: '/privacy/', en: 'Read the storage boundary', zh: '了解本地存储边界' },
              { href: '/compare/boring-notch/', en: 'Compare notch apps', zh: '对比同类刘海工具' },
            ].map((item) => (
              <a key={item.href} href={sitePath(item.href)} className="rounded-2xl border border-neutral-200/70 bg-white p-5 text-[14px] font-medium transition hover:-translate-y-0.5 hover:border-neutral-400">{lang === 'zh' ? item.zh : item.en}</a>
            ))}
          </div>
          <Reveal delay={100} className="mt-10"><NewsletterSignup /></Reveal>
        </div>
      </section>

      {/* 反馈 */}
      <section className="border-t border-neutral-100">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">
          <Reveal>
            <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-neutral-900 text-white">
              <MessageSquarePlus size={20} />
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">{t.feedbackTitle}</h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-neutral-500">{t.feedbackDesc}</p>
            <a
              href={ISSUES_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-neutral-300 px-6 py-2.5 text-[14px] font-medium text-neutral-800 transition hover:scale-[1.04] hover:border-neutral-900 hover:bg-neutral-900 hover:text-white active:scale-100"
            >
              {t.feedbackCta}
            </a>
          </Reveal>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-[12px] text-neutral-400 sm:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-7 rounded-full bg-neutral-900" />
            <span>{lang === 'en'
              ? <span translate="no" className="notranslate">Ledge for Mac</span>
              : <><span translate="no" className="notranslate">Ledge</span> 纳岛</>}</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <a href={sitePath(lang === 'zh' ? '/zh/guides/mac-lingdongdao/' : '/guides/macbook-notch-app/')} className="hover:text-neutral-800">{lang === 'zh' ? '使用指南' : 'Notch guide'}</a>
            <a href={sitePath('/privacy/')} className="hover:text-neutral-800">{lang === 'zh' ? '隐私' : 'Privacy'}</a>
            <a href={sitePath('/faq/')} className="hover:text-neutral-800">{lang === 'zh' ? '常见问题' : 'FAQ'}</a>
            <a href={sitePath('/changelog/')} className="hover:text-neutral-800">{lang === 'zh' ? '更新记录' : 'Changelog'}</a>
            <span>{t.footerTag}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
