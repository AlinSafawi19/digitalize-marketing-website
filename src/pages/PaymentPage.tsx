import { Link } from 'react-router-dom'
import { Check, QrCode, Key } from 'lucide-react'

export default function PaymentPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Payment & License</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Simple payment methods and easy license creation
          </p>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Payment Method</h2>
          
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 max-w-4xl mx-auto">
            <div className="flex items-start">
              <QrCode className="w-6 h-6 text-blue-600 mr-4 mt-0.5 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2 text-lg">Payments via QR Code Only</h3>
                <p className="text-blue-700">
                  All payments are made using QR code scanning through the "Whish Me" payment system. 
                  Simply scan the QR code for the amount you need to pay - the amount is pre-set in each QR code.
                </p>
              </div>
            </div>
          </div>

          {/* QR Code Payments */}
          <div className="max-w-4xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">QR Code Payments (Whish Me)</h3>
            <p className="text-center text-gray-600 mb-8">
              Scan the QR code with your payment app to pay the exact amount. The amount is pre-set in the QR code.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Initial License QR Code */}
              <div className="bg-white border-2 border-primary-600 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">Initial License Payment</h4>
                <div className="text-3xl font-bold text-primary-600 mb-4">$350.00</div>
                <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center">
                  <img 
                    src="/qr-code-350.jpg" 
                    alt="QR Code for $350 initial license payment" 
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Scan this QR code to pay <strong>$350.00</strong> for your initial license
                </p>
                <p className="text-xs text-gray-500">
                  The amount is pre-set - just scan and confirm
                </p>
              </div>

              {/* Annual Subscription QR Code */}
              <div className="bg-white border-2 border-primary-600 rounded-lg p-6 text-center">
                <h4 className="text-xl font-semibold mb-2">Annual Subscription Payment</h4>
                <div className="text-3xl font-bold text-primary-600 mb-4">$50.00</div>
                <div className="bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center">
                  <img 
                    src="/qr-code-50.jpg" 
                    alt="QR Code for $50 annual subscription payment" 
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  Scan this QR code to pay <strong>$50.00</strong> for your annual subscription
                </p>
                <p className="text-xs text-gray-500">
                  The amount is pre-set - just scan and confirm
                </p>
              </div>
            </div>

            {/* How to Use Instructions */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mt-8">
              <h3 className="font-semibold text-blue-800 mb-3 text-lg flex items-center">
                <QrCode className="w-5 h-5 mr-2" />
                How to Pay with QR Code:
              </h3>
              <ol className="text-blue-700 space-y-2 list-decimal list-inside">
                <li>Open your payment app (banking app, mobile wallet, etc.)</li>
                <li>Select "Scan QR Code" or "Pay with QR"</li>
                <li>Scan the appropriate QR code above ($350 for initial license or $50 for annual subscription)</li>
                <li>The payment amount is already set in the QR code - just confirm the payment</li>
                <li>Complete the transfer</li>
                <li>Send payment confirmation screenshot via phone: <a href="tel:+96171882088" className="underline font-semibold">+961 71 882 088</a></li>
                <li>License activated upon confirmation</li>
              </ol>
            </div>
          </div>

          {/* Additional Users Payment */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">Additional Users</h3>
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">$25.00</div>
              <p className="text-gray-600 mb-4">Per additional user</p>
              <p className="text-sm text-gray-600">
                For additional users beyond the 2 included, please contact us for payment instructions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Creating Your License */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Creating Your License</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Trial */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Key className="w-6 h-6 mr-2 text-primary-600" />
                For Free Trial
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Visit our license portal</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Click "Create Free License"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Fill in the form with your information</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Select "Free Trial" option</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Submit the form</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">6.</span>
                  <span>Receive license key via phone</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">7.</span>
                  <span>Download and install DigitalizePOS</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">8.</span>
                  <span>Activate using your license key</span>
                </li>
              </ol>
            </div>

            {/* Paid License */}
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <Key className="w-6 h-6 mr-2 text-primary-600" />
                For Paid License
              </h3>
              <ol className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1.</span>
                  <span>Visit our license portal</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2.</span>
                  <span>Click "Create License"</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3.</span>
                  <span>Fill in the form with your information</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4.</span>
                  <span>Submit the form</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5.</span>
                  <span>Scan the QR code for $350 to pay for your initial license</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">6.</span>
                  <span>Send payment confirmation screenshot</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">7.</span>
                  <span>Receive license key via phone after payment confirmation</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">8.</span>
                  <span>Receive license key via phone</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">9.</span>
                  <span>Download and install DigitalizePOS</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">10.</span>
                  <span>Activate using your license key</span>
                </li>
              </ol>
            </div>
          </div>

          {/* Form Fields Info */}
          <div className="mt-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-center">Information Required</h3>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Business/Store Name</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Your Full Name</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Email Address</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Phone Number</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Location/Branch Name</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Physical Address</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Number of users needed (for paid license)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Important Notes</h2>
            
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                <h3 className="font-semibold text-yellow-800 mb-2">Each Branch Requires a Separate License</h3>
                <p className="text-yellow-700">Each branch/location requires its own license. License is tied to your email and location name.</p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h3 className="font-semibold text-blue-800 mb-2">License Activation</h3>
                <p className="text-blue-700">License can be activated on multiple devices based on your user limit. Activation requires internet connection and uses hardware fingerprinting for security.</p>
              </div>

              <div className="bg-green-50 border-l-4 border-green-500 p-4">
                <h3 className="font-semibold text-green-800 mb-2">Payment Confirmation</h3>
                <p className="text-green-700">After payment, send confirmation via phone to <a href="tel:+96171882088" className="underline font-semibold">+961 71 882 088</a> with your license key/order number, payment method, date, amount, and screenshot (for QR payments).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your License?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Start with a free trial or purchase a license today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/free-trial" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
              Start Free Trial
            </Link>
            <Link to="/download" className="btn-secondary bg-transparent border-white text-white hover:bg-white/10">
              Download First
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

