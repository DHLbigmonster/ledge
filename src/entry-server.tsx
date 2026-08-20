import { renderToString } from 'react-dom/server'
import { createElement } from 'react'
import { routes } from './routes'
import { faqs } from './content/faqs'

// 与 FAQ 页面共用同一份数据，供构建脚本生成完全一致的 FAQPage JSON-LD。
export { faqs }

/** 构建期把某个路径渲染成静态 HTML（爬虫看到的最终内容） */
export function render(path: string): string {
  const Page = routes[path] ?? routes['/']
  return renderToString(createElement(Page))
}
