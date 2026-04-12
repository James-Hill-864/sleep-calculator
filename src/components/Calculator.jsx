import { useState } from 'react'
import { Link } from 'react-router-dom'
import { calculateBedtimes, calculateWakeTimes, parseTimeInput } from '../utils/sleepMath'
import SleepResult from './SleepResult'

const MODES = [
  { id: 'wake', label: 'I want to wake up at...' },
  { id: 'bed', label: "I'm going to bed at..." },
]

const AGE_GROUPS = [
  { id: 'teen', label: 'Teen', sub: 'Under 18' },
  { id: 'adult', label: 'Adult', sub: '18–64' },
  { id: 'senior', label: 'Senior', sub: '65+' },
]

export default function Calculator() {
  const [mode, setMode] = useState('wake')
  const [timeValue, setTimeValue] = useState('06:30')
  const [ageGroup, setAgeGroup] = useState('adult')
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsCalculating(true)
    setTimeout(() => {
      const { hour, minute } = parseTimeInput(timeValue)
      if (mode === 'wake') {
        setResults(calculateBedtimes(hour, minute, ageGroup))
      } else {
        setResults(calculateWakeTimes(hour, minute, ageGroup))
      }
      setIsCalculating(false)
    }, 300)
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Mode toggle */}
        <div className="flex bg-sleep-surface rounded-xl p-1 border border-sleep-border">
          {MODES.map(m => (
            <button
              key={m.id}
              type="button"
              onClick={() => { setMode(m.id); setResults(null) }}
              className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                mode === m.id
                  ? 'bg-sleep-card-active text-sleep-accent shadow-sm'
                  : 'text-sleep-muted hover:text-sleep-text'
              }`}
            >
              {m.label}
            </button>
          ))}
        </div>

        {/* Time input */}
        <div>
          <label className="block text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">
            {mode === 'wake' ? 'Wake-up time' : 'Bedtime'}
          </label>
          <input
            type="time"
            value={timeValue}
            onChange={e => setTimeValue(e.target.value)}
            className="w-full bg-sleep-surface border border-sleep-border rounded-xl px-4 py-3.5 text-xl font-mono text-sleep-text focus:outline-none focus:border-sleep-accent/30 focus:ring-1 focus:ring-sleep-accent/10 transition-colors"
          />
        </div>

        {/* Age group */}
        <div>
          <label className="block text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-2">
            Age group <span className="text-sleep-faint/50">(optional)</span>
          </label>
          <div className="grid grid-cols-3 gap-2">
            {AGE_GROUPS.map(ag => (
              <button
                key={ag.id}
                type="button"
                onClick={() => setAgeGroup(ag.id)}
                className={`py-2.5 rounded-xl text-center transition-all ${
                  ageGroup === ag.id
                    ? 'bg-sleep-accent-dim border border-sleep-accent/20 text-sleep-accent'
                    : 'bg-sleep-surface border border-sleep-border text-sleep-muted hover:border-sleep-faint/20'
                }`}
              >
                <div className="text-xs font-semibold">{ag.label}</div>
                <div className="text-[10px] opacity-60">{ag.sub}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={isCalculating}
          className={`w-full py-3.5 rounded-xl text-sm font-bold tracking-wide transition-all ${
            isCalculating
              ? 'bg-sleep-accent/50 text-sleep-bg/70 cursor-not-allowed'
              : 'bg-sleep-accent text-sleep-bg hover:bg-sleep-accent/90 active:scale-[0.99]'
          }`}
        >
          {isCalculating ? 'Calculating...' : 'Calculate'}
        </button>
      </form>

      {/* Results */}
      {results && (
        <div className="mt-8">
          <h2 className="text-[10px] font-bold text-sleep-faint uppercase tracking-widest mb-4">
            {mode === 'wake' ? 'Go to sleep at...' : 'Set your alarm for...'}
          </h2>
          <div className="space-y-3">
            {results.map((r, i) => (
              <SleepResult key={i} {...r} />
            ))}
          </div>
          <p className="mt-4 text-xs text-sleep-faint leading-relaxed">
            {mode === 'wake'
              ? 'Times include 15 minutes to fall asleep. Sleep cycles are approximately 90 minutes each.'
              : 'Wake times include 15 minutes to fall asleep after your bedtime.'}
          </p>

          {/* Affiliate bridge — only shows after results */}
          <div className="mt-8 rounded-2xl bg-sleep-surface border border-sleep-border p-6">
            <h2 className="text-sm font-bold text-sleep-text mb-2">Still can&apos;t fall asleep?</h2>
            <p className="text-sm text-sleep-muted mb-4">
              Your mattress might be the problem. A sleep-optimized mattress can reduce the time it takes to fall asleep by 20+ minutes.
            </p>
            <Link
              to="/best-mattresses"
              className="inline-flex items-center gap-2 text-xs font-bold text-sleep-accent hover:underline"
            >
              See our mattress recommendations &rarr;
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
