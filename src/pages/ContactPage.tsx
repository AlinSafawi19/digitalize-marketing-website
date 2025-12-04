import { Phone } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="bg-white rounded-lg p-8 border-2 border-primary-600 shadow-lg text-center">
              <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4">Phone</h3>
              <a 
                href="tel:+1234567890" 
                className="text-4xl font-bold text-primary-600 hover:text-primary-700 transition-colors block mb-4"
              >
                +961 71 882 088
              </a>
              <p className="text-gray-600 mb-6">
                Call us any time for immediate assistance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Link */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Check out our FAQ section for answers to common questions
            </p>
            <a href="/support" className="btn-primary">
              View FAQ
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
