import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-sleep-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Tools</h4>
            <div className="space-y-2">
              <Link to="/calculators" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">All Calculators</Link>
              <Link to="/" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Calculator</Link>
              <Link to="/sleep-debt-calculator" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Debt</Link>
              <Link to="/shift-worker-sleep-calculator" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Shift Worker</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Learn</h4>
            <div className="space-y-2">
              <Link to="/about" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Cycles</Link>
              <Link to="/sleep-tips" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Tips</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Recommended</h4>
            <div className="space-y-2">
              <Link to="/best-mattresses" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Best Mattresses</Link>
              <Link to="/best-sleep-trackers" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Best Sleep Trackers</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Legal</h4>
            <div className="space-y-2">
              <Link to="/privacy" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Terms of Use</Link>
            </div>
          </div>
        </div>
        <div className="border-t border-sleep-border pt-6 text-center space-y-2">
          <p className="text-xs text-sleep-faint max-w-2xl mx-auto leading-relaxed">
            As an Amazon Associate we earn from qualifying purchases. SleepCycler may earn a commission on links to products on this site, at no extra cost to you.
          </p>
          <p className="text-xs text-sleep-faint">
            &copy; {new Date().getFullYear()} SleepCycler. Not medical advice. Consult a healthcare professional for sleep disorders.
          </p>
        </div>
      </div>
    </footer>
  )
}
