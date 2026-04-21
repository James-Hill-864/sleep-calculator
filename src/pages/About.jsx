import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function About() {
  return (
    <>
      <Helmet>
        <title>What Are Sleep Cycles and Why Do They Matter? — SleepCycler</title>
        <meta name="description" content="Sleep cycles explained: the 4 stages, why 90 minutes matters, and how waking mid-cycle ruins your morning. Science-backed guide." />
        <link rel="canonical" href="https://www.sleepcycler.com/about" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="What Are Sleep Cycles and Why Do They Matter?" />
        <meta property="og:description" content="Sleep cycles explained: the 4 stages, why 90 minutes matters, and how waking mid-cycle ruins your morning." />
        <meta property="og:url" content="https://www.sleepcycler.com/about" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="What Are Sleep Cycles and Why Do They Matter?" />
        <meta name="twitter:description" content="Sleep cycles explained: the 4 stages, why 90 minutes matters, and how waking mid-cycle ruins your morning." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Article","headline":"What Are Sleep Cycles and Why Do They Determine How You Feel","description":"Sleep cycles explained: the 4 stages, why 90 minutes matters, and how waking mid-cycle ruins your morning.","url":"https://www.sleepcycler.com/about","publisher":{"@type":"Organization","name":"SleepCycler","url":"https://www.sleepcycler.com"}})}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
              What Are Sleep Cycles and Why Do They Determine How You Feel
            </h1>
            <p className="text-base text-sleep-muted leading-relaxed">
              You slept eight hours and still feel terrible. Your partner slept six and bounced out of bed. The difference isn&apos;t genetics or willpower — it&apos;s timing. Specifically, it&apos;s where in your sleep cycle the alarm caught you.
            </p>
          </header>

          <div className="space-y-10 text-sm sm:text-base text-sleep-muted leading-[1.8]">

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Your Brain Runs on 90-Minute Loops</h2>
              <p>
                From the moment you fall asleep, your brain begins a repeating sequence that lasts roughly 90 minutes. Each sequence is one complete sleep cycle. In a typical night, you&apos;ll complete four to six of these cycles, depending on how long you sleep and how quickly you fall asleep.
              </p>
              <p className="mt-3">
                The 90-minute figure isn&apos;t arbitrary. It was first documented in the 1950s by sleep researchers Nathaniel Kleitman and Eugene Aserinsky at the University of Chicago, who discovered that eye movements during sleep followed a predictable rhythm. Decades of subsequent research using EEG monitoring have confirmed that the average cycle length falls between 80 and 110 minutes, with 90 minutes as the reliable midpoint for most adults.
              </p>
              <p className="mt-3">
                This is the foundation of every <Link to="/" className="text-sleep-accent hover:underline">sleep calculator</Link> — count backward or forward in 90-minute blocks, and you land at the transition point between cycles. That transition is when your brain is closest to wakefulness, and it&apos;s the moment your alarm should fire.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">The Four Stages Inside Every Cycle</h2>
              <p className="mb-4">
                Each 90-minute cycle moves through four distinct stages. The first three are collectively called NREM (non-rapid eye movement) sleep. The fourth is REM sleep, where dreaming occurs.
              </p>

              <div className="grid gap-4">
                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-1">Stage N1 — The Drift</h3>
                  <p className="text-sm text-sleep-muted">
                    This is the doorway between awake and asleep. It lasts one to seven minutes. Your muscles begin to relax, your heart rate slows, and your brain produces theta waves. You can be woken easily and might not even realize you were asleep. N1 makes up about 5% of total sleep time in healthy adults.
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-1">Stage N2 — Light Sleep</h3>
                  <p className="text-sm text-sleep-muted">
                    Your body temperature drops, eye movements stop, and your brain produces short bursts of electrical activity called sleep spindles. These spindles are believed to play a role in memory consolidation — transferring information from short-term to long-term memory. N2 is the longest stage, accounting for roughly 45–55% of your total sleep. You spend more time in N2 during the later cycles of the night.
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-1">Stage N3 — Deep Sleep</h3>
                  <p className="text-sm text-sleep-muted">
                    This is the stage your body needs most. Blood pressure drops, blood flow to muscles increases, tissue repair accelerates, and growth hormone is released. Your brain produces slow delta waves, and you are extremely difficult to wake. If an alarm drags you out of N3, you experience sleep inertia — that heavy, disoriented, almost drunk feeling that can persist for 30 minutes or longer. N3 dominates the first two cycles of the night and diminishes in later ones.
                  </p>
                </div>

                <div className="rounded-xl bg-sleep-card border border-sleep-border p-5">
                  <h3 className="text-sm font-bold text-sleep-accent mb-1">Stage REM — Dream Sleep</h3>
                  <p className="text-sm text-sleep-muted">
                    Your eyes move rapidly behind closed lids. Brain activity surges to levels similar to wakefulness. Your body enters a state of temporary paralysis (atonia) to prevent you from acting out dreams. REM is critical for emotional regulation, creativity, and procedural memory. REM periods start short — about 10 minutes in the first cycle — and grow longer as the night progresses, reaching 30–60 minutes in the final cycle. This is why cutting sleep short disproportionately reduces REM time.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">What Happens When You Wake Mid-Cycle</h2>
              <p>
                Your alarm doesn&apos;t know what stage you&apos;re in. If it fires during N3 deep sleep, your brain has to abruptly reverse the neurochemical state it built over the previous hour. Adenosine levels are high, cortisol hasn&apos;t ramped up yet, and your prefrontal cortex — responsible for decision-making and alertness — is the last region to come back online.
              </p>
              <p className="mt-3">
                The result is sleep inertia: impaired cognitive performance, reduced reaction time, and a subjective feeling of exhaustion that has nothing to do with how many hours you slept. Studies published in the Journal of the American Medical Association have shown that the cognitive impairment from sleep inertia can rival or exceed that seen with blood alcohol levels at the legal driving limit, lasting up to two hours in severe cases.
              </p>
              <p className="mt-3">
                Conversely, waking at the natural transition between cycles — when your brain is already in or near N1 — produces almost no inertia. You feel alert within minutes. This is the entire principle behind a <Link to="/" className="text-sleep-accent hover:underline">sleep cycle calculator</Link>: align your alarm with the end of a cycle, not the middle of one.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">How Many Cycles You Need</h2>
              <p>
                The National Sleep Foundation and the American Academy of Sleep Medicine provide hour-based recommendations, but those translate directly into cycle counts:
              </p>

              <div className="mt-4 rounded-xl bg-sleep-card border border-sleep-border overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-sleep-border">
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Age Group</th>
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Recommended Hours</th>
                      <th className="text-left py-3 px-5 text-sleep-faint font-bold text-xs uppercase tracking-wider">Cycles</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">Teenagers (14–17)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">8–10 hours</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">6 cycles</td>
                    </tr>
                    <tr className="border-b border-sleep-border/50">
                      <td className="py-3 px-5 text-sleep-text">Adults (18–64)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">7–9 hours</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">5 cycles</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-5 text-sleep-text">Older Adults (65+)</td>
                      <td className="py-3 px-5 text-sleep-muted font-mono">7–8 hours</td>
                      <td className="py-3 px-5 text-sleep-accent font-mono">5 cycles</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-4">
                These are targets, not minimums. Four complete cycles (6 hours) is survivable but not sustainable. Three cycles (4.5 hours) produces measurable cognitive impairment within 48 hours. Six cycles (9 hours) is ideal for teenagers and for adults recovering from sleep debt. For a deeper breakdown of what each cycle count provides, see our <Link to="/blog/how-many-sleep-cycles-do-you-need" className="text-sleep-accent hover:underline">guide to sleep cycles by age</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">The 15-Minute Fall-Asleep Buffer</h2>
              <p>
                Sleep onset latency — the time between lying down and actually falling asleep — averages 10 to 20 minutes in healthy adults, according to data from the Sleep Research Society. Our calculator uses 15 minutes as the default. This means if you need to wake at 6:30 AM and want 5 complete cycles (7.5 hours of sleep), the calculator recommends a bedtime of 10:45 PM — that&apos;s 7 hours 45 minutes before your alarm, accounting for the time it takes to drift off.
              </p>
              <p className="mt-3">
                If you consistently fall asleep in under 5 minutes, that&apos;s actually a sign of sleep deprivation, not efficiency. A healthy sleep onset takes 10–15 minutes. If yours is consistently over 20 minutes, see our <Link to="/sleep-tips" className="text-sleep-accent hover:underline">guide to falling asleep faster</Link>.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-sleep-text mb-3">Cycles Change Through the Night</h2>
              <p>
                Not all cycles are equal. Early cycles are dominated by deep N3 sleep — your body prioritizes physical repair first. As the night progresses, N3 shrinks and REM expands. By the fifth or sixth cycle, REM can last 45–60 minutes, while N3 may be nearly absent.
              </p>
              <p className="mt-3">
                This is why the last cycle of the night matters for mood and cognition. People who consistently cut their sleep short by one cycle lose a disproportionate amount of REM, which accumulates as emotional instability, difficulty concentrating, and reduced creative problem-solving — even if they feel physically rested.
              </p>
            </section>

            <div className="rounded-2xl bg-sleep-surface border border-sleep-border p-6 mt-8">
              <h2 className="text-sm font-bold text-sleep-text mb-2">Calculate your optimal sleep times</h2>
              <p className="text-sm text-sleep-muted mb-4">
                Enter your wake-up time and get a list of bedtimes aligned to complete sleep cycles — no more waking up mid-N3.
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
