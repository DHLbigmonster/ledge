import { goatEvent } from '../site'

const username = (import.meta.env.VITE_BUTTONDOWN_USERNAME ?? '').trim()
const configured = Boolean(username)

export default function NewsletterSignup({ compact = false }: { compact?: boolean }) {
  // Do not expose a dead form while the external publication is not configured.
  if (!configured) return null

  const action = configured
    ? `https://buttondown.com/api/emails/embed-subscribe/${encodeURIComponent(username)}`
    : undefined

  return (
    <section className={compact ? '' : 'rounded-3xl border border-neutral-200/70 bg-neutral-50/70 p-7 sm:p-9'}>
      <h2 className={compact ? 'text-[14px] font-semibold text-neutral-900' : 'text-2xl font-semibold tracking-tight'}>Major releases, not inbox noise.</h2>
      <p className={compact ? 'mt-1 text-[12px] leading-relaxed text-neutral-500' : 'mt-2 max-w-xl text-[14px] leading-relaxed text-neutral-500'}>Get a short email when Ledge reaches a meaningful release or launch milestone. Unsubscribe any time.</p>
      <form action={action} method="post" className="mt-4 flex flex-col gap-2 sm:flex-row">
        <input type="hidden" name="embed" value="1" />
        <label className="sr-only" htmlFor={compact ? 'footer-email' : 'updates-email'}>Email address</label>
        <input
          id={compact ? 'footer-email' : 'updates-email'}
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
          className="min-w-0 flex-1 rounded-full border border-neutral-200 bg-white px-4 py-2.5 text-[13px] text-neutral-900 outline-none transition placeholder:text-neutral-400 focus:border-neutral-500 disabled:cursor-not-allowed disabled:bg-neutral-100"
        />
        <button
          type="submit"
          {...goatEvent('newsletter-signup')}
          className="rounded-full bg-black px-5 py-2.5 text-[13px] font-medium text-white transition hover:bg-neutral-800 disabled:cursor-not-allowed disabled:bg-neutral-300"
        >
          Notify me
        </button>
      </form>
    </section>
  )
}
