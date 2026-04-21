import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MattressCard from '../components/MattressCard'

const MATTRESSES = [
  {
    name: 'Tuft & Needle Original Mattress',
    price: '$395 – $795',
    why: 'Tuft & Needle\'s adaptive foam is denser than standard memory foam, so it holds its shape through the night rather than softening from body heat — meaning your spinal alignment doesn\'t drift after hour three. Graphite and cooling gel are built into the foam itself, so surface temperature stays closer to ambient. Balanced firmness works for back and side sleepers without requiring a firmness choice at purchase.',
    affiliateLink: 'https://amzn.to/4cDFu2I',
    badge: "Editor's Pick",
  },
  {
    name: 'Linenspa 10" Memory Foam Hybrid Mattress',
    price: '$199 – $399',
    why: 'The best entry-price hybrid on Amazon. Innerspring coils give the airflow that all-foam mattresses lack, keeping the sleeping surface cooler through the night. A 2.5" comfort foam layer handles pressure relief well enough for side sleepers. Not a luxury build, but the temperature and motion-isolation fundamentals are sound — rare at this price point.',
    affiliateLink: 'https://amzn.to/4sERDKt',
    badge: 'Best Value',
  },
  {
    name: 'Nectar Memory Foam Mattress',
    price: '$499 – $1,299',
    why: 'A 7-layer memory foam construction that prioritizes deep pressure relief. Side sleepers get the shoulder and hip contouring that reduces the micro-repositioning responsible for most nighttime cycle fragmentation. The quilted cooling cover and gel-infused foam handle heat better than most all-foam builds, though hybrids will still sleep cooler. 365-night trial via Amazon.',
    affiliateLink: 'https://amzn.to/3OBku4n',
    badge: 'Best for Side Sleepers',
  },
  {
    name: 'GhostBed Classic Mattress',
    price: '$695 – $1,495',
    why: 'Aerated gel memory foam on top of high-density support foam — the aeration is the key detail. Instead of relying on a cooling cover (which stops working once your body heats it), GhostBed\'s top layer lets heat escape through the foam itself. Result: more consistent surface temperature across the full 7.5–9 hour cycle window. Firmer than Nectar, better for back sleepers and combination sleepers.',
    affiliateLink: 'https://amzn.to/4mJTtsr',
    badge: 'Best Cooling Foam',
  },
  {
    name: 'Lucid 12" Gel Memory Foam Mattress',
    price: '$299 – $599',
    why: 'Ventilated gel-infused memory foam that genuinely runs cooler than standard foam in the sub-$600 range. The 12" profile adds a 2.5" gel comfort layer on top of a 7.5" support core — thick enough to contour at the shoulders and hips without bottoming out. Widely reviewed, consistently strong scores from hot sleepers who can\'t justify the GhostBed price point. Solid choice if running hot is your primary complaint and budget is the constraint.',
    affiliateLink: 'https://amzn.to/4sERMxv',
    badge: 'Best for Hot Sleepers',
  },
]

