import Home from './Home'

/**
 * 中文落地页 /zh/：面向「Mac 灵动岛」「苹果电脑灵动岛」等中文搜索词。
 * 复用首页全部结构，仅强制中文渲染——爬虫不执行 JS 也能看到完整中文内容。
 */
export default function ZhHome() {
  return <Home forceLang="zh" />
}
