export default function MattressCard({ name, price, why, affiliateLink, badge }) {
  return (
    <div className="bg-sleep-card border border-sleep-border rounded-2xl p-6 flex flex-col gap-4 hover:border-sleep-faint/20 transition-colors">
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
        href={affiliateLink}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className="inline-flex items-center justify-center py-2.5 rounded-xl bg-sleep-accent text-sleep-bg text-xs font-bold hover:brightness-110 transition"
      >
        View on Amazon &rarr;
      </a>
    </div>
  )
}
