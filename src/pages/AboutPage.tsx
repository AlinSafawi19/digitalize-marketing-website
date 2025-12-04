import { Link } from 'react-router-dom'
import { Target, Zap, Shield, Code } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Our Story */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-lg mb-4">
                DigitalizePOS was born from a simple need: to provide stores and businesses 
                with a powerful, easy-to-use point of sale system that doesn't break the bank.
              </p>
              <p className="text-lg mb-4">
                We understand the challenges that small and medium-sized businesses face when it comes to 
                managing their operations. That's why we've built DigitalizePOS with a focus on simplicity, 
                reliability, and affordability.
              </p>
              <p className="text-lg">
                Our mission is to help businesses streamline their operations, reduce errors, and make 
                data-driven decisions that drive growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To empower stores and businesses with affordable, professional-grade POS 
                software that simplifies operations and drives growth.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To become the go-to POS solution for small and medium-sized retail businesses, known for 
                reliability, ease of use, and exceptional value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why DigitalizePOS */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose DigitalizePOS?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Efficient</h3>
              <p className="text-gray-600">
                Streamlined interface designed for speed. Process transactions quickly and keep your customers happy.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliable & Secure</h3>
              <p className="text-gray-600">
                Built with security in mind. Your data is safe with local storage and secure license activation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Modern Technology</h3>
              <p className="text-gray-600">
                Built with the latest technologies for performance and reliability. Regular updates keep you current.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <p className="text-gray-700 mb-6">
                DigitalizePOS is built using modern, reliable technologies to ensure the best performance and user experience:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Frontend & Framework</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Electron 27+</li>
                    <li>• React 18+</li>
                    <li>• TypeScript</li>
                    <li>• Material-UI (MUI) 5.15+</li>
                    <li>• Redux Toolkit 2.0+</li>
                    <li>• Tailwind CSS 3.4+</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Backend & Database</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• SQLite with Prisma 5.7+</li>
                    <li>• better-sqlite3 9.2+</li>
                    <li>• Node.js 18+</li>
                    <li>• Express.js (License Server)</li>
                    <li>• PostgreSQL (License Server)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Build Tools</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Vite 5.0+</li>
                    <li>• TypeScript 5.3+</li>
                    <li>• Electron Builder</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Platform</h4>
                  <ul className="text-gray-600 space-y-1 text-sm">
                    <li>• Windows 10+ (64-bit)</li>
                    <li>• Desktop Application</li>
                    <li>• Offline-capable</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Version Information */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Version Information</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 border-l-4 border-primary-600 p-6 mb-6">
              <h3 className="font-semibold text-primary-800 mb-2">Grocery POS Version</h3>
              <p className="text-gray-700 mb-3">
                DigitalizePOS is currently available in one version: <strong>Grocery POS</strong> (v1.0.0). 
                This version is specifically designed for grocery stores and retail businesses.
              </p>
              <p className="text-gray-700 font-semibold">
                <strong>Note:</strong> There are no other versions planned or coming soon. We focus exclusively on providing the best grocery POS solution.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <h3 className="font-semibold mb-2">POS Desktop App</h3>
                <div className="text-2xl font-bold text-primary-600 mb-1">v1.0.0</div>
                <p className="text-sm text-gray-600">Grocery version</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <h3 className="font-semibold mb-2">License Server</h3>
                <div className="text-2xl font-bold text-primary-600 mb-1">v1.0.0</div>
                <p className="text-sm text-gray-600">Backend service</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <h3 className="font-semibold mb-2">License Frontend</h3>
                <div className="text-2xl font-bold text-primary-600 mb-1">v1.0.0</div>
                <p className="text-sm text-gray-600">Admin interface</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Learn More?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Get in touch with us to learn more about DigitalizePOS
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}

