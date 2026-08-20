<div align="center">

# Ledge · 纳岛

**Your MacBook's notch, turned into a shelf.**
Drop files, screenshots, links — even windows. Grab them back whenever.

[![Release](https://img.shields.io/github/v/release/DHLbigmonster/ledge?style=flat-square)](https://github.com/DHLbigmonster/ledge/releases/latest)
[![Downloads](https://img.shields.io/github/downloads/DHLbigmonster/ledge/total?style=flat-square)](https://github.com/DHLbigmonster/ledge/releases)
[![macOS 14+](https://img.shields.io/badge/macOS-14%2B-black?style=flat-square)](https://github.com/DHLbigmonster/ledge/releases/latest)

<img src="public/demo.gif" alt="Ledge demo" width="710">

[Download](https://github.com/DHLbigmonster/ledge/releases/latest) · [Website](https://dhlbigmonster.github.io/ledge/) · [Report an issue](https://github.com/DHLbigmonster/ledge/issues)

</div>

---

## Why Ledge

Your desktop is not a storage system. Ledge lives in the notch — hover, drop, done. Everything stays on your Mac, exactly where you left it, until you need it again.

- 📥 **Drop anything** — files, images, links, text. Drag them in, or just press `⌘V`.
- ✨ **Beautify screenshots** — drop a screenshot onto the Beautify zone and get a share-ready image: aurora mesh gradient, rounded corners, soft shadow. 8 curated styles, result lands on your shelf and clipboard.
- 🪟 **Stash windows** — park any app window into the island with a shortcut, jump straight back to it later. Perfect for background AI agents and chat windows.
- 🗂 **Batch stacking** — drop several items at once and they stack into one tidy pile. Tap to fan them out, drag one out, or move the whole stack.
- 📤 **AirDrop zone** — drag any item onto the AirDrop zone and it sends. No Finder, no Share menu.
- 📋 **Clipboard capture** — screenshots and copied text can land on the shelf automatically (optional, off by default for text).
- 🎙 **Meeting recording** — choose a save folder the first time, then mix Mac system audio and your microphone into one local AAC `.m4a`. Ledge records audio only, never screen frames or video.
- 📌 **Permanent pinning** — pinned items never expire and survive Clear. Unpin them before using the card X, `⌘⌫`, or a bulk delete.
- ⚡️ **Your shortcuts** — every hotkey is remappable in Settings.
- 🖥 **Notch or no notch** — melts into the notch on notched MacBooks; becomes a slim Top Handle on notchless Macs, Intel included. One universal build.
- 🔒 **Local core, transparent updates** — shelf content and recordings stay on your Mac. There is no account, cloud sync, or in-app usage telemetry; Sparkle checks a GitHub Pages feed and retrieves updates from GitHub Releases.

## Installation

**System requirements:** macOS 14 Sonoma or later · Apple Silicon or Intel (one universal build)

1. Download `Ledge.dmg` from the [latest release](https://github.com/DHLbigmonster/ledge/releases/latest).
2. Open the DMG and drag **Ledge** into `/Applications`.
3. First launch: macOS will warn that Ledge is from an unidentified developer — expected, the app is not notarized. Bypass it once, either way:

   **Terminal (always works):**
   ```bash
   xattr -dr com.apple.quarantine /Applications/Ledge.app
   ```
   **Or System Settings:** try to open the app → dismiss the warning → *System Settings → Privacy & Security* → scroll down → **Open Anyway**.

4. Optional: for **window stashing**, grant Accessibility access when prompted (*System Settings → Privacy & Security → Accessibility*).
5. Optional: the first **meeting recording** asks you to choose a save folder, then needs *Screen & System Audio Recording* permission for Mac audio and *Microphone* permission for your mic. Ledge saves audio only as a local `.m4a`; it does not save screen video.

Ledge uses Sparkle for automatic update checks. Sparkle reads the signed appcast on GitHub Pages and retrieves approved releases from GitHub; Ledge does not send app-usage telemetry.

## Usage

1. Launch Ledge — the notch is now alive.
2. **Hover** over the notch to open the shelf.
3. **Drop** files, images, links or text onto it — or press `⌘V` while it's open to paste from the clipboard.
4. **Hover** an item to preview, **double-click** to open, **right-click** for Copy / Open / AirDrop / Delete.
5. **Drag** an item out to wherever you need it — Finder, a chat box, a browser.
6. **Pin** anything you need to keep. Pinned items survive expiry and Clear; unpin before deleting.
7. Use **Record** to choose a folder on first use and start an audio-only meeting recording; stop it to save the local `.m4a` onto the shelf.

### Default shortcuts

| Action | Shortcut |
| --- | --- |
| Show / hide the island | `⌥ Space` |
| Stash the front window | `⌃ ⌥ L` |
| Jump back to a stashed window | `⌃ ⌥ ⇧ L` |
| Paste clipboard into the island | `⌘ V` (while open) |
| Delete hovered item | `⌘ ⌫` (while open; pinned items must be unpinned first) |
| Close the island | `Esc` |

All remappable in **Settings** (gear icon, top-left of the island).

## FAQ

**Does anything leave my Mac?**
Your shelf content, clipboard captures, and meeting recordings stay on your Mac. Ledge has no account system, cloud sync, or in-app usage telemetry. Sparkle does contact the signed appcast on GitHub Pages and GitHub Releases to check for and retrieve updates.

**What does meeting recording capture?**
Mac system audio and your microphone are mixed into one local AAC `.m4a` in the folder you choose on first use. The app registers audio output only, so it does not save screen frames or video. macOS asks for Screen & System Audio Recording and Microphone permissions.

**Can Clear delete something important?**
Not if you pin it. Pinned items never expire and Clear leaves them alone. The card X, `⌘⌫`, batch deletion, and stack deletion also refuse to remove pinned content until you unpin it.

**Why does window stashing need Accessibility access?**
macOS requires it to move and resize other apps' windows. Everything else in Ledge works without it.

**Intel Mac? No notch?**
Same download. Ledge detects your screen and attaches a slim, opaque-black Top Handle to the top edge. It stays compact while idle and expands into the same solid-black shelf.

**Where are my items stored?**
In `~/Library/Application Support/Ledge`. Files are referenced in place — Ledge never copies or uploads them.

## Feedback

Found a bug? Have an idea? [Open an issue](https://github.com/DHLbigmonster/ledge/issues) — every report gets read.

---

<details>
<summary>中文简介</summary>

纳岛（Ledge）把 MacBook 的刘海变成一个本地收纳架：文件、截图、链接、窗口都能拖进去，随时取回。支持批量堆叠、隔空投送专区、剪贴板捕获、会议录音与永久固定。第一次录音先由用户选择保存文件夹；系统声音和麦克风会保存为本地 `.m4a`，只录音频，不保存屏幕画面。固定素材会被“清空”和删除操作保护。核心内容留在本机，没有账号、云同步或应用内使用遥测；Sparkle 仅通过 GitHub Pages 更新源和 GitHub Releases 检查、获取更新。没有刘海的 Mac（含 Intel）会显示贴顶的纯黑 Top Handle，同一安装包通用。

</details>

<details>
<summary>Website development · 官网开发</summary>

This repository also hosts the Ledge website (GitHub Pages).

```bash
npm install
npm run dev     # local dev
npm run lint    # pre-release check
npm run build   # outputs dist/ for GitHub Pages
```

Built with Vite, React, TypeScript and Tailwind CSS.

</details>
