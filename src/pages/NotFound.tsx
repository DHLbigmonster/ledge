import Layout from '../components/Layout'
import { sitePath } from '../site'

export default function NotFound() {
  return (
    <Layout>
      <div className="py-20 text-center">
        <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-neutral-400">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">That page is not in this drawer.</h1>
        <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-neutral-500">The link may be old, or the item may have moved. The main Ledge shelf is still right where you left it.</p>
        <a href={sitePath('/')} className="mt-7 inline-flex rounded-full bg-black px-6 py-2.5 text-[13px] font-medium text-white">Return to Ledge for Mac</a>
      </div>
    </Layout>
  )
}
