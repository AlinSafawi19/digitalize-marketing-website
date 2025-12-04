import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Download, Key, Mail, Monitor, CreditCard, RefreshCw, Hand, Copy, CheckCircle, AlertCircle } from 'lucide-react'

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api'

interface LicenseFormData {
  customerName: string
  customerEmail: string
  locationName: string
  locationAddress: string
}

interface LicenseResponse {
  licenseKey: string
  licenseId: number
  status: string
  expiresAt: string
}

export default function FreeTrialPage() {
  const [formData, setFormData] = useState<LicenseFormData>({
    customerName: '',
    customerEmail: '',
    locationName: '',
    locationAddress: '',
  })
  const [errors, setErrors] = useState<Partial<Record<keyof LicenseFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [licenseKey, setLicenseKey] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (errors[name as keyof LicenseFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Only handle Enter for input fields, not textareas (textareas need Enter for new lines)
    if (e.key === 'Enter' && e.currentTarget.tagName === 'INPUT') {
      e.preventDefault()
      const form = e.currentTarget.form
      if (!form) return

      const formElements = Array.from(form.elements) as HTMLElement[]
      const currentIndex = formElements.indexOf(e.currentTarget)
      const nextElement = formElements[currentIndex + 1] as HTMLElement | null

      if (nextElement) {
        // If next element is a button, submit the form
        if (nextElement.tagName === 'BUTTON' || (nextElement as HTMLInputElement).type === 'submit') {
          form.requestSubmit()
        } else {
          // Otherwise, focus the next element
          nextElement.focus()
        }
      } else {
        // If we're at the last field, submit the form
        form.requestSubmit()
      }
    }
  }

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof LicenseFormData, string>> = {}
    
    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required'
    }
    
    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = 'Please enter a valid email address'
    }
    
    if (!formData.locationName.trim()) {
      newErrors.locationName = 'Location name is required'
    }
    
    if (!formData.locationAddress.trim()) {
      newErrors.locationAddress = 'Location address is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }
    
    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch(`${API_BASE_URL}/license/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customerName: formData.customerName.trim(),
          customerEmail: formData.customerEmail.trim(),
          locationName: formData.locationName.trim(),
          locationAddress: formData.locationAddress.trim(),
          isFreeTrial: true,
          version: 'grocery',
        }),
      })
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'Failed to create license' }))
        throw new Error(errorData.message || 'Failed to create license')
      }
      
      const result = await response.json()
      const licenseData: LicenseResponse = result.data
      setLicenseKey(licenseData.licenseKey)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create license. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCopy = async () => {
    if (!licenseKey) return
    
    try {
      await navigator.clipboard.writeText(licenseKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  if (licenseKey) {
    return (
      <div className="bg-white">
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white section-padding">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">License Created Successfully!</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Your free trial license has been created
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">License Created Successfully</h3>
                    <p className="text-green-700">
                      Your free trial license has been created. Please save your license key below.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white border-2 border-primary-600 rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-lg mb-4">Your License Key</h3>
                <div className="flex items-center gap-3 bg-gray-50 p-4 rounded border border-gray-200 mb-4">
                  <code className="flex-1 text-lg font-mono break-all">{licenseKey}</code>
                  <button
                    onClick={handleCopy}
                    className="flex-shrink-0 px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors flex items-center gap-2"
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Important:</strong> Please save this license key. You'll need it to activate DigitalizePOS. 
                  This key will also be sent to you via phone.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-6">
                <h3 className="font-semibold text-blue-800 mb-3">Next Steps:</h3>
                <ol className="space-y-2 text-blue-700 list-decimal list-inside">
                  <li>Download DigitalizePOS from the <Link to="/download" className="underline font-semibold">Download page</Link></li>
                  <li>Install the software on your Windows computer</li>
                  <li>Launch DigitalizePOS and enter your license key when prompted</li>
                  <li>An admin user account will be automatically created using your email</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/download" className="btn-primary text-center">
                  Download DigitalizePOS
                </Link>
                <Link to="/free-trial" className="btn-secondary text-center" onClick={() => {
                  setLicenseKey(null)
                  setFormData({
                    customerName: '',
                    customerEmail: '',
                    locationName: '',
                    locationAddress: '',
                  })
                }}>
                  Create Another License
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  return (
    <div className="bg-white">
      {/* License Creation Form */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Create Your Free License</h2>
            
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle className="w-6 h-6 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-800 mb-1">Error</h3>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <div className="bg-white border-2 border-primary-600 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="customerName"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
                      errors.customerName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="John Doe"
                  />
                  {errors.customerName && (
                    <p className="mt-1 text-sm text-red-600">{errors.customerName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="customerEmail"
                    name="customerEmail"
                    value={formData.customerEmail}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
                      errors.customerEmail ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.customerEmail && (
                    <p className="mt-1 text-sm text-red-600">{errors.customerEmail}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    This email will be used to create your admin account in DigitalizePOS
                  </p>
                </div>

                <div>
                  <label htmlFor="locationName" className="block text-sm font-medium text-gray-700 mb-2">
                    Branch/Location Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="locationName"
                    name="locationName"
                    value={formData.locationName}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
                      errors.locationName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="ABC Grocery Shop"
                  />
                  {errors.locationName && (
                    <p className="mt-1 text-sm text-red-600">{errors.locationName}</p>
                  )}
                  <p className="mt-1 text-xs text-gray-500">
                    Each branch/location requires a separate license
                  </p>
                </div>

                <div>
                  <label htmlFor="locationAddress" className="block text-sm font-medium text-gray-700 mb-2">
                    Branch/Location Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="locationAddress"
                    name="locationAddress"
                    value={formData.locationAddress}
                    onChange={handleChange}
                    rows={3}
                    className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:outline-none ${
                      errors.locationAddress ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="123 Main Street, City, Country"
                  />
                  {errors.locationAddress && (
                    <p className="mt-1 text-sm text-red-600">{errors.locationAddress}</p>
                  )}
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> This will create a free trial license. You can convert it to a paid license later by making a payment.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Creating License...
                    </>
                  ) : (
                    <>
                      <Key className="w-5 h-5 mr-2" />
                      Create Free License
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What Happens Next</h2>
            
            <div className="space-y-8">
              {/* Step 2 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    2
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Mail className="w-6 h-6 mr-2 text-primary-600" />
                    Receive Your License Key
                  </h3>
                  <p className="text-gray-600 mb-4">
                    After submitting the form, you'll immediately receive:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Your unique license key displayed on screen</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>License key displayed on screen and sent via phone</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Download link for DigitalizePOS</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    3
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Download className="w-6 h-6 mr-2 text-primary-600" />
                    Download & Install
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Download DigitalizePOS v1.0.0 and install on your Windows computer.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-2">System Requirements:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Windows 10 or later</li>
                      <li>• Minimum 4GB RAM (8GB recommended)</li>
                      <li>• 500MB free disk space</li>
                      <li>• Internet connection for activation</li>
                    </ul>
                  </div>
                  <Link to="/download" className="text-primary-600 font-semibold hover:underline">
                    Download DigitalizePOS →
                  </Link>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    4
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Key className="w-6 h-6 mr-2 text-primary-600" />
                    Activate Your License
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Launch DigitalizePOS and enter your license key. The system will automatically:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Validate your license</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Activate on your device</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Create your admin account automatically</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Step 5 */}
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    5
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-semibold mb-4 flex items-center">
                    <Monitor className="w-6 h-6 mr-2 text-primary-600" />
                    Start Using
                  </h3>
                  <p className="text-gray-600 mb-4">
                    You're all set! Now you can:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Log in with your admin account</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Set up your store information</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Start adding products and making sales!</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Trial Features */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Free Trial Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Full Access</h3>
                    <p className="text-gray-600 text-sm">Access to all features and functionality</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">2 Users Included</h3>
                    <p className="text-gray-600 text-sm">Perfect for small teams to test the system</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">All POS Functionality</h3>
                    <p className="text-gray-600 text-sm">Complete point of sale features</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Complete Inventory</h3>
                    <p className="text-gray-600 text-sm">Full inventory management system</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Reports & Analytics</h3>
                    <p className="text-gray-600 text-sm">All reporting features available</p>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone Support</h3>
                    <p className="text-gray-600 text-sm">Call us for immediate assistance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial Duration */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Trial Duration</h2>
            <div className="bg-primary-50 border-l-4 border-primary-500 p-6 mb-6">
              <p className="text-lg text-gray-700">
                Your free trial includes full access to all features. The trial duration will be specified when you create your license.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                  <CreditCard className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-1">No Credit Card</h3>
                <p className="text-sm text-gray-600">No payment information required</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                  <RefreshCw className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-1">No Auto-Charges</h3>
                <p className="text-sm text-gray-600">No automatic charges after trial</p>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3">
                  <Hand className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold mb-1">Cancel Anytime</h3>
                <p className="text-sm text-gray-600">Stop using anytime, no questions asked</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* After Trial */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6">After Your Trial</h2>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="space-y-4">
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Continue with Paid License</h3>
                    <p className="text-gray-600">Upgrade to a full license ($350 initial + $50/year)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Keep All Your Data</h3>
                    <p className="text-gray-600">All your products, transactions, and settings are preserved</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Seamless Transition</h3>
                    <p className="text-gray-600">No data loss, no re-setup required</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
