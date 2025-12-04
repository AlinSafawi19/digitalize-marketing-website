import { Link } from 'react-router-dom'
import { Book, Video, HelpCircle, FileText, Download, Phone } from 'lucide-react'

export default function SupportPage() {
  const faqs = [
    {
      question: "How do I install DigitalizePOS?",
      answer: "Download the installer from our download page, run it as administrator, and follow the installation wizard. You'll need a valid license key to activate the software."
    },
    {
      question: "What are the system requirements?",
      answer: "DigitalizePOS requires Windows 10 or later (64-bit), minimum 4GB RAM (8GB recommended), 500MB free disk space, and an internet connection for initial activation only. After activation, the system works completely offline - no internet connection required for daily operations. See our hardware requirements page for details."
    },
    {
      question: "How do I activate my license?",
      answer: "After installation, launch DigitalizePOS and enter your license key when prompted. The system will automatically validate and activate your license. You need an internet connection for activation."
    },
    {
      question: "Can I use DigitalizePOS on multiple computers?",
      answer: "Yes, your license can be activated on multiple devices based on your user limit. Each user can activate the software on their device."
    },
    {
      question: "How do I add more users?",
      answer: "You can add additional users at any time for $25 per user. Contact our support team to increase your user limit."
    },
    {
      question: "What payment methods do you accept?",
      answer: "All payments are made via QR code scanning through the 'Whish Me' payment system. Simply scan the QR code for the amount you need to pay - the amount is pre-set in each QR code."
    },
    {
      question: "How do I renew my subscription?",
      answer: "Annual subscriptions are $50/year. You'll receive a renewal notice before expiration. Payment can be made via the same methods (bank transfer, cash, or QR code)."
    },
    {
      question: "What happens after my free trial ends?",
      answer: "After your free trial ends, you can continue with a paid license. All your data will be preserved, and the transition is seamless with no data loss."
    },
    {
      question: "Do you provide hardware?",
      answer: "Yes! We provide whatever hardware you need - computers, printers, barcode scanners, and more. Contact us to discuss your specific hardware requirements."
    },
    {
      question: "How do I get support?",
      answer: "You can contact our support team via phone at +961 71 882 088. Call us any time for immediate assistance."
    }
  ]

  return (
    <div className="bg-white">
      {/* Getting Started */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Getting Started</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <Book className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Quick Start Guide</h3>
              <p className="text-gray-600 text-center mb-4">Get up and running quickly with our step-by-step guide</p>
              <button className="btn-secondary w-full text-sm">View Guide</button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <Video className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">Video Tutorials</h3>
              <p className="text-gray-600 text-center mb-4">Watch video tutorials to learn the basics</p>
              <button className="btn-secondary w-full text-sm">Watch Videos</button>
            </div>
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <Download className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-center">User Manual</h3>
              <p className="text-gray-600 text-center mb-4">Download the complete user manual in PDF</p>
              <button className="btn-secondary w-full text-sm">Download PDF</button>
            </div>
          </div>
        </div>
      </section>

      {/* User Guides */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">User Guides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <FileText className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">POS Operations</h3>
              <p className="text-sm text-gray-600 mb-4">Learn how to process sales, returns, and manage transactions</p>
              <Link to="#" className="text-primary-600 font-semibold text-sm hover:underline">Read Guide →</Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <FileText className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">Product Management</h3>
              <p className="text-sm text-gray-600 mb-4">Add, edit, and organize your products and categories</p>
              <Link to="#" className="text-primary-600 font-semibold text-sm hover:underline">Read Guide →</Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <FileText className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">Inventory Management</h3>
              <p className="text-sm text-gray-600 mb-4">Track stock levels, manage inventory, and set up alerts</p>
              <Link to="#" className="text-primary-600 font-semibold text-sm hover:underline">Read Guide →</Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <FileText className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">Reports & Analytics</h3>
              <p className="text-sm text-gray-600 mb-4">Generate reports and analyze your business data</p>
              <Link to="#" className="text-primary-600 font-semibold text-sm hover:underline">Read Guide →</Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <FileText className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">User Management</h3>
              <p className="text-sm text-gray-600 mb-4">Set up users, roles, and permissions</p>
              <Link to="#" className="text-primary-600 font-semibold text-sm hover:underline">Read Guide →</Link>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <FileText className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-semibold mb-2">Settings Configuration</h3>
              <p className="text-sm text-gray-600 mb-4">Configure tax, currency, and system preferences</p>
              <Link to="#" className="text-primary-600 font-semibold text-sm hover:underline">Read Guide →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-semibold text-lg mb-2 flex items-start">
                  <HelpCircle className="w-5 h-5 text-primary-600 mr-2 mt-0.5 flex-shrink-0" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 ml-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Get Support</h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="flex items-start mb-6">
                <Phone className="w-8 h-8 text-primary-600 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
                  <p className="text-gray-600 mb-2">
                    Call us directly for immediate assistance.
                  </p>
                  <a href="tel:+96171882088" className="text-primary-600 font-semibold hover:underline text-lg">
                    +961 71 882 088
                  </a>
                  <div className="mt-4 text-sm text-gray-600">
                    <p><strong>Available:</strong> Any time</p>
                    <p><strong>Response:</strong> Immediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link to="/hardware" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Hardware Requirements</h3>
              <p className="text-sm text-gray-600">Check if your hardware is compatible</p>
            </Link>
            <Link to="/download" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Download & Installation</h3>
              <p className="text-sm text-gray-600">Download the software and installation guide</p>
            </Link>
            <Link to="/payment" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">License & Payment</h3>
              <p className="text-sm text-gray-600">Learn about licensing and payment options</p>
            </Link>
            <Link to="/contact" className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="font-semibold mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch with our team</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact our support team and we'll be happy to assist you
          </p>
          <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-primary-50">
            Contact Support
          </Link>
        </div>
      </section>
    </div>
  )
}

