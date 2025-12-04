import { Check, Monitor, Printer, Scan, CreditCard, Package, Scale } from 'lucide-react'

export default function HardwarePage() {
  return (
    <div className="bg-white">
      {/* Required Hardware */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Required Hardware</h2>
          
          <div className="space-y-6 mb-12">
            {/* Computer */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Monitor className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">Computer</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Operating System:</span>
                      <span>Windows 10 or later (64-bit)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Processor:</span>
                      <span>Intel Core i3 or equivalent (minimum)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">RAM:</span>
                      <span>4GB minimum (8GB recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Storage:</span>
                      <span>500MB free disk space (1GB recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Display:</span>
                      <span>1024x768 minimum resolution (1920x1080 recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold mr-2">Internet:</span>
                      <span>Required for initial activation and license validation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Printer */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Printer className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">Printer (for receipts)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Thermal receipt printer (recommended)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Or any Windows-compatible printer</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>USB or network connection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Barcode Scanner */}
            <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
              <div className="flex items-start mb-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                  <Scan className="w-6 h-6 text-primary-600" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-3">Barcode Scanner (optional but recommended)</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>USB barcode scanner</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Or wireless barcode scanner</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Compatible with standard barcode formats (EAN, UPC, Code 128)</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Hardware */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Recommended Hardware</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Computer</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Operating System: Windows 11 (64-bit)</li>
                <li>• Processor: Intel Core i5 or better</li>
                <li>• RAM: 8GB or more</li>
                <li>• Storage: SSD with 2GB+ free space</li>
                <li>• Display: 1920x1080 or higher resolution</li>
                <li>• Internet: Stable broadband connection</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Printer</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 80mm thermal receipt printer</li>
                <li>• Auto-cutter feature</li>
                <li>• High-speed printing</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Barcode Scanner</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• 2D barcode scanner (supports QR codes)</li>
                <li>• Wireless connectivity</li>
                <li>• Long battery life</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Cash Drawer (optional)</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• USB cash drawer</li>
                <li>• Compatible with receipt printer</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Customer Display (optional)</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>• Secondary monitor for customer-facing display</li>
                <li>• Shows transaction totals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Optional Hardware */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Optional Hardware</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <Package className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Label Printer</h3>
              <p className="text-gray-600 text-sm">For product labeling and barcode label generation</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <Scale className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Scale (for weighted items)</h3>
              <p className="text-gray-600 text-sm">USB scale integration for produce and bulk items</p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <CreditCard className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-xl font-semibold mb-2">Card Reader (for future payment integration)</h3>
              <p className="text-gray-600 text-sm">EMV card reader with contactless payment support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware We Provide */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-4 text-center">Hardware We Provide</h2>
          <p className="text-xl text-center text-primary-100 mb-8 max-w-3xl mx-auto">
            We provide whatever hardware you need - customized to your specific requirements
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg text-white/90 mb-6 text-center leading-relaxed">
                We don't offer pre-packaged hardware bundles. Instead, we work with you to provide exactly what your business needs. 
                Whether you need a complete POS setup or just specific components, we'll customize the hardware solution for you.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Check className="w-6 h-6 mr-2" />
                    Custom Solutions
                  </h3>
                  <p className="text-white/80">
                    Tell us what you need and we'll provide the exact hardware configuration for your store
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Check className="w-6 h-6 mr-2" />
                    Flexible Options
                  </h3>
                  <p className="text-white/80">
                    Choose from individual components or complete setups - we provide whatever you require
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Check className="w-6 h-6 mr-2" />
                    Installation & Setup
                  </h3>
                  <p className="text-white/80">
                    Professional installation and configuration of all hardware components
                  </p>
                </div>
                
                <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Check className="w-6 h-6 mr-2" />
                    Ongoing Support
                  </h3>
                  <p className="text-white/80">
                    Technical support and assistance for all hardware we provide
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-lg mb-4">Need hardware for your store?</p>
            <a href="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Need Help with Hardware?</h2>
            <p className="text-xl text-gray-600 mb-6">
              We're here to help you choose the right hardware for your needs
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Hardware Inquiries</h3>
                <p className="text-sm text-gray-600">Get recommendations for your specific needs</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Custom Configurations</h3>
                <p className="text-sm text-gray-600">We provide whatever hardware you need, customized to your requirements</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Bulk Orders</h3>
                <p className="text-sm text-gray-600">Special pricing for multiple locations</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="font-semibold mb-2">Installation Services</h3>
                <p className="text-sm text-gray-600">Professional installation and setup</p>
              </div>
            </div>
            <a href="/contact" className="btn-primary mt-8 inline-block">
              Contact Us for Hardware Support
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

