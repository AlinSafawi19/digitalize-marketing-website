import { Link } from 'react-router-dom'
import { Check, QrCode } from 'lucide-react'

export default function PricingPage() {
  return (
    <div className="bg-white">
      {/* Pricing Tiers */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Trial */}
            <div className="border-2 border-gray-200 rounded-lg p-8">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Free Trial</h2>
                <div className="text-4xl font-bold text-primary-600 mb-2">FREE</div>
                <p className="text-gray-600">Try all features risk-free</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Full access to all features</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>2 users included</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Phone support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No credit card required</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </li>
              </ul>
              <Link to="/free-trial" className="btn-primary w-full text-center block">
                Start Free Trial
              </Link>
            </div>

            {/* Standard License */}
            <div className="border-2 border-primary-600 rounded-lg p-8 relative">
              <div className="absolute top-0 right-0 bg-primary-600 text-white px-4 py-1 rounded-bl-lg rounded-tr-lg text-sm font-semibold">
                After Free Trial
              </div>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold mb-2">Standard License</h2>
                <div className="text-4xl font-bold text-primary-600 mb-2">$350</div>
                <p className="text-gray-600">One-time setup fee</p>
                <p className="text-sm text-gray-500 mt-2">+ $50/year subscription</p>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                <p className="text-sm text-blue-800">
                  <strong>How it works:</strong> Start with a free license. When you're ready to continue, 
                  pay $350 and your free license automatically converts to a Standard License. All your data is preserved.
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All features included</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>2 users included</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Additional users: $25 each</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Annual subscription: $50/year</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Phone support</span>
                </li>
                <li className="flex items-start">
                  <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Updates and maintenance</span>
                </li>
              </ul>
              <div className="text-center text-sm text-gray-600">
                <p>Start with a <Link to="/free-trial" className="text-primary-600 font-semibold hover:underline">free license</Link> first</p>
              </div>
            </div>
          </div>

          {/* Pricing Example */}
          <div className="mt-12 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-6">Pricing Example</h3>
            <div className="bg-gray-50 rounded-lg p-6">
              <p className="text-gray-700 mb-4">
                <strong>Example:</strong> If you need 5 users total:
              </p>
              <div className="space-y-2 text-gray-700">
                <div className="flex justify-between">
                  <span>Initial License Fee:</span>
                  <span className="font-semibold">$350.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Annual Subscription:</span>
                  <span className="font-semibold">$50.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Additional Users (3 × $25):</span>
                  <span className="font-semibold">$75.00</span>
                </div>
                <div className="border-t pt-2 mt-2 flex justify-between text-lg font-bold">
                  <span>First Year Total:</span>
                  <span className="text-primary-600">$475.00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Payment Method</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <div className="flex items-start">
                <QrCode className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-blue-800 mb-2">Payments via QR Code Only</h3>
                  <p className="text-blue-700">
                    All payments are made using QR code scanning through the "Whish Me" payment system. 
                    Simply scan the QR code for the amount you need to pay - the amount is pre-set in each QR code.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-gray-800 mb-4 text-center">QR Code Payments Available</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white border-2 border-primary-600 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">$350</div>
                  <p className="text-sm text-gray-600 mb-3">Initial License</p>
                  <div className="bg-gray-100 rounded p-3 mb-3 flex items-center justify-center">
                    <img 
                      src="/qr-code-350.jpg" 
                      alt="QR Code for $350 initial license payment" 
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-500">Scan to pay $350.00</p>
                </div>
                <div className="bg-white border-2 border-primary-600 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-2">$50</div>
                  <p className="text-sm text-gray-600 mb-3">Annual Subscription</p>
                  <div className="bg-gray-100 rounded p-3 mb-3 flex items-center justify-center">
                    <img 
                      src="/qr-code-50.jpg" 
                      alt="QR Code for $50 annual subscription payment" 
                      className="w-32 h-32 object-contain"
                    />
                  </div>
                  <p className="text-xs text-gray-500">Scan to pay $50.00</p>
                </div>
              </div>
              <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                <h4 className="font-semibold text-blue-800 mb-2">How QR Code Payment Works:</h4>
                <ol className="text-blue-700 space-y-1 list-decimal list-inside text-sm">
                  <li>Open your payment app (banking app, mobile wallet, etc.)</li>
                  <li>Scan the QR code for the amount you need to pay</li>
                  <li>The amount is pre-set in the QR code - just confirm</li>
                  <li>Complete the transfer</li>
                  <li>Send payment confirmation screenshot</li>
                  <li>License activated upon confirmation</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Full software license</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>All features and updates</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Email support</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>License activation on your device(s)</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Hardware compatibility support</span>
              </div>
              <div className="flex items-start">
                <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span>Regular software updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">How many devices can I use?</h3>
                <p className="text-gray-600">
                  Your license can be activated on multiple devices based on your user limit. Each user can activate the software on their device.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">Can I add more users later?</h3>
                <p className="text-gray-600">
                  Yes! You can add additional users at any time for $25 per user. Contact us to increase your user limit.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">What happens after the free trial?</h3>
                <p className="text-gray-600">
                  When you're ready to continue, simply pay $350 for the initial license. Your free license will automatically convert to a Standard License. All your data, products, transactions, and settings are preserved - no data loss, no re-setup required.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">How do I renew my subscription?</h3>
                <p className="text-gray-600">
                  Annual subscriptions are $50/year. You'll receive a renewal notice before expiration. Payment is made via QR code scanning - simply scan the $50 QR code to renew.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-2">Can I pay immediately after creating a free license?</h3>
                <p className="text-gray-600">
                  Yes! If you're ready to convert to a Standard License right away, you can pay the $350 initial license fee immediately. Your free license will convert to a Standard License upon payment confirmation, and you'll continue with all your data intact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Start with a free license today. Convert to Standard License when you're ready to continue.
          </p>
          <Link to="/free-trial" className="btn-primary bg-white text-primary-600 hover:bg-primary-50 inline-block">
            Start Free License
          </Link>
        </div>
      </section>
    </div>
  )
}

