import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import { notFoundRoute, routes } from './routeManifest'

// Strip the configured deployment base. This supports both /ledge/ today and
// the custom-domain root once VITE_BASE_PATH is set to /.
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const path = base && location.pathname.startsWith(base)
  ? location.pathname.slice(base.length)
  : location.pathname
const normalized = (path || '/').endsWith('/') ? (path || '/') : `${path}/`
const Page = routes[normalized] ?? notFoundRoute.component

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
