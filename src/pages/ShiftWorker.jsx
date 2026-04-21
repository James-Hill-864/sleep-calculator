import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Calculator from '../components/Calculator'

export default function ShiftWorker() {
  return (
    <>
      <Helmet>
        <title>Sleep Calculator for Shift Workers — SleepCycler</title>
        <meta name="description" content="Sleep calculator for shift workers, nurses, and early risers. Find the best bedtime for 4 AM, 5 AM, or any non-standard wake-up." />
        <link rel="canonical" href="https://www.sleepcycler.com/shift-worker-sleep-calculator" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Sleep Calculator for Shift Workers" />
        <meta property="og:description" content="Sleep calculator for shift workers, nurses, and early risers on non-standard schedules. Find the best bedtime for any wake-up time." />
        <meta property="og:url" content="https://www.sleepcycler.com/shift-worker-sleep-calculator" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Calculator for Shift Workers" />
        <meta name="twitter:description" content="Sleep calculator for shift workers, nurses, and early risers on non-standard schedules." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"Sleep Calculator for Shift Workers: How to Get Quality Rest on Any Schedule","description":"Sleep calculator for shift workers, nurses, and early risers on non-standard schedules.","url":"https://www.sleepcycler.com/shift-worker-sleep-calculator","publisher":{"@type":"Organization","name":"SleepCycler","url":"https://www.sleepcycler.com"}})}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <header className="mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sleep-accent-dim border border-sleep-accent/15 mb-6">
              <span className="text-[10px] font-bold text-sleep-accent uppercase tracking-widest">Shift Work Edition</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
              Sleep Calculator for Shift Workers: How to Get Quality Rest on Any Schedule
            </h1>
            <p className="text-base text-sleep-muted leading-relaxed">
              Standard sleep advice assumes a 10 PM bedtime and a 6 AM alarm. If your shift starts at 5 AM, ends at midnight, or rotates every two weeks, that advice is useless. This calculator works with your actual schedule.
            </p>
          </header>

          {/* Calculator at the top */}
          <section className="mb-12">
            <Calculator />
          </section>

          <div className="space-y-10 text-sm sm:text-base text-sleep-muted leading-[1.8]">

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Why Standard Sleep Advice Fails Shift Workers</h2>
              <p>
                Most sleep guidance is built around the assumption that you sleep when it&apos;s dark and work when it&apos;s light. Shift workers don&apos;t have that luxury. Nurses finishing a 7 PM–7 AM rotation need to sleep through broad daylight. Warehouse workers clocking in at 4 AM need to be unconscious by 7 PM while the sun is still up and the neighborhood is still active.
              </p>
              <p className="mt-3">
                The core challenge is circadian disruption. Your suprachiasmatic nucleus — a cluster of about 20,000 neurons behind your eyes — uses light exposure to set your internal clock. When your work schedule conflicts with the light-dark cycle, your brain receives contradictory signals: your alarm says wake up, but your circadian clock says it&apos;s the middle of the night. The result is fragmented sleep, shorter deep sleep phases, and chronic fatigue that weekends can&apos;t fix.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Sleep Debt Is Real and It Compounds</h2>
              <p>
                Sleep debt isn&apos;t a metaphor. Every hour of sleep you lose below your biological need accumulates as a measurable cognitive deficit. Research from the University of Pennsylvania&apos;s sleep lab found that people restricted to six hours per night for two weeks performed as poorly on reaction time and attention tests as people who had been fully deprived of sleep for 48 hours — and they didn&apos;t realize how impaired they were.
              </p>
              <p className="mt-3">
                For shift workers, this compounds fast. A nurse losing one cycle per shift (90 minutes) over five consecutive shifts accumulates 7.5 hours of sleep debt in a single work week. That&apos;s an entire night of lost sleep, manifesting as slower response times, impaired judgment, and increased error rates — precisely the conditions where those faculties matter most.
              </p>
              <p className="mt-3">
                The calculator above can&apos;t eliminate sleep debt, but it minimizes waste. By aligning your limited sleep window with complete 90-minute cycles, you extract maximum restorative value from every hour you get. For guidance on how many cycles you actually need, see our <Link to="/blog/how-many-sleep-cycles-do-you-need" className="text-sleep-accent hover:underline">cycle count guide by age</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">How to Use This Calculator for Non-Standard Hours</h2>

              <div className="space-y-4 mt-4">
                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-text mb-2">Early Morning Shifts (4 AM–5 AM wake-up)</h3>
                  <p className="text-sm text-sleep-muted leading-relaxed">
                    Select &ldquo;I want to wake up at&rdquo; and enter your alarm time. For a 4:00 AM wake-up, the calculator recommends bedtimes of 6:45 PM (6 cycles, 9 hours), 8:15 PM (5 cycles, 7.5 hours), or 9:45 PM (4 cycles, 6 hours). Five cycles at 8:15 PM is the target for most adults — yes, that means being in bed before 8:30 PM. Adjust your evening routine accordingly: eat dinner early, dim the lights by 7 PM, and treat 8:00 PM as your new &ldquo;late night.&rdquo;
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-text mb-2">Night Shifts (sleeping during the day)</h3>
                  <p className="text-sm text-sleep-muted leading-relaxed">
                    Select &ldquo;I&apos;m going to bed at&rdquo; and enter the time you expect to be in bed after your shift. If you get home at 7 AM and need 20 minutes to wind down, enter 7:15 AM. The calculator gives you wake times at 11:45 AM (3 cycles), 1:15 PM (4 cycles), and 2:45 PM (5 cycles). Set an alarm for one of these times rather than sleeping until you naturally wake — waking at a cycle boundary prevents the deep grogginess that makes the rest of your day feel wasted.
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-text mb-2">Rotating Schedules</h3>
                  <p className="text-sm text-sleep-muted leading-relaxed">
                    When your schedule rotates, recalculate on the first day of each new rotation. Shift your bedtime gradually — 30 minutes per day — rather than jumping four hours overnight. A clockwise rotation (days to evenings to nights) is easier on your circadian rhythm than counterclockwise because it&apos;s easier to stay up later than to force yourself to sleep earlier. If your employer offers rotation direction choices, always choose clockwise.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Environment Matters More When You Sleep Against the Clock</h2>
              <p>
                Sleeping during the day means fighting light, heat, and noise that nighttime sleepers don&apos;t deal with. Three non-negotiable investments for shift workers:
              </p>
              <ul className="mt-3 space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sleep-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-sleep-text">Blackout curtains.</strong> Not &ldquo;room-darkening&rdquo; — true blackout. Even small amounts of ambient light suppress melatonin and reduce time spent in deep sleep. Tape the edges if light leaks around the curtain rod.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sleep-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-sleep-text">White noise machine.</strong> Daytime ambient noise — traffic, neighbors, delivery trucks — causes micro-arousals that fragment your cycles. A consistent white noise floor masks variable sounds without itself being disruptive.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sleep-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-sleep-text">Cool room temperature.</strong> Daytime rooms are warmer than nighttime rooms. Your body still needs to drop 1°C to initiate sleep. Set the AC to 65–68°F or use a cooling mattress pad.</span>
                </li>
              </ul>
            </section>
          </div>

          <div className="mt-10 space-y-4">
            <Link
              to="/sleep-tips"
              className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
            >
              <h3 className="text-sm font-bold text-sleep-text mb-1">7 ways to fall asleep faster</h3>
              <p className="text-xs text-sleep-muted">Especially useful when your body says &ldquo;it&apos;s 3 PM, why are we in bed?&rdquo; &rarr;</p>
            </Link>

            <Link
              to="/best-mattresses"
              className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
            >
              <h3 className="text-sm font-bold text-sleep-text mb-1">Best mattresses for temperature regulation</h3>
              <p className="text-xs text-sleep-muted">Critical for daytime sleep when your room runs warm &rarr;</p>
            </Link>

            <Link
              to="/"
              className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
            >
              <h3 className="text-sm font-bold text-sleep-text mb-1">Sleep Cycle Calculator</h3>
              <p className="text-xs text-sleep-muted">Find your ideal bedtime for any wake-up time &rarr;</p>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
