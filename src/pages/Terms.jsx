import { Helmet } from 'react-helmet-async'

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use — SleepCycler</title>
        <meta name="description" content="SleepCycler terms of use. Rules for using this site and its content." />
        <link rel="canonical" href="https://www.sleepcycler.com/terms" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article>
          <h1 className="text-3xl font-bold text-sleep-text tracking-tight mb-2">Terms of Use</h1>
          <p className="text-xs text-sleep-faint mb-10">Last updated: April 21, 2026</p>

          <div className="space-y-8 text-sm text-sleep-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Acceptance</h2>
              <p>
                By using SleepCycler (&ldquo;the Site&rdquo;), you agree to these terms. If you do not agree, do not use the Site.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Not Medical Advice</h2>
              <p>
                All content on SleepCycler is for informational and educational purposes only. Nothing on this site constitutes medical advice, diagnosis, or treatment. Sleep calculator results are general recommendations based on average sleep cycle research and may not apply to your individual circumstances.
              </p>
              <p className="mt-2">
                <strong className="text-sleep-text">Consult a qualified healthcare professional</strong> if you have a sleep disorder, insomnia, sleep apnea, narcolepsy, or any other medical condition affecting your sleep.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Affiliate Disclosure</h2>
              <p>
                SleepCycler participates in the Amazon Associates Program and other affiliate programs. We earn commissions on purchases made through affiliate links on this site, at no additional cost to you. Affiliate relationships do not influence our product recommendations — we only link to products we believe are relevant and useful.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Intellectual Property</h2>
              <p>
                All original content on SleepCycler — including articles, tools, and design — is owned by SleepCycler. You may share links to our content and quote brief excerpts with attribution. You may not reproduce full articles or the calculator without permission.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Accuracy</h2>
              <p>
                We strive to keep content accurate and up-to-date. Sleep science evolves, and we cannot guarantee that every piece of information reflects the latest research at any given moment. Use your judgment and consult primary sources for critical decisions.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Limitation of Liability</h2>
              <p>
                SleepCycler is provided &ldquo;as is&rdquo; without warranties of any kind. We are not liable for any damages arising from your use of the Site or reliance on its content.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Changes</h2>
              <p>
                We may update these terms at any time. Continued use of the Site after changes constitutes acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Governing Law</h2>
              <p>
                These terms are governed by the laws of the United States.
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}
