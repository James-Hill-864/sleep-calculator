import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import AdUnit from '../components/AdUnit'

const TIPS = [
  {
    title: 'Lock in the same wake time — every single day',
    body: 'Your circadian rhythm anchors to your wake time, not your bedtime. Sleeping in on weekends shifts your internal clock by up to two hours, creating a phenomenon researchers call social jet lag. The result is that Monday and Tuesday feel like you flew across time zones. Pick a wake time, keep it within a 30-minute window seven days a week, and your body will start getting drowsy at the right time on its own.',
  },
  {
    title: 'Drop your room temperature to 65–68°F',
    body: 'Your core body temperature needs to fall by roughly 1°C to trigger sleep onset. A warm room fights this process. Sleep researchers at the University of South Australia found that thermoregulation is one of the strongest predictors of how quickly you fall asleep. Set your thermostat to 65–68°F (18–20°C). If that feels cold, use a breathable blanket rather than heating the room — the cool air on your face is part of the signal.',
    affiliate: { href: 'https://amzn.to/4mstkhp', label: 'Dreo Tower Fan for Bedroom (Amazon) →' },
  },
  {
    title: 'Cut all screens 45–60 minutes before bed',
    body: 'Blue light from phones and laptops suppresses melatonin production by up to 50%, according to research from Harvard Medical School. But the light is only half the problem — scrolling social media or reading email keeps your prefrontal cortex in problem-solving mode. Switch to a physical book, dim the overhead lights, and let your brain receive the neurochemical signal that the day is over.',
    affiliate: { href: 'https://amzn.to/4t1F5Ok', label: 'Top-rated Sleep Mask (Amazon) →' },
  },
  {
    title: 'Set a hard caffeine cutoff at 2 PM',
    body: 'Caffeine has a half-life of five to seven hours. A 3 PM coffee means roughly half that caffeine is still circulating at 9 PM. Even if you fall asleep on schedule, caffeine reduces time spent in deep N3 sleep by as much as 20%, according to research published in the Journal of Clinical Sleep Medicine. You sleep, but you don\'t recover. After 2 PM, switch to decaf, herbal tea, or water.',
  },
]

const TIPS_2 = [
  {
    title: 'Build a 20-minute wind-down routine',
    body: 'Sleep doesn\'t have an on switch — it has a ramp. A consistent pre-bed routine teaches your brain to begin the transition from wakefulness to sleep. The specific activities matter less than the consistency: dim the lights, read a few pages, do light stretching, write tomorrow\'s to-do list. The sequence becomes a Pavlovian cue. Within two weeks, your brain will begin producing melatonin as soon as the routine starts.',
  },
  {
    title: 'Exercise — but finish 3 hours before bed',
    body: 'Regular aerobic exercise increases time spent in deep sleep by up to 75 minutes per night, based on meta-analyses published in the journal Sleep Medicine Reviews. But exercise raises core body temperature and cortisol, both of which inhibit sleep onset. Morning or early afternoon workouts are ideal. If evening is your only option, stick to low-intensity stretching or yoga — nothing that raises your heart rate above 120 BPM.',
  },
  {
    title: 'Use your bed for sleep only',
    body: 'Stimulus control is one of the most effective cognitive behavioral interventions for insomnia. If your brain associates the bed with working, watching TV, or doomscrolling, it takes longer to shift into sleep mode when you finally want to. Work at a desk. Watch TV on the couch. The bed is for sleep. If you can\'t fall asleep within 20 minutes, get up and do something quiet in another room until you feel drowsy, then return.',
    affiliate: [
      { href: 'https://amzn.to/4dIURsS', label: 'Marpac Dohm White Noise Machine (Amazon) →' },
      { href: 'https://amzn.to/4e1Zbnd', label: 'LectroFan White Noise Machine (Amazon) →' },
    ],
  },
]

