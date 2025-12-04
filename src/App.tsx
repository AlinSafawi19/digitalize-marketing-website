import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import FeaturesPage from './pages/FeaturesPage'
import PricingPage from './pages/PricingPage'
import FreeTrialPage from './pages/FreeTrialPage'
import HardwarePage from './pages/HardwarePage'
import PaymentPage from './pages/PaymentPage'
import DownloadPage from './pages/DownloadPage'
import SupportPage from './pages/SupportPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/free-trial" element={<FreeTrialPage />} />
            <Route path="/hardware" element={<HardwarePage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/download" element={<DownloadPage />} />
            <Route path="/support" element={<SupportPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

