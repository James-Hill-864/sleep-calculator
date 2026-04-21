import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import MattressCard from '../components/MattressCard'
import AdUnit from '../components/AdUnit'

const MATTRESSES = [
  {
    name: 'Nectar Sleep',
    price: '$799 – $1,499',
    why: 'Gel-infused memory foam that sleeps noticeably cooler than traditional memory foam. Excellent pressure relief for side sleepers, and minimal motion transfer — your partner rolling over won\'t pull you out of a deep sleep cycle.',
    affiliateLink: '[AFFILIATE_LINK_NECTAR]',
    badge: "Editor's Pick",
  },
  {
    name: 'Brooklyn Bedding Signature Hybrid',
    price: '$749 – $1,349',
    why: 'Individually wrapped coils provide airflow that foam-only mattresses can\'t match — a direct advantage for reaching and maintaining the lower core temperature deep sleep requires. The TitanFlex comfort layer is responsive enough that repositioning doesn\'t require fully waking up.',
    affiliateLink: '[AFFILIATE_LINK_BROOKLYN]',
    badge: null,
  },
  {
    name: 'Casper Original',
    price: '$895 – $2,495',
    why: 'Zoned support system uses firmer foam under the hips and softer foam under the shoulders, reducing the pressure points that cause tossing. Zoned support reduces pressure points at the hips and shoulders, the two primary triggers for nighttime repositioning — fewer position changes means fewer micro-arousals and more uninterrupted cycles.',
    affiliateLink: '[AFFILIATE_LINK_CASPER]',
    badge: null,
  },
  {
    name: 'Saatva Classic',
    price: '$1,095 – $2,295',
    why: 'Dual coil-on-coil construction provides deep support without the "sinking" sensation that traps body heat in foam layers. The pillow top adds surface comfort while the coils maintain spinal alignment. Best for back sleepers and heavier body types who need support that doesn\'t degrade over the night as foam softens from heat.',
    affiliateLink: '[AFFILIATE_LINK_SAATVA]',
    badge: 'Best Luxury',
  },
  {
    name: 'Purple Original',
    price: '$1,099 – $2,999',
    why: 'The GelFlex Grid is temperature-neutral by design — it doesn\'t absorb and radiate body heat the way foam does. If you consistently wake up hot at 2 or 3 AM, that\'s your mattress forcing your body to fight its own thermoregulation. Purple eliminates that variable. The grid also isolates motion through flex rather than compression, keeping vibrations local.',
    affiliateLink: '[AFFILIATE_LINK_PURPLE]',
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
        <meta property="og:image" content="https://www.sleepcycler.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Mattresses for Deep Sleep (Ranked by Sleep Cycle Support)" />
        <meta name="twitter:description" content="5 mattresses ranked for deep sleep quality. Reviewed for temperature control, motion isolation, and sleep cycle support." />
        <meta name="twitter:image" content="https://www.sleepcycler.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"ItemList","name":"Best Mattresses for Deep Sleep","description":"Top mattresses ranked for temperature regulation, motion isolation, and sleep cycle support.","numberOfItems":5,"itemListElement":[{"@type":"ListItem","position":1,"name":"Nectar Sleep","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":2,"name":"Brooklyn Bedding Signature Hybrid","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":3,"name":"Casper Original","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":4,"name":"Saatva Classic","url":"https://www.sleepcycler.com/best-mattresses"},{"@type":"ListItem","position":5,"name":"Purple Original","url":"https://www.sleepcycler.com/best-mattresses"}]})}</script>
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

          <div className="my-8">
            <AdUnit slot="mattresses-bottom" />
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
