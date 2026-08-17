import { useEffect, useState, type MouseEvent } from 'react'
import '../App.css'
import { Reveal } from '../hooks/useReveal'
import {
  FolderDown, Link2, MonitorDown, ClipboardList, Zap, Keyboard,
  ShieldCheck, WifiOff, Feather, ArrowDownToLine, Languages,
  Cpu, CheckCircle2, MousePointerClick
} from 'lucide-react'

/* ================= 文案（英文为主，面向欧美市场） ================= */

const copy = {
  en: {
    download: 'Download for Mac',
    freeNote: 'macOS 14+ · Apple silicon · free public beta',
    heroTitle1: 'The notch',
    heroTitle2: 'is a drawer.',
    heroSub: 'Drop in files, screenshots, links, even windows. Pull them out whenever. The rest of the time, it stays out of your way.',
    items: 'items',
    featuresTitle: 'What it does',
    featuresSub: 'Six things. All of them about keeping stuff within reach.',
    features: [
      { title: 'Drop it in.', desc: 'Drag anything to the top of the screen. The island opens and catches it. Your originals stay put — Ledge keeps references, not copies.' },
      { title: 'Park a window.', desc: 'Drag a window by its title bar into the notch — or just press ⌃⌥L — and it folds away with a live thumbnail. Click it and it comes back where it was.' },
      { title: 'Back to that tab.', desc: 'Drop a page in now. Later, one click takes you to the tab you already had open — not a fresh duplicate.' },
      { title: 'Screenshots, sorted.', desc: 'Turn it on and clipboard shots land on the island, then disappear after 24 hours. Things copied from your password manager never get in.' },
      { title: 'AI activity up top.', desc: 'Recent Claude and Codex token activity at a glance, estimated from local logs. No network calls, no credentials touched.' },
      { title: '⌥1–9.', desc: 'Pin your staples to slots. One key opens the file, jumps to the tab, restores the window. The island doesn\u2019t even wake up.' },
    ],
    specsTitle: 'Built like a Mac app.',
    specsSub: 'Native where it matters. Local by default.',
    specs: [
      { value: 'Swift', label: 'native macOS app' },
      { value: '14+', label: 'minimum macOS' },
      { value: '0', label: 'network calls in the core' },
      { value: '~39MB', label: 'observed idle memory' },
    ],
    privacyTitle: 'No cloud. No account. No kidding.',
    privacyDesc: 'Everything lives on your Mac. The core never touches the network. The public beta is free to download and needs no account.',
    privacyPoints: [
      'Core features work fully offline',
      'Password-manager clipboard content never stored',
      'Free download, no subscription, no sign-up',
    ],
    setupTitle: 'Install it in a minute.',
    setupSub: 'The latest public beta is built for Apple silicon. A universal Intel build has compiled successfully and will ship after hardware verification.',
    setupSteps: [
      'Download the DMG and drag Ledge into Applications.',
      'Open Ledge once. If macOS blocks it, use System Settings → Privacy & Security → Open Anyway.',
      'Grant Accessibility only when you use window parking.',
    ],
    compatibilityTitle: 'Compatibility',
    compatibility: ['macOS 14 Sonoma or newer', 'Works with or without a physical notch', 'Latest download: Apple silicon · Intel build in verification'],
    pricingTitle: 'Free public beta.',
    pricingSub: 'Download the complete beta for free. No account, trial timer, subscription, or payment details.',
    pricingCta: 'Download Ledge',
    buyCta: 'Release notes',
    pricingNote: 'Latest public beta · Apple silicon · macOS 14+ · not notarized yet',
    footerTag: 'The notch is a drawer · © 2026',
  },
  zh: {
    download: '免费下载',
    freeNote: 'macOS 14+ · Apple 芯片 · 免费公开测试版',
    heroTitle1: '刘海，',
    heroTitle2: '是个抽屉。',
    heroSub: '文件、截图、链接，甚至窗口，拖进去就好。要用的时候拿出来。其余时间，它安安静静待在顶上。',
    items: '项',
    featuresTitle: '它能做什么',
    featuresSub: '六件事。每一件都为了让东西触手可及。',
    features: [
      { title: '拖进去就行。', desc: '任何东西拖到屏幕顶边，岛会张开接住。原文件原地不动——纳岛只存引用，不做拷贝。' },
      { title: '窗口也能收。', desc: '拖着窗口标题栏到刘海，或者直接按 ⌃⌥L，窗口就带着实时截图折进岛里。点一下，原样回来。' },
      { title: '回到那个标签页。', desc: '网页拖进去，之后点一下，回的是你早就开着的那个标签页，不是再开一个新的。' },
      { title: '截图有着落了。', desc: '开启后，剪贴板里的截图自动落在岛上，24 小时后自己消失。密码管理器里的东西，永远进不来。' },
      { title: 'AI 活跃用量抬头可见。', desc: '最近 5 小时的 Claude 和 Codex token 活跃量瞥一眼就知道。基于本地日志估算，不走网络，不碰凭据。' },
      { title: '⌥1–9。', desc: '常用的东西钉进槽位，一个键直接打开文件、跳回标签页、恢复窗口。岛都不用醒。' },
    ],
    specsTitle: '像 Mac 应用一样构建。',
    specsSub: '关键体验原生实现，数据默认留在本地。',
    specs: [
      { value: 'Swift', label: '原生 macOS 应用' },
      { value: '14+', label: '最低 macOS 版本' },
      { value: '0 次', label: '核心功能网络请求' },
      { value: '约 39MB', label: '实测空闲内存' },
    ],
    privacyTitle: '没有云，没有账号，不开玩笑。',
    privacyDesc: '所有东西都在你的 Mac 上。核心功能不碰网络。公开测试版免费下载，也不需要账号。',
    privacyPoints: [
      '核心功能完全离线可用',
      '密码管理器的剪贴板内容绝不入库',
      '免费下载，无订阅，无需注册',
    ],
    setupTitle: '一分钟装好。',
    setupSub: '当前最新公开测试版适用于 Apple 芯片；Intel 通用版已经编译通过，完成真机验证后发布。',
    setupSteps: [
      '下载 DMG，把 Ledge 拖入“应用程序”。',
      '先尝试打开一次；若被系统拦截，到“系统设置 → 隐私与安全性”选择“仍要打开”。',
      '只有使用窗口收纳时，才需要授予辅助功能权限。',
    ],
    compatibilityTitle: '兼容性',
    compatibility: ['macOS 14 Sonoma 或更高版本', '有无实体刘海都能使用', '最新下载支持 Apple 芯片 · Intel 版验证中'],
    pricingTitle: '免费公开测试版。',
    pricingSub: '完整测试版免费下载。无需账号，没有试用倒计时、订阅或付款信息。',
    pricingCta: '下载 Ledge 纳岛',
    buyCta: '查看版本说明',
    pricingNote: '最新公开测试版 · Apple 芯片 · macOS 14+ · 暂未公证',
    footerTag: '刘海是个抽屉 · © 2026',
  },
}

type Lang = keyof typeof copy

/* 免费公开测试版由 GitHub Release 提供下载 */
const DOWNLOAD_LINK = "https://github.com/DHLbigmonster/ledge/releases/latest/download/Ledge.dmg"
const RELEASE_LINK = "https://github.com/DHLbigmonster/ledge/releases/latest"

/* ---------- 首屏演示：实机 demo.gif（public/ 下，由真机截屏合成） ---------- */

export default function Home() {
  const [lang, setLang] = useState<Lang>('en')   // 欧美市场优先：默认英文
  const t = copy[lang]

  useEffect(() => {
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
  }, [lang])

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
        <div className="hero-rise mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row" style={{ animationDelay: '240ms' }}>
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
          <img
            src="./demo.gif"
            alt="Ledge live demo — the notch capsule opens into a shelf"
            className="mx-auto w-full max-w-3xl rounded-[28px] border border-neutral-200/70 shadow-[0_40px_90px_-24px_rgba(0,0,0,0.28)]"
          />
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
              href={RELEASE_LINK}
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
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-[12px] text-neutral-400 sm:flex-row">
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
