import { Link } from 'react-router-dom'
import { 
  ShoppingCart, 
  Package, 
  BarChart3, 
  Users, 
  Receipt, 
  FileText,
  ShoppingBag,
  TrendingUp,
  WifiOff
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Fast & Intuitive POS',
      description: 'Streamlined checkout process with barcode scanning and receipt printing'
    },
    {
      icon: Package,
      title: 'Complete Inventory Management',
      description: 'Real-time stock tracking, low stock alerts, and stock movement history'
    },
    {
      icon: BarChart3,
      title: 'Real-time Sales Analytics',
      description: 'Comprehensive reports and analytics dashboard for data-driven decisions'
    },
    {
      icon: Users,
      title: 'Multi-User Support',
      description: 'Role-based permissions and user management for your team'
    },
    {
      icon: Receipt,
      title: 'Receipt Printing',
      description: 'Professional receipt generation with customizable templates'
    },
    {
      icon: FileText,
      title: 'Comprehensive Reporting',
      description: 'Sales, financial, inventory, and product performance reports'
    },
    {
      icon: ShoppingBag,
      title: 'Purchase Order Management',
      description: 'Complete supplier and purchase order tracking system'
    },
    {
      icon: TrendingUp,
      title: 'Pricing & Promotions',
      description: 'Dynamic pricing rules and promotional campaigns management'
    },
    {
      icon: WifiOff,
      title: 'Offline Operation',
      description: 'Full functionality works offline - no internet required for daily operations'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[600px] md:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/hero-background.jpg" 
            alt="Modern retail store" 
            className="w-full h-full object-cover"
            onError={(e) => {
              // Fallback to gradient if image doesn't exist
              e.currentTarget.style.display = 'none';
            }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-800/75 to-neutral-900/80"></div>
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10 pattern-dots"></div>
        </div>
        
        <div className="container-custom section-padding relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-block mb-6 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="text-sm font-medium">Version 1.0.0 • No credit card required</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Transform Your Store with{' '}
              <span className="text-accent-300">DigitalizePOS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed">
              Professional Desktop Point of Sale System - Built for Modern Businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/free-trial" className="btn-primary bg-white text-primary-800 hover:bg-white hover:text-primary-900 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.06)]">
                Start Free Trial
              </Link>
              <Link to="/features" className="btn-outline">
                View Features
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Grid */}
      <section className="relative section-padding overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/features-background.jpg" 
            alt="Modern retail features" 
            className="w-full h-full object-cover block"
          />
          {/* Light overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/80 to-white/85"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-5 text-neutral-900">
              Everything You Need to Run Your Store
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Powerful features designed specifically for stores and businesses
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="card"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mb-5 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-neutral-900">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </div>
              )
            })}
          </div>
          <div className="text-center mt-12">
            <Link to="/features" className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-800 transition-colors group">
              View All Features
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5 pattern-dots-large"></div>
        <div className="container-custom section-padding text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-5">Ready to Get Started?</h2>
          <p className="text-xl md:text-2xl mb-10 text-white/90 max-w-2xl mx-auto">
            Start your free trial today. No credit card required.
          </p>
          <Link to="/free-trial" className="btn-primary bg-white text-primary-800 hover:bg-white hover:text-primary-900 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15),0_2px_4px_rgba(0,0,0,0.06)] text-lg px-10 py-4">
            Create Free License
          </Link>
        </div>
      </section>
    </div>
  )
}