export default function SleepTips() {
  return (
    <>
      <Helmet>
        <title>How to Fall Asleep Faster — 7 Science-Backed Tips — SleepCycler</title>
        <meta name="description" content="Fall asleep faster tonight with 7 evidence-based sleep tips. Covers temperature, screens, caffeine, routines, and exercise timing." />
        <link rel="canonical" href="https://sleepcycler.com/sleep-tips" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What temperature should I sleep at?","acceptedAnswer":{"@type":"Answer","text":"The optimal sleep temperature is 65-68°F (18-20°C). Your core body temperature needs to drop by approximately 1°C to initiate sleep onset. A cool room supports this process."}},{"@type":"Question","name":"How long before bed should I stop using screens?","acceptedAnswer":{"@type":"Answer","text":"Stop using screens 45-60 minutes before bed. Blue light from phones and laptops suppresses melatonin production by up to 50%, delaying sleep onset."}},{"@type":"Question","name":"What time should I stop drinking caffeine?","acceptedAnswer":{"@type":"Answer","text":"Set a hard caffeine cutoff at 2 PM. Caffeine has a half-life of 5-7 hours, meaning a 3 PM coffee still has half its caffeine in your system at 9 PM, reducing deep sleep quality."}}]})}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <header className="mb-10">
            <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
              7 Science-Backed Ways to Fall Asleep Faster Tonight
            </h1>
            <p className="text-base text-sleep-muted leading-relaxed">
              Most sleep advice is vague — &ldquo;relax more,&rdquo; &ldquo;reduce stress.&rdquo; These seven strategies are specific, evidence-based, and actionable tonight. No supplements, no gadgets, no meditation apps.
            </p>
            <p className="text-xs text-sleep-faint mt-4">
              This page contains affiliate links. We may earn a small commission at no extra cost to you.
            </p>
          </header>

          <div className="space-y-6">
            {TIPS.map((tip, i) => (
              <section key={i} className="rounded-2xl bg-sleep-card border border-sleep-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-sleep-accent-dim border border-sleep-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-sleep-accent font-mono">{i + 1}</span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-sleep-text mb-2">{tip.title}</h2>
                    <p className="text-sm text-sleep-muted leading-relaxed">{tip.body}</p>
                    {tip.affiliate && (
                      <a href={tip.affiliate.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-sleep-accent hover:underline mt-2">
                        {tip.affiliate.label}
                      </a>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Mid-page ad */}
          <div className="my-8">
            <AdUnit slot="tips-mid" />
          </div>

          <div className="space-y-6">
            {TIPS_2.map((tip, i) => (
              <section key={i + 4} className="rounded-2xl bg-sleep-card border border-sleep-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-lg bg-sleep-accent-dim border border-sleep-accent/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-bold text-sleep-accent font-mono">{i + 5}</span>
                  </div>
                  <div>
                    <h2 className="text-base font-bold text-sleep-text mb-2">{tip.title}</h2>
                    <p className="text-sm text-sleep-muted leading-relaxed">{tip.body}</p>
                    {tip.affiliate && (
                      Array.isArray(tip.affiliate)
                        ? tip.affiliate.map((a, j) => (
                          <a key={j} href={a.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-sleep-accent hover:underline mt-2 mr-4">
                            {a.label}
                          </a>
                        ))
                        : <a href={tip.affiliate.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-sleep-accent hover:underline mt-2">
                            {tip.affiliate.label}
                          </a>
                    )}
                  </div>
                </div>
              </section>
            ))}
          </div>

          {/* Bridge to mattresses */}
          <section className="mt-12 rounded-2xl bg-sleep-card-active border border-sleep-border-active p-6">
            <h2 className="text-lg font-bold text-sleep-text mb-3">The one thing most people overlook</h2>
            <div className="text-sm text-sleep-muted leading-relaxed space-y-3">
              <p>
                You can nail all seven habits and still take 30+ minutes to fall asleep if your mattress works against you. A surface that traps heat forces your body to fight its own cooling process. A mattress with poor motion isolation means every time your partner shifts, you get a micro-arousal — not enough to wake you fully, but enough to pull you out of deep sleep and reset the cycle.
              </p>
              <p>
                The fix isn&apos;t spending $3,000 on a mattress. It&apos;s knowing which features actually affect sleep onset and cycle quality — temperature regulation, motion isolation, and spinal support — and choosing accordingly.
              </p>
              <Link
                to="/best-mattresses"
                className="inline-flex items-center gap-2 text-sm font-bold text-sleep-accent hover:underline mt-2"
              >
                See our mattress picks ranked by sleep cycle support &rarr;
              </Link>
              <p className="mt-3">
                To understand <em>why</em> these habits work, read our <Link to="/about" className="text-sleep-accent hover:underline">guide to sleep cycle stages</Link> — knowing the biology makes the habits easier to stick with.
              </p>
              <div className="mt-3 space-y-1">
                <a href="https://amzn.to/4cn4smP" target="_blank" rel="noopener noreferrer" className="block text-xs text-sleep-accent hover:underline">
                  Blackout Curtains (Amazon) &rarr;
                </a>
                <a href="https://amzn.to/4ckKxoe" target="_blank" rel="noopener noreferrer" className="block text-xs text-sleep-accent hover:underline">
                  Magnesium Glycinate for Sleep (Amazon) &rarr;
                </a>
              </div>
            </div>
          </section>

          {/* Calculator CTA */}
          <div className="rounded-2xl bg-sleep-surface border border-sleep-border p-6 mt-8">
            <h2 className="text-sm font-bold text-sleep-text mb-2">Good habits get you to sleep. Good timing keeps you there.</h2>
            <p className="text-sm text-sleep-muted mb-4">
              Once you can fall asleep in under 15 minutes, the next step is waking up at the right point in your cycle.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold"
            >
              Open Sleep Calculator &rarr;
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