export default function BestMattresses() {
  return (
    <>
      <Helmet>
        <title>Best Mattresses for Deep Sleep (Ranked by Sleep Cycle Support) — SleepCycler</title>
        <meta name="description" content="5 mattresses ranked for deep sleep quality. Reviewed for temperature control, motion isolation, and sleep cycle support." />
        <link rel="canonical" href="https://www.sleepcycler.com/best-mattresses" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Best Mattresses for Deep Sleep (Ranked by Sleep Cycle Support)" />
        <meta property="og:description" content="5 mattresses ranked for deep sleep quality. Reviewed for temperature control, motion isolation, and sleep cycle support." />
        <meta property="og:url" content="https://www.sleepcycler.com/best-mattresses" />
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Mattresses for Deep Sleep (Ranked by Sleep Cycle Support)" />
        <meta name="twitter:description" content="5 mattresses ranked for deep sleep quality. Reviewed for temperature control, motion isolation, and sleep cycle support." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.jpg" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"ItemList","name":"Best Mattresses for Deep Sleep","description":"Top mattresses ranked for temperature regulation, motion isolation, and sleep cycle support.","numberOfItems":5,"itemListElement":[{"@type":"ListItem","position":1,"name":"Tuft & Needle Original Mattress","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":2,"name":"Linenspa 10\" Memory Foam Hybrid Mattress","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":3,"name":"Nectar Memory Foam Mattress","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":4,"name":"GhostBed Classic Mattress","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":5,"name":"Lucid 12\" Gel Memory Foam Mattress","url":"https://www.sleepcycler.com/best-mattresses"}]})}</script>
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <header className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
              Best Mattresses for Deep Sleep (Ranked by Sleep Cycle Support)
            </h1>
            <p className="text-base text-sleep-muted leading-relaxed mb-6">
              Your mattress affects two things that directly determine sleep quality: how fast you fall asleep, and how often you wake up during the night. Both are functions of temperature regulation, pressure distribution, and motion isolation — not marketing buzzwords like &ldquo;luxury plush&rdquo; or &ldquo;hotel feel.&rdquo; These five picks are selected for the features sleep research actually links to deeper, less fragmented sleep.
            </p>

            {/* Disclosure */}
            <div className="rounded-xl bg-sleep-surface border border-sleep-border px-4 py-3">
              <p className="text-xs text-sleep-faint leading-relaxed">
                <strong className="text-sleep-muted">Affiliate disclosure:</strong> This page contains affiliate links. We may earn a commission at no extra cost to you. We only recommend mattresses we believe materially improve sleep quality based on construction, materials, and independent testing data.
              </p>
            </div>
          </header>

          <div className="space-y-4">
            {MATTRESSES.map(m => (
              <MattressCard key={m.name} {...m} />
            ))}
          </div>

          {/* Buying guide */}
          <section className="mt-10">
            <h2 className="text-xl font-bold text-sleep-text mb-4">What to Look for in a Mattress for Better Sleep</h2>
            <div className="space-y-6 text-sm text-sleep-muted leading-relaxed">
              <div>
                <h3 className="text-base font-bold text-sleep-text mb-2">Temperature Regulation</h3>
                <p>
                  This is the single most important factor for sleep onset. Your core body temperature needs to drop by approximately 1°C to initiate the transition from wakefulness to Stage N1 sleep. A mattress that absorbs and retains your body heat works against this process, extending the time it takes to fall asleep and reducing time spent in the deep N3 stage where physical recovery occurs.
                </p>
                <p className="mt-2">
                  Foam mattresses are the worst offenders — dense memory foam can raise the sleeping surface temperature by 3–5°F over the course of a night. Gel-infused foams reduce this but don&apos;t eliminate it. Hybrid mattresses with coil layers allow air to circulate through the mattress core, which is why they consistently test cooler in third-party thermal imaging studies. If you sleep hot, prioritize coils or grid-based materials over all-foam constructions.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-sleep-text mb-2">Motion Isolation</h3>
                <p>
                  If you share a bed, your partner&apos;s movements during the night create vibrations that can cause micro-arousals — brief, unconscious shifts from deep sleep to light sleep. You won&apos;t remember them in the morning, but your sleep tracker will show fragmented cycles and reduced time in N3 and REM.
                </p>
                <p className="mt-2">
                  Foam excels at motion isolation because it absorbs kinetic energy locally rather than transferring it across the surface. Innerspring mattresses are the worst — a movement on one side propagates through connected coils to the other. Hybrids with individually wrapped (pocketed) coils offer a middle ground: better airflow than foam, better isolation than traditional springs. If motion isolation is your priority, look for pocketed coils or foam-only designs.
                </p>
              </div>

              <div>
                <h3 className="text-base font-bold text-sleep-text mb-2">Firmness and Spinal Alignment</h3>
                <p>
                  A mattress that&apos;s too soft lets your hips sink, creating a spinal curve that causes lower back pain and forces you to reposition throughout the night — each repositioning is a potential cycle disruption. A mattress that&apos;s too firm creates pressure points on your shoulders and hips, which your body resolves by rolling over, with the same result.
                </p>
                <p className="mt-2">
                  The ideal firmness depends on your body weight and sleep position. Side sleepers need a softer surface to accommodate shoulder and hip width without pressure. Back sleepers need medium-firm support to prevent lumbar sag. Stomach sleepers need firm support to keep the spine neutral. If you change positions throughout the night, a medium firmness with zoned support — firmer in the center, softer at the edges — is the safest choice. The goal is a mattress where you fall asleep in your first position and don&apos;t need to move until morning.
                </p>
              </div>
            </div>
          </section>

          {/* Internal links */}
          <div className="mt-10 space-y-4">
            <div className="rounded-2xl bg-sleep-surface border border-sleep-border p-6">
              <h2 className="text-sm font-bold text-sleep-text mb-2">Time your sleep, not just your mattress</h2>
              <p className="text-sm text-sleep-muted mb-4">
                The best mattress in the world won&apos;t help if your alarm fires in the middle of a deep sleep cycle.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold"
              >
                Open Sleep Calculator &rarr;
              </Link>
            </div>

            <Link
              to="/sleep-tips"
              className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
            >
              <h3 className="text-sm font-bold text-sleep-text mb-1">7 ways to fall asleep faster</h3>
              <p className="text-xs text-sleep-muted">Optimize your routine to match your new mattress &rarr;</p>
            </Link>

            <Link
              to="/blog/sleep-deprivation-effects-one-night"
              className="block rounded-2xl bg-sleep-surface border border-sleep-border p-5 hover:border-sleep-faint/20 transition-colors"
            >
              <h3 className="text-sm font-bold text-sleep-text mb-1">What one bad night does to your body</h3>
              <p className="text-xs text-sleep-muted">The cognitive, physical, and emotional effects — backed by research &rarr;</p>
            </Link>
          </div>
        </article>
      </main>
    </>
  )
}
