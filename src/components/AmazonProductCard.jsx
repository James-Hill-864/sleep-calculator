export default function AmazonProductCard({ name, href, why, tag = 'Recommended' }) {
  return (
    <div className="rounded-2xl bg-sleep-card border border-sleep-accent/15 p-5 my-6">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-sleep-accent-dim text-sleep-accent border border-sleep-accent/20">
          <span className="w-1.5 h-1.5 rounded-full bg-sleep-accent" />
          {tag}
        </span>
        <span className="text-[10px] text-sleep-faint uppercase tracking-wider">Affiliate</span>
      </div>
      <h3 className="text-sm font-bold text-sleep-text mb-2">{name}</h3>
      <p className="text-sm text-sleep-muted leading-relaxed mb-4">{why}</p>
      <a
        href={href}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold hover:brightness-110 transition"
      >
        View on Amazon &rarr;
      </a>
    </div>
  )
}
