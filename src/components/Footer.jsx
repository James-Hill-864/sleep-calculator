import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-sleep-border mt-auto">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">Tool</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Sleep Calculator</Link>
              <Link to="/shift-worker-sleep-calculator" className="block text-sm text-sleep-muted hover:text-sleep-text transition-colors">Shift Worker Calculator</Link>
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
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-sleep-faint uppercase tracking-widest mb-3">About</h4>
            <div className="space-y-2">
              <span className="block text-sm text-sleep-faint">Built for better sleep.</span>
            </div>
          </div>
        </div>
        {/* Product Hunt embed */}
        <div className="flex justify-center mb-8">
          <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', border: '1px solid #e0e0e0', borderRadius: 12, padding: 20, maxWidth: 500, background: '#fff', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
              <img alt="SleepCycler" src="https://ph-files.imgix.net/43701b32-58cf-4e34-a620-a7302d04647e.png?auto=format&fit=crop&w=80&h=80" style={{ width: 64, height: 64, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600, color: '#1a1a1a', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>SleepCycler</h3>
                <p style={{ margin: '4px 0 0', fontSize: 14, color: '#666', lineHeight: 1.4, overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>Find your perfect bedtime based on 90-minute sleep cycles</p>
              </div>
            </div>
            <a href="https://www.producthunt.com/products/sleepcycler?embed=true&utm_source=embed&utm_medium=post_embed" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 12, padding: '8px 16px', background: '#ff6154', color: '#fff', textDecoration: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600 }}>Check it out on Product Hunt →</a>
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
