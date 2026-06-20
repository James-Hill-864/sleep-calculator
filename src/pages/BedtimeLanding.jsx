import { useParams, Navigate, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { parseWakeUpSlug, calculateWakeTimes, formatTime } from '../utils/sleepMath'
import Calculator from '../components/Calculator'

const UNIQUE_COPY = {
  '08-00pm': 'Going to bed at 8 PM is early but powerful for recovery. Your 5-cycle wake time is 3:45 AM — common for early-shift workers. For a 5:45 AM alarm, 4 cycles still gives you solid rest.',
  '08-30pm': 'An 8:30 PM bedtime suits early risers and shift workers. Five cycles puts your wake time at 4:15 AM. If you need to be up at 5 or 6 AM, aim for the nearest cycle boundary.',
  '09-00pm': 'A 9 PM bedtime is ideal for early-morning workouts or commutes. Five cycles lands at 4:45 AM. Pair with blackout curtains and you\'ll rarely need an alarm.',
  '09-30pm': 'Going to bed at 9:30 PM gives your 5-cycle wake time at 5:15 AM — perfect for early gym sessions or pre-dawn commutes. One of the cleanest schedules for adults.',
  '10-00pm': 'Going to bed at 10 PM is the sweet spot for most adults. It aligns with your circadian rhythm and puts your 5-cycle wake time at 5:45 AM — alert and before most alarms go off.',
  '10-30pm': 'A 10:30 PM bedtime is one of the most common. Your recommended 5-cycle wake time is 6:15 AM — right in the working-world sweet spot.',
  '11-00pm': 'An 11 PM bedtime is later than ideal but workable. Aim for the 5-cycle wake time at 6:45 AM. Going to sleep consistently at the same time matters more than the exact hour.',
  '11-30pm': 'Going to bed at 11:30 PM puts your 5-cycle wake time at 7:15 AM. If your alarm is fixed earlier, a 4-cycle wake at 5:45 AM will be cleaner than cutting cycle 5 short.',
  '12-00am': 'A midnight bedtime means 5 full cycles land at 7:45 AM. If your schedule forces an earlier alarm, aim for the 4-cycle boundary at 6:15 AM rather than waking mid-cycle.',
  '12-30am': 'Going to bed at 12:30 AM is late but manageable. Your 5-cycle wake time is 8:15 AM. If you need to be up earlier, set your alarm at 5:45 AM (3 cycles) rather than somewhere in between.',
  '01-00am': 'A 1 AM bedtime pushes your 5-cycle wake time to 8:45 AM. For a 7 AM alarm, that\'s only 4 cycles — still better than waking mid-cycle from an 8-hour attempt.',
  '01-30am': 'Going to bed at 1:30 AM and waking after 5 cycles means 9:15 AM. If your schedule doesn\'t allow that, 3 cycles (4:45 AM) or 4 cycles (6:15 AM) are your cleanest earlier options.',
}

export default function BedtimeLanding() {
  const { timeSlug } = useParams()
  const parsed = parseWakeUpSlug(timeSlug)

  if (!parsed) return <Navigate to="/" replace />

  const { hour, minute } = parsed
  const wakeTimes = calculateWakeTimes(hour, minute)
  const recommended = wakeTimes.find(w => w.recommended)
  const bedtimeFormatted = formatTime({ hour, minute })
  const bedTimeValue = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`

  const copy = UNIQUE_COPY[timeSlug]
  const recWakeFormatted = recommended ? formatTime(recommended.time) : ''

  const pageTitle = `If I Go to Sleep at ${bedtimeFormatted}, What Time Should I Wake Up?`
  const metaDesc = `Going to sleep at ${bedtimeFormatted}? Your ideal wake times based on 90-minute sleep cycles are ${wakeTimes.slice(1, 3).map(w => formatTime(w.time)).join(' or ')} (4–5 cycles). See all options.`

  const POPULAR_BEDTIMES = [
    { slug: '09-30pm', label: '9:30 PM' },
    { slug: '10-00pm', label: '10:00 PM' },
    { slug: '10-30pm', label: '10:30 PM' },
    { slug: '11-00pm', label: '11:00 PM' },
    { slug: '11-30pm', label: '11:30 PM' },
    { slug: '12-00am', label: '12:00 AM' },
    { slug: '12-30am', label: '12:30 AM' },
  ]

  return (
    <>
      <Helmet>
        <title>{pageTitle} | SleepCycler</title>
        <meta name="description" content={metaDesc} />
        <link rel="canonical" href={`https://www.sleepcycler.com/bedtime/${timeSlug}`} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDesc} />
        <meta property="og:url" content={`https://www.sleepcycler.com/bedtime/${timeSlug}`} />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDesc} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: `What time should I wake up if I go to sleep at ${bedtimeFormatted}?`,
              acceptedAnswer: {
                '@type': 'Answer',
                text: `If you go to sleep at ${bedtimeFormatted}, your ideal wake times based on 90-minute sleep cycles are: ${wakeTimes.map(w => `${formatTime(w.time)} (${w.cycles} cycles, ${w.totalHours} hours)`).join('; ')}. The recommended wake time for most adults is ${recWakeFormatted} (5 cycles, 7.5 hours).`,
              },
            },
            {
              '@type': 'Question',
              name: 'Why should I wake up at the end of a sleep cycle?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Each sleep cycle lasts approximately 90 minutes. Waking mid-cycle — especially during deep sleep — causes sleep inertia: grogginess and cognitive fog that can last 30 minutes or more. Waking at a cycle boundary produces a noticeably cleaner, more alert feeling, even with fewer total hours.',
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
                <span className="text-[10px] font-bold text-sleep-accent uppercase tracking-widest">Bedtime calculator</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-[1.15] mb-4">
                If I Go to Sleep at {bedtimeFormatted}, What Time Should I Wake Up?
              </h1>
              <p className="text-base text-sleep-muted max-w-lg leading-relaxed">
                {copy ?? `Going to bed at ${bedtimeFormatted}? Here are your ideal wake times based on 90-minute sleep cycles and 15 minutes to fall asleep.`}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-sm font-bold text-sleep-faint uppercase tracking-widest mb-4">Best wake times</h2>
              <div className="rounded-2xl bg-sleep-card border border-sleep-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sleep-border">
                      <th className="text-left px-5 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Wake up at</th>
                      <th className="text-left px-5 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Sleep</th>
                      <th className="text-left px-5 py-3 text-[10px] font-bold text-sleep-faint uppercase tracking-widest">Cycles</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wakeTimes.map((w, i) => (
                      <tr key={i} className={`border-b border-sleep-border last:border-0 ${w.recommended ? 'bg-sleep-accent-dim' : ''}`}>
                        <td className={`px-5 py-3.5 font-mono font-bold ${w.recommended ? 'text-sleep-accent' : 'text-sleep-text'}`}>
                          {formatTime(w.time)}
                          {w.recommended && (
                            <span className="ml-2 text-[10px] font-bold bg-sleep-accent text-sleep-bg px-1.5 py-0.5 rounded-full">Recommended</span>
                          )}
                        </td>
                        <td className="px-5 py-3.5 text-sleep-muted">{w.totalHours} hrs</td>
                        <td className="px-5 py-3.5 text-sleep-muted">{w.cycles}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-2 text-xs text-sleep-faint">Includes 15 minutes to fall asleep. Based on 90-minute sleep cycles.</p>
            </section>

            <section className="mb-10">
              <h2 className="text-lg font-bold text-sleep-text mb-6">Adjust your bedtime</h2>
              <Calculator defaultBedTime={bedTimeValue} />
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-4">Why these specific wake times?</h2>
              <div className="space-y-3 text-sm text-sleep-muted leading-relaxed">
                <p>
                  Sleep isn't a flat line — your brain moves through light sleep, deep sleep, and REM roughly every 90 minutes. Waking mid-cycle, especially during deep sleep, causes sleep inertia: grogginess that can last 30 minutes even after a full night.
                </p>
                <p>
                  The times above are calculated by adding 15 minutes (average time to fall asleep) to your {bedtimeFormatted} bedtime, then counting forward in 90-minute intervals. Waking at any of these times means your alarm fires at a natural cycle boundary — not in the middle of recovery.
                </p>
                <p>
                  Most adults need 5 cycles (7.5 hours). Teenagers do better with 6. If you're recovering from sleep debt, 6 cycles for a few nights accelerates recovery.
                </p>
                <p>
                  <Link to="/about" className="text-sleep-accent hover:underline">Learn more about sleep cycles &rarr;</Link>
                </p>
              </div>
            </section>
          </div>

          <aside className="hidden lg:flex flex-col gap-6">
            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Other bedtimes</h3>
              <div className="space-y-2">
                {POPULAR_BEDTIMES.filter(t => t.slug !== timeSlug).slice(0, 5).map(t => (
                  <Link key={t.slug} to={`/bedtime/${t.slug}`} className="block text-sm text-sleep-accent hover:underline">
                    Sleep at {t.label} &rarr;
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Related tools</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-sm text-sleep-accent hover:underline">Wake-up time calculator &rarr;</Link>
                <Link to="/sleep-hours-calculator" className="block text-sm text-sleep-accent hover:underline">Sleep hours calculator &rarr;</Link>
                <Link to="/sleep-debt-calculator" className="block text-sm text-sleep-accent hover:underline">Sleep debt calculator &rarr;</Link>
                <Link to="/sleep-cycle-timer" className="block text-sm text-sleep-accent hover:underline">Sleep cycle timer &rarr;</Link>
              </div>
            </div>

            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Popular wake times</h3>
              <div className="space-y-2">
                {[
                  { slug: '06-00am', label: '6:00 AM' },
                  { slug: '06-30am', label: '6:30 AM' },
                  { slug: '07-00am', label: '7:00 AM' },
                  { slug: '07-30am', label: '7:30 AM' },
                ].map(t => (
                  <Link key={t.slug} to={`/wake-up/${t.slug}`} className="block text-sm text-sleep-accent hover:underline">
                    Wake up at {t.label} &rarr;
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
