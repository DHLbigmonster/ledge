import { useState, type MouseEvent } from 'react'
import '../App.css'
import { Reveal } from '../hooks/useReveal'
import {
  FolderDown, Link2, MonitorDown, ClipboardList, Zap, Keyboard,
  ShieldCheck, WifiOff, Feather, ArrowDownToLine, Languages
} from 'lucide-react'

/* ================= 文案（英文为主，面向欧美市场） ================= */

const copy = {
  en: {
    download: 'Download for Mac',
    freeNote: 'macOS 14+ · free during early access',
    heroTitle1: 'The notch',
    heroTitle2: 'is a drawer.',
    heroSub: 'Drop in files, screenshots, links, even windows. Pull them out whenever. The rest of the time, it stays out of your way.',
    items: 'items',
    mockItems: ['deck.sketch', 'PRD page', 'WeChat window', 'screenshot', 'Claude 82%'],
    featuresTitle: 'What it does',
    featuresSub: 'Six things. All of them about keeping stuff within reach.',
    features: [
      { title: 'Drop it in.', desc: 'Drag anything to the top of the screen. The island opens and catches it. Your originals stay put — Ledge keeps references, not copies.' },
      { title: 'Park a window.', desc: 'Drag a window by its title bar into the notch — or just press ⌃⌥L — and it folds away with a live thumbnail. Click it and it comes back where it was. Nothing else on the Mac does this.' },
      { title: 'Back to that tab.', desc: 'Drop a page in now. Later, one click takes you to the tab you already had open — not a fresh duplicate.' },
      { title: 'Screenshots, sorted.', desc: 'Turn it on and clipboard shots land on the island, then disappear after 24 hours. Things copied from your password manager never get in.' },
      { title: 'AI quotas up top.', desc: 'Claude and Codex usage at a glance, read from local logs. No network calls, no credentials touched.' },
      { title: '⌥1–9.', desc: 'Pin your staples to slots. One key opens the file, jumps to the tab, restores the window. The island doesn\u2019t even wake up.' },
    ],
    specsTitle: 'Fast is a feature.',
    specsSub: 'We measure smoothness in milliseconds, not adjectives.',
    specs: [
      { value: '150ms', label: 'drop feels instant' },
      { value: '120Hz', label: 'motion at full refresh' },
      { value: '0', label: 'network calls in the core' },
      { value: '120MB', label: 'memory, tops' },
    ],
    privacyTitle: 'No cloud. No account. No kidding.',
    privacyDesc: 'Everything lives on your Mac. The core never touches the network. One purchase and it\u2019s yours — that\u2019s the whole business model.',
    privacyPoints: [
      'Core features work fully offline',
      'Password-manager clipboard content never stored',
      'Pay once, no subscription, no sign-up',
    ],
    pricingTitle: 'Free during early access.',
    pricingSub: 'The beta is free, full-featured, no sign-up. A paid one-time license comes later — early users get it free, forever.',
    pricingCta: 'Download Ledge',
    buyCta: 'Star on GitHub',
    pricingNote: 'Requires macOS 14+ · first launch: right-click → Open (beta build, not notarized yet)',
    footerTag: 'The notch is a drawer · © 2026',
  },
  zh: {
    download: '免费下载',
    freeNote: 'macOS 14+ · 免费试用',
    heroTitle1: '刘海，',
    heroTitle2: '是个抽屉。',
    heroSub: '文件、截图、链接，甚至窗口，拖进去就好。要用的时候拿出来。其余时间，它安安静静待在顶上。',
    items: '项',
    mockItems: ['设计稿.sketch', 'PRD 文档', '微信窗口', '刚截的图', 'Claude 82%'],
    featuresTitle: '它能做什么',
    featuresSub: '六件事。每一件都为了让东西触手可及。',
    features: [
      { title: '拖进去就行。', desc: '任何东西拖到屏幕顶边，岛会张开接住。原文件原地不动——纳岛只存引用，不做拷贝。' },
      { title: '窗口也能收。', desc: '拖着窗口标题栏到刘海，或者直接按 ⌃⌥L，窗口就带着实时截图折进岛里。点一下，原样回来。Mac 上没人做过这个。' },
      { title: '回到那个标签页。', desc: '网页拖进去，之后点一下，回的是你早就开着的那个标签页，不是再开一个新的。' },
      { title: '截图有着落了。', desc: '开启后，剪贴板里的截图自动落在岛上，24 小时后自己消失。密码管理器里的东西，永远进不来。' },
      { title: 'AI 额度抬头可见。', desc: 'Claude 和 Codex 的用量瞥一眼就知道。读的是本地日志，不走网络，不碰凭据。' },
      { title: '⌥1–9。', desc: '常用的东西钉进槽位，一个键直接打开文件、跳回标签页、恢复窗口。岛都不用醒。' },
    ],
    specsTitle: '快，本身就是功能。',
    specsSub: '我们拿毫秒衡量丝滑，不拿形容词。',
    specs: [
      { value: '150ms', label: '拖入快过眨眼' },
      { value: '120Hz', label: '满刷新率动效' },
      { value: '0 次', label: '核心功能网络请求' },
      { value: '120MB', label: '内存占用上限' },
    ],
    privacyTitle: '没有云，没有账号，不开玩笑。',
    privacyDesc: '所有东西都在你的 Mac 上。核心功能不碰网络。买断一次就一直是你的——这就是全部商业模式。',
    privacyPoints: [
      '核心功能完全离线可用',
      '密码管理器的剪贴板内容绝不入库',
      '买断制，无订阅，无需注册',
    ],
    pricingTitle: '限免中。',
    pricingSub: '测试阶段完全免费，全功能，不用注册。正式版将转为买断制——早期用户永久免费。',
    pricingCta: '下载 Ledge 纳岛',
    buyCta: '去 GitHub 看看',
    pricingNote: '需要 macOS 14+ · 首次打开请右键 → 打开（测试版未公证）',
    footerTag: '刘海是个抽屉 · © 2026',
  },
}

