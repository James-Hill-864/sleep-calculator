import { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { formatTime } from '../utils/sleepMath'

const CYCLE_MINUTES = 90
const FALL_ASLEEP_MINUTES = 15

const PRESETS = [
  { cycles: 3, hours: '4.5 hrs', label: '3 cycles' },
  { cycles: 4, hours: '6 hrs', label: '4 cycles' },
  { cycles: 5, hours: '7.5 hrs', label: '5 cycles · Recommended' },
  { cycles: 6, hours: '9 hrs', label: '6 cycles' },
]

function formatCountdown(ms) {
  const totalSecs = Math.ceil(ms / 1000)
  const h = Math.floor(totalSecs / 3600)
  const m = Math.floor((totalSecs % 3600) / 60)
  const s = totalSecs % 60
  return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export default function SleepCycleTimer() {
  const [cycles, setCycles] = useState(5)
  const [running, setRunning] = useState(false)
  const [startedAt, setStartedAt] = useState(null)
  const [remaining, setRemaining] = useState(null)
  const [done, setDone] = useState(false)
  const intervalRef = useRef(null)

  const totalMs = (cycles * CYCLE_MINUTES + FALL_ASLEEP_MINUTES) * 60 * 1000

  const wakeDate = (() => {
    const base = startedAt ?? Date.now()
    return new Date(base + totalMs)
  })()
  const wakeFormatted = formatTime({ hour: wakeDate.getHours(), minute: wakeDate.getMinutes() })

  function start() {
    if ('Notification' in window) Notification.requestPermission()
    const now = Date.now()
    setStartedAt(now)
    setRunning(true)
    setDone(false)
    setRemaining(totalMs)
  }

  function stop() {
    clearInterval(intervalRef.current)
    setRunning(false)
    setStartedAt(null)
    setRemaining(null)
    setDone(false)
  }

  useEffect(() => {
    if (!running || startedAt === null) return
    intervalRef.current = setInterval(() => {
      const rem = Math.max(0, startedAt + totalMs - Date.now())
      setRemaining(rem)
      if (rem === 0) {
        clearInterval(intervalRef.current)
        setRunning(false)
        setDone(true)
        if (typeof Notification !== 'undefined' && Notification.permission === 'granted') {
          new Notification('Time to wake up! — SleepCycler', {
            body: `Your ${cycles} sleep cycle${cycles !== 1 ? 's' : ''} are complete. Rise and shine.`,
            icon: '/favicon-32.png',
          })
        }
      }
    }, 500)
    return () => clearInterval(intervalRef.current)
  }, [running, startedAt, totalMs, cycles])

  const preset = PRESETS.find(p => p.cycles === cycles)

  return (
    <>
      <Helmet>
        <title>Sleep Cycle Timer | SleepCycler</title>
        <meta name="description" content="Start a sleep cycle timer based on 90-minute cycles. Set it when you get into bed and wake up at the end of a complete cycle — not mid-cycle. Free." />
        <link rel="canonical" href="https://www.sleepcycler.com/sleep-cycle-timer" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleep Cycle Timer | SleepCycler" />
        <meta property="og:description" content="Start a sleep cycle timer based on 90-minute cycles. Wake up at the end of a cycle, not mid-cycle." />
        <meta property="og:url" content="https://www.sleepcycler.com/sleep-cycle-timer" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Cycle Timer | SleepCycler" />
        <meta name="twitter:description" content="Start a sleep cycle timer based on 90-minute cycles. Wake up at the end of a cycle, not mid-cycle." />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What is a sleep cycle timer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A sleep cycle timer counts down from the moment you get into bed, waking you at the end of a complete 90-minute sleep cycle. Waking at the end of a cycle rather than mid-cycle prevents the groggy, dragged-out feeling called sleep inertia.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long is a sleep cycle?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'One sleep cycle lasts approximately 90 minutes and includes light sleep, deep sleep (slow-wave sleep), and REM sleep. Most adults complete 5 cycles per night for 7.5 hours of total sleep.',
              },
            },
            {
              '@type': 'Question',
              name: 'How many sleep cycles should I set the timer for?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Most adults need 5 complete cycles (7.5 hours). Teenagers need 6 cycles (9 hours). Setting for fewer than 4 cycles is only recommended when you have no choice — consistency matters more than any single night.',
              },
            },
          ],
        })}</script>
      </Helmet>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
          <div>
            {/* Hero */}
            <section className="mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sleep-accent-dim border border-sleep-accent/15 mb-6">
                <div className="w-1.5 h-1.5 rounded-full bg-sleep-accent" />
                <span className="text-[10px] font-bold text-sleep-accent uppercase tracking-widest">Sleep cycle timer</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-[1.15] mb-4">
                Sleep Cycle Timer
              </h1>
              <p className="text-base text-sleep-muted max-w-lg leading-relaxed">
                Start when you get into bed. The timer counts down in 90-minute cycles and wakes you at the end of a complete cycle — not mid-cycle. That's the difference between waking up alert and waking up groggy.
              </p>
            </section>

            {/* Timer widget */}
            <section className="mb-10">
              <div className="rounded-2xl bg-sleep-card border border-sleep-border p-6 sm:p-8">
                {/* Cycle picker */}
                {!running && !done && (
                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-3">How many cycles?</p>
                    <div className="grid grid-cols-4 gap-2">
                      {PRESETS.map(p => (
                        <button
                          key={p.cycles}
                          type="button"
                          onClick={() => setCycles(p.cycles)}
                          className={`py-3 rounded-xl text-center transition-all ${
                            cycles === p.cycles
                              ? 'bg-sleep-accent-dim border border-sleep-accent/20 text-sleep-accent'
                              : 'bg-sleep-surface border border-sleep-border text-sleep-muted hover:border-sleep-faint/20'
                          }`}
                        >
                          <div className="text-sm font-bold">{p.hours}</div>
                          <div className="text-[10px] opacity-60 mt-0.5">{p.cycles} cycles</div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Wake time preview / countdown */}
                <div className="text-center mb-6">
                  {done ? (
                    <>
                      <div className="text-5xl font-mono font-bold text-sleep-accent mb-2">Wake up!</div>
                      <p className="text-sm text-sleep-muted">{preset?.hours} across {cycles} sleep cycles complete.</p>
                    </>
                  ) : running ? (
                    <>
                      <div className="text-5xl font-mono font-bold text-sleep-text mb-2 tabular-nums">
                        {remaining !== null ? formatCountdown(remaining) : '—'}
                      </div>
                      <p className="text-sm text-sleep-muted">
                        Wake up at <span className="text-sleep-accent font-medium">{wakeFormatted}</span> &middot; {preset?.hours} &middot; {cycles} cycles
                      </p>
                    </>
                  ) : (
                    <>
                      <div className="text-4xl font-mono font-bold text-sleep-text mb-2">{wakeFormatted}</div>
                      <p className="text-sm text-sleep-muted">
                        Your wake time if you start now &middot; {preset?.hours} &middot; {cycles} cycles
                      </p>
                    </>
                  )}
                </div>

                {/* Start / Stop */}
                {done ? (
                  <button
                    type="button"
                    onClick={stop}
                    className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wide bg-sleep-accent text-sleep-bg hover:bg-sleep-accent/90 active:scale-[0.99] transition-all"
                  >
                    Reset timer
                  </button>
                ) : running ? (
                  <button
                    type="button"
                    onClick={stop}
                    className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wide bg-sleep-surface border border-sleep-border text-sleep-muted hover:text-sleep-text transition-all"
                  >
                    Cancel timer
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={start}
                    className="w-full py-3.5 rounded-xl text-sm font-bold tracking-wide bg-sleep-accent text-sleep-bg hover:bg-sleep-accent/90 active:scale-[0.99] transition-all"
                  >
                    Start sleep timer
                  </button>
                )}

                {running && (
                  <p className="mt-3 text-xs text-sleep-faint text-center">
                    Keep this tab open for a browser notification at wake time.
                  </p>
                )}
              </div>
            </section>

            {/* Explainer */}
            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-4">How does a sleep cycle timer work?</h2>
              <div className="space-y-3 text-sm text-sleep-muted leading-relaxed">
                <p>
                  Your brain moves through a repeating sequence of sleep stages roughly every 90 minutes. Each cycle includes light sleep, slow-wave deep sleep, and REM. When your alarm fires mid-cycle — interrupting deep sleep — you wake with sleep inertia: the fog and disorientation that can last 30 minutes or more.
                </p>
                <p>
                  A sleep cycle timer counts down from the moment you get into bed (including the average 15 minutes it takes to fall asleep) so that your alarm fires at the end of a complete cycle. The result is a noticeably cleaner wake-up.
                </p>
                <p>
                  Five cycles (7.5 hours) is the sweet spot for most adults. Six cycles (9 hours) is ideal for teenagers and people recovering from sleep debt. Fewer than four is survivable but shouldn't be your default.
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
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Cycle reference</h3>
              <div className="space-y-2.5">
                {PRESETS.map(p => (
                  <div key={p.cycles} className="flex justify-between text-sm">
                    <span className="text-sleep-muted">{p.cycles} cycles</span>
                    <span className={`font-mono font-medium ${p.cycles === 5 ? 'text-sleep-accent' : 'text-sleep-text'}`}>{p.hours}</span>
                  </div>
                ))}
              </div>
              <p className="mt-3 text-xs text-sleep-faint">Includes 15 min to fall asleep.</p>
            </div>

            <div className="rounded-2xl bg-sleep-card border border-sleep-border p-5">
              <h3 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Related tools</h3>
              <div className="space-y-2">
                <Link to="/" className="block text-sm text-sleep-accent hover:underline">Bedtime calculator &rarr;</Link>
                <Link to="/sleep-debt-calculator" className="block text-sm text-sleep-accent hover:underline">Sleep debt calculator &rarr;</Link>
                <Link to="/shift-worker-sleep-calculator" className="block text-sm text-sleep-accent hover:underline">Shift worker calculator &rarr;</Link>
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
