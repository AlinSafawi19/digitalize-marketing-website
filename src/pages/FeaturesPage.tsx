import { 
  ShoppingCart, 
  Package, 
  Tags, 
  Warehouse, 
  ShoppingBag, 
  Users, 
  FileText,
  BarChart3,
  Receipt,
  Settings,
  Key,
  Database,
  TrendingUp,
  AlertCircle,
  QrCode,
  DollarSign,
  WifiOff
} from 'lucide-react'

export default function FeaturesPage() {
  const features = [
    {
      icon: ShoppingCart,
      title: 'Point of Sale (POS)',
      description: 'Fast and intuitive checkout process with support for sales and returns',
      details: [
        'Quick checkout with barcode scanning',
        'Handle sales and returns seamlessly',
        'Multiple payment methods support',
        'Real-time receipt generation',
        'Automatic inventory updates',
        'Transaction history tracking'
      ]
    },
    {
      icon: Package,
      title: 'Product Management',
      description: 'Complete product catalog management with categories and pricing',
      details: [
        'Add, edit, and delete products',
        'Organize products by categories',
        'Barcode management and scanning',
        'Product details and pricing',
        'Advanced search and filtering',
        'Bulk product operations'
      ]
    },
    {
      icon: Tags,
      title: 'Category Management',
      description: 'Organize your products with flexible category system',
      details: [
        'Create and manage categories',
        'Hierarchical category structure',
        'Category-based reporting',
        'Quick category filtering'
      ]
    },
    {
      icon: Warehouse,
      title: 'Inventory Management',
      description: 'Real-time stock tracking and inventory control',
      details: [
        'Real-time stock levels',
        'Low stock alerts',
        'Stock movement history',
        'Manual stock adjustments',
        'Expiry date tracking',
        'Multi-location support'
      ]
    },
    {
      icon: ShoppingBag,
      title: 'Purchase Orders',
      description: 'Complete purchase order and supplier management',
      details: [
        'Create and manage purchase orders',
        'Supplier management system',
        'Receive goods tracking',
        'Purchase order history',
        'Supplier performance tracking',
        'Order status management'
      ]
    },
    {
      icon: Users,
      title: 'Supplier Management',
      description: 'Manage your suppliers and vendor relationships',
      details: [
        'Supplier contact information',
        'Purchase history tracking',
        'Supplier performance metrics',
        'Contact management'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Pricing & Promotions',
      description: 'Dynamic pricing rules and promotional campaigns',
      details: [
        'Flexible pricing rules',
        'Promotional campaigns',
        'Discount management',
        'Pricing history tracking',
        'Bulk pricing updates',
        'Time-based promotions'
      ]
    },
    {
      icon: Receipt,
      title: 'Transactions',
      description: 'Complete transaction management and history',
      details: [
        'Full transaction history',
        'Sales and returns tracking',
        'Transaction search and filtering',
        'Receipt reprinting',
        'Transaction details view',
        'Void transaction support'
      ]
    },
    {
      icon: FileText,
      title: 'Reports & Analytics',
      description: 'Comprehensive reporting system for all aspects of your business',
      details: [
        'Sales reports (daily, weekly, monthly)',
        'Financial reports',
        'Inventory reports',
        'Product performance reports',
        'Purchase and supplier reports',
        'Sales comparison reports',
        'Scheduled automated reports',
        'Export to PDF/Excel'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Visual analytics and real-time insights',
      details: [
        'Real-time sales trends',
        'Top products analysis',
        'Sales by cashier',
        'Inventory status charts',
        'Visual data representations',
        'Customizable dashboards'
      ]
    },
    {
      icon: Users,
      title: 'User Management',
      description: 'Multi-user support with role-based permissions',
      details: [
        'Multi-user support',
        'Role-based permissions',
        'Cashier management',
        'User activity tracking',
        'Secure authentication',
        'Password management'
      ]
    },
    {
      icon: Database,
      title: 'Backup & Restore',
      description: 'Data protection and recovery system',
      details: [
        'Automated backups',
        'Manual backup creation',
        'Data restore functionality',
        'Backup scheduling',
        'Data security',
        'Export/import capabilities'
      ]
    },
    {
      icon: Settings,
      title: 'Settings & Configuration',
      description: 'Customize your system to match your needs',
      details: [
        'Store information management',
        'Tax configuration',
        'Dual currency support (USD/LBP)',
        'Receipt customization',
        'System preferences',
        'Printer configuration'
      ]
    },
    {
      icon: Key,
      title: 'License Management',
      description: 'Secure license activation and management',
      details: [
        'License activation',
        'License status monitoring',
        'Device management',
        'License renewal',
        'Hardware fingerprinting'
      ]
    },
    {
      icon: QrCode,
      title: 'Barcode Scanning',
      description: 'Fast product lookup with barcode scanning',
      details: [
        'USB barcode scanner support',
        'Wireless scanner support',
        'Multiple barcode formats',
        'Quick product lookup',
        'Inventory updates'
      ]
    },
    {
      icon: DollarSign,
      title: 'Dual Currency Support',
      description: 'Support for multiple currencies (USD/LBP)',
      details: [
        'USD and LBP support',
        'Currency conversion',
        'Multi-currency transactions',
        'Currency reporting'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Low Stock Alerts',
      description: 'Never run out of stock with automated alerts',
      details: [
        'Automated low stock notifications',
        'Reorder level management',
        'Alert customization',
        'Email notifications'
      ]
    },
    {
      icon: WifiOff,
      title: 'Offline Operation',
      description: 'Work without internet connection - full functionality offline',
      details: [
        'Complete offline operation',
        'All POS features work without internet',
        'Data syncs when connection is restored',
        'No interruption to your business',
        'Internet only required for initial activation'
      ]
    }
  ]

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="relative text-white overflow-hidden min-h-[400px] md:min-h-[500px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src="/features-header-background.jpg" 
            alt="Features header background" 
            className="w-full h-full object-cover block"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/80 via-neutral-800/75 to-neutral-900/80"></div>
        </div>
        
        <div className="container-custom section-padding relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Features</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Everything you need to run your store efficiently
          </p>
        </div>
      </section>

      {/* Features List */}
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
          <div className="space-y-12">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start"
                >
                  <div className="lg:col-span-1">
                    <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{feature.title}</h2>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {feature.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <span className="text-primary-600 mr-2 mt-1">✓</span>
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience These Features?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Start your free trial today and see how DigitalizePOS can transform your business
          </p>
          <a href="/free-trial" className="btn-primary">
            Start Free Trial
          </a>
        </div>
      </section>
    </div>
  )
}

