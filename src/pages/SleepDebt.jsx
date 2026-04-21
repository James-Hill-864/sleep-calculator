import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { calculateBedtimes, parseTimeInput, formatTime } from '../utils/sleepMath'
import AmazonProductCard from '../components/AmazonProductCard'

const AGE_GROUPS = [
  { id: 'teen', label: 'Teen', sub: 'Under 18', target: 9 },
  { id: 'adult', label: 'Adult', sub: '18–64', target: 7.5 },
  { id: 'senior', label: 'Senior', sub: '65+', target: 7.5 },
]

const NIGHT_LABELS = [
  'Night 1 (most recent)',
  'Night 2',
  'Night 3',
  'Night 4',
  'Night 5',
  'Night 6',
  'Night 7',
]

function getDebtColor(debt) {
  if (debt >= 3) return 'text-red-400'
  if (debt >= 1) return 'text-amber-400'
  return 'text-sleep-accent'
}

export default function SleepDebt() {
  const [ageGroup, setAgeGroup] = useState('adult')
  const [nights, setNights] = useState(Array(7).fill(''))
  const [results, setResults] = useState(null)
  const [recoveryWakeTime, setRecoveryWakeTime] = useState('06:30')
  const [recoveryBedtimes, setRecoveryBedtimes] = useState(null)

  const target = AGE_GROUPS.find(a => a.id === ageGroup).target

  const updateNight = (index, value) => {
    const updated = [...nights]
    updated[index] = value
    setNights(updated)
  }

  const handleCalculate = () => {
    const filled = nights.filter(n => n !== '')
    if (filled.length === 0) return

    const totalSlept = nights.reduce((sum, n) => sum + (n === '' ? target : parseFloat(n)), 0)
    const totalNeeded = 7 * target
    const debt = Math.max(0, totalNeeded - totalSlept)
    const avgDeficit = debt / 7
    const recoveryNights = Math.ceil(debt / 1.5) // each recovery night adds ~1.5hrs extra via 6 cycles

    setResults({ debt, avgDeficit, recoveryNights, totalSlept, totalNeeded })
  }

  const handleRecoveryCalc = () => {
    const { hour, minute } = parseTimeInput(recoveryWakeTime)
    const bedtimes = calculateBedtimes(hour, minute, ageGroup)
    // Find the 6-cycle option (first result)
    setRecoveryBedtimes(bedtimes)
  }

  return (
    <>
      <Helmet>
        <title>Sleep Debt Calculator — How Much Sleep Do You Owe Your Body? — SleepCycler</title>
        <meta name="description" content="Calculate your sleep debt from the last 7 nights and get a recovery plan with cycle-aligned bedtimes." />
        <link rel="canonical" href="https://www.sleepcycler.com/sleep-debt-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleep Debt Calculator — How Much Sleep Do You Owe Your Body?" />
        <meta property="og:description" content="Calculate your sleep debt from the last 7 nights and get a recovery plan with cycle-aligned bedtimes." />
        <meta property="og:url" content="https://www.sleepcycler.com/sleep-debt-calculator" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Debt Calculator — How Much Sleep Do You Owe Your Body?" />
        <meta name="twitter:description" content="Calculate your sleep debt from the last 7 nights and get a recovery plan with cycle-aligned bedtimes." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"WebApplication","name":"Sleep Debt Calculator","url":"https://www.sleepcycler.com/sleep-debt-calculator","description":"Calculate your sleep debt from the last 7 nights and get a personalized recovery plan.","applicationCategory":"HealthApplication","operatingSystem":"Web","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}})}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <header className="mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sleep-accent-dim border border-sleep-accent/15 mb-6">
            <span className="text-[10px] font-bold text-sleep-accent uppercase tracking-widest">New Tool</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
            Sleep Debt Calculator: How Much Sleep Do You Owe Your Body?
          </h1>
          <p className="text-base text-sleep-muted leading-relaxed">
            Enter how many hours you slept each of the last 7 nights. We&apos;ll calculate your total sleep debt and build a recovery plan.
          </p>
        </header>

        {/* Calculator Form */}
        <section className="space-y-6 mb-4">
          {/* Age group */}
          <div>
            <label className="block text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">
              Age group
            </label>
            <div className="grid grid-cols-3 gap-2">
              {AGE_GROUPS.map(ag => (
                <button
                  key={ag.id}
                  type="button"
                  onClick={() => { setAgeGroup(ag.id); setResults(null) }}
                  className={`py-2.5 rounded-xl text-center transition-all ${
                    ageGroup === ag.id
                      ? 'bg-sleep-accent-dim border border-sleep-accent/20 text-sleep-accent'
                      : 'bg-sleep-surface border border-sleep-border text-sleep-muted hover:border-sleep-faint/20'
                  }`}
                >
                  <div className="text-xs font-semibold">{ag.label}</div>
                  <div className="text-[10px] opacity-60">{ag.sub} · {ag.target}h target</div>
                </button>
              ))}
            </div>
          </div>

          {/* Night inputs */}
          <div>
            <label className="block text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-3">
              Hours slept each night
            </label>
            <div className="space-y-2">
              {NIGHT_LABELS.map((label, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-xs text-sleep-muted w-40 sm:w-48 flex-shrink-0">{label}</span>
                  <input
                    type="number"
                    min="0"
                    max="12"
                    step="0.5"
                    placeholder="hours"
                    value={nights[i]}
                    onChange={e => updateNight(i, e.target.value)}
                    className="flex-1 bg-sleep-surface border border-sleep-border rounded-xl px-3 py-2.5 text-sm font-mono text-sleep-text focus:outline-none focus:border-sleep-accent/30 focus:ring-1 focus:ring-sleep-accent/10 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Calculate */}
          <button
            type="button"
            onClick={handleCalculate}
            className="w-full py-3.5 rounded-xl bg-sleep-accent text-sleep-bg text-sm font-bold tracking-wide hover:bg-sleep-accent/90 active:scale-[0.99] transition-all"
          >
            Calculate Sleep Debt
          </button>
        </section>

        {/* Results */}
        {results && (
          <section className="space-y-4 mb-10">
            <h2 className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">Your results</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1 — Sleep Debt */}
              <div className="bg-sleep-card border border-sleep-border rounded-2xl p-5">
                <div className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">Your sleep debt</div>
                <div className={`text-3xl font-bold font-mono ${getDebtColor(results.debt)}`}>
                  {results.debt.toFixed(1)} hrs
                </div>
                <div className="mt-1 text-xs text-sleep-muted">
                  vs your {ageGroup} target of {target} hours per night
                </div>
              </div>

              {/* Card 2 — Nightly Deficit */}
              <div className="bg-sleep-card border border-sleep-border rounded-2xl p-5">
                <div className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">Average nightly deficit</div>
                <div className={`text-3xl font-bold font-mono ${getDebtColor(results.avgDeficit)}`}>
                  {results.avgDeficit.toFixed(1)} hrs
                </div>
                <div className="mt-1 text-xs text-sleep-muted">
                  per night over the last 7 nights
                </div>
              </div>

              {/* Card 3 — Recovery Plan */}
              <div className="bg-sleep-card border border-sleep-border rounded-2xl p-5">
                <div className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">Recovery timeline</div>
                <div className="text-3xl font-bold font-mono text-sleep-text">
                  {results.debt < 1 ? 'None needed' : `${results.recoveryNights} night${results.recoveryNights !== 1 ? 's' : ''}`}
                </div>
                <div className="mt-1 text-xs text-sleep-muted">
                  {results.debt < 1 ? "You're on track" : 'at 6 cycles (9 hrs) — 90 min earlier than usual'}
                </div>
              </div>

              {/* Card 4 — Tonight's Bedtime */}
              <div className="bg-sleep-card border border-sleep-border rounded-2xl p-5">
                <div className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">Recovery bedtime tonight</div>
                {!recoveryBedtimes ? (
                  <div>
                    <div className="text-xs text-sleep-muted mb-2">What time do you wake up tomorrow?</div>
                    <div className="flex gap-2">
                      <input
                        type="time"
                        value={recoveryWakeTime}
                        onChange={e => setRecoveryWakeTime(e.target.value)}
                        className="flex-1 bg-sleep-surface border border-sleep-border rounded-xl px-3 py-2 text-sm font-mono text-sleep-text focus:outline-none focus:border-sleep-accent/30 transition-colors"
                      />
                      <button
                        type="button"
                        onClick={handleRecoveryCalc}
                        className="px-4 py-2 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold"
                      >
                        Go
                      </button>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="text-3xl font-bold font-mono text-sleep-accent">
                      {formatTime(recoveryBedtimes[0].time)}
                    </div>
                    <div className="mt-1 text-xs text-sleep-muted">
                      6 cycles · 9 hours · recovery mode
                    </div>
                    <button
                      type="button"
                      onClick={() => setRecoveryBedtimes(null)}
                      className="mt-2 text-[10px] text-sleep-faint hover:text-sleep-muted"
                    >
                      Change wake time
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Amazon products for debt recovery */}
            <AmazonProductCard
              name="Magnesium Glycinate for Sleep"
              href="https://amzn.to/4ckKxoe"
              tag="Recovery-night aid"
              why="Sleep debt recovery requires consecutive full-length nights, which is hard when elevated cortisol from prior short nights keeps you wired at bedtime. Magnesium glycinate supports GABA signaling and has been shown in clinical trials to reduce sleep onset latency — the difference between hitting 6 full cycles on recovery night and falling 45 minutes short."
            />

            <AmazonProductCard
              name="Hatch Restore 3 Sunrise Alarm Clock"
              href="https://amzn.to/4mnWmip"
              tag="Consistent wake time"
              why="The fastest way out of sleep debt is a rigidly consistent wake time that anchors your circadian rhythm. The Hatch makes early weekend wake-ups actually tolerable via a 30-minute sunrise ramp, so you don't break the recovery streak by sleeping until noon on Saturday and re-creating the debt on Monday."
            />

            {/* Affiliate bridge */}
            <div className="rounded-2xl bg-sleep-surface border border-sleep-border p-6 mt-6">
              <h3 className="text-sm font-bold text-sleep-text mb-2">Chronic sleep debt is often caused by your sleep environment</h3>
              <p className="text-sm text-sleep-muted mb-4">
                A mattress that traps heat or creates pressure points fragments your cycles — you sleep the hours but don&apos;t complete the cycles. Fixing the surface can recover 30–60 minutes of effective sleep per night without changing your schedule.
              </p>
              <Link
                to="/best-mattresses"
                className="inline-flex items-center gap-2 text-xs font-bold text-sleep-accent hover:underline"
              >
                See our mattress recommendations &rarr;
              </Link>
            </div>

            {/* Internal links */}
            <div className="space-y-3 mt-4">
              <Link
                to="/blog/sleep-deprivation-effects-one-night"
                className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
              >
                <h3 className="text-sm font-bold text-sleep-text mb-1">What one bad night does to your body</h3>
                <p className="text-xs text-sleep-muted">The cognitive, physical, and emotional effects — backed by research &rarr;</p>
              </Link>
              <Link
                to="/"
                className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
              >
                <h3 className="text-sm font-bold text-sleep-text mb-1">Sleep Cycle Calculator</h3>
                <p className="text-xs text-sleep-muted">Find your ideal bedtime or wake time for any single night &rarr;</p>
              </Link>
            </div>
          </section>
        )}

        {/* Intro content */}
        <article className="space-y-6 text-sm sm:text-base text-sleep-muted leading-[1.8]">
          <section>
            <h2 className="text-xl font-bold text-sleep-text mb-3">What Is Sleep Debt?</h2>
            <p>
              Sleep debt is the cumulative difference between the sleep your body needs and the sleep it actually gets. It&apos;s not a metaphor — it&apos;s a measurable physiological deficit that accumulates night over night and produces progressively worsening cognitive, physical, and emotional effects.
            </p>
            <p className="mt-3">
              If your biological need is 7.5 hours (5 complete sleep cycles) and you average 6 hours for a week, you&apos;ve accumulated 10.5 hours of sleep debt. That&apos;s more than a full night of missed sleep, distributed across seven nights in increments small enough that you may not feel dramatically worse on any single day — but the cumulative impairment is real and measurable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sleep-text mb-3">Why One Good Night Isn&apos;t Enough</h2>
            <p>
              The landmark chronic sleep restriction study from the University of Pennsylvania — led by Dr. David Dinges — found that participants restricted to six hours per night for two weeks showed cognitive impairment equivalent to 48 hours of total sleep deprivation. More critically, recovery required more than three consecutive nights of unrestricted sleep before performance returned to baseline. One &ldquo;sleep in Saturday&rdquo; doesn&apos;t erase a week of deficit.
            </p>
            <p className="mt-3">
              Perhaps the most dangerous aspect of accumulated sleep debt is that subjective sleepiness normalizes while objective impairment persists. After four or five days of restricted sleep, you stop <em>feeling</em> tired — your brain adapts its self-assessment — even though reaction time, working memory, and decision-making continue to deteriorate. You lose the internal reference point for what &ldquo;fully rested&rdquo; actually feels like.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sleep-text mb-3">How Recovery Sleep Works</h2>
            <p>
              Your brain is smart about recovery. When you finally get a longer-than-normal sleep period, it doesn&apos;t simply repeat a normal night with extra cycles. Instead, it prioritizes what was missed most: deep N3 sleep comes first, restoring physical repair functions, immune activity, and growth hormone release. Once the N3 deficit is addressed, subsequent recovery cycles shift toward extended REM periods, catching up on emotional processing, memory consolidation, and cognitive maintenance.
            </p>
            <p className="mt-3">
              This is why the calculator above recommends 6-cycle (9-hour) recovery nights. Six cycles gives your brain enough time to front-load the deep sleep it needs and still reach the extended REM phases that resolve the cognitive and emotional symptoms of debt. For context on what each cycle count provides, see our <Link to="/blog/how-many-sleep-cycles-do-you-need" className="text-sleep-accent hover:underline">guide to cycle counts by age</Link>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-sleep-text mb-3">Prevention vs. Recovery</h2>
            <p>
              Recovering from sleep debt is always harder than preventing it. Each recovery night adds roughly 1.5 hours of extra effective sleep (the difference between 5 cycles and 6 cycles). That means 10 hours of debt takes approximately 7 recovery nights to fully resolve — an entire week of going to bed 90 minutes early. Compare that to preventing the debt in the first place by consistently hitting your cycle-aligned bedtime each night.
            </p>
            <p className="mt-3">
              The calculator above is designed to make the math visible. When you can see your debt as a concrete number — not an abstract feeling of tiredness — it becomes easier to make the trade-off between one more episode of television and the cumulative cost of another short night. For practical strategies to fall asleep faster and protect your cycle-aligned bedtime, see our <Link to="/sleep-tips" className="text-sleep-accent hover:underline">7 evidence-based sleep tips</Link>.
            </p>
          </section>
        </article>
      </main>
    </>
  )
}
