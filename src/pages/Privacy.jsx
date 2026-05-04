import { Helmet } from 'react-helmet-async'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy — SleepCycler</title>
        <meta name="description" content="SleepCycler privacy policy. How we collect, use, and protect your information." />
        <link rel="canonical" href="https://www.sleepcycler.com/privacy" />
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <article className="prose-sleep">
          <h1 className="text-3xl font-bold text-sleep-text tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-xs text-sleep-faint mb-10">Last updated: April 21, 2026</p>

          <div className="space-y-8 text-sm text-sleep-muted leading-relaxed">
            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">What We Collect</h2>
              <p>
                SleepCycler is a client-side web application. We do not have a backend server or database, and we do not collect personally identifiable information.
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside">
                <li><strong className="text-sleep-text">Analytics:</strong> We use Vercel Analytics to collect anonymous, aggregated data on page visits (pages viewed, country, device type). No personal identifiers are stored.</li>
                <li><strong className="text-sleep-text">Local storage:</strong> Calculator preferences (wake time, age group, mode) may be stored in your browser&apos;s localStorage. This data never leaves your device.</li>
                <li><strong className="text-sleep-text">Email newsletter:</strong> If you subscribe via Buttondown, your email address is stored by Buttondown and governed by their privacy policy. We use your email only to send the newsletter you subscribed to.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Cookies</h2>
              <p>
                SleepCycler does not set first-party cookies. Third-party services (Vercel Analytics, Google Fonts) may set cookies governed by their own privacy policies. We do not use advertising cookies or tracking pixels.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Affiliate Links</h2>
              <p>
                This site participates in the Amazon Associates Program. When you click affiliate links and make purchases, Amazon may set cookies to attribute the sale. Amazon&apos;s data practices are governed by <a href="https://www.amazon.com/gp/help/customer/display.html?nodeId=468496" target="_blank" rel="noopener noreferrer" className="text-sleep-accent hover:underline">Amazon&apos;s Privacy Notice</a>.
              </p>
              <p className="mt-2">
                We earn a commission on qualifying purchases at no extra cost to you.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Third-Party Services</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong className="text-sleep-text">Vercel:</strong> Hosting and analytics. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sleep-accent hover:underline">Vercel Privacy Policy</a>.</li>
                <li><strong className="text-sleep-text">Google Fonts:</strong> Fonts are loaded from Google servers. See <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-sleep-accent hover:underline">Google Privacy Policy</a>.</li>
                <li><strong className="text-sleep-text">Buttondown:</strong> Email newsletter provider. See <a href="https://buttondown.email/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-sleep-accent hover:underline">Buttondown Privacy Policy</a>.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Data Retention</h2>
              <p>
                We do not retain personal data on our servers because we do not have a server-side database. Browser localStorage data persists until you clear it. Vercel Analytics retains aggregated (non-personal) data per their standard retention schedule.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Your Rights</h2>
              <p>
                To unsubscribe from the email newsletter, click the unsubscribe link in any email. To remove localStorage data, clear your browser&apos;s site data for sleepcycler.com. For questions, contact us at the email in the footer.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Children</h2>
              <p>
                SleepCycler is not directed at children under 13. We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-bold text-sleep-text mb-3">Changes</h2>
              <p>
                We may update this policy. Material changes will be reflected in the &ldquo;last updated&rdquo; date above.
              </p>
            </section>
          </div>
        </article>
      </main>
    </>
  )
}
