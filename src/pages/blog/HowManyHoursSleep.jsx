import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Calculator from '../../components/Calculator'
import AmazonProductCard from '../../components/AmazonProductCard'
import MedicalDisclaimer from '../../components/MedicalDisclaimer'

export default function HowManyHoursSleep() {
  return (
    <>
      <Helmet>
        <title>How Many Hours of Sleep Do You Need for Good Health? — SleepCycler</title>
        <meta name="description" content="Adults need 7–9 hours, teens need 8–10, seniors need 7–8. But the research shows hours matter less than complete sleep cycles. Here's what the science says." />
        <link rel="canonical" href="https://www.sleepcycler.com/blog/how-many-hours-of-sleep-do-you-need" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="How Many Hours of Sleep Do You Need for Good Health?" />
        <meta property="og:description" content="Adults need 7–9 hours, teens need 8–10, seniors need 7–8. But hours alone are the wrong metric. Here's what actually matters." />
        <meta property="og:url" content="https://www.sleepcycler.com/blog/how-many-hours-of-sleep-do-you-need" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Many Hours of Sleep Do You Need for Good Health?" />
        <meta name="twitter:description" content="Adults need 7–9 hours, teens need 8–10, seniors need 7–8. But hours alone are the wrong metric." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How Many Hours of Sleep Do You Need for Good Health?",
          "description": "Adults need 7–9 hours, teens need 8–10, seniors need 7–8. But the research shows hours matter less than complete sleep cycles.",
          "url": "https://www.sleepcycler.com/blog/how-many-hours-of-sleep-do-you-need",
          "datePublished": "2026-05-04",
          "dateModified": "2026-05-04",
          "author": { "@type": "Organization", "name": "SleepCycler", "url": "https://www.sleepcycler.com" },
          "publisher": { "@type": "Organization", "name": "SleepCycler", "url": "https://www.sleepcycler.com" }
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "How many hours of sleep do adults need?",
              "acceptedAnswer": { "@type": "Answer", "text": "Adults aged 18–64 need 7–9 hours of sleep per night according to the American Academy of Sleep Medicine. The optimal target for most adults is 7.5 hours — exactly 5 complete 90-minute sleep cycles." }
            },
            {
              "@type": "Question",
              "name": "How many hours of sleep do teenagers need?",
              "acceptedAnswer": { "@type": "Answer", "text": "Teenagers aged 14–17 need 8–10 hours of sleep per night. Their circadian rhythms are biologically shifted later, making early school start times particularly damaging to sleep quality." }
            },
            {
              "@type": "Question",
              "name": "Is 6 hours of sleep enough?",
              "acceptedAnswer": { "@type": "Answer", "text": "6 hours is below the recommended minimum for most adults. Research from the University of Pennsylvania shows that people sleeping 6 hours per night for two weeks perform as poorly as those deprived of sleep for 48 hours — and don't realize how impaired they are." }
            },
            {
              "@type": "Question",
              "name": "Can you sleep too much?",
              "acceptedAnswer": { "@type": "Answer", "text": "Consistently sleeping more than 9 hours is associated with increased mortality risk in large epidemiological studies, though this is likely a marker of underlying illness rather than a cause. Healthy adults rarely sleep more than 9 hours without reason." }
            }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sleepcycler.com/" },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.sleepcycler.com/blog" },
            { "@type": "ListItem", "position": 3, "name": "How Many Hours of Sleep Do You Need?", "item": "https://www.sleepcycler.com/blog/how-many-hours-of-sleep-do-you-need" }
          ]
        })}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <header className="mb-8">
            <Link to="/blog" className="text-xs font-bold text-sleep-accent hover:underline mb-4 inline-block">&larr; Back to Blog</Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
              How Many Hours of Sleep Do You Need for Good Health?
            </h1>
          </header>

          <MedicalDisclaimer />

          {/* Calculator */}
          <section className="mb-10 rounded-2xl bg-sleep-surface border border-sleep-border p-6">
            <p className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-4">Find your ideal bedtime</p>
            <Calculator />
          </section>

          <div className="space-y-8 text-sm sm:text-base text-sleep-muted leading-[1.8]">

            <section>
              <p>
                The short answer: <strong className="text-sleep-text">adults need 7–9 hours</strong>, teenagers need 8–10, and older adults need 7–8. But the question of how many hours you need is less useful than most people think — because the same number of hours can feel completely different depending on where in your sleep cycle you wake up.
              </p>
              <p className="mt-3">
                Seven and a half hours ending at a cycle boundary will leave you sharper than eight hours interrupted mid-cycle. This is the core insight that population-level hour recommendations miss: sleep quality is determined by <em>complete cycles</em>, not clock time alone.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Recommended Sleep Hours by Age</h2>
              <p className="mb-4">
                These ranges come from the American Academy of Sleep Medicine (AASM) and the Sleep Research Society, based on a consensus review of the health literature:
              </p>

              <div className="rounded-xl bg-sleep-card border border-sleep-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sleep-border">
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Age Group</th>
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Recommended</th>
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Cycles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">Infants (4–12 months)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">12–16 hrs</td>
                      <td className="py-3 px-5 text-sleep-faint text-xs">Includes naps</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">Toddlers (1–2 years)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">11–14 hrs</td>
                      <td className="py-3 px-5 text-sleep-faint text-xs">Includes naps</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">Preschool (3–5 years)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">10–13 hrs</td>
                      <td className="py-3 px-5 text-sleep-faint text-xs">May include nap</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">School age (6–12 years)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">9–12 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">6–8 cycles</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">Teenagers (13–18 years)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">8–10 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">5–6 cycles</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50 bg-sleep-accent-dim">
                      <td className="py-3 px-5 text-sleep-accent font-bold">Adults (18–64 years)</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">7–9 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono font-bold">5 cycles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-sleep-text">Older adults (65+)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">7–8 hrs</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">5 cycles</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                For most adults, the practical target is <strong className="text-sleep-text">7.5 hours</strong> — exactly 5 complete 90-minute sleep cycles. This sits comfortably within the recommended range, and because it lands at a cycle boundary, your alarm fires during the brief light-sleep transition rather than mid-deep-sleep. The difference in how you feel is measurable.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Why Hours Alone Are the Wrong Metric</h2>
              <p>
                Population sleep research uses hours because it&apos;s the only thing you can ask people to self-report. But individual sleep quality varies enormously within the same duration. Two people who both slept 8 hours can have very different outcomes depending on:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-sleep-text">When they woke in their cycle.</strong> Waking mid-N3 (deep sleep) causes sleep inertia lasting 15–60 minutes regardless of total sleep time.</li>
                <li><strong className="text-sleep-text">How many times they woke.</strong> Eight hours with four partial awakenings is not the same as eight hours of uninterrupted sleep.</li>
                <li><strong className="text-sleep-text">Room temperature.</strong> A room above 70°F can reduce N3 deep sleep by up to 20% — you sleep the hours but miss the most restorative stage.</li>
                <li><strong className="text-sleep-text">Alcohol consumption.</strong> Alcohol speeds sleep onset but fragments REM sleep in the second half of the night, degrading recovery even at full duration.</li>
              </ul>
              <p className="mt-3">
                The most useful reframe: instead of asking &ldquo;how many hours do I need?&rdquo; ask &ldquo;how many complete cycles do I need, and what time does that put my alarm?&rdquo; The calculator above answers both.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">What Happens When You Don&apos;t Get Enough</h2>
              <p>
                The landmark chronic restriction study from the University of Pennsylvania — led by Dr. David Dinges — tracked participants sleeping 6 hours per night for two weeks. By day 14, their cognitive performance matched that of people who had been awake for 48 consecutive hours. The critical finding: their subjective sleepiness scores had stabilized. They didn&apos;t <em>feel</em> impaired. They had lost the internal reference point for what &ldquo;rested&rdquo; actually feels like.
              </p>
              <p className="mt-3">
                The documented consequences of chronic short sleep (under 6 hours per night):
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li>Reaction time, attention, and working memory degrade progressively</li>
                <li>Insulin sensitivity decreases — consistent short sleep is an independent risk factor for type 2 diabetes</li>
                <li>Cortisol rises and testosterone falls, both measurably, within days</li>
                <li>Immune function weakens — a 2015 Carnegie Mellon study found people sleeping under 6 hours were 4.2x more likely to catch a cold when exposed to the virus</li>
                <li>Emotional reactivity increases and emotional regulation declines</li>
              </ul>

              <AmazonProductCard
                name="Hatch Restore 3 Sunrise Alarm Clock"
                href="https://amzn.to/4mnWmip"
                tag="Wake at the right time"
                why="Getting the right number of hours is only half the equation — waking at a cycle boundary is the other half. The Hatch simulates a 30-minute sunrise before your alarm, lifting you toward light sleep so your alarm fires at the surface of a cycle rather than dragging you out of N3. The single highest-leverage upgrade for people who are sleeping enough hours but still waking groggy."
              />
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Is 6 Hours of Sleep Enough?</h2>
              <p>
                For the vast majority of adults, no. A genuine short sleeper — someone biologically capable of thriving on 6 hours without accumulating cognitive deficit — is estimated at under 3% of the population. The mutation responsible (in the DEC2 gene) is extremely rare. If you believe you&apos;re a natural short sleeper, the evidence says you&apos;re almost certainly wrong: you&apos;ve adapted to feeling impaired and mistaken it for your baseline.
              </p>
              <p className="mt-3">
                Six hours is also not divisible into complete 90-minute cycles (6 hours = 4 cycles exactly, but only if you fall asleep within 0 minutes of hitting the pillow, which no one does). In practice, 6 hours of sleep time usually means 4 cycles plus an interrupted fifth — waking mid-cycle. The functional result is worse than 4 complete cycles at 6.25 hours.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Can You Sleep Too Much?</h2>
              <p>
                Large epidemiological studies consistently find a J-shaped relationship between sleep duration and mortality — elevated risk below 6 hours <em>and</em> above 9 hours. But the interpretation requires care: long sleep duration is largely a marker of underlying illness (depression, chronic pain, metabolic disease) rather than a cause of poor outcomes. Healthy adults rarely sleep over 9 hours without reason.
              </p>
              <p className="mt-3">
                If you regularly need more than 9 hours to feel rested, the more likely explanations are: untreated sleep apnea (which fragments cycles without fully waking you), significant sleep debt from chronic under-sleeping, or an underlying health condition. It&apos;s worth discussing with a doctor rather than treating it as a willpower problem.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">How to Find Your Actual Number</h2>
              <p>
                The most reliable way to find your personal sleep need is to take a one-week vacation from alarms. Go to bed when tired, wake naturally. Track the hours for days 3–7 (the first two days involve recovery sleep that inflates the number). The average of days 3–7 is close to your biological need.
              </p>
              <p className="mt-3">
                For most adults this lands between 7 and 8.5 hours. Once you know your number, use the calculator above to find the cycle-aligned bedtime that gets you there — and set an alarm that exits at a cycle boundary rather than in the middle of one.
              </p>
            </section>

            {/* Related */}
            <div className="space-y-4 mt-4">
              <Link to="/blog/how-many-sleep-cycles-do-you-need" className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors">
                <h3 className="text-sm font-bold text-sleep-text mb-1">How many sleep cycles do you need?</h3>
                <p className="text-xs text-sleep-muted">Cycles by age, goal, and what happens when you miss one &rarr;</p>
              </Link>

              <Link to="/sleep-debt-calculator" className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors">
                <h3 className="text-sm font-bold text-sleep-text mb-1">Sleep Debt Calculator</h3>
                <p className="text-xs text-sleep-muted">Find out how much sleep you owe your body &rarr;</p>
              </Link>

              <Link to="/blog/why-am-i-still-tired-after-8-hours-of-sleep" className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors">
                <h3 className="text-sm font-bold text-sleep-text mb-1">Why am I still tired after 8 hours?</h3>
                <p className="text-xs text-sleep-muted">When getting enough hours isn&apos;t enough &rarr;</p>
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
