import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — SleepCycler</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center flex-1">
        <p className="text-xs font-bold text-sleep-accent uppercase tracking-widest mb-4">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-sleep-text tracking-tight leading-tight mb-4">
          This page doesn&apos;t exist
        </h1>
        <p className="text-base text-sleep-muted leading-relaxed mb-10 max-w-xl mx-auto">
          The page you&apos;re looking for may have been moved, renamed, or never existed. Try one of the links below to find what you need.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 max-w-xl mx-auto text-left">
          <Link to="/" className="block rounded-2xl bg-sleep-card border border-sleep-border p-5 hover:border-sleep-accent/20 transition-colors">
            <h2 className="text-sm font-bold text-sleep-text mb-1">Sleep Cycle Calculator</h2>
            <p className="text-xs text-sleep-muted">Find your ideal bedtime &rarr;</p>
          </Link>
          <Link to="/blog" className="block rounded-2xl bg-sleep-card border border-sleep-border p-5 hover:border-sleep-accent/20 transition-colors">
            <h2 className="text-sm font-bold text-sleep-text mb-1">Sleep Science Blog</h2>
            <p className="text-xs text-sleep-muted">Evidence-based articles &rarr;</p>
          </Link>
          <Link to="/sleep-debt-calculator" className="block rounded-2xl bg-sleep-card border border-sleep-border p-5 hover:border-sleep-accent/20 transition-colors">
            <h2 className="text-sm font-bold text-sleep-text mb-1">Sleep Debt Calculator</h2>
            <p className="text-xs text-sleep-muted">Measure what you owe &rarr;</p>
          </Link>
          <Link to="/sleep-tips" className="block rounded-2xl bg-sleep-card border border-sleep-border p-5 hover:border-sleep-accent/20 transition-colors">
            <h2 className="text-sm font-bold text-sleep-text mb-1">Sleep Tips</h2>
            <p className="text-xs text-sleep-muted">7 evidence-based fixes &rarr;</p>
          </Link>
        </div>
      </main>
    </>
  )
}