type Lang = keyof typeof copy

/* 下载走 GitHub Release（限免阶段）；正式收费后在此接入 Stripe/Paddle Payment Link */
const GITHUB_LINK = "https://github.com/DHLbigmonster/ledge"
const DOWNLOAD_LINK = "https://github.com/DHLbigmonster/ledge/releases/download/v0.9.0/Ledge-0.9.0.dmg"

/* ---------- 首屏岛演示（CSS 循环动画：物料飞入 → 岛弹跳） ---------- */
function IslandMock({ t }: { t: (typeof copy)['en'] }) {
  const icons = [
    <FolderDown key="a" size={16} />,
    <Link2 key="b" size={16} />,
    <MonitorDown key="c" size={16} />,
    <ClipboardList key="d" size={16} />,
    <Zap key="e" size={16} />,
  ]
  return (
    <div className="relative mx-auto w-full max-w-2xl select-none">
      <div className="rounded-t-[28px] border border-b-0 border-neutral-200 bg-white/70 px-6 pt-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] backdrop-blur">
        <div className="flex items-center justify-between text-[11px] text-neutral-500">
          <span className="font-medium text-neutral-700">Finder</span>
          <div className="capsule-breathe h-6 w-40 rounded-b-2xl bg-black" />
          <span>12:00</span>
        </div>
        <div className="flex justify-center">
          <div className="island-bounce relative z-10 mt-[-1px] w-[420px] rounded-b-3xl rounded-t-none bg-black px-5 pb-5 pt-3 text-white shadow-2xl">
            {/* 飞入的物料 */}
            <div className="pointer-events-none absolute -top-24 left-1/2 z-0 -translate-x-1/2">
              <div className="chip-fly flex items-center gap-1.5 rounded-lg bg-neutral-900 px-2.5 py-1.5 text-[10px] text-white/85 shadow-lg ring-1 ring-white/15">
                <FolderDown size={11} />
                design.sketch
              </div>
            </div>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[12px] font-semibold text-white/90">Ledge</span>
              <span className="text-[10px] text-white/40">5 {t.items}</span>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {t.mockItems.map((label, i) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-white/[0.07] px-1 py-2.5 transition-colors duration-300 hover:bg-white/[0.14]">
                  <span className="text-white/80">{icons[i]}</span>
                  <span className="w-full truncate text-center text-[9px] text-white/55">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-4 pb-8 opacity-60">
          <div className="h-20 rounded-xl bg-neutral-100" />
          <div className="h-20 rounded-xl bg-neutral-100" />
          <div className="h-20 rounded-xl bg-neutral-100" />
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')   // 欧美市场优先：默认英文
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
          <span className="text-[15px] font-semibold tracking-tight">Ledge 纳岛</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="inline-flex items-center gap-1.5 rounded-full border border-neutral-200 px-3 py-1.5 text-[12px] text-neutral-600 transition hover:border-neutral-400"
          >
            <Languages size={13} />
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <a
            href="#download"
            className="rounded-full bg-black px-4 py-1.5 text-[13px] font-medium text-white transition hover:scale-[1.03] hover:bg-neutral-800 active:scale-100"
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
        <h1 className="hero-rise mx-auto max-w-3xl text-balance text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl">
          {t.heroTitle1}
          <br />
          {t.heroTitle2}
        </h1>
        <p className="hero-rise mx-auto mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-neutral-500" style={{ animationDelay: '120ms' }}>
          {t.heroSub}
        </p>
        <div className="hero-rise mt-9 flex items-center justify-center gap-3" style={{ animationDelay: '240ms' }}>
          <a
            id="download"
            href={DOWNLOAD_LINK}
            className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[15px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:scale-[1.04] hover:bg-neutral-800 active:scale-100"
          >
            <ArrowDownToLine size={16} />
            {t.download}
          </a>
          <span className="text-[13px] text-neutral-400">{t.freeNote}</span>
        </div>
        <div
          className="hero-rise parallax mt-16"
          style={{
            animationDelay: '380ms',
            transform: `translate3d(${tilt.x * 14}px, ${tilt.y * 10}px, 0) rotateX(${-tilt.y * 3}deg) rotateY(${tilt.x * 4}deg)`,
            perspective: '800px',
          }}
        >
          <IslandMock t={t} />
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
                    {[<FolderDown size={22} strokeWidth={1.8} />, <MonitorDown size={22} strokeWidth={1.8} />, <Link2 size={22} strokeWidth={1.8} />, <ClipboardList size={22} strokeWidth={1.8} />, <Zap size={22} strokeWidth={1.8} />, <Keyboard size={22} strokeWidth={1.8} />][i]}
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-neutral-500">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
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
                    {[<WifiOff size={16} />, <ShieldCheck size={16} />, <Feather size={16} />][i]}
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
              className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-3.5 text-[15px] font-medium text-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.4)] transition hover:scale-[1.04] hover:bg-neutral-800 active:scale-100"
            >
              <ArrowDownToLine size={16} />
              {t.pricingCta}
            </a>
            <a
              href={GITHUB_LINK}
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

      {/* 页脚 */}
      <footer className="border-t border-neutral-100">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-8 text-[12px] text-neutral-400">
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-7 rounded-full bg-neutral-900" />
            <span>Ledge 纳岛</span>
          </div>
          <span>{t.footerTag}</span>
        </div>
      </footer>
    </div>
  )
}
