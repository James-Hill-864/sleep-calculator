import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { parseTimeInput, formatTime } from '../utils/sleepMath'

const CYCLE_MINUTES = 90
const FALL_ASLEEP_MINUTES = 15

function calculateDuration(bedTime, wakeTime) {
  const bed = parseTimeInput(bedTime)
  const wake = parseTimeInput(wakeTime)
  const bedMinutes = bed.hour * 60 + bed.minute
  const wakeMinutes = wake.hour * 60 + wake.minute
  let durationMinutes = wakeMinutes - bedMinutes
  if (durationMinutes <= 0) durationMinutes += 24 * 60
  const hours = Math.floor(durationMinutes / 60)
  const minutes = durationMinutes % 60
  const actualSleepMinutes = Math.max(0, durationMinutes - FALL_ASLEEP_MINUTES)
  const completeCycles = Math.floor(actualSleepMinutes / CYCLE_MINUTES)
  return { hours, minutes, durationMinutes, completeCycles }
}

const REFERENCE_ROWS = [
  { bed: '21:30', wake: '05:00' },
  { bed: '22:00', wake: '05:45', rec: true },
  { bed: '22:30', wake: '06:15', rec: true },
  { bed: '23:00', wake: '06:45', rec: true },
  { bed: '23:30', wake: '07:15' },
  { bed: '00:00', wake: '07:45' },
  { bed: '00:30', wake: '08:15' },
]

function qualityFor(cycles) {
  if (cycles >= 5) return { label: 'Excellent', color: 'text-sleep-accent' }
  if (cycles === 4) return { label: 'Good', color: 'text-yellow-400' }
  if (cycles === 3) return { label: 'Short', color: 'text-orange-400' }
  return { label: 'Too short', color: 'text-red-400' }
}

function qualityNote(cycles) {
  if (cycles >= 6) return `${cycles} complete cycles. Your brain had time for full memory consolidation, physical repair, and REM. Excellent recovery.`
  if (cycles === 5) return '5 complete cycles — the adult sweet spot. Expect a clean, alert wake-up with no afternoon crash.'
  if (cycles === 4) return '4 complete cycles (6 hours). Most people manage okay but notice fatigue by mid-afternoon. One extra cycle would help.'
  if (cycles === 3) return '3 complete cycles (4.5 hours). You\'ll feel the deficit — impaired reaction time and focus. A 20-minute nap can bridge the gap.'
  return 'Fewer than 3 complete cycles. Expect significant cognitive impairment and strong drowsiness. Prioritize a full night as soon as possible.'
}

