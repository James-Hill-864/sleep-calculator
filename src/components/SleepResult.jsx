import { formatTime } from '../utils/sleepMath'

export default function SleepResult({ time, cycles, totalHours, recommended }) {
  return (
    <div
      className={`relative rounded-2xl p-5 transition-all duration-300 ${
        recommended
          ? 'bg-sleep-card-active border border-sleep-border-active shadow-[0_0_30px_rgba(94,234,212,0.06)]'
          : 'bg-sleep-card border border-sleep-border hover:border-sleep-faint/20'
      }`}
    >
      {/* Recommended badge */}
      {recommended && (
        <div className="absolute -top-2.5 left-4">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sleep-accent/10 text-sleep-accent border border-sleep-accent/20">
            Recommended
          </span>
        </div>
      )}

      <div className="flex items-center justify-between">
        {/* Time */}
        <div>
          <div className={`font-mono text-2xl sm:text-3xl font-medium tracking-tight ${recommended ? 'text-sleep-accent' : 'text-sleep-text'}`}>
            {formatTime(time)}
          </div>
          <div className="mt-1 text-xs text-sleep-muted">
            {totalHours} hours of sleep
          </div>
        </div>

        {/* Cycles */}
        <div className="text-right">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: 6 }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i < cycles
                    ? recommended ? 'bg-sleep-accent' : 'bg-sleep-muted/50'
                    : 'bg-sleep-faint/20'
                }`}
              />
            ))}
          </div>
          <div className="mt-1.5 text-xs text-sleep-faint">
            {cycles} cycle{cycles !== 1 && 's'}
          </div>
        </div>
      </div>
    </div>
  )
}
