#!/usr/bin/env node
// 旧站（dhlbigmonster.github.io/ledge）自 2026-08 起降级为「跳转壳」：
// 唯一品牌主站是 ledgeformac.github.io。本脚本只产出：
//   dist-legacy/index.html      -> 跳品牌站首页
//   dist-legacy/zh/index.html   -> 跳品牌站中文页
//   dist-legacy/appcast.xml     -> 必须原样保留：已装机的 Sparkle 自动更新指向这里
// 外加站点所有权验证文件，其余营销内容一律不再发布到旧地址。
import { mkdir, rm, writeFile, copyFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const out = `${root}dist-legacy`;
const BRAND = 'https://ledgeformac.github.io';

const stub = ({ lang, title, target }) => `<!doctype html>
<html lang="${lang}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="canonical" href="${target}" />
    <meta http-equiv="refresh" content="0;url=${target}" />
    <script>location.replace(${JSON.stringify(target)});</script>
    <style>body{font-family:-apple-system,"PingFang SC",sans-serif;display:grid;place-items:center;height:100vh;margin:0;color:#111;background:#fafaf8}</style>
  </head>
  <body>
    <p>${lang === 'zh-CN' ? '页面已迁移，正在前往新地址…' : 'This page has moved.'} <a href="${target}" hreflang="${lang === 'zh-CN' ? 'zh-CN' : 'en'}">${BRAND.replace('https://', '')}</a></p>
  </body>
</html>
`;

await rm(out, { recursive: true, force: true });
await mkdir(`${out}/zh`, { recursive: true });
await writeFile(
  `${out}/index.html`,
  stub({ lang: 'en', title: 'Ledge for Mac', target: `${BRAND}/` }),
);
await writeFile(
  `${out}/zh/index.html`,
  stub({ lang: 'zh-CN', title: 'Ledge（纳岛）for Mac', target: `${BRAND}/zh/` }),
);
await copyFile(`${root}public/appcast.xml`, `${out}/appcast.xml`);
for (const f of ['google09ccf1c8710b4212.html', 'BingSiteAuth.xml']) {
  await copyFile(`${root}public/${f}`, `${out}/${f}`);
}
console.log(`dist-legacy ready -> ${out} (index, zh/, appcast.xml)`);
