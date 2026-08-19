import type { ComponentType } from 'react'
import Home from './pages/Home'
import ZhHome from './pages/ZhHome'
import FAQ from './pages/FAQ'
import CompareNotchNook from './pages/CompareNotchNook'
import CompareYoink from './pages/CompareYoink'

/** path（以 / 结尾） → 页面组件。客户端水合和服务端预渲染共用这张表。 */
export const routes: Record<string, ComponentType> = {
  '/': Home,
  '/zh/': ZhHome,
  '/faq/': FAQ,
  '/compare/notchnook/': CompareNotchNook,
  '/compare/yoink/': CompareYoink,
}
