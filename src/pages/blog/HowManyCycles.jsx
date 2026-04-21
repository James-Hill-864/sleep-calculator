import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Calculator from '../../components/Calculator'

export default function HowManyCycles() {
  return (
    <>
      <Helmet>
        <title>How Many Sleep Cycles Do You Need? (By Age) — SleepCycler</title>
        <meta name="description" content="Adults need 5 sleep cycles (7.5 hrs), teens need 6 (9 hrs), seniors need 5. Here's what happens when you miss one." />
        <link rel="canonical" href="https://www.sleepcycler.com/blog/how-many-sleep-cycles-do-you-need" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How Many Sleep Cycles Do You Need? (By Age)" />
        <meta property="og:description" content="Adults need 5 sleep cycles (7.5 hrs), teens need 6 (9 hrs). Here's what happens when you miss one." />
        <meta property="og:url" content="https://www.sleepcycler.com/blog/how-many-sleep-cycles-do-you-need" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Many Sleep Cycles Do You Need? (By Age)" />
        <meta name="twitter:description" content="Adults need 5 sleep cycles (7.5 hrs), teens need 6 (9 hrs). Here's what happens when you miss one." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"How Many Sleep Cycles Do You Need? (By Age and Sleep Goal)","description":"Adults need 5 sleep cycles (7.5 hrs), teens need 6 (9 hrs). Here is what happens when you miss one.","url":"https://www.sleepcycler.com/blog/how-many-sleep-cycles-do-you-need","publisher":{"@type":"Organization","name":"SleepCycler","url":"https://www.sleepcycler.com"}})}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <header className="mb-8">
            <Link to="/blog" className="text-xs font-bold text-sleep-accent hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
              How Many Sleep Cycles Do You Need? (By Age and Sleep Goal)
            </h1>
          </header>

          {/* Calculator */}
          <section className="mb-10 rounded-2xl bg-sleep-surface border border-sleep-border p-6">
            <p className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-4">Calculate your cycle-aligned bedtime</p>
            <Calculator />
          </section>

          <div className="space-y-8 text-sm sm:text-base text-sleep-muted leading-[1.8]">

            <section>
              <p>
                The short answer: <strong className="text-sleep-text">most adults need 5 complete sleep cycles per night</strong>, which equals 7.5 hours of actual sleep. Teenagers need 6 cycles (9 hours). Older adults need 5 cycles but often get less due to changes in sleep architecture. Each cycle lasts approximately 90 minutes and moves through four stages — from light drowsiness through deep restorative sleep and into REM dreaming.
              </p>
              <p className="mt-3">
                But the number of cycles matters less than whether those cycles are <em>complete</em>. Five full cycles will leave you more rested than six interrupted ones. The goal is to match your sleep duration to a whole number of cycles so your alarm fires during the brief transition between cycles, not in the middle of one.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Recommended Cycles by Age</h2>

              <div className="rounded-xl bg-sleep-card border border-sleep-border overflow-hidden my-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sleep-border">
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Age Group</th>
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Hours</th>
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Cycles</th>
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">School-age (6–13)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">9–11 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">6–7</td>
                      <td className="py-3 px-5 text-sleep-faint text-xs">Brain development requires extended REM</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">Teenagers (14–17)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">8–10 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">6</td>
                      <td className="py-3 px-5 text-sleep-faint text-xs">Circadian shift makes early mornings harder</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50 bg-sleep-accent-dim">
                      <td className="py-3 px-5 text-sleep-accent font-bold">Adults (18–64)</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">7–9 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono font-bold">5</td>
                      <td className="py-3 px-5 text-sleep-accent text-xs font-bold">7.5 hours = sweet spot</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-sleep-text">Older Adults (65+)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">7–8 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">5</td>
                      <td className="py-3 px-5 text-sleep-faint text-xs">Less deep sleep per cycle, lighter overall</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                These recommendations come from the National Sleep Foundation and the American Academy of Sleep Medicine. The hour ranges translate directly into cycle counts because each cycle is approximately 90 minutes. Individual variation exists — some people genuinely function well on 4 cycles, others need 6 — but these outliers are rarer than people assume. Most adults who believe they&apos;re &ldquo;fine on 5 hours&rdquo; are carrying sleep debt they&apos;ve normalized.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">What Actually Happens With 4 Cycles vs. 5 vs. 6</h2>

              <div className="space-y-4 mt-4">
                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-2">6 Cycles (9 hours) — Full Recovery</h3>
                  <p className="text-sm text-sleep-muted leading-relaxed">
                    Six cycles is the biological ideal for teenagers and for adults recovering from accumulated sleep debt. You get the maximum amount of REM sleep, which clusters in the later cycles. The sixth cycle can be 50–60% REM, making it disproportionately valuable for emotional regulation, learning consolidation, and creative problem-solving. If you&apos;ve had a week of short nights, one or two nights at six cycles can measurably restore cognitive performance — though it won&apos;t fully erase chronic debt.
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card-active border border-sleep-border-active p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-2">5 Cycles (7.5 hours) — Optimal for Most Adults</h3>
                  <p className="text-sm text-sleep-muted leading-relaxed">
                    Five cycles is the target for sustainable, daily adult sleep. You complete enough deep N3 sleep (concentrated in cycles 1–3) for physical repair and enough REM (concentrated in cycles 4–5) for cognitive maintenance. Research from the University of California, San Diego found that adults sleeping 7 hours per night had the lowest all-cause mortality risk — and 7.5 hours, which aligns perfectly with 5 cycles, falls within that optimal window. Five cycles is also practical: it requires a 7.5-hour sleep window plus 15 minutes to fall asleep, leaving over 16 hours for waking life.
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-2">4 Cycles (6 hours) — Functional But Not Sustainable</h3>
                  <p className="text-sm text-sleep-muted leading-relaxed">
                    Four cycles provides enough deep sleep for basic physical recovery but significantly shortchanges REM. The fifth cycle — the one you&apos;re skipping — would have been 35–45% REM. After three to four consecutive nights at four cycles, measurable deficits appear in attention, working memory, and emotional reactivity. You may feel physically fine because your N3 deep sleep needs were met, but cognitive testing reveals impairment equivalent to a blood alcohol level of 0.05% — below the legal driving limit but enough to degrade complex decision-making.
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-2">3 Cycles (4.5 hours) — Emergency Only</h3>
                  <p className="text-sm text-sleep-muted leading-relaxed">
                    Three cycles provides minimal deep sleep and almost no REM. Your body prioritizes N3 in early cycles, so you still get physical recovery, but cognitive function degrades rapidly. The landmark chronic sleep restriction study from the University of Pennsylvania found that people limited to four hours per night (roughly 2.5–3 cycles) for two weeks performed as poorly on sustained attention tasks as people who had been completely deprived of sleep for 48 straight hours. Three cycles should be treated as emergency-only sleep, not as a lifestyle.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Sleep Debt Is Real and It Compounds</h2>
              <p>
                Every cycle you lose below your biological need accumulates as sleep debt. This isn&apos;t a metaphor — it&apos;s a measurable physiological deficit. Missing one cycle (90 minutes) in a single night is recoverable with a normal night&apos;s sleep the following day. Missing one cycle per night for a week creates 10.5 hours of sleep debt, which requires multiple recovery nights to resolve.
              </p>
              <p className="mt-3">
                The insidious part of sleep debt is that your subjective sense of sleepiness adapts faster than your actual cognitive performance recovers. After four or five nights of restricted sleep, you stop <em>feeling</em> tired even though objective testing shows continued impairment. This is why so many people genuinely believe they function well on five or six hours — they&apos;ve lost the internal reference point for what full alertness actually feels like.
              </p>
              <p className="mt-3">
                The only way to know for certain is to spend two weeks sleeping 5 full cycles per night (7.5 hours) with consistent timing and then honestly assess whether your focus, mood, and energy improved. Most people who run this experiment are surprised by the difference.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Why Cycle Count Matters More Than Hour Count</h2>
              <p>
                The standard advice is &ldquo;get 7–9 hours.&rdquo; That range spans an entire cycle — 7 hours is 4 cycles plus 40 minutes of a fifth, while 7.5 hours is exactly 5 complete cycles. The 30-minute difference in total time produces a dramatically different wake-up experience because one ends cleanly between cycles and the other ends mid-cycle in N2 or early N3.
              </p>
              <p className="mt-3">
                This is why the most useful way to think about sleep is in cycles, not hours. Saying &ldquo;I need 5 cycles&rdquo; is more precise than saying &ldquo;I need 7–8 hours,&rdquo; because it forces you to align your bedtime and alarm to 90-minute boundaries. The calculator above does this math for you — enter your wake time, and it gives you bedtimes that correspond to complete cycle counts.
              </p>
              <p className="mt-3">
                For a deeper look at what happens inside each cycle, see our <Link to="/about" className="text-sleep-accent hover:underline">guide to sleep cycle stages</Link>. For practical advice on falling asleep within the 15-minute buffer, check our <Link to="/sleep-tips" className="text-sleep-accent hover:underline">7 evidence-based sleep tips</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">How to Find Your Personal Cycle Count</h2>
              <p>
                The 90-minute cycle length is an average. Individual cycles range from 80 to 110 minutes, and your personal average is relatively stable but may differ from the population mean. Two ways to dial this in:
              </p>
              <ul className="mt-3 space-y-2 list-none">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sleep-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-sleep-text">The free-wake test.</strong> On a day with no alarm, go to bed at your target cycle-aligned time and let yourself wake naturally. If you consistently wake 10–15 minutes before or after the predicted time, your personal cycle is slightly shorter or longer than 90 minutes. Adjust accordingly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sleep-accent mt-2.5 flex-shrink-0" />
                  <span><strong className="text-sleep-text">Wearable tracking.</strong> Devices that measure heart rate variability and movement can estimate cycle boundaries. They&apos;re not laboratory-grade accurate, but over 2–3 weeks of data they reveal whether your cycles run closer to 80 or 100 minutes. Use that average to refine the calculator&apos;s 90-minute default.</span>
                </li>
              </ul>
              <p className="mt-3">
                For most people, the 90-minute default works well enough that the difference is marginal — within a 5–10 minute window. The bigger gains come from consistently hitting 5 complete cycles rather than from fine-tuning the cycle length.
              </p>
            </section>

            {/* Related */}
            <div className="space-y-4 mt-4">
              <Link to="/blog/best-time-to-wake-up-for-deep-sleep" className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors">
                <h3 className="text-sm font-bold text-sleep-text mb-1">The best time to wake up for deep sleep</h3>
                <p className="text-xs text-sleep-muted">Why it&apos;s not about hours — it&apos;s about where in the cycle you wake &rarr;</p>
              </Link>

              <Link to="/blog/sleep-deprivation-effects-one-night" className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors">
                <h3 className="text-sm font-bold text-sleep-text mb-1">What one bad night does to your body</h3>
                <p className="text-xs text-sleep-muted">The cognitive, physical, and emotional effects — backed by research &rarr;</p>
              </Link>
            </div>

            {/* CTA */}
            <div className="rounded-2xl bg-sleep-surface border border-sleep-border p-6 mt-4">
              <h2 className="text-sm font-bold text-sleep-text mb-2">Calculate your cycle-aligned bedtime</h2>
              <p className="text-sm text-sleep-muted mb-4">
                Enter your wake-up time and see exactly when to go to bed for 3, 4, 5, or 6 complete cycles.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold"
              >
                Open Sleep Calculator &rarr;
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
