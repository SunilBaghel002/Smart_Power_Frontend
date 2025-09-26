// src/components/Home.js
import React, { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  BarChart3,
  Globe,
  ChevronRight,
  Play,
  Package,
  Activity,
} from "lucide-react";

const Home = () => {
  // Animated counters state
  const [stats, setStats] = useState({
    energy: 0,
    devices: 0,
    locations: 0,
    transparency: 0,
  });

  // Animate counters on component mount
  useEffect(() => {
    const targets = {
      energy: 47283,
      devices: 1247,
      locations: 89,
      transparency: 99.8,
    };

    const duration = 2000; // 2 seconds
    const steps = 60; // 60 steps for smooth animation
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;

      setStats({
        energy: Math.floor(targets.energy * progress),
        devices: Math.floor(targets.devices * progress),
        locations: Math.floor(targets.locations * progress),
        transparency: (targets.transparency * progress).toFixed(1),
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Set final values to ensure accuracy
        setStats(targets);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-800">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-bounce"></div>
        </div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-green-400/20 to-blue-500/20 backdrop-blur-lg rounded-full border border-green-400/30">
            <Shield className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-sm font-medium text-green-400">
              Blockchain-Powered Transparency
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Harvest Energy,{" "}
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              Trust the Data
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Experience the future of sustainable energy with our Arduino-powered
            piezoelectric sensors and blockchain transparency. Every step
            generates power, every transaction builds trust.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-400/25">
              <Play className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Demo
            </button>
            <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300 backdrop-blur-lg">
              <Package className="h-5 w-5 mr-2" />
              Explore Products
              <ChevronRight className="h-5 w-5 ml-2" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/3 w-48 h-48 bg-green-400/5 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/3 w-64 h-64 bg-blue-500/5 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 p-8 sm:p-12 hover:border-green-400/30 transition-all duration-500 group">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Energy Units Harvested */}
              <div className="text-center group-hover:scale-105 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-full mb-4">
                  <Zap className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stats.energy.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">kWh Harvested</div>
              </div>

              {/* Devices Connected */}
              <div className="text-center group-hover:scale-105 transition-transform duration-300 delay-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full mb-4">
                  <Activity className="h-8 w-8 text-blue-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stats.devices.toLocaleString()}
                </div>
                <div className="text-sm text-gray-400">Devices Connected</div>
              </div>

              {/* Locations Active */}
              <div className="text-center group-hover:scale-105 transition-transform duration-300 delay-200">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-400/20 to-purple-500/20 rounded-full mb-4">
                  <Globe className="h-8 w-8 text-purple-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stats.locations}
                </div>
                <div className="text-sm text-gray-400">Locations Active</div>
              </div>

              {/* Transparency Score */}
              <div className="text-center group-hover:scale-105 transition-transform duration-300 delay-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-full mb-4">
                  <Shield className="h-8 w-8 text-green-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stats.transparency}%
                </div>
                <div className="text-sm text-gray-400">Transparency Score</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Powering the{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Future
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technology meets sustainable innovation. Experience
              the perfect fusion of hardware reliability and blockchain
              transparency.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Arduino-Powered Hardware */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 p-8 hover:border-green-400/50 hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400/20 to-green-500/20 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <Zap className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Arduino-Powered Hardware
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Industrial-grade piezoelectric sensors powered by Arduino Uno
                microcontrollers. Harvest kinetic energy from footsteps with
                military-grade reliability and precision.
              </p>
              <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                Learn More
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Blockchain Transparency */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 p-8 hover:border-blue-400/50 hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Blockchain Transparency
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Every energy transaction is immutably recorded on the
                blockchain. Complete transparency, zero tampering, and
                verifiable data integrity for all stakeholders.
              </p>
              <div className="flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                View Ledger
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Admin Dashboard */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 p-8 hover:border-purple-400/50 hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-400/20 to-purple-500/20 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <BarChart3 className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Admin Dashboard
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Real-time analytics and monitoring dashboard. Track energy
                production, device performance, and global distribution with
                advanced visualization tools.
              </p>
              <div className="flex items-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors">
                Open Dashboard
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Global Energy Map */}
            <div className="group backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-xl border border-white/20 p-8 hover:border-green-400/50 hover:scale-105 transition-all duration-300">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-400/20 to-blue-500/20 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                <Globe className="h-6 w-6 text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Global Energy Map
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Visualize clean energy contributions worldwide. Interactive
                global map showing real-time energy harvesting across continents
                and communities.
              </p>
              <div className="flex items-center text-green-400 font-semibold group-hover:text-green-300 transition-colors">
                Explore Map
                <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-lg bg-gradient-to-br from-white/10 to-white/5 rounded-2xl border border-white/20 p-12 hover:border-green-400/30 transition-all duration-500">
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                Get Started?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the energy revolution today. Deploy sustainable energy
              solutions with complete transparency and real-time monitoring.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-400/25">
                <Package className="h-5 w-5 mr-2" />
                Shop Products
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:border-green-400/50 hover:bg-green-400/10 transition-all duration-300 backdrop-blur-lg">
                <Play className="h-5 w-5 mr-2" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
