import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { parseWakeUpSlug, calculateBedtimes, formatTime } from '../utils/sleepMath'
import Calculator from '../components/Calculator'

// Unique copy for the highest-traffic wake times. Template copy used for the rest.
const UNIQUE_COPY = {
  '05-00am': 'Waking up at 5:00 AM puts you ahead of most of the world. Early risers, gym-before-work people, and shift workers know this feeling. The key is locking in a bedtime that makes 5 AM feel like a choice, not a punishment.',
  '05-30am': 'A 5:30 AM wake time is common for early commuters and people with long drives ahead. Getting to bed at the right time means you arrive alert instead of counting down to the first coffee.',
  '06-00am': 'Six AM is the dividing line for early risers. School buses, morning runs, opening shifts — 6:00 AM wake times reward people who nail their bedtime. Find yours below.',
  '06-30am': '6:30 AM is one of the most common wake times for school drop-offs and early work starts. Aligning your bedtime with complete sleep cycles means the alarm feels less like an attack.',
  '07-00am': 'A 7:00 AM wake-up is the sweet spot for millions of people — early enough to get things done, late enough to get real sleep. Use the calculator to find exactly when to go to bed.',
  '07-30am': 'Getting up at 7:30 AM gives you a reasonable morning, but only if you went to bed at the right time. Missing a cycle boundary by even 30 minutes makes a noticeable difference.',
  '08-00am': '8:00 AM is a common wake time for later-start jobs and remote workers. The calculator shows you the ideal bedtimes to complete full sleep cycles and wake up without the fog.',
  '08-30am': 'Waking at 8:30 AM sounds luxurious, but it still takes the right bedtime to actually feel good. Find the sleep cycle boundaries that work for this wake time.',
}

const CYCLE_HOURS = { 6: 9, 5: 7.5, 4: 6, 3: 4.5 }

