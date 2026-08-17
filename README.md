# Ledge 纳岛官网

Ledge 把 Mac 屏幕顶部变成一个本地收纳抽屉：文件、截图、链接和窗口都能放进去，随时取回。

- 官网：https://dhlbigmonster.github.io/ledge/
- 下载：https://github.com/DHLbigmonster/ledge/releases/tag/v0.9.0
- 当前版本：v0.9.0，macOS 14+，Apple silicon
- 隐私：核心功能本地运行，无需账号

## 本地开发

```bash
npm install
npm run dev
```

## 发布前检查

```bash
npm run lint
npm run build
```

网站使用 Vite、React、TypeScript 与 Tailwind CSS 构建，`dist/` 发布到 GitHub Pages。
