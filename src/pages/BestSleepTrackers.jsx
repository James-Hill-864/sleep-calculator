import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const TRACKERS = [
  {
    name: 'WHOOP 4.0',
    price: '$239/year (free band)',
    href: 'https://amzn.to/4cLKseY',
    image: 'https://m.media-amazon.com/images/I/71-Bc3KaY3L._AC_SL1500_.jpg',
    badge: "Editor's Pick",
    why: 'The most health-obsessed sleep tracker on the market. WHOOP skips the watch face entirely — it\'s a screenless band dedicated to recovery data. Its sleep coaching is the best in class: it tracks sleep need (not just sleep duration) by combining HRV, resting heart rate, and activity load from the previous day. The recovery score tells you whether to push hard or take it easy each morning, which makes WHOOP uniquely actionable. Subscription model means the hardware is free; the $239/year covers continuous algorithm updates and unlimited data history.',
  },
  {
    name: 'Oura Ring 4',
    price: '$349 – $499',
    href: 'https://amzn.to/49fA8JV',
    image: 'https://m.media-amazon.com/images/I/51ul5++ZdWL._AC_SL1000_.jpg',
    badge: 'Most Accurate',
    why: 'The most accurate consumer sleep tracker available. Oura measures finger pulse oximetry, skin temperature, and HRV simultaneously — a combination that outperforms wrist-based devices in clinical comparisons. Sleep stage detection accuracy approaches 80% vs. PSG gold standard, better than any wrist device. The ring form factor is comfortable enough to wear every night without noticing it. If you want reliable cycle and REM data, this is the one to buy.',
  },
  {
    name: 'Fitbit Charge 6',
    price: '$149 – $179',
    href: 'https://amzn.to/4urQZBh',
    image: 'https://m.media-amazon.com/images/I/61ZtqtvoD2L._AC_SL1500_.jpg',
    badge: 'Best Value',
    why: 'The best sleep-tracking wristband under $200. Google\'s integration of DeepMind AI into Fitbit\'s Sleep Score algorithm meaningfully improved stage detection accuracy over the Charge 5. Heart rate tracking is continuous at 1-second resolution during sleep, which allows more accurate REM detection than 5-second sampling. The 7-day battery is long enough to track a full week without removing it. Syncs natively with Google Fit and Apple Health.',
  },
  {
    name: 'Garmin Vívosmart 5',
    price: '$149 – $179',
    href: 'https://amzn.to/48IZm3g',
    image: 'https://m.media-amazon.com/images/I/71-iVjaYJIL._AC_SL1500_.jpg',
    badge: 'Best for Athletes',
    why: 'Garmin\'s sleep scoring integrates with their Body Battery metric — a composite of HRV, stress, and sleep data that predicts your readiness for exertion. For people who train and want to know whether to push or recover on a given morning, this context makes Garmin\'s sleep data more actionable than a standalone Sleep Score. Particularly good at detecting sleep fragmentation caused by high training load.',
  },
  {
    name: 'Withings ScanWatch 2',
    price: '$299 – $349',
    href: 'https://amzn.to/4w7DOXZ',
    image: 'https://m.media-amazon.com/images/I/61FooOnl3+L._AC_SL1500_.jpg',
    badge: 'Most Clinical',
    why: 'Withings has FDA-cleared ECG functionality built into a traditional watch design. For sleep tracking specifically, the ScanWatch 2 detects breathing disturbances during sleep — a feature none of the fitness trackers offer. If you suspect sleep apnea (common in people who sleep 8+ hours but still feel tired), the breathing disruption metric gives you a concrete data point to bring to a doctor before spending $3,000 on a sleep study.',
  },
]