export default function WakeUpLanding() {
  const { timeSlug } = useParams()
  const parsed = parseWakeUpSlug(timeSlug)

  if (!parsed) return <Navigate to="/" replace />

  const { hour, minute } = parsed
  const displayTime = formatTime({ hour, minute })
  const timeValue = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`
  const bedtimes = calculateBedtimes(hour, minute, 'adult')
  const recommended = bedtimes.find(b => b.recommended)
  const copy = UNIQUE_COPY[timeSlug] || `Find the best bedtimes for a ${displayTime} wake-up based on complete 90-minute sleep cycles. Waking at the end of a cycle — not in the middle — is what separates feeling rested from feeling groggy.`

  const canonicalUrl = `https://www.sleepcycler.com/wake-up/${timeSlug}`
  const metaTitle = `Sleep Calculator for ${displayTime} Wake Up | SleepCycler`
  const metaDesc = `Find the best bedtimes if you need to wake up at ${displayTime}. Shows optimal sleep times based on 90-minute sleep cycles.`

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `What time should I go to sleep if I wake up at ${displayTime}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: recommended
                  ? `If you wake up at ${displayTime}, the recommended bedtime is ${formatTime(recommended.time)} (${recommended.totalHours} hours, ${recommended.cycles} complete sleep cycles). Other options: ${bedtimes.filter(b => !b.recommended).map(b => `${formatTime(b.time)} for ${b.totalHours} hours`).join(', ')}.`
                  : `Use the SleepCycler calculator to find optimal bedtimes for a ${displayTime} wake-up based on 90-minute sleep cycles.`,
              },
            },
            {
              '@type': 'Question',
              name: 'What is a sleep cycle?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A sleep cycle lasts approximately 90 minutes and includes light sleep, deep sleep, and REM sleep. Waking at the end of a cycle rather than mid-cycle prevents sleep inertia and grogginess. Most adults need 5 complete cycles (7.5 hours).',
              },
            },
          ],
        })}</script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          {/* Main column */}
          <div>
            {/* Hero */}
            <section className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sleep-accent-dim border border-sleep-accent/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-sleep-accent" />
                <span className="text-[10px] font-bold text-sleep-accent uppercase tracking-widest">Bedtime calculator</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-[1.15] mb-4">
                Sleep Calculator for{' '}
                <span className="text-sleep-accent font-mono">{displayTime}</span>{' '}
                Wake Up
              </h1>
              <p className="text-base text-sleep-muted max-w-lg leading-relaxed">
                {copy}
              </p>
            </section>

            {/* Bedtime table */}
            <section className="mb-10">
              <h2 className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-4">
                Best bedtimes for a {displayTime} wake-up
              </h2>
              <div className="rounded-2xl border border-sleep-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sleep-border bg-sleep-surface">
                      <th className="text-left px-4 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Go to bed at</th>
                      <th className="text-left px-4 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Sleep</th>
                      <th className="text-left px-4 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Cycles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bedtimes.map((b, i) => (
                      <tr
                        key={b.cycles}
                        className={`border-b border-sleep-border last:border-0 ${b.recommended ? 'bg-sleep-accent/5' : 'bg-sleep-card'}`}
                      >
                        <td className="px-4 py-3.5">
                          <span className={`font-mono font-medium ${b.recommended ? 'text-sleep-accent' : 'text-sleep-text'}`}>
                            {formatTime(b.time)}
                          </span>
                          {b.recommended && (
                            <span className="ml-2 text-[10px] font-bold text-sleep-accent uppercase tracking-wider">Recommended</span>
                          )}
                        </td>
                        <td className="px-4 py-3.5 text-sleep-muted">{b.totalHours} hours</td>
                        <td className="px-4 py-3.5 text-sleep-muted">{b.cycles} cycles</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-sleep-faint leading-relaxed">
                Times include a 15-minute buffer to fall asleep. Sleep cycles are approximately 90 minutes each.
              </p>
            </section>

            {/* Calculator */}
            <section className="mb-10">
              <h2 className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-4">
                Try different times
              </h2>
              <Calculator defaultWakeTime={timeValue} />
            </section>

            {/* Explainer */}
            <section className="mt-4">
              <h2 className="text-lg font-bold text-sleep-text mb-4">Why does bedtime matter so much for a {displayTime} wake-up?</h2>
              <div className="space-y-3 text-sm text-sleep-muted leading-relaxed">
                <p>
                  Your brain cycles through sleep stages roughly every 90 minutes. Each complete cycle includes light sleep, deep sleep, and REM sleep. When your alarm fires mid-cycle — even if you technically got enough hours — you wake with that foggy, dragged-out feeling called sleep inertia.
                </p>
                <p>
                  The table above shows bedtimes that land you at the end of a complete cycle when {displayTime} hits. The recommended option ({recommended ? `${formatTime(recommended.time)}, for ${recommended.totalHours} hours` : '7.5 hours'}) gives most adults the right balance of deep sleep and REM.
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
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Other wake times</h3>
              <div className="space-y-2">
                {[
                  { slug: '05-00am', label: '5:00 AM' },
                  { slug: '05-30am', label: '5:30 AM' },
                  { slug: '06-00am', label: '6:00 AM' },
                  { slug: '06-30am', label: '6:30 AM' },
                  { slug: '07-00am', label: '7:00 AM' },
                  { slug: '07-30am', label: '7:30 AM' },
                  { slug: '08-00am', label: '8:00 AM' },
                  { slug: '08-30am', label: '8:30 AM' },
                ]
                  .filter(t => t.slug !== timeSlug)
                  .map(t => (
                    <Link
                      key={t.slug}
                      to={`/wake-up/${t.slug}`}
                      className="block text-sm text-sleep-accent hover:underline"
                    >
                      Wake up at {t.label} &rarr;
                    </Link>
                  ))}
              </div>
            </div>

            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Tools</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-sm text-sleep-accent hover:underline">Sleep calculator &rarr;</Link>
                <Link to="/shift-worker-sleep-calculator" className="block text-sm text-sleep-accent hover:underline">Shift worker calculator &rarr;</Link>
                <Link to="/sleep-debt-calculator" className="block text-sm text-sleep-accent hover:underline">Sleep debt calculator &rarr;</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Related reading</h3>
              <div className="space-y-2">
                <Link to="/blog/how-many-sleep-cycles-do-you-need" className="block text-sm text-sleep-accent hover:underline">How many sleep cycles do you need? &rarr;</Link>
                <Link to="/blog/how-many-hours-of-sleep-do-you-need" className="block text-sm text-sleep-accent hover:underline">How many hours of sleep do you need? &rarr;</Link>
                <Link to="/sleep-tips" className="block text-sm text-sleep-accent hover:underline">Tips to fall asleep faster &rarr;</Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </>
  )
}
