import React, { useState, useEffect } from "react";
import image from "../assets/image.png";
import {
  ChevronRight,
  Zap,
  Shield,
  Globe,
  BarChart3,
  Cpu,
  Layers,
  Users,
  ArrowRight,
  Play,
  CheckCircle,
  TrendingUp,
  MapPin,
  Footprints,
  BatteryCharging,
  Leaf,
  Quote,
} from "lucide-react";

export default function Home() {
  const [energyCount, setEnergyCount] = useState(0);
  const [footstepsCount, setFootstepsCount] = useState(0);

  useEffect(() => {
    // Animated counters
    const energyTarget = 47283;
    const footstepsTarget = 124700;

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
      animateCounter(footstepsTarget, setFootstepsCount);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Eco-Friendly Brick Housing",
      description:
        "Made from 100% recycled plastic waste, creating sustainable infrastructure from environmental waste",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Arduino-Powered Intelligence",
      description:
        "Arduino Uno + TP4056 charging modules + piezoelectric sensors for complete energy harvesting systems",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Energy Monitoring",
      description:
        "Live dashboard showing step counts, voltage output, energy stored, and system efficiency",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Smart City Integration",
      description:
        "Deploy in walkways, campuses, and public spaces to power LED lighting and IoT devices",
    },
  ];

  const stats = [
    {
      label: "Energy Units Generated",
      value: energyCount.toLocaleString(),
      icon: <BatteryCharging className="w-5 h-5" />,
    },
    {
      label: "Footsteps Captured",
      value: footstepsCount.toLocaleString(),
      icon: <Footprints className="w-5 h-5" />,
    },
    {
      label: "Locations Active",
      value: "89",
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      label: "Efficiency Rating",
      value: "98%",
      icon: <TrendingUp className="w-5 h-5" />,
    },
  ];

  const products = [
    {
      name: "Smart Brick Single Unit",
      description:
        "Individual eco-brick with embedded piezoelectric sensor and basic electronics",
      price: "From $149",
      features: [
        "Recycled Plastic Housing",
        "Piezoelectric Sensor",
        "Weatherproof Design",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    },
    {
      name: "Complete Energy System",
      description:
        "Full installation kit with Arduino, TP4056, battery, WiFi module, and monitoring dashboard",
      price: "From $399",
      features: [
        "Arduino Uno R3",
        "Energy Storage",
        "Real-time Dashboard",
        "Mobile App",
      ],
      popular: true,
      image:
        "https://images.unsplash.com/photo-1553406830-c143465ac264?w=400&q=80",
    },
    {
      name: "Commercial Installation",
      description:
        "Large-scale deployment package for campuses, plazas, and commercial walkways",
      price: "From $2,999",
      features: [
        "50+ Smart Bricks",
        "Central Monitoring Hub",
        "Professional Installation",
        "Maintenance Support",
      ],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Embed Smart Bricks",
      description:
        "Install recycled plastic bricks with built-in piezoelectric sensors in walkways, plazas, and high-traffic areas.",
      icon: <Footprints className="w-8 h-8 text-[#A55A5A]" />,
    },
    {
      step: 2,
      title: "Arduino Processing",
      description:
        "Arduino Uno microcontroller processes sensor data, manages TP4056 charging, and stores energy in Li-ion batteries.",
      icon: <Cpu className="w-8 h-8 text-[#A55A5A]" />,
    },
    {
      step: 3,
      title: "Real-Time Analytics",
      description:
        "ESP8266 WiFi modules transmit data to cloud dashboard for live monitoring of energy generation and system health.",
      icon: <BarChart3 className="w-8 h-8 text-[#A55A5A]" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "The smart energy bricks transformed our campus walkways into power-generating infrastructure. Students love seeing the real-time energy data on the dashboard!",
      author: "Dr. Maria Rodriguez, University Sustainability Director",
    },
    {
      quote:
        "As an Arduino enthusiast, I'm impressed by the elegant integration of piezoelectric sensors with the TP4056 charging system. The code is well-documented and easy to customize.",
      author: "James Chen, IoT Developer",
    },
    {
      quote:
        "Finally, a solution that tackles both plastic waste and renewable energy. Our city plaza installation has diverted 2 tons of plastic waste while generating clean electricity.",
      author: "Sarah Thompson, Environmental Engineer",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img src={image} alt="Smart Power Logo" className="w-auto h-16" />{" "}
              {/* Increased logo size for better visibility */}
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-[#A55A5A] transition-colors"
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="hover:text-[#A55A5A] transition-colors"
              >
                How It Works
              </a>
              <a
                href="#products"
                className="hover:text-[#A55A5A] transition-colors"
              >
                Products
              </a>
              <a
                href="#dashboard"
                className="hover:text-[#A55A5A] transition-colors"
              >
                Dashboard
              </a>
              <button className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-6 py-2 rounded-full text-white hover:from-[#DAAFAF] hover:to-[#954A4A] transition-all transform hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Subtle leaf background pattern */}
        <div className="absolute inset-0 bg-[url('/leaf-pattern.png')] bg-repeat opacity-5" />{" "}
        {/* Assume a light leaf pattern image */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#E8BFBF]/10 border border-[#A55A5A]/20 rounded-full px-4 py-2 animate-fade-in">
                <Leaf className="w-4 h-4 text-[#A55A5A]" />
                <span className="text-[#A55A5A] text-sm font-medium">
                  Eco-Friendly Energy Harvesting
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight animate-fade-in delay-100">
                Smart Energy-Generating
                <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
                  {" "}
                  Bricks
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed animate-fade-in delay-200">
                Revolutionary eco-friendly bricks made from recycled plastic
                that generate renewable electricity from footsteps and vehicle
                pressure using embedded piezoelectric sensors. Real-time
                monitoring, Arduino-powered systems, and sustainable urban
                infrastructure.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in delay-300">
                <button className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-8 py-4 rounded-xl text-white hover:from-[#DAAFAF] hover:to-[#954A4A] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
                <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 font-semibold">
                  <span>Explore Products</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1440985465094-6ac443aab454?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Piezoelectric energy generation in action"
                className="w-full rounded-3xl shadow-xl mb-8 animate-fade-in"
              />{" "}
              {/* Added hero image for visual appeal */}
              <div className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg animate-fade-in delay-200">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center space-y-2">
                      <div className="flex items-center justify-center text-[#A55A5A]">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Enhanced floating elements with more animation */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] rounded-full opacity-30 animate-pulse blur-md"></div>
              <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] rounded-full opacity-20 animate-bounce blur-md"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold animate-fade-in">
              <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
                Complete Energy Solution
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100">
              From hardware sensors to data visualization, build and monitor
              your footstep-powered energy system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#A55A5A]/50 transition-all hover:transform hover:-translate-y-2 shadow-sm hover:shadow-md animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-[#A55A5A] mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#4A2E1E]">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section - Added for better engagement */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E] animate-fade-in">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100">
              Simple steps to start generating power from your footsteps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorks.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-2xl font-bold text-[#4A2E1E] mb-2">
                  Step {step.step}: {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E] animate-fade-in">
              Choose Your Setup
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in delay-100">
              From components to full kits for your energy project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border transition-all hover:transform hover:-translate-y-2 shadow-md hover:shadow-xl animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-4 py-1 rounded-full text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-xl"
                  />{" "}
                  {/* Added product images for visual appeal */}
                  <div>
                    <h3 className="text-2xl font-bold text-[#4A2E1E]">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                  </div>
                  <div className="text-3xl font-bold text-[#A55A5A]">
                    {product.price}
                  </div>
                  <ul className="space-y-3">
                    {product.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-[#A55A5A] flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`w-full py-3 rounded-xl font-semibold transition-all text-white ${
                      product.popular
                        ? "bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] hover:from-[#DAAFAF] hover:to-[#954A4A]"
                        : "bg-gray-200 text-gray-900 hover:bg-gray-300"
                    }`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section - Added for social proof */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E] animate-fade-in">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100">
              Hear from those powering their world with Smart Power.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Quote className="w-8 h-8 text-[#A55A5A] mb-4" />
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <p className="text-[#4A2E1E] font-semibold">
                  - {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E]">
                Live
                <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
                  {" "}
                  Data Insights
                </span>
              </h2>

              <p className="text-xl text-gray-600">
                Track your energy generation in real-time. View footsteps, power
                output, and efficiency across all your installations.
              </p>

              <div className="space-y-4">
                {[
                  "Real-time footsteps and energy tracking",
                  "Customizable data visualizations",
                  "Global installation mapping",
                  "Detailed performance reports",
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-[#A55A5A] rounded-full"></div>
                    <span className="text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-8 py-4 rounded-xl text-white hover:from-[#DAAFAF] hover:to-[#954A4A] transition-all transform hover:scale-105 flex items-center space-x-2 font-semibold">
                <BarChart3 className="w-5 h-5" />
                <span>View Dashboard</span>
              </button>
            </div>

            <div className="relative animate-fade-in delay-200">
              <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#4A2E1E]">
                      Energy Dashboard
                    </h3>
                    <div className="flex items-center space-x-2 text-[#A55A5A]">
                      <div className="w-2 h-2 bg-[#A55A5A] rounded-full animate-pulse"></div>
                      <span className="text-sm">Live</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 text-[#A55A5A] mb-2">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-sm">Total Output</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {energyCount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">mWh Generated</div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center space-x-2 text-[#A55A5A] mb-2">
                        <Footprints className="w-4 h-4" />
                        <span className="text-sm">Footsteps</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {footstepsCount.toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">Captured</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <div className="flex items-center space-x-2 text-[#A55A5A] mb-3">
                      <Globe className="w-4 h-4" />
                      <span className="text-sm">Global Distribution</span>
                    </div>
                    <div className="space-y-2">
                      {["North America", "Europe", "Asia Pacific"].map(
                        (region, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm text-gray-500">
                              {region}
                            </span>
                            <div className="flex items-center space-x-2">
                              <div className="w-16 bg-gray-200 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] h-2 rounded-full"
                                  style={{ width: `${65 - index * 15}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-gray-500">
                                {65 - index * 15}%
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8BFBF]/10 to-[#A55A5A]/10" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E] animate-fade-in">
            Ready to Generate
            <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
              {" "}
              Sustainable Power?
            </span>
          </h2>

          <p className="text-xl text-gray-600 animate-fade-in delay-100">
            Start harvesting energy from footsteps today. Buy components, track
            data, and join the green energy movement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <button className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-8 py-4 rounded-xl text-white hover:from-[#DAAFAF] hover:to-[#954A4A] transition-all transform hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
              <Leaf className="w-5 h-5" />
              <span>Start Building</span>
            </button>
            <button className="border border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 font-semibold">
              <span>Schedule Demo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <img
                  src={image}
                  alt="Smart Power Logo"
                  className="w-auto h-12"
                />{" "}
                {/* Adjusted logo size */}
              </div>
              <p className="text-gray-600">
                Footstep-powered energy generation with piezoelectric
                technology.
              </p>
            </div>

            {[
              {
                title: "Products",
                links: ["Components", "Kits", "Expansion Packs", "Accessories"],
              },
              {
                title: "Platform",
                links: [
                  "Dashboard",
                  "Data Analytics",
                  "Installation Guides",
                  "API",
                ],
              },
              {
                title: "Support",
                links: ["Help Center", "Community Forum", "Contact", "FAQs"],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold text-[#4A2E1E]">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-[#A55A5A] transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-500 text-sm">
              © 2025 Smart Power. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-[#A55A5A] transition-colors text-sm"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#A55A5A] transition-colors text-sm"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-[#A55A5A] transition-colors text-sm"
              >
                Security
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
