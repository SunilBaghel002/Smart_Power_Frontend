import React, { useState, useEffect } from "react";
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
} from "lucide-react";

export default function Home() {
  const [energyCount, setEnergyCount] = useState(0);
  const [footstepsCount, setFootstepsCount] = useState(0);
  const [isVisible, setIsVisible] = useState({});

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
      title: "Piezoelectric Sensors",
      description:
        "High-efficiency sensors that convert footsteps into usable electricity",
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Smart Hardware Integration",
      description:
        "Compatible with Arduino and other microcontrollers for custom setups",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Real-Time Data Dashboard",
      description:
        "Monitor energy generation, footsteps, and efficiency metrics live",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Installation Map",
      description:
        "Visualize installations and collective energy impact worldwide",
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
      name: "Individual Components",
      description: "Piezoelectric sensors, wiring, and supporting hardware",
      price: "From $29",
      features: ["Easy Installation", "High Durability", "Technical Guides"],
    },
    {
      name: "Complete Kit",
      description: "Full footstep energy generation system with monitoring",
      price: "From $199",
      features: ["All-in-One Hardware", "Data Integration", "Setup Support"],
      popular: true,
    },
    {
      name: "Modular Expansion Packs",
      description:
        "Scalable add-ons for larger installations and custom projects",
      price: "From $89",
      features: [
        "Flexible Design",
        "Seamless Integration",
        "Expandable Capacity",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img
                src="/smart-power-logo.png"
                alt="Smart Power Logo"
                className="w-10 h-10"
              />{" "}
              {/* Replace with actual logo path */}
              <span className="text-xl font-bold text-[#4A2E1E]">
                Smart Power
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="hover:text-[#A55A5A] transition-colors"
              >
                Features
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
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center space-x-2 bg-[#E8BFBF]/10 border border-[#A55A5A]/20 rounded-full px-4 py-2">
                <Leaf className="w-4 h-4 text-[#A55A5A]" />
                <span className="text-[#A55A5A] text-sm font-medium">
                  Eco-Friendly Energy Harvesting
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                Power Your World,
                <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
                  {" "}
                  One Step at a Time
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                Innovative platform using piezoelectric sensors to generate
                electricity from footsteps. Track data, buy components, and
                contribute to sustainable energy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
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
              <div className="relative z-10 bg-white rounded-3xl p-8 border border-gray-200 shadow-lg">
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

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] rounded-full opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] rounded-full opacity-20 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold">
              <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
                Complete Energy Solution
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hardware sensors to data visualization, build and monitor
              your footstep-powered energy system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#A55A5A]/50 transition-all hover:transform hover:-translate-y-2 shadow-sm hover:shadow-md"
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

      {/* Products Section */}
      <section id="products" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E]">
              Choose Your Setup
            </h2>
            <p className="text-xl text-gray-600">
              From components to full kits for your energy project
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl p-8 border transition-all hover:transform hover:-translate-y-2 shadow-sm hover:shadow-md ${
                  product.popular
                    ? "border-[#A55A5A]/50 ring-2 ring-[#A55A5A]/20"
                    : "border-gray-200 hover:border-[#A55A5A]/30"
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-4 py-1 rounded-full text-sm font-semibold text-white">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="space-y-6">
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

      {/* Dashboard Preview Section */}
      <section id="dashboard" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
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

            <div className="relative">
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
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E]">
            Ready to Generate
            <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
              {" "}
              Sustainable Power?
            </span>
          </h2>

          <p className="text-xl text-gray-600">
            Start harvesting energy from footsteps today. Buy components, track
            data, and join the green energy movement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
                  src="/smart-power-logo.png"
                  alt="Smart Power Logo"
                  className="w-8 h-8"
                />{" "}
                {/* Replace with actual logo path */}
                <span className="text-lg font-bold text-[#4A2E1E]">
                  Smart Power
                </span>
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
