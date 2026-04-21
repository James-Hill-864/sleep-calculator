import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Calculator from '../components/Calculator'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sleep Calculator — Find Your Perfect Bedtime | SleepCycler</title>
        <meta name="description" content="Calculate the best time to go to sleep or wake up based on 90-minute sleep cycles. Free, science-backed sleep calculator." />
        <link rel="canonical" href="https://www.sleepcycler.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleep Calculator — Find Your Perfect Bedtime" />
        <meta property="og:description" content="Calculate the best time to go to sleep or wake up based on 90-minute sleep cycles." />
        <meta property="og:url" content="https://www.sleepcycler.com/" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Calculator — Find Your Perfect Bedtime" />
        <meta name="twitter:description" content="Calculate the best time to go to sleep or wake up based on 90-minute sleep cycles." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"SleepCycler Sleep Calculator","url":"https://www.sleepcycler.com","description":"Calculate the best time to sleep or wake up based on 90-minute sleep cycles.","applicationCategory":"HealthApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}</script>
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What time should I go to sleep?","acceptedAnswer":{"@type":"Answer","text":"The best time to go to sleep depends on when you need to wake up. Count backward in 90-minute sleep cycles from your wake time, adding 15 minutes to fall asleep. For a 6:30 AM wake-up, ideal bedtimes are 9:15 PM (6 cycles), 10:45 PM (5 cycles), or 12:15 AM (4 cycles)."}},{"@type":"Question","name":"How many sleep cycles do I need?","acceptedAnswer":{"@type":"Answer","text":"Most adults need 5 complete sleep cycles per night, which equals 7.5 hours of sleep. Teenagers need 6 cycles (9 hours). Each cycle lasts approximately 90 minutes."}},{"@type":"Question","name":"What is a sleep cycle?","acceptedAnswer":{"@type":"Answer","text":"A sleep cycle lasts approximately 90 minutes and consists of 4 stages: N1 (light sleep), N2 (light sleep with memory consolidation), N3 (deep sleep), and REM (dream sleep). Waking at the end of a cycle rather than mid-cycle prevents sleep inertia and grogginess."}},{"@type":"Question","name":"Why do I feel groggy even after 8 hours of sleep?","acceptedAnswer":{"@type":"Answer","text":"Grogginess after 8 hours is usually caused by waking mid-cycle rather than at a cycle boundary. 8 hours doesn't divide evenly into 90-minute cycles. Try 7.5 hours (5 cycles) or 9 hours (6 cycles) instead for a cleaner wake-up."}}]})}</script>
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
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Explore</h3>
              <div className="space-y-2">
                <Link to="/sleep-tips" className="block text-sm text-sleep-accent hover:underline">7 tips to fall asleep faster &rarr;</Link>
                <Link to="/best-mattresses" className="block text-sm text-sleep-accent hover:underline">Best mattresses for deep sleep &rarr;</Link>
                <Link to="/blog" className="block text-sm text-sleep-accent hover:underline">Sleep science blog &rarr;</Link>
              </div>
            </div>
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
