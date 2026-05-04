import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const CALCULATORS = [
  {
    to: '/',
    title: 'Sleep Cycle Calculator',
    description: 'Find your ideal bedtime or wake time based on 90-minute sleep cycles. Enter a wake time and get cycle-aligned bedtimes, or enter a bedtime and get optimal alarms.',
    badge: 'Most Popular',
  },
  {
    to: '/sleep-debt-calculator',
    title: 'Sleep Debt Calculator',
    description: 'Enter how many hours you slept over the last 7 nights. Get your total sleep debt, average nightly deficit, estimated recovery timeline, and a cycle-aligned bedtime for tonight.',
    badge: null,
  },
  {
    to: '/shift-worker-sleep-calculator',
    title: 'Shift Worker Sleep Calculator',
    description: 'Optimized for non-standard schedules: early morning shifts, night shifts, and rotating schedules. Works with any wake time regardless of whether it\'s conventional.',
    badge: null,
  },
]

export default function Calculators() {
  return (
    <>
      <Helmet>
        <title>Sleep Calculators — SleepCycler</title>
        <meta name="description" content="All SleepCycler tools: sleep cycle calculator, sleep debt calculator, and shift worker sleep calculator. Free, science-backed." />
        <link rel="canonical" href="https://www.sleepcycler.com/calculators" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleep Calculators — SleepCycler" />
        <meta property="og:description" content="All SleepCycler tools: sleep cycle calculator, sleep debt calculator, and shift worker sleep calculator." />
        <meta property="og:url" content="https://www.sleepcycler.com/calculators" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Calculators — SleepCycler" />
        <meta name="twitter:description" content="All SleepCycler tools: sleep cycle calculator, sleep debt calculator, and shift worker sleep calculator." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.jpg" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
            Sleep Calculators
          </h1>
          <p className="text-base text-sleep-muted leading-relaxed">
            All three SleepCycler tools — each built around 90-minute sleep cycle math, not approximations.
          </p>
        </header>

        <div className="space-y-4">
          {CALCULATORS.map(calc => (
            <Link
              key={calc.to}
              to={calc.to}
              className="block group rounded-2xl bg-sleep-card border border-sleep-border p-6 hover:border-sleep-accent/20 transition-colors"
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h2 className="text-base font-bold text-sleep-text group-hover:text-sleep-accent transition-colors">
                  {calc.title}
                </h2>
                {calc.badge && (
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sleep-accent-dim text-sleep-accent border border-sleep-accent/20 whitespace-nowrap flex-shrink-0">
                    {calc.badge}
                  </span>
                )}
              </div>
              <p className="text-sm text-sleep-muted leading-relaxed mb-3">
                {calc.description}
              </p>
              <span className="text-xs font-bold text-sleep-accent">
                Open calculator &rarr;
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-sleep-surface border border-sleep-border p-6">
          <h2 className="text-sm font-bold text-sleep-text mb-2">Want more sleep science?</h2>
          <p className="text-sm text-sleep-muted mb-4">
            Our blog covers sleep cycles, circadian rhythm, sleep debt recovery, and how to wake up feeling rested.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold text-sleep-accent hover:underline"
          >
            Read the sleep science blog &rarr;
          </Link>
        </div>
      </main>
    </>
  )
}