function TrackerCard({ name, price, href, why, badge, image }) {
  return (
    <div className="bg-sleep-card border border-sleep-border rounded-2xl overflow-hidden hover:border-sleep-faint/20 transition-colors">
      {image && (
        <a href={href} target="_blank" rel="sponsored noopener noreferrer" className="block bg-gray-50">
          <img
            src={image}
            alt={name}
            className="w-full h-48 object-contain p-6"
            loading="lazy"
          />
        </a>
      )}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-bold text-sleep-text">{name}</h3>
            <p className="text-xs text-sleep-accent font-mono mt-0.5">{price}</p>
          </div>
          {badge && (
            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sleep-accent-dim text-sleep-accent border border-sleep-accent/20 whitespace-nowrap">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm text-sleep-muted leading-relaxed">{why}</p>
        <a
          href={href}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className="inline-flex items-center justify-center py-2.5 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold hover:brightness-110 transition"
        >
          View on Amazon &rarr;
        </a>
      </div>
    </div>
  )
}

export default function BestSleepTrackers() {
  return (
    <>
      <Helmet>
        <title>Best Sleep Trackers (Ranked by Cycle Accuracy) — SleepCycler</title>
        <meta name="description" content="5 sleep trackers ranked for sleep cycle accuracy, stage detection, and how actionable the data actually is. Reviewed for real sleep improvement." />
        <link rel="canonical" href="https://www.sleepcycler.com/best-sleep-trackers" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best Sleep Trackers (Ranked by Cycle Accuracy)" />
        <meta property="og:description" content="5 sleep trackers ranked for sleep cycle accuracy, stage detection, and how actionable the data is." />
        <meta property="og:url" content="https://www.sleepcycler.com/best-sleep-trackers" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Sleep Trackers (Ranked by Cycle Accuracy)" />
        <meta name="twitter:description" content="5 sleep trackers ranked for sleep cycle accuracy, stage detection, and how actionable the data is." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"ItemList","name":"Best Sleep Trackers for Cycle Accuracy","description":"Top sleep trackers ranked for sleep cycle detection accuracy and data actionability.","numberOfItems":5,"itemListElement":[{"@type":"ListItem","position":1,"name":"WHOOP 4.0","url":"https://www.sleepcycler.com/best-sleep-trackers"},{"@type":"ListItem","position":2,"name":"Oura Ring 4","url":"https://www.sleepcycler.com/best-sleep-trackers"},{"@type":"ListItem","position":3,"name":"Fitbit Charge 6","url":"https://www.sleepcycler.com/best-sleep-trackers"},{"@type":"ListItem","position":4,"name":"Garmin Vívosmart 5","url":"https://www.sleepcycler.com/best-sleep-trackers"},{"@type":"ListItem","position":5,"name":"Withings ScanWatch 2","url":"https://www.sleepcycler.com/best-sleep-trackers"}]})}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
              Best Sleep Trackers (Ranked by Cycle Accuracy)
            </h1>
            <p className="text-base text-sleep-muted leading-relaxed mb-6">
              A sleep tracker is only useful if it accurately detects the stages that matter — deep N3 sleep and REM. These five picks are ranked by how accurately they measure sleep cycles and how actionable the data actually is for improving rest.
            </p>

            {/* Affiliate disclosure */}
            <div className="rounded-xl bg-sleep-surface border border-sleep-border px-4 py-3">
              <p className="text-xs text-sleep-faint leading-relaxed">
                <strong className="text-sleep-muted">Affiliate disclosure:</strong> This page contains affiliate links. We may earn a commission at no extra cost to you. Rankings are based on published accuracy studies, user data, and independent sensor testing — not sponsorship.
              </p>
            </div>
          </header>

          <div className="space-y-4 mb-10">
            {TRACKERS.map(t => (
              <TrackerCard key={t.name} {...t} />
            ))}
          </div>

          {/* Buying guide */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-sleep-text mb-4">What to Look for in a Sleep Tracker</h2>
            <div className="space-y-6 text-sm text-sleep-muted leading-relaxed">

              <div>
                <h3 className="text-base font-bold text-sleep-text mb-2">Stage Detection Method</h3>
                <p>
                  Consumer trackers use two approaches: wrist-based optical heart rate sensors (Fitbit, Garmin, Apple Watch) and finger-based sensors (Oura Ring). Finger sensors have a 3–4x richer blood vessel density than the wrist, which means cleaner HRV and pulse wave data — the signals used to classify sleep stages. Clinical studies comparing consumer devices against polysomnography (the gold standard) consistently show ring sensors outperform wrist sensors for stage detection accuracy, particularly for N3 deep sleep vs. N2 light sleep discrimination.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-sleep-text mb-2">Sleep Latency Tracking</h3>
                <p>
                  How long it takes you to fall asleep is one of the most useful sleep metrics — and most trackers report it badly. Devices that detect sleep onset from inactivity alone (arm stops moving = asleep) can miss 15–30 minutes of actual wakefulness. Devices with continuous heart rate monitoring at high sampling rates can detect the specific drop in heart rate that accompanies the N1 to N2 transition, which is a more accurate proxy for sleep onset. Check whether a device reports &ldquo;time in bed&rdquo; or &ldquo;time asleep&rdquo; — they are not the same thing.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-sleep-text mb-2">Actionability of the Data</h3>
                <p>
                  The most accurate tracker in the world is useless if the app makes the data incomprehensible. Look for: (1) a single composite score you can track night-over-night without reading a dashboard, (2) the ability to see raw minutes in each sleep stage, and (3) trend views that show whether your sleep quality is improving or degrading over weeks. Oura and Withings are strongest here. Fitbit is good. Garmin is powerful but requires more effort to interpret.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-sleep-text mb-2">Comfort for Nightly Wear</h3>
                <p>
                  The best tracker is the one you actually wear every night. A tracker worn 60% of nights gives you 60% of the data. Rings tend to have the highest compliance rates because they don&apos;t interfere with sleep position and don&apos;t need to be charged as often as wristbands. If you find wrist devices uncomfortable during sleep, a ring or a bedside non-wearable is worth the accuracy trade-off compared to inconsistent wearing.
                </p>
              </div>
            </div>
          </section>

          {/* Calculator bridge */}
          <div className="mt-10 space-y-4">
            <div className="rounded-2xl bg-sleep-surface border border-sleep-border p-6">
              <h2 className="text-sm font-bold text-sleep-text mb-2">Use your tracker data with cycle math</h2>
              <p className="text-sm text-sleep-muted mb-4">
                Once you know your actual sleep onset time from your tracker, plug it into the Sleep Cycle Calculator to find your exact optimal wake time for tomorrow night.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold"
              >
                Open Sleep Calculator &rarr;
              </Link>
            </div>

            <Link
              to="/best-mattresses"
              className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
            >
              <h3 className="text-sm font-bold text-sleep-text mb-1">Best mattresses for deep sleep</h3>
              <p className="text-xs text-sleep-muted">If your tracker shows low N3 time, your sleep surface may be the cause &rarr;</p>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
