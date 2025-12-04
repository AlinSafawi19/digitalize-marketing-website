import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-300 border-t border-neutral-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <img 
                src="/logo-white.svg" 
                alt="DigitalizePOS" 
                className="h-10 w-auto opacity-90"
              />
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed mb-4">
              Professional Desktop Point of Sale System for grocery shops.
            </p>
            <p className="text-xs text-neutral-500 font-medium">Version 1.0.0</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-base">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/features" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/free-trial" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Free Trial
                </Link>
              </li>
              <li>
                <Link to="/download" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-base">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/support" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/hardware" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Hardware Requirements
                </Link>
              </li>
              <li>
                <Link to="/payment" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Payment & License
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-base">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-white transition-colors duration-200 hover:translate-x-1 inline-block">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="tel:+96171882088" className="text-neutral-400 hover:text-white transition-colors duration-200">
                  +961 71 882 088
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="section-divider mt-12 pt-8 text-center">
          <p className="text-sm text-neutral-500">&copy; {currentYear} DigitalizePOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

