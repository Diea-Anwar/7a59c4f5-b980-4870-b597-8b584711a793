import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Globe, Users, Award, TrendingUp, Package, Truck, Shield, ChevronRight, Star, Building2, Factory, Zap, Leaf, Heart, Home as HomeIcon, User, Briefcase, Building, Handshake, MessageCircle } from 'lucide-react';
import { Logo } from '../components/Logo';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigation = [
    { name: 'Home', id: 'home', icon: HomeIcon },
    { name: 'About', id: 'about', icon: User },
    { name: 'Services', id: 'services', icon: Briefcase },
    { name: 'Industries', id: 'industries', icon: Building },
    { name: 'Partners', id: 'partners', icon: Handshake },
    { name: 'Contact', id: 'contact', icon: MessageCircle },
  ];

  const services = [
    {
      title: 'Import & Export Services',
      description: 'Comprehensive international trade solutions with end-to-end logistics support, customs clearance, and documentation handling.',
      icon: Globe,
      features: ['Global sourcing', 'Export documentation', 'Customs clearance', 'Trade compliance'],
      image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Supply Chain Management',
      description: 'Optimized supply chain solutions ensuring timely delivery and cost-effective distribution across multiple markets.',
      icon: Truck,
      features: ['Inventory management', 'Warehousing', 'Distribution', 'Logistics optimization'],
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous quality control processes and certifications to ensure all products meet international standards.',
      icon: Shield,
      features: ['Product inspection', 'Quality testing', 'Certification support', 'Compliance monitoring'],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Market Research & Analysis',
      description: 'In-depth market intelligence and trend analysis to identify new opportunities and optimize trading strategies.',
      icon: TrendingUp,
      features: ['Market analysis', 'Competitor research', 'Trend forecasting', 'Strategic planning'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Product Sourcing',
      description: 'Expert sourcing services connecting you with reliable manufacturers and suppliers worldwide.',
      icon: Package,
      features: ['Supplier verification', 'Price negotiation', 'Sample coordination', 'Order management'],
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Trade Financing',
      description: 'Flexible financing solutions including letters of credit, trade loans, and payment terms optimization.',
      icon: Building2,
      features: ['Letters of credit', 'Trade loans', 'Payment terms', 'Risk mitigation'],
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const industries = [
    {
      name: 'Electronics & Technology',
      description: 'Consumer electronics, semiconductors, telecommunications equipment, and cutting-edge technology solutions.',
      icon: Zap,
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Smartphones & Tablets', 'Computer Hardware', 'Audio Equipment', 'Smart Home Devices']
    },
    {
      name: 'Textiles & Apparel',
      description: 'High-quality fabrics, garments, fashion accessories, and textile manufacturing materials.',
      icon: Package,
      image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Fashion Garments', 'Technical Textiles', 'Home Textiles', 'Accessories']
    },
    {
      name: 'Food & Beverages',
      description: 'Premium food products, beverages, agricultural commodities, and specialty ingredients.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Processed Foods', 'Beverages', 'Agricultural Products', 'Specialty Ingredients']
    },
    {
      name: 'Industrial Equipment',
      description: 'Heavy machinery, manufacturing equipment, tools, and industrial automation solutions.',
      icon: Factory,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Manufacturing Equipment', 'Construction Machinery', 'Industrial Tools', 'Automation Systems']
    },
    {
      name: 'Healthcare & Pharmaceuticals',
      description: 'Medical devices, pharmaceutical products, healthcare equipment, and wellness solutions.',
      icon: Heart,
      image: 'https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Medical Devices', 'Pharmaceuticals', 'Healthcare Equipment', 'Wellness Products']
    },
    {
      name: 'Renewable Energy',
      description: 'Solar panels, wind turbines, energy storage systems, and sustainable energy solutions.',
      icon: Leaf,
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800',
      products: ['Solar Equipment', 'Wind Energy Systems', 'Energy Storage', 'Green Technology']
    }
  ];

  const partners = [
    {
      name: 'Global Manufacturing Corp',
      location: 'Germany',
      partnership: '8+ Years',
      description: 'Leading manufacturer of precision industrial equipment and automation solutions.',
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Asia Pacific Electronics',
      location: 'South Korea',
      partnership: '12+ Years',
      description: 'Premier electronics manufacturer specializing in consumer and commercial technology.',
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'European Textiles Group',
      location: 'Italy',
      partnership: '6+ Years',
      description: 'Luxury textile manufacturer with sustainable and eco-friendly production methods.',
      image: 'https://images.pexels.com/photos/1148957/pexels-photo-1148957.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    },
    {
      name: 'Middle East Energy Solutions',
      location: 'UAE',
      partnership: '10+ Years',
      description: 'Renewable energy systems provider with cutting-edge solar and wind technologies.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 5
    }
  ];

  const stats = [
    { label: 'Years of Experience', value: '15+', icon: Award },
    { label: 'Global Partners', value: '200+', icon: Users },
    { label: 'Countries Served', value: '45+', icon: Globe },
    { label: 'Annual Trade Volume', value: '$10M+', icon: TrendingUp },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechCorp International',
      role: 'Procurement Director',
      content: 'TAG Groups has been instrumental in streamlining our global supply chain. Their expertise in electronics sourcing and quality assurance has saved us both time and money.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'Global Manufacturing Ltd',
      role: 'Supply Chain Manager',
      content: 'Outstanding service and reliability. TAG Groups consistently delivers high-quality products on time and within budget. Their market knowledge is exceptional.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    },
    {
      name: 'Emma Rodriguez',
      company: 'Fashion Forward Inc',
      role: 'Head of Sourcing',
      content: 'The textile sourcing services provided by TAG Groups have been game-changing for our business. Their attention to quality and sustainability aligns perfectly with our values.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150',
      rating: 5
    }
  ];

  const renderHome = () => (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Global Trade
              <span className="block text-blue-300">Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Connecting businesses worldwide through innovative trading solutions, 
              quality products, and exceptional service for over 15 years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => setCurrentPage('services')}
                className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Explore Services
              </button>
              <button 
                onClick={() => setCurrentPage('contact')}
                className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
              >
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive trading solutions designed to accelerate your business growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{backgroundImage: `url(${service.image})`}}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <service.icon className="w-8 h-8 text-primary mr-3" />
                    <h3 className="text-xl font-semibold text-card-foreground">{service.title}</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <ChevronRight className="w-4 h-4 text-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button 
              onClick={() => setCurrentPage('services')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Industries We Serve</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Specialized expertise across diverse industry sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl shadow-lg">
                  <div className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" 
                       style={{backgroundImage: `url(${industry.image})`}}></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center mb-2">
                      <industry.icon className="w-6 h-6 mr-2" />
                      <h3 className="text-xl font-semibold">{industry.name}</h3>
                    </div>
                    <p className="text-sm opacity-90">{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by businesses worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  const renderAbout = () => (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-r from-blue-800 to-sky-700 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">About TAG Groups</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Building bridges in global commerce through innovation, integrity, and excellence
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2024, TAG Group Trading Company emerged from a vision to revolutionize 
                international trade by creating seamless connections between manufacturers and markets 
                worldwide. What started as a small trading operation has grown into a global network 
                spanning 45+ countries.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Our journey began with a simple belief: that quality products and exceptional service 
                should be accessible to businesses everywhere. Today, we facilitate over $500 million 
                in annual trade volume, helping thousands of companies achieve their growth objectives.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="TAG Groups Office" 
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': return renderHome();
      case 'about': return renderAbout();
      case 'services': return <div className="min-h-screen py-20 text-center"><h1 className="text-4xl">Services Page Coming Soon</h1></div>;
      case 'industries': return <div className="min-h-screen py-20 text-center"><h1 className="text-4xl">Industries Page Coming Soon</h1></div>;
      case 'partners': return <div className="min-h-screen py-20 text-center"><h1 className="text-4xl">Partners Page Coming Soon</h1></div>;
      case 'contact': return <div className="min-h-screen py-20 text-center"><h1 className="text-4xl">Contact Page Coming Soon</h1></div>;
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Logo className="h-12 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-primary bg-blue-50'
                      : 'text-foreground hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2" />
                  {item.name}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-foreground hover:text-primary p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMenuOpen(false);
                  }}
                  className={`flex items-center w-full px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                    currentPage === item.id
                      ? 'text-primary bg-blue-50'
                      : 'text-foreground hover:text-primary hover:bg-blue-50'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      {renderCurrentPage()}
    </div>
  );
};

export default Index;