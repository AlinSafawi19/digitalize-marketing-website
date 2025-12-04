import { Link } from 'react-router-dom'
import { Download, Monitor, Check, FileText, Database } from 'lucide-react'

export default function DownloadPage() {
  return (
    <div className="bg-white">
      {/* Current Version */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Current Version</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Version</div>
                  <div className="text-2xl font-bold text-primary-600">1.0.0</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Type</div>
                  <div className="text-2xl font-bold text-primary-600">Grocery</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Platform</div>
                  <div className="text-2xl font-bold text-primary-600">Windows</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Architecture</div>
                  <div className="text-2xl font-bold text-primary-600">64-bit</div>
                </div>
              </div>
            </div>

            {/* Download Option */}
            <div className="max-w-md mx-auto mb-8">
              <div className="border-2 border-primary-600 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Download className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Windows Installer</h3>
                <p className="text-gray-600 mb-4">
                  Complete Windows setup package for DigitalizePOS Grocery. One-click installation.
                </p>
                <ul className="space-y-2 text-sm text-gray-700 mb-6 text-left">
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Includes all dependencies</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>One-click installation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Windows 10/11 compatible</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Grocery POS version</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Automatic updates</span>
                  </li>
                </ul>
                <button className="btn-primary w-full">
                  Download DigitalizePOS Grocery
                </button>
                <p className="text-xs text-gray-500 mt-2">File size: ~150 MB</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">System Requirements</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-primary-600" />
                    Minimum Requirements
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Windows 10 or later (64-bit)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>4GB RAM</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>500MB free disk space</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Internet connection for initial activation only</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Works completely offline after activation</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3 flex items-center">
                    <Monitor className="w-5 h-5 mr-2 text-primary-600" />
                    Recommended
                  </h3>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Windows 11 (64-bit)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>8GB RAM or more</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>SSD with 2GB+ free space</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Stable broadband connection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="text-center mt-6">
              <Link to="/hardware" className="text-primary-600 font-semibold hover:underline">
                View detailed hardware requirements →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Instructions */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Installation Instructions</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Download the Installer</h3>
                  <p className="text-gray-600">Click the download button above to get the installer file.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Run the Installer</h3>
                  <p className="text-gray-600">Run the installer as Administrator. Right-click the file and select "Run as administrator".</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Follow the Installation Wizard</h3>
                  <p className="text-gray-600">Follow the on-screen instructions. Choose your installation location if needed.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Installation</h3>
                  <p className="text-gray-600">Wait for the installation to complete. This may take a few minutes.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  5
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Launch DigitalizePOS</h3>
                  <p className="text-gray-600">Launch the application from the Start menu or desktop shortcut.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  6
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Enter Your License Key</h3>
                  <p className="text-gray-600">Enter your license key when prompted. The system will validate and activate your license.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  7
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Complete Setup</h3>
                  <p className="text-gray-600">Create your admin account and set up your store information. You're ready to start!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* First Time Setup */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">First Time Setup</h2>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Launch the application</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Enter your license key (requires internet connection)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Wait for activation (automatic validation)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Create your admin account</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Set up store information</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">6.</span>
                  <span>Configure settings (tax, currency, etc.)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">7.</span>
                  <span>Start using DigitalizePOS!</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Downloads */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Downloads</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">User Manual</h3>
                <p className="text-sm text-gray-600 mb-4">Complete user guide in PDF format</p>
                <button className="btn-secondary text-sm px-4 py-2">Download PDF</button>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <FileText className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Quick Start Guide</h3>
                <p className="text-sm text-gray-600 mb-4">Get started quickly with this guide</p>
                <button className="btn-secondary text-sm px-4 py-2">Download PDF</button>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
                <Database className="w-12 h-12 text-primary-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Sample Data</h3>
                <p className="text-sm text-gray-600 mb-4">Test data for evaluation</p>
                <button className="btn-secondary text-sm px-4 py-2">Download</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Updates */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Software Updates</h2>
            <p className="text-lg text-gray-600 mb-6">
              DigitalizePOS checks for updates automatically. You'll be notified when a new version is available.
            </p>
            <div className="bg-white rounded-lg p-6 border border-gray-200 text-left">
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Check for updates within the app</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Automatic update notifications</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Manual update download available</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Update history and changelog</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Troubleshooting */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Need Help?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/support" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Installation Issues</h3>
                <p className="text-sm text-gray-600">Troubleshooting guide for installation problems</p>
              </Link>
              <Link to="/support" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Activation Problems</h3>
                <p className="text-sm text-gray-600">Help with license activation</p>
              </Link>
              <Link to="/support" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">System Compatibility</h3>
                <p className="text-sm text-gray-600">Check if your system is compatible</p>
              </Link>
              <Link to="/contact" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold mb-2">Contact Support</h3>
                <p className="text-sm text-gray-600">Get help from our support team</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

