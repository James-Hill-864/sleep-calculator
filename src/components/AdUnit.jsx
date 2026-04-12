/**
 * AdSense placeholder. Replace with actual AdSense script after approval.
 */
export default function AdUnit({ slot = 'default' }) {
  return (
    <div
      className="ad-unit w-full rounded-xl border border-dashed border-sleep-border flex items-center justify-center"
      data-ad-slot={slot}
      style={{ minHeight: 90, background: 'rgba(100,120,160,0.03)' }}
    >
      {/* Replace with AdSense script after approval */}
      <span className="text-[10px] text-sleep-faint uppercase tracking-widest">Ad</span>
    </div>
  )
}