export default function SleepHoursCalculator() {
  const [bedTime, setBedTime] = useState('22:30')
  const [wakeTime, setWakeTime] = useState('06:30')
  const [result, setResult] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()
    setResult(calculateDuration(bedTime, wakeTime))
  }

  const quality = result ? qualityFor(result.completeCycles) : null

  return (
    <>
      <Helmet>
        <title>Sleep Hours Calculator — How Many Hours Did I Sleep? | SleepCycler</title>
        <meta name="description" content="Find out exactly how many hours of sleep you got and how many complete 90-minute sleep cycles that equals. Enter your bedtime and wake time. Free." />
        <link rel="canonical" href="https://www.sleepcycler.com/sleep-hours-calculator" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleep Hours Calculator — How Many Hours Did I Sleep? | SleepCycler" />
        <meta property="og:description" content="How many hours did you sleep? Enter your bedtime and wake time to see your total sleep and complete cycles." />
        <meta property="og:url" content="https://www.sleepcycler.com/sleep-hours-calculator" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Hours Calculator | SleepCycler" />
        <meta name="twitter:description" content="How many hours did you sleep? Find out and see how many complete 90-minute cycles you got." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'How many hours of sleep from 10pm to 6am?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'From 10:00 PM to 6:00 AM is 8 hours in bed. Subtracting 15 minutes to fall asleep gives 7 hours 45 minutes of actual sleep — 5 complete 90-minute sleep cycles. This is an ideal night for most adults.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many hours of sleep from 11pm to 7am?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'From 11:00 PM to 7:00 AM is 8 hours in bed, which equals 5 complete sleep cycles (7.5 hours of sleep after a 15-minute fall-asleep period). This is one of the most recommended sleep windows for adults.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many complete sleep cycles is 8 hours?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: '8 hours in bed equals approximately 5 complete 90-minute sleep cycles, after subtracting 15 minutes to fall asleep (leaving 7 hours 45 minutes of sleep, which contains 5 full cycles with 15 minutes remaining). 7.5 hours (5 complete cycles) often feels better than 8 hours that end mid-cycle.',
              },
            },
          ],
        })}</script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <div>
            <section className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sleep-accent-dim border border-sleep-accent/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-sleep-accent" />
                <span className="text-[10px] font-bold text-sleep-accent uppercase tracking-widest">Sleep hours calculator</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-[1.15] mb-4">
                How Many Hours of Sleep Did I Get?
              </h1>
              <p className="text-base text-sleep-muted max-w-lg leading-relaxed">
                Enter your bedtime and wake time to see your total sleep and how many complete 90-minute cycles you got — and what that actually means for how you feel.
              </p>
            </section>

            <section className="mb-10">
              <div className="rounded-2xl bg-sleep-card border border-sleep-border p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">
                        Bedtime
                      </label>
                      <input
                        type="time"
                        value={bedTime}
                        onChange={e => setBedTime(e.target.value)}
                        className="w-full bg-sleep-surface border border-sleep-border rounded-xl px-4 py-3.5 text-xl font-mono text-sleep-text focus:outline-none focus:border-sleep-accent/30 focus:ring-1 focus:ring-sleep-accent/10 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">
                        Wake time
                      </label>
                      <input
                        type="time"
                        value={wakeTime}
                        onChange={e => setWakeTime(e.target.value)}
                        className="w-full bg-sleep-surface border border-sleep-border rounded-xl px-4 py-3.5 text-xl font-mono text-sleep-text focus:outline-none focus:border-sleep-accent/30 focus:ring-1 focus:ring-sleep-accent/10 transition-colors"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all bg-sleep-accent text-sleep-bg hover:bg-sleep-accent/90 active:scale-[0.99]"
                  >
                    Calculate sleep
                  </button>
                </form>

                {result && quality && (
                  <div className="mt-6 pt-6 border-t border-sleep-border space-y-4" role="alert" aria-live="polite">
                    <div className="text-center">
                      <div className="text-5xl font-mono font-bold text-sleep-text mb-1">
                        {result.hours}h{result.minutes > 0 ? ` ${String(result.minutes).padStart(2, '0')}m` : ''}
                      </div>
                      <p className="text-sm text-sleep-muted">time in bed</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center">
                      <div className="rounded-xl bg-sleep-surface border border-sleep-border p-4">
                        <div className={`text-3xl font-bold font-mono ${quality.color}`}>{result.completeCycles}</div>
                        <div className="text-[10px] text-sleep-faint mt-1">complete cycles</div>
                      </div>
                      <div className="rounded-xl bg-sleep-surface border border-sleep-border p-4">
                        <div className={`text-2xl font-bold ${quality.color}`}>{quality.label}</div>
                        <div className="text-[10px] text-sleep-faint mt-1">sleep quality</div>
                      </div>
                    </div>
                    <div className={`rounded-xl border px-4 py-3 ${result.completeCycles >= 5 ? 'border-sleep-accent/20 bg-sleep-accent-dim' : 'border-sleep-border bg-sleep-surface'}`}>
                      <p className="text-sm text-sleep-muted leading-relaxed">{qualityNote(result.completeCycles)}</p>
                    </div>
                  </div>
                )}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-bold text-sleep-text mb-4">Common sleep windows</h2>
              <div className="rounded-2xl bg-sleep-card border border-sleep-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sleep-border">
                      <th className="text-left px-5 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Bedtime → Wake</th>
                      <th className="text-left px-5 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Duration</th>
                      <th className="text-left px-5 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Cycles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {REFERENCE_ROWS.map((row, i) => {
                      const r = calculateDuration(row.bed, row.wake)
                      const bed = parseTimeInput(row.bed)
                      const wake = parseTimeInput(row.wake)
                      return (
                        <tr key={i} className={`border-b border-sleep-border last:border-0 ${row.rec ? 'bg-sleep-accent-dim' : ''}`}>
                          <td className={`px-5 py-3.5 font-mono text-xs ${row.rec ? 'text-sleep-accent font-bold' : 'text-sleep-text'}`}>
                            {formatTime(bed)} → {formatTime(wake)}
                          </td>
                          <td className="px-5 py-3.5 text-sleep-muted">{r.hours}h{r.minutes > 0 ? ` ${r.minutes}m` : ''}</td>
                          <td className={`px-5 py-3.5 font-medium ${row.rec ? 'text-sleep-accent' : 'text-sleep-muted'}`}>{r.completeCycles}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-4">Why do cycles matter more than hours?</h2>
              <div className="space-y-3 text-sm text-sleep-muted leading-relaxed">
                <p>
                  Sleep isn't uniform. Your brain cycles through light sleep, deep slow-wave sleep, and REM roughly every 90 minutes. Each stage does different work: deep sleep repairs tissue and consolidates motor memory; REM handles emotional processing and creative thinking.
                </p>
                <p>
                  When your alarm fires mid-cycle — especially during deep sleep — your body is forced awake while recovery is still running. The result is sleep inertia: grogginess and cognitive fog that can persist 30-60 minutes. This is why 7.5 hours (5 complete cycles) often feels sharper than 8 hours that end mid-cycle.
                </p>
                <p>
                  <Link to="/" className="text-sleep-accent hover:underline">Calculate your ideal bedtime by wake time &rarr;</Link>
                </p>
              </div>
            </section>
          </div>

          <aside className="hidden lg:flex flex-col gap-6">
            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Sleep by cycles</h3>
              <div className="space-y-2.5">
                {[
                  { cycles: 3, label: '4.5 hrs' },
                  { cycles: 4, label: '6 hrs' },
                  { cycles: 5, label: '7.5 hrs' },
                  { cycles: 6, label: '9 hrs' },
                ].map(r => (
                  <div key={r.cycles} className="flex justify-between text-sm">
                    <span className="text-sleep-muted">{r.cycles} cycles</span>
                    <span className={`font-mono font-medium ${r.cycles === 5 ? 'text-sleep-accent' : 'text-sleep-text'}`}>{r.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-sleep-faint">Excludes 15 min to fall asleep.</p>
            </div>

            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Related tools</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-sm text-sleep-accent hover:underline">Bedtime calculator &rarr;</Link>
                <Link to="/sleep-debt-calculator" className="block text-sm text-sleep-accent hover:underline">Sleep debt calculator &rarr;</Link>
                <Link to="/sleep-cycle-timer" className="block text-sm text-sleep-accent hover:underline">Sleep cycle timer &rarr;</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">If I go to sleep at...</h3>
              <div className="space-y-2">
                {[
                  { slug: '09-30pm', label: '9:30 PM' },
                  { slug: '10-00pm', label: '10:00 PM' },
                  { slug: '10-30pm', label: '10:30 PM' },
                  { slug: '11-00pm', label: '11:00 PM' },
                  { slug: '11-30pm', label: '11:30 PM' },
                ].map(t => (
                  <Link key={t.slug} to={`/bedtime/${t.slug}`} className="block text-sm text-sleep-accent hover:underline">
                    Sleep at {t.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
