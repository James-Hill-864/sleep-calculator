import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import EmailSignup from '../../components/EmailSignup'

const POSTS = [
  {
    to: '/blog/what-time-to-go-to-bed-wake-up-6am',
    title: 'What Time Should I Go to Bed If I Wake Up at 6am?',
    description: 'Exact bedtimes calculated using 90-minute sleep cycles, with the math behind each recommendation.',
  },
  {
    to: '/blog/what-time-to-sleep-wake-up-7am',
    title: 'What Time Should I Go to Bed If I Wake Up at 7am?',
    description: 'Optimal bedtimes for a 7am alarm — from 4.5 hours to a full 9 hours of cycle-aligned sleep.',
  },
  {
    to: '/blog/how-many-sleep-cycles-do-you-need',
    title: 'How Many Sleep Cycles Do You Need? (By Age and Sleep Goal)',
    description: 'The difference between 4, 5, and 6 cycles — and what happens when you consistently miss one.',
  },
  {
    to: '/blog/best-time-to-wake-up-for-deep-sleep',
    title: "The Best Time to Wake Up for Deep Sleep (And Why It's Not About Hours)",
    description: 'Why 6 hours of well-timed sleep can feel better than 8 hours interrupted mid-cycle.',
  },
  {
    to: '/blog/sleep-deprivation-effects-one-night',
    title: 'What One Night of Bad Sleep Actually Does to Your Body and Brain',
    description: 'The cognitive, physical, and emotional effects of a single night of poor sleep — backed by research.',
  },
  {
    to: '/blog/why-am-i-still-tired-after-8-hours-of-sleep',
    title: 'Why Am I Still Tired After 8 Hours of Sleep?',
    description: 'Six reasons 8 hours leaves you groggy — and why cycle timing matters more than duration.',
  },
  {
    to: '/blog/can-you-catch-up-on-sleep-on-the-weekend',
    title: 'Can You Catch Up on Sleep on the Weekend?',
    description: 'What the research actually says about weekend recovery sleep, social jet lag, and the limits of catch-up.',
  },
  {
    to: '/blog/what-time-to-go-to-bed-wake-up-5am',
    title: 'What Time Should I Go to Bed If I Wake Up at 5am?',
    description: 'Exact bedtimes for early risers — why 5am alarms are unforgiving and how cycle alignment changes everything.',
  },
  {
    to: '/blog/how-to-fall-asleep-fast',
    title: 'How to Fall Asleep Fast — 9 Methods Backed by Science',
    description: 'From the military method to cognitive shuffling — evidence-based techniques ranked by how quickly they work.',
  },
  {
    to: '/blog/why-do-i-wake-up-at-3am-every-night',
    title: 'Why Do I Wake Up at 3am Every Night?',
    description: 'The seven most common causes of middle-of-the-night waking, in order of likelihood — plus the 2-week fix protocol.',
  },
  {
    to: '/blog/sleep-tracking-what-data-means',
    title: 'Sleep Tracking: What Your Sleep Data Really Means',
    description: 'What sleep trackers actually measure, what the numbers mean, and how to use sleep data without becoming obsessed.',
  },
  {
    to: '/blog/sleep-environment-optimization',
    title: 'Sleep Environment: How Your Bedroom Affects Sleep Quality',
    description: 'The science of sleep environment optimization. Temperature, light, noise, and air quality changes that improve sleep.',
  },
  {
    to: '/blog/power-naps-science-short-sleep',
    title: 'Power Naps: The Science of Short Sleep',
    description: 'How to take power naps that actually work. The optimal nap length, timing, and technique for maximum alertness benefits.',
  },
  {
    to: '/blog/what-time-to-go-to-bed-wake-up-8am',
    title: 'What Time Should I Go to Bed If I Wake Up at 8am?',
    description: 'Exact bedtimes for an 8am wake-up using 90-minute sleep cycle math — from the recommended 12:15 AM to the emergency 3:15 AM option.',
  },
  {
    to: '/blog/what-time-to-go-to-bed-wake-up-9am',
    title: 'What Time Should I Go to Bed If I Wake Up at 9am?',
    description: 'Optimal bedtimes for a 9am alarm — why 1:15 AM is the recommended target and how social jet lag affects later risers.',
  },
  {
    to: '/blog/what-time-to-go-to-bed-wake-up-10am',
    title: 'What Time Should I Go to Bed If I Wake Up at 10am?',
    description: 'Cycle-aligned bedtimes for 10am risers — night owls, remote workers, and weekend schedules explained.',
  },
]

export default function BlogIndex() {
  return (
    <>
      <Helmet>
        <title>Sleep Science Blog — SleepCycler</title>
        <meta name="description" content="Evidence-based articles on sleep cycles, bedtime math, sleep deprivation, and how to wake up feeling rested." />
        <link rel="canonical" href="https://www.sleepcycler.com/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Sleep Science Blog — SleepCycler" />
        <meta property="og:description" content="Evidence-based articles on sleep cycles, bedtime math, sleep deprivation, and how to wake up feeling rested." />
        <meta property="og:url" content="https://www.sleepcycler.com/blog" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sleep Science Blog — SleepCycler" />
        <meta name="twitter:description" content="Evidence-based articles on sleep cycles, bedtime math, sleep deprivation, and how to wake up feeling rested." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.jpg" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <header className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
            Sleep Science Blog
          </h1>
          <p className="text-base text-sleep-muted leading-relaxed">
            Practical, research-backed articles on sleep cycles, timing, and the science of waking up rested.
          </p>
        </header>

        <p className="text-sm text-sleep-muted mb-6">
          Need a quick answer? Use the <Link to="/" className="text-sleep-accent hover:underline">sleep calculator</Link> to find your ideal bedtime or wake time right now. Prefer a reader? <a href="/rss.xml" className="text-sleep-accent hover:underline">Subscribe via RSS</a>.
        </p>

        <div className="mb-8">
          <EmailSignup
            heading="Get the sleep science newsletter"
            subhead="One evidence-based email per week on sleep cycles, circadian rhythm, and waking up rested."
          />
        </div>

        <div className="space-y-4">
          {POSTS.map(post => (
            <Link
              key={post.to}
              to={post.to}
              className="block group rounded-2xl bg-sleep-card border border-sleep-border p-6 hover:border-sleep-accent/20 transition-colors"
            >
              <h2 className="text-base font-bold text-sleep-text group-hover:text-sleep-accent transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-sm text-sleep-muted leading-relaxed mb-3">
                {post.description}
              </p>
              <span className="text-xs font-bold text-sleep-accent">
                Read more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </main>
    </>
  )
}
