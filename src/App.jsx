import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import SleepTips from './pages/SleepTips'
import BestMattresses from './pages/BestMattresses'
import ShiftWorker from './pages/ShiftWorker'
import SleepDebt from './pages/SleepDebt'
import BlogIndex from './pages/blog/BlogIndex'
import WakeUp6am from './pages/blog/WakeUp6am'
import WakeUp7am from './pages/blog/WakeUp7am'
import HowManyCycles from './pages/blog/HowManyCycles'
import BestTimeToWake from './pages/blog/BestTimeToWake'
import SleepDeprivation from './pages/blog/SleepDeprivation'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-sleep-bg text-sleep-text flex flex-col">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sleep-tips" element={<SleepTips />} />
            <Route path="/best-mattresses" element={<BestMattresses />} />
            <Route path="/shift-worker-sleep-calculator" element={<ShiftWorker />} />
            <Route path="/sleep-debt-calculator" element={<SleepDebt />} />
            <Route path="/blog" element={<BlogIndex />} />
            <Route path="/blog/what-time-to-go-to-bed-wake-up-6am" element={<WakeUp6am />} />
            <Route path="/blog/what-time-to-sleep-wake-up-7am" element={<WakeUp7am />} />
            <Route path="/blog/how-many-sleep-cycles-do-you-need" element={<HowManyCycles />} />
            <Route path="/blog/best-time-to-wake-up-for-deep-sleep" element={<BestTimeToWake />} />
            <Route path="/blog/sleep-deprivation-effects-one-night" element={<SleepDeprivation />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
