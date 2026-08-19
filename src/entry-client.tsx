import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { routes } from './routes'

// 剥掉 GitHub Pages 的仓库名前缀，再匹配页面
const path = location.pathname.replace(/^\/ledge/, '')
const normalized = path.endsWith('/') ? path : path + '/'
const Page = routes[normalized] ?? routes['/']

const container = document.getElementById('root')!
const app = (
  <StrictMode>
    <Page />
  </StrictMode>
)

// 预渲染过的页面走 hydration；dev 模式空容器走普通 render
if (container.hasChildNodes()) {
  hydrateRoot(container, app)
} else {
  createRoot(container).render(app)
}
