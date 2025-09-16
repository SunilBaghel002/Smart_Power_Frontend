import React, { useState, useEffect } from 'react';
import { ChevronRight, Zap, Shield, Globe, BarChart3, Cpu, Layers, Users, ArrowRight, Play, CheckCircle, TrendingUp, MapPin, Battery } from 'lucide-react';

export default function Home() {
  const [energyCount, setEnergyCount] = useState(0);
  const [devicesConnected, setDevicesConnected] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Animated counters
    const energyTarget = 47283;
    const devicesTarget = 1247;
    
    const animateCounter = (target, setter, duration = 2000) => {
      let start = 0;
      const increment = target / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setter(target);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 16);
    };

    const timer = setTimeout(() => {
      animateCounter(energyTarget, setEnergyCount);
      animateCounter(devicesTarget, setDevicesConnected);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Arduino-Powered Hardware",
      description: "Piezoelectric sensors integrated with Arduino Uno for real-time step counting and energy measurement"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Blockchain Transparency",
      description: "Immutable energy data storage ensuring complete trust and preventing tampering"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Admin Dashboard",
      description: "Real-time analytics, energy tracking per location, and comprehensive reporting"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Energy Map",
      description: "Transparent visualization of clean energy production worldwide"
    }
  ];

  const stats = [
    { label: "Energy Units Harvested", value: energyCount.toLocaleString(), icon: <Zap className="w-5 h-5" /> },
    { label: "Devices Connected", value: devicesConnected.toLocaleString(), icon: <Cpu className="w-5 h-5" /> },
    { label: "Locations Active", value: "89", icon: <MapPin className="w-5 h-5" /> },
    { label: "Transparency Score", value: "100%", icon: <Shield className="w-5 h-5" /> }
  ];

  const products = [
    {
      name: "Individual Components",
      description: "Piezoelectric sensors, Arduino modules, and supporting hardware",
      price: "From $29",
      features: ["Plug & Play Setup", "Quality Certified", "Technical Support"]
    },
    {
      name: "Complete System",
      description: "Full energy-harvesting solution with integrated monitoring",
      price: "From $199",
      features: ["Hardware + Software", "Blockchain Integration", "Analytics Dashboard"],
      popular: true
    },
    {
      name: "Modular Bricks",
      description: "Scalable building blocks for custom energy harvesting setups",
      price: "From $89",
      features: ["Modular Design", "Easy Integration", "Expandable System"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">EnergyChain</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="hover:text-green-400 transition-colors">Features</a>
              <a href="#products" className="hover:text-green-400 transition-colors">Products</a>
              <a href="#dashboard" className="hover:text-green-400 transition-colors">Dashboard</a>
              <button className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-2 rounded-full hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-medium">Blockchain-Powered Transparency</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Harvest Energy,
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Trust the Data</span>
              </h1>
              
              <p className="text-xl text-gray-300 leading-relaxed">
                Revolutionary platform combining Arduino-powered piezoelectric sensors with blockchain transparency. 
                Monitor, verify, and scale clean energy generation with complete data integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
                <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center space-x-2 font-semibold">
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="flex items-center justify-center text-green-400">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full opacity-40 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Integrated Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hardware meets software in perfect harmony. Arduino sensors, blockchain verification, 
              and intelligent analytics create the most transparent energy platform ever built.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/50 transition-all hover:transform hover:-translate-y-2">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">Choose Your Solution</h2>
            <p className="text-xl text-gray-300">From individual components to complete systems</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg rounded-2xl p-8 border transition-all hover:transform hover:-translate-y-2 ${
                product.popular 
                  ? 'border-green-500/50 ring-2 ring-green-500/20' 
                  : 'border-white/10 hover:border-green-500/30'
              }`}>
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-600 px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p className="text-gray-400 mt-2">{product.description}</p>
                  </div>
                  
                  <div className="text-3xl font-bold text-green-400">{product.price}</div>
                  
                  <ul className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    product.popular
                      ? 'bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700'
                      : 'border border-white/20 hover:bg-white/10'
                  }`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Real-Time 
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Analytics</span>
              </h2>
              
              <p className="text-xl text-gray-300">
                Monitor energy production across all connected devices with our comprehensive admin dashboard. 
                Track performance, analyze trends, and ensure transparency with blockchain-verified data.
              </p>
              
              <div className="space-y-4">
                {[
                  "Real-time energy tracking per location",
                  "Immutable blockchain data verification", 
                  "Global energy production mapping",
                  "Advanced analytics and reporting"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
              
              <button className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center space-x-2 font-semibold">
                <BarChart3 className="w-5 h-5" />
                <span>View Dashboard</span>
              </button>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Energy Dashboard</h3>
                    <div className="flex items-center space-x-2 text-green-400">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm">Live</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/20 rounded-xl p-4">
                      <div className="flex items-center space-x-2 text-green-400 mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">Total Output</span>
                      </div>
                      <div className="text-2xl font-bold">{energyCount.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">kWh Generated</div>
                    </div>
                    
                    <div className="bg-black/20 rounded-xl p-4">
                      <div className="flex items-center space-x-2 text-blue-400 mb-2">
                        <Users className="w-4 h-4" />
                        <span className="text-sm">Active Users</span>
                      </div>
                      <div className="text-2xl font-bold">{devicesConnected.toLocaleString()}</div>
                      <div className="text-xs text-gray-400">Connected Devices</div>
                    </div>
                  </div>
                  
                  <div className="bg-black/20 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-purple-400 mb-3">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Global Distribution</span>
                    </div>
                    <div className="space-y-2">
                      {['North America', 'Europe', 'Asia Pacific'].map((region, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm text-gray-400">{region}</span>
                          <div className="flex items-center space-x-2">
                            <div className="w-16 bg-gray-700 rounded-full h-2">
                              <div 
                                className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                                style={{ width: `${65 - index * 15}%` }}
                              ></div>
                            </div>
                            <span className="text-xs text-gray-400">{65 - index * 15}%</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Transform
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Energy Harvesting?</span>
          </h2>
          
          <p className="text-xl text-gray-300">
            Join the revolution in transparent, blockchain-verified clean energy generation. 
            Start harvesting energy and building trust today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
              <Zap className="w-5 h-5" />
              <span>Start Building</span>
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center justify-center space-x-2 font-semibold">
              <span>Schedule Demo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">EnergyChain</span>
              </div>
              <p className="text-gray-400">
                Transparent energy harvesting powered by blockchain technology.
              </p>
            </div>
            
            {[
              {
                title: "Product",
                links: ["Components", "Complete Systems", "Modular Bricks", "Documentation"]
              },
              {
                title: "Platform",
                links: ["Dashboard", "Analytics", "Blockchain Explorer", "API Access"]
              },
              {
                title: "Support",
                links: ["Help Center", "Community", "Contact Us", "Status Page"]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 EnergyChain. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}