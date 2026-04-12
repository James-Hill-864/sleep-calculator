import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Calculator from '../components/Calculator'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sleep Calculator — Find Your Perfect Bedtime | SleepCycler</title>
        <meta name="description" content="Calculate the best time to go to sleep or wake up based on 90-minute sleep cycles. Free, science-backed sleep calculator." />
        <meta property="og:title" content="Sleep Calculator — Find Your Perfect Bedtime" />
        <meta property="og:description" content="Calculate the best time to go to sleep or wake up based on 90-minute sleep cycles." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sleepcycler.com/" />
      </Helmet>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Main column */}
          <div>
            {/* Hero */}
            <section className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sleep-accent-dim border border-sleep-accent/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-sleep-accent animate-pulse" />
                <span className="text-[10px] font-bold text-sleep-accent uppercase tracking-widest">Science-backed</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-bold text-sleep-text tracking-tight leading-[1.1] mb-4">
                Wake up feeling<br />
                <span className="text-sleep-accent">rested</span>, not groggy.
              </h1>
              <p className="text-base sm:text-lg text-sleep-muted max-w-lg leading-relaxed">
                Calculate the best time to sleep or wake up by aligning with your natural 90-minute sleep cycles. Stop waking up mid-cycle.
              </p>
            </section>

            {/* Calculator */}
            <section>
              <Calculator />
            </section>

            {/* Quick explainer */}
            <section className="mt-12">
              <h2 className="text-lg font-bold text-sleep-text mb-4">How does the sleep calculator work?</h2>
              <div className="space-y-4 text-sm text-sleep-muted leading-relaxed">
                <p>
                  Your brain cycles through 4 stages of sleep roughly every 90 minutes. Each complete cycle includes light sleep, deep sleep, and REM sleep. Waking up at the end of a cycle — rather than in the middle — is the difference between feeling alert and feeling like you were hit by a truck.
                </p>
                <p>
                  This calculator counts backward (or forward) in 90-minute intervals from your target time, adding 15 minutes for the average time it takes to fall asleep. The result is a set of optimal sleep or wake times aligned to complete cycles.
                </p>
                <p>
                  <Link to="/about" className="text-sleep-accent hover:underline">Learn more about sleep cycles &rarr;</Link>
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-6">
            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-sleep-muted">Sleep cycle</span>
                  <span className="text-sleep-text font-mono">90 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sleep-muted">Fall asleep</span>
                  <span className="text-sleep-text font-mono">~15 min</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sleep-muted">Adult ideal</span>
                  <span className="text-sleep-text font-mono">5–6 cycles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sleep-muted">Teen ideal</span>
                  <span className="text-sleep-text font-mono">6 cycles</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
