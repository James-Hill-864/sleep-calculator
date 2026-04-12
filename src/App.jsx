import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import SleepTips from './pages/SleepTips'
import BestMattresses from './pages/BestMattresses'
import ShiftWorker from './pages/ShiftWorker'

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
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  )
}
