/* src/components/Home.jsx */
import React, { useState, useEffect, useRef } from "react";
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
  Wifi,
  WifiOff,
  Activity,
} from "lucide-react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line, Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function Home() {
  /* ---------- ESP STATE ---------- */
  const [espData, setEspData] = useState({
    steps: 0,
    stepVoltage: 0.0,
    totalVoltage: 0.0,
    lastUpdate: 0,
  });
  const [espInfo, setEspInfo] = useState({
    ip: "10.56.24.97",
    mac: "Unknown",
  });
  const [isOnline, setIsOnline] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdateStr, setLastUpdateStr] = useState("Never");

  const ESP_URL = "http://10.56.24.97";
  const prevRef = useRef(espData);

  /* ---------- FETCH ESP ---------- */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${ESP_URL}/data`);
        if (!res.ok) throw new Error();
        const d = await res.json();

        // ---- update detection ----
        const prev = prevRef.current;
        if (
          d.steps !== prev.steps ||
          d.stepVoltage !== prev.stepVoltage ||
          d.totalVoltage !== prev.totalVoltage
        ) {
          setIsUpdating(true);
          setTimeout(() => setIsUpdating(false), 500);
        }

        setEspData(d);
        prevRef.current = d;
        setIsOnline(true);

        // human readable last update
        setLastUpdateStr(new Date().toLocaleTimeString());
      } catch {
        setIsOnline(false);
      }
    };

    const fetchInfo = async () => {
      try {
        const res = await fetch(`${ESP_URL}/info`);
        if (res.ok) {
          const i = await res.json();
          setEspInfo({ ip: i.ip, mac: i.mac });
        }
      } catch { /* empty */ }
    };

    fetchData();
    fetchInfo();
    const id = setInterval(fetchData, 1000);
    return () => clearInterval(id);
  }, []);

  /* ---------- CHART HISTORY (optional, keep if you want) ---------- */
  const [history, setHistory] = useState({
    timestamps: [],
    steps: [],
    stepVoltages: [],
    totalVoltages: [],
  });
  const maxPoints = 30;

  useEffect(() => {
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    setHistory((p) => ({
      timestamps: [...p.timestamps, now].slice(-maxPoints),
      steps: [...p.steps, espData.steps].slice(-maxPoints),
      stepVoltages: [...p.stepVoltages, espData.stepVoltage].slice(-maxPoints),
      totalVoltages: [...p.totalVoltages, espData.totalVoltage].slice(-maxPoints),
    }));
  }, [espData]);

  const chartOpts = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { position: "top" }, tooltip: { mode: "index", intersect: false } },
    scales: { x: { ticks: { maxTicksLimit: 6 } } },
    animation: { duration: 500 },
  };

  const stepsChart = {
    labels: history.timestamps,
    datasets: [
      {
        label: "Steps",
        data: history.steps,
        borderColor: "rgb(147,51,234)",
        backgroundColor: "rgba(147,51,234,0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  };
  const voltageChart = {
    labels: history.timestamps,
    datasets: [
      {
        label: "Step V",
        data: history.stepVoltages,
        backgroundColor: "rgba(59,130,246,0.7)",
        borderColor: "rgb(59,130,246)",
      },
    ],
  };
  const totalChart = {
    labels: history.timestamps,
    datasets: [
      {
        label: "Total V",
        data: history.totalVoltages,
        borderColor: "rgb(34,197,94)",
        backgroundColor: "rgba(34,197,94,0.1)",
        fill: true,
        tension: 0.3,
      },
    ],
  };

  /* ---------- STATIC CONTENT ---------- */
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

  const products = [
    {
      name: "Smart Brick Single Unit",
      description:
        "Individual eco-brick with embedded piezoelectric sensor and basic electronics",
      price: "From $149",
      features: ["Recycled Plastic Housing", "Piezoelectric Sensor", "Weatherproof Design"],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    },
    {
      name: "Complete Energy System",
      description:
        "Full installation kit with Arduino, TP4056, battery, WiFi module, and monitoring dashboard",
      price: "From $399",
      features: ["Arduino Uno R3", "Energy Storage", "Real-time Dashboard", "Mobile App"],
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

  /* ---------- RENDER ---------- */
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* ==== NAV ==== */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <img src={image} alt="Logo" className="h-16" />
          <div className="hidden md:flex items-center space-x-8">
            <a href="#live-data" className="hover:text-[#A55A5A] font-semibold">
              Live Data
            </a>
            <a href="#features" className="hover:text-[#A55A5A]">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-[#A55A5A]">
              How It Works
            </a>
            <a href="#products" className="hover:text-[#A55A5A]">
              Products
            </a>

            <div className="flex items-center space-x-2 bg-gray-100 px-3 py-2 rounded-full">
              {isOnline ? (
                <>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-green-600 font-medium">LIVE</span>
                </>
              ) : (
                <>
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-sm text-red-600 font-medium">OFFLINE</span>
                </>
              )}
            </div>

            <button className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-6 py-2 rounded-full text-white hover:from-[#DAAFAF] hover:to-[#954A4A] transition-all hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* ==== HERO ==== */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-[#E8BFBF]/10 border border-[#A55A5A]/20 rounded-full px-4 py-2">
            <Leaf className="w-4 h-4 text-[#A55A5A]" />
            <span className="text-[#A55A5A] text-sm font-medium">
              Eco-Friendly Energy Harvesting
            </span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Smart Energy-Generating
            <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
              {" "}Bricks
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Revolutionary eco-friendly bricks that generate renewable electricity from footsteps using embedded piezoelectric sensors.
          </p>
        </div>
      </section>

      {/* ==== ESP UI (exact copy) ==== */}
      <section
        id="live-data"
        className="py-12 px-6"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          className="bg-white rounded-[20px] shadow-2xl p-10 max-w-lg w-full"
          style={{ boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}
        >
          <h1 className="text-center text-3xl font-bold text-gray-800 mb-2">
            Energy Harvester
          </h1>
          <p className="text-center text-gray-600 text-sm mb-8">
            Real-time Piezo Sensor Data
          </p>

          {/* STEPS CARD */}
          <div
            className={`rounded-[15px] p-5 mb-5 text-white shadow-lg transition-transform ${
              isUpdating ? "animate-pulse" : ""
            }`}
            style={{
              background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
            }}
          >
            <div className="text-xs uppercase tracking-widest opacity-90 mb-1">
              Total Steps
            </div>
            <div className="text-5xl font-bold flex items-baseline">
              <span>{espData.steps}</span>
              <span className="text-lg ml-1 opacity-90">steps</span>
            </div>
          </div>

          {/* STEP VOLTAGE CARD */}
          <div
            className="rounded-[15px] p-5 mb-5 text-white shadow-lg"
            style={{
              background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
            }}
          >
            <div className="text-xs uppercase tracking-widest opacity-90 mb-1">
              Step Voltage
            </div>
            <div className="text-5xl font-bold flex items-baseline">
              <span>{espData.stepVoltage.toFixed(3)}</span>
              <span className="text-lg ml-1 opacity-90">V</span>
            </div>
          </div>

          {/* TOTAL VOLTAGE CARD */}
          <div
            className="rounded-[15px] p-5 mb-5 text-white shadow-lg"
            style={{
              background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
            }}
          >
            <div className="text-xs uppercase tracking-widest opacity-90 mb-1">
              Total Voltage
            </div>
            <div className="text-5xl font-bold flex items-baseline">
              <span>{espData.totalVoltage.toFixed(3)}</span>
              <span className="text-lg ml-1 opacity-90">V</span>
            </div>
          </div>

          {/* STATUS */}
          <div
            className={`text-center py-2 px-4 rounded-lg mt-6 font-medium ${
              isOnline ? "bg-[#d4edda] text-[#155724]" : "bg-[#f8d7da] text-[#721c24]"
            }`}
          >
            {isOnline ? "Live - Receiving Data" : "No New Data"}
          </div>

          {/* FOOTER */}
          <div className="text-center mt-6 text-sm text-gray-600">
            <p>
              Last Update: <span className="font-mono">{lastUpdateStr}</span>
            </p>
            <p>
              IP Address: <span className="font-mono">{espInfo.ip}</span>
            </p>
          </div>

          {/* OPTIONAL CHARTS (keep if you like) */}
          <div className="mt-10 grid lg:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="text-center font-semibold text-purple-700 mb-2">
                Steps Over Time
              </h3>
              <div className="h-48">
                <Line data={stepsChart} options={chartOpts} />
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="text-center font-semibold text-blue-700 mb-2">
                Voltage Per Step
              </h3>
              <div className="h-48">
                <Bar data={voltageChart} options={chartOpts} />
              </div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow">
              <h3 className="text-center font-semibold text-green-700 mb-2">
                Total Voltage Growth
              </h3>
              <div className="h-48">
                <Line data={totalChart} options={chartOpts} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==== FEATURES ==== */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
              Complete Energy Solution
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hardware sensors to data visualization, build and monitor your footstep-powered energy system.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="group bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-[#A55A5A]/50 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md"
            >
              <div className="text-[#A55A5A] mb-4 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#4A2E1E]">{f.title}</h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==== HOW IT WORKS ==== */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E]">How It Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to start generating power from your footsteps.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {howItWorks.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-2xl font-bold text-[#4A2E1E] mb-2">
                Step {s.step}: {s.title}
              </h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==== PRODUCTS ==== */}
      <section id="products" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E]">Choose Your Setup</h2>
          <p className="text-xl text-gray-600">From components to full kits for your energy project</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((p, i) => (
            <div
              key={i}
              className="relative bg-white rounded-2xl p-8 border border-gray-200 transition-all hover:-translate-y-2 shadow-md hover:shadow-xl"
            >
              {p.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-4 py-1 rounded-full text-sm font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}
              <div className="space-y-6">
                <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-xl" />
                <div>
                  <h3 className="text-2xl font-bold text-[#4A2E1E]">{p.name}</h3>
                  <p className="text-gray-600 mt-2">{p.description}</p>
                </div>
                <div className="text-3xl font-bold text-[#A55A5A]">{p.price}</div>
                <ul className="space-y-3">
                  {p.features.map((f, fi) => (
                    <li key={fi} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-[#A55A5A]" />
                      <span className="text-gray-600">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-semibold text-white transition-all ${
                    p.popular
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
      </section>

      {/* ==== TESTIMONIALS ==== */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center space-y-6 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E]">What Our Users Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those powering their world with Smart Power.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <Quote className="w-8 h-8 text-[#A55A5A] mb-4" />
              <p className="text-gray-600 italic mb-4">"{t.quote}"</p>
              <p className="text-[#4A2E1E] font-semibold">- {t.author}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ==== CTA ==== */}
      <section className="py-20 px-6 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#E8BFBF]/10 to-[#A55A5A]/10" />
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#4A2E1E]">
            Ready to Generate
            <span className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] bg-clip-text text-transparent">
              {" "}Sustainable Power?
            </span>
          </h2>
          <p className="text-xl text-gray-600">
            Start harvesting energy from footsteps today. Buy components, track data, and join the green energy movement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-[#E8BFBF] to-[#A55A5A] px-8 py-4 rounded-xl text-white hover:from-[#DAAFAF] hover:to-[#954A4A] transition-all hover:scale-105 flex items-center justify-center space-x-2 font-semibold">
              <Leaf className="w-5 h-5" />
              <span>Start Building</span>
            </button>
            <button className="border-2 border-gray-300 px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center space-x-2 font-semibold">
              <span>Schedule Demo</span>
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ==== FOOTER ==== */}
      <footer className="border-t border-gray-200 py-12 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src={image} alt="Logo" className="h-12" />
              <p className="text-gray-600">
                Footstep-powered energy generation with piezoelectric technology.
              </p>
            </div>
            {[
              {
                title: "Products",
                links: ["Components", "Kits", "Expansion Packs", "Accessories"],
              },
              {
                title: "Platform",
                links: ["Dashboard", "Data Analytics", "Installation Guides", "API"],
              },
              {
                title: "Support",
                links: ["Help Center", "Community Forum", "Contact", "FAQs"],
              },
            ].map((s, i) => (
              <div key={i} className="space-y-4">
                <h3 className="font-semibold text-[#4A2E1E]">{s.title}</h3>
                <ul className="space-y-2">
                  {s.links.map((l, li) => (
                    <li key={li}>
                      <a href="#" className="text-gray-600 hover:text-[#A55A5A]">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <div>© 2025 Smart Power. All rights reserved.</div>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-[#A55A5A]">Privacy</a>
              <a href="#" className="hover:text-[#A55A5A]">Terms</a>
              <a href="#" className="hover:text-[#A55A5A]">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}