import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Nav from './components/Nav'
import Footer from './components/Footer'

// Eagerly load the home page — it's the entry point and must be instant
import Home from './pages/Home'

// Lazy-load everything else to reduce initial bundle size
const About = lazy(() => import('./pages/About'))
const SleepTips = lazy(() => import('./pages/SleepTips'))
const BestMattresses = lazy(() => import('./pages/BestMattresses'))
const ShiftWorker = lazy(() => import('./pages/ShiftWorker'))
const SleepDebt = lazy(() => import('./pages/SleepDebt'))
const Calculators = lazy(() => import('./pages/Calculators'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const BlogIndex = lazy(() => import('./pages/blog/BlogIndex'))
const WakeUp6am = lazy(() => import('./pages/blog/WakeUp6am'))
const WakeUp7am = lazy(() => import('./pages/blog/WakeUp7am'))
const WakeUp8am = lazy(() => import('./pages/blog/WakeUp8am'))
const WakeUp9am = lazy(() => import('./pages/blog/WakeUp9am'))
const WakeUp10am = lazy(() => import('./pages/blog/WakeUp10am'))
const HowManyCycles = lazy(() => import('./pages/blog/HowManyCycles'))
const BestTimeToWake = lazy(() => import('./pages/blog/BestTimeToWake'))
const SleepDeprivation = lazy(() => import('./pages/blog/SleepDeprivation'))
const TiredAfter8Hours = lazy(() => import('./pages/blog/TiredAfter8Hours'))
const CatchUpOnSleepWeekend = lazy(() => import('./pages/blog/CatchUpOnSleepWeekend'))
const WakeUp5am = lazy(() => import('./pages/blog/WakeUp5am'))
const HowToFallAsleepFast = lazy(() => import('./pages/blog/HowToFallAsleepFast'))
const WakeUpAt3am = lazy(() => import('./pages/blog/WakeUpAt3am'))
const SleepTracking = lazy(() => import('./pages/blog/SleepTracking'))
const SleepEnvironment = lazy(() => import('./pages/blog/SleepEnvironment'))
const PowerNaps = lazy(() => import('./pages/blog/PowerNaps'))
const NotFound = lazy(() => import('./pages/NotFound'))

function PageFallback() {
  return <div className="min-h-screen bg-sleep-bg" />
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-sleep-bg text-sleep-text flex flex-col">
          <Nav />
          <Suspense fallback={<PageFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/sleep-tips" element={<SleepTips />} />
              <Route path="/best-mattresses" element={<BestMattresses />} />
              <Route path="/shift-worker-sleep-calculator" element={<ShiftWorker />} />
              <Route path="/sleep-debt-calculator" element={<SleepDebt />} />
              <Route path="/calculators" element={<Calculators />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/blog" element={<BlogIndex />} />
              <Route path="/blog/what-time-to-go-to-bed-wake-up-6am" element={<WakeUp6am />} />
              <Route path="/blog/what-time-to-sleep-wake-up-7am" element={<WakeUp7am />} />
              <Route path="/blog/what-time-to-go-to-bed-wake-up-8am" element={<WakeUp8am />} />
              <Route path="/blog/what-time-to-go-to-bed-wake-up-9am" element={<WakeUp9am />} />
              <Route path="/blog/what-time-to-go-to-bed-wake-up-10am" element={<WakeUp10am />} />
              <Route path="/blog/how-many-sleep-cycles-do-you-need" element={<HowManyCycles />} />
              <Route path="/blog/best-time-to-wake-up-for-deep-sleep" element={<BestTimeToWake />} />
              <Route path="/blog/sleep-deprivation-effects-one-night" element={<SleepDeprivation />} />
              <Route path="/blog/why-am-i-still-tired-after-8-hours-of-sleep" element={<TiredAfter8Hours />} />
              <Route path="/blog/can-you-catch-up-on-sleep-on-the-weekend" element={<CatchUpOnSleepWeekend />} />
              <Route path="/blog/what-time-to-go-to-bed-wake-up-5am" element={<WakeUp5am />} />
              <Route path="/blog/how-to-fall-asleep-fast" element={<HowToFallAsleepFast />} />
              <Route path="/blog/why-do-i-wake-up-at-3am-every-night" element={<WakeUpAt3am />} />
              <Route path="/blog/sleep-tracking-what-data-means" element={<SleepTracking />} />
              <Route path="/blog/sleep-environment-optimization" element={<SleepEnvironment />} />
              <Route path="/blog/power-naps-science-short-sleep" element={<PowerNaps />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
