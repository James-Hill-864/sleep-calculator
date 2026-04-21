import { useState } from 'react'

const BUTTONDOWN_USERNAME = 'KarolinaxPop'
const ENDPOINT = `https://buttondown.email/api/emails/embed-subscribe/${BUTTONDOWN_USERNAME}`
const CONFIRM_URL = `https://buttondown.email/${BUTTONDOWN_USERNAME}`

export default function EmailSignup({
  heading = 'Get the sleep science newsletter',
  subhead = 'One evidence-based email per week on sleep cycles, circadian rhythm, and waking up rested. No wellness fluff.',
}) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="rounded-2xl bg-sleep-surface border border-sleep-border p-6 sm:p-8">
      <h2 className="text-base sm:text-lg font-bold text-sleep-text mb-2">{heading}</h2>
      <p className="text-sm text-sleep-muted leading-relaxed mb-5">{subhead}</p>

      {submitted ? (
        <div className="rounded-xl bg-sleep-accent-dim border border-sleep-accent/20 px-4 py-3 text-sm text-sleep-accent">
          Check your email to confirm your subscription.
        </div>
      ) : (
        <form
          action={ENDPOINT}
          method="post"
          target="popupwindow"
          onSubmit={() => {
            window.open(CONFIRM_URL, 'popupwindow')
            setSubmitted(true)
          }}
          className="flex flex-col sm:flex-row gap-2"
        >
          <label htmlFor="bd-email" className="sr-only">Email address</label>
          <input
            id="bd-email"
            type="email"
            name="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="flex-1 bg-sleep-card border border-sleep-border rounded-xl px-4 py-2.5 text-sm text-sleep-text placeholder:text-sleep-faint focus:outline-none focus:border-sleep-accent/40 focus:ring-1 focus:ring-sleep-accent/20 transition"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-sleep-accent text-sleep-bg text-sm font-bold hover:brightness-110 transition"
          >
            Subscribe
          </button>
        </form>
      )}

      <p className="text-[10px] text-sleep-faint mt-4">
        Unsubscribe anytime. No spam, ever.
      </p>
    </div>
  )
}
