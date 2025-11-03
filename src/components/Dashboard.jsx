"use client";

import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts";
import {
  AlertCircle,
  Battery,
  Zap,
  Activity,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowRight,
  Facebook,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const PIE_COLORS = ["#f97316", "#d946ef", "#a855f7", "#ec4899", "#f43f5e"];

// Static energy data - no random updates
const energyData = [
  { time: "0:00", energy: 245, power: 65 },
  { time: "1:00", energy: 312, power: 78 },
  { time: "2:00", energy: 289, power: 72 },
  { time: "3:00", energy: 356, power: 89 },
  { time: "4:00", energy: 401, power: 102 },
  { time: "5:00", energy: 478, power: 125 },
  { time: "6:00", energy: 532, power: 138 },
  { time: "7:00", energy: 618, power: 156 },
  { time: "8:00", energy: 695, power: 178 },
  { time: "9:00", energy: 524, power: 132 },
  { time: "10:00", energy: 456, power: 114 },
  { time: "11:00", energy: 389, power: 98 },
  { time: "12:00", energy: 612, power: 147 },
  { time: "13:00", energy: 567, power: 135 },
  { time: "14:00", energy: 634, power: 159 },
  { time: "15:00", energy: 701, power: 178 },
  { time: "16:00", energy: 623, power: 156 },
  { time: "17:00", energy: 545, power: 136 },
  { time: "18:00", energy: 412, power: 103 },
  { time: "19:00", energy: 334, power: 83 },
  { time: "20:00", energy: 289, power: 72 },
  { time: "21:00", energy: 245, power: 61 },
  { time: "22:00", energy: 198, power: 49 },
  { time: "23:00", energy: 156, power: 39 },
];

const trendData = [
  { day: "Mon", generated: 4500, harvested: 3800 },
  { day: "Tue", generated: 5120, harvested: 4300 },
  { day: "Wed", generated: 4890, harvested: 4100 },
  { day: "Thu", generated: 5600, harvested: 4700 },
  { day: "Fri", generated: 6200, harvested: 5200 },
  { day: "Sat", generated: 5890, harvested: 4900 },
  { day: "Sun", generated: 5340, harvested: 4500 },
];

const stepFrequency = [
  { hour: "0:00", steps: 45, frequency: 42 },
  { hour: "1:00", steps: 52, frequency: 48 },
  { hour: "2:00", steps: 78, frequency: 65 },
  { hour: "3:00", steps: 125, frequency: 98 },
  { hour: "4:00", steps: 156, frequency: 125 },
  { hour: "5:00", steps: 198, frequency: 156 },
  { hour: "6:00", steps: 234, frequency: 189 },
  { hour: "7:00", steps: 267, frequency: 210 },
  { hour: "8:00", steps: 289, frequency: 234 },
  { hour: "9:00", steps: 234, frequency: 189 },
  { hour: "10:00", steps: 156, frequency: 125 },
  { hour: "11:00", steps: 98, frequency: 78 },
];

const componentStatus = [
  {
    name: "Piezoelectric Sensor",
    efficiency: 92,
    status: "healthy",
    lifetime: "85%",
    voltage: "4.2V",
  },
  {
    name: "Li-ion Battery",
    efficiency: 78,
    status: "warning",
    lifetime: "45%",
    voltage: "3.7V",
  },
  {
    name: "Voltage Regulator (AMS1117)",
    efficiency: 85,
    status: "warning",
    lifetime: "72%",
    voltage: "5.0V",
  },
  {
    name: "TP4056 Charging Module",
    efficiency: 88,
    status: "healthy",
    lifetime: "92%",
    voltage: "4.2V",
  },
  {
    name: "DC-DC Boost Converter",
    efficiency: 91,
    status: "healthy",
    lifetime: "88%",
    voltage: "12V",
  },
  {
    name: "BMS 3s Battery Module",
    efficiency: 94,
    status: "healthy",
    lifetime: "95%",
    voltage: "11.1V",
  },
];

const pieData = [
  { name: "Solar Contribution", value: 35 },
  { name: "Piezoelectric Contribution", value: 45 },
  { name: "Other Sources", value: 20 },
];

const pricingPlans = [
  {
    name: "Starter Panel",
    price: "₹2,700",
    area: "10 m²",
    period: "month",
    specs: [
      "Solar Panel 10 m²",
      "Up to 1 device",
      "Basic monitoring",
      "Email support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional Panel",
    price: "₹7,900",
    area: "25 m²",
    period: "month",
    specs: [
      "Solar Panel 25 m²",
      "Up to 5 devices",
      "Advanced analytics",
      "Priority support",
      "Real-time alerts",
    ],
    popular: true,
    cta: "Start Free Trial",
  },
  {
    name: "Enterprise Solution",
    price: "Custom",
    area: "50+ m²",
    period: "pricing",
    specs: [
      "Custom solar arrays",
      "Unlimited devices",
      "Custom integrations",
      "Dedicated support",
      "API access",
    ],
    cta: "Contact Sales",
  },
];

const componentDurability = [
  { name: "Piezo Sensor", durability: 92, reliability: 88, lifespan: 95 },
  { name: "Li-ion Battery", durability: 78, reliability: 75, lifespan: 70 },
  { name: "Voltage Regulator", durability: 85, reliability: 82, lifespan: 88 },
  { name: "TP4056 Module", durability: 88, reliability: 90, lifespan: 92 },
  { name: "DC-DC Converter", durability: 91, reliability: 89, lifespan: 93 },
  { name: "BMS Module", durability: 94, reliability: 92, lifespan: 96 },
];

const getGreeting = () => {
  const hour = new Date().getHours();
  if (hour < 12)
    return {
      text: "Good Morning",
      emoji: "🌅",
      color: "from-amber-500 to-orange-500",
    };
  if (hour < 17)
    return {
      text: "Good Afternoon",
      emoji: "☀️",
      color: "from-orange-500 to-rose-500",
    };
  if (hour < 21)
    return {
      text: "Good Evening",
      emoji: "🌆",
      color: "from-purple-500 to-pink-500",
    };
  return {
    text: "Good Night",
    emoji: "🌙",
    color: "from-indigo-500 to-purple-500",
  };
};

export default function EnergyHarvestingDashboard() {
  const [selectedTimeframe] = useState("daily");
  const [greeting, setGreeting] = useState(getGreeting());
  const [visibleSections, setVisibleSections] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll("[data-scroll]")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreeting(getGreeting());
    }, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  const [alerts] = useState([
    {
      id: 1,
      type: "warning",
      message: "Battery charge level below 20%",
      component: "TP4056 Charging Module",
    },
    {
      id: 2,
      type: "critical",
      message: "Voltage regulator efficiency dropped to 85%",
      component: "AMS1117 Regulator",
    },
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-emerald-50 border-emerald-200";
      case "warning":
        return "bg-amber-50 border-amber-200";
      case "critical":
        return "bg-red-50 border-red-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-emerald-500 text-white";
      case "warning":
        return "bg-amber-500 text-white";
      case "critical":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-4 h-4 text-emerald-600" />;
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-amber-600" />;
      case "critical":
        return <AlertCircle className="w-4 h-4 text-red-600" />;
      default:
        return null;
    }
  };

  // KPI calculations
  const totalEnergyGenerated = energyData.reduce((sum, d) => sum + d.energy, 0);
  const avgPower = (
    energyData.reduce((sum, d) => sum + d.power, 0) / energyData.length
  ).toFixed(2);
  const peakVoltage = 12.5;
  const systemUptime = "24d 14h 32m";
  const batteryLevel = 42;

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-on-scroll {
          animation: slideUp 0.8s ease-out forwards;
        }

        [data-scroll] {
          opacity: 0;
        }

        [data-scroll].visible {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>

      <div
        className={`bg-gradient-to-r ${greeting.color} text-white px-6 lg:px-12 py-12`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-6 animate-on-scroll">
            <p className="text-white/80 text-lg mb-2">
              {greeting.emoji} {greeting.text}!
            </p>
            <h1 className="text-4xl lg:text-5xl font-bold">
              Energy Harvesting Dashboard
            </h1>
          </div>
          <p className="text-white/90 text-lg">
            Real-time monitoring and analytics for piezoelectric energy
            generation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* KPI Section */}
        <div
          data-scroll
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12 ${
            visibleSections["kpi"] ? "visible" : ""
          }`}
          id="kpi"
        >
          {/* Total Energy Generated */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Total Energy Generated
                </p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {(totalEnergyGenerated / 1000).toFixed(2)} kWh
                </h3>
              </div>
              <Zap className="w-8 h-8 text-orange-500" />
            </div>
            <p className="text-gray-500 text-xs">+12.5% from yesterday</p>
          </div>

          {/* Average Power */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Average Power Output
                </p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {avgPower} W
                </h3>
              </div>
              <Activity className="w-8 h-8 text-rose-500" />
            </div>
            <p className="text-gray-500 text-xs">Current 24hr average</p>
          </div>

          {/* Peak Voltage */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Peak Voltage Output
                </p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {peakVoltage}V
                </h3>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
            <p className="text-gray-500 text-xs">Maximum recorded today</p>
          </div>

          {/* Battery Level */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  Battery Charge Level
                </p>
                <h3 className="text-3xl font-bold text-gray-900">
                  {batteryLevel}%
                </h3>
              </div>
              <Battery className="w-8 h-8 text-pink-500" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-pink-500 h-2 rounded-full"
                style={{ width: `${batteryLevel}%` }}
              ></div>
            </div>
          </div>

          {/* System Uptime */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">
                  System Uptime
                </p>
                <h3 className="text-2xl font-bold text-gray-900">
                  {systemUptime}
                </h3>
              </div>
              <Clock className="w-8 h-8 text-violet-500" />
            </div>
            <p className="text-gray-500 text-xs">Since last reboot</p>
          </div>
        </div>

        {/* Charts Section */}
        <div
          data-scroll
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 ${
            visibleSections["charts"] ? "visible" : ""
          }`}
          id="charts"
        >
          {/* Energy Generation Over Time */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Energy Generation Over 24 Hours
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Real-time energy production tracking
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyData}>
                <defs>
                  <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value} Wh`}
                />
                <Area
                  type="monotone"
                  dataKey="energy"
                  stroke="#f97316"
                  fillOpacity={1}
                  fill="url(#colorEnergy)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Power Output Trend */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Power Output Trend
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Hourly power measurement analysis
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value} W`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="power"
                  stroke="#d946ef"
                  strokeWidth={2}
                  dot={false}
                  name="Power (W)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Energy Comparison */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Weekly Energy Analysis
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Generated vs Harvested energy comparison
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                  formatter={(value) => `${value} Wh`}
                />
                <Legend />
                <Bar
                  dataKey="generated"
                  fill="#a855f7"
                  radius={[8, 8, 0, 0]}
                  name="Generated (Wh)"
                />
                <Bar
                  dataKey="harvested"
                  fill="#ec4899"
                  radius={[8, 8, 0, 0]}
                  name="Harvested (Wh)"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Energy Source Distribution
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Contribution breakdown by source
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name} ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  <Cell fill="#f97316" />
                  <Cell fill="#d946ef" />
                  <Cell fill="#a855f7" />
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Component Durability Assessment
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Multi-factor health analysis of all components
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <RadarChart data={componentDurability}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="name" stroke="#9ca3af" />
                <PolarRadiusAxis
                  stroke="#9ca3af"
                  angle={90}
                  domain={[0, 100]}
                />
                <Radar
                  name="Durability"
                  dataKey="durability"
                  stroke="#f97316"
                  fill="#f97316"
                  fillOpacity={0.5}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Step Frequency Analysis */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">
                Step Frequency & Activity Level
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                Kinetic energy harvesting rates throughout the day
              </p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stepFrequency}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #e5e7eb",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="steps"
                  stroke="#f97316"
                  strokeWidth={2}
                  name="Steps Detected"
                />
                <Line
                  type="monotone"
                  dataKey="frequency"
                  stroke="#a855f7"
                  strokeWidth={2}
                  name="Frequency (Hz)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Component Status Section */}
        <div
          data-scroll
          className={`mb-12 ${visibleSections["components"] ? "visible" : ""}`}
          id="components"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Component Status & Efficiency
          </h2>
          <p className="text-gray-500 mb-6">
            Real-time health monitoring of all system components
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentStatus.map((component, idx) => (
              <div
                key={idx}
                className={`border rounded-lg p-6 ${getStatusColor(
                  component.status
                )}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base">
                      {component.name}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Efficiency & Performance
                    </p>
                  </div>
                  {getStatusIcon(component.status)}
                </div>

                {/* Efficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">
                      Efficiency
                    </span>
                    <span className="text-sm font-bold text-gray-900">
                      {component.efficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        component.efficiency > 90
                          ? "bg-emerald-500"
                          : component.efficiency > 80
                          ? "bg-amber-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${component.efficiency}%` }}
                    ></div>
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-600 font-medium">
                      Lifetime
                    </p>
                    <p className="text-sm font-bold text-gray-900">
                      {component.lifetime}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">Voltage</p>
                    <p className="text-sm font-bold text-gray-900">
                      {component.voltage}
                    </p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-4 pt-4 border-t border-current border-opacity-20">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(
                      component.status
                    )}`}
                  >
                    {component.status.charAt(0).toUpperCase() +
                      component.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts Section */}
        <div
          data-scroll
          className={`mb-12 ${visibleSections["alerts"] ? "visible" : ""}`}
          id="alerts"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Alerts & Notifications
          </h2>
          <p className="text-gray-500 mb-6">
            Active system alerts and maintenance notifications
          </p>

          <div className="space-y-4">
            {alerts.map((alert) => (
              <div
                key={alert.id}
                className={`border-l-4 p-4 rounded-lg ${
                  alert.type === "critical"
                    ? "bg-red-50 border-red-500 text-red-900"
                    : "bg-amber-50 border-amber-500 text-amber-900"
                }`}
              >
                <div className="flex items-start gap-3">
                  {alert.type === "critical" ? (
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="flex-1">
                    <p className="font-semibold">{alert.message}</p>
                    <p className="text-sm opacity-75 mt-1">
                      Component: {alert.component}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Metrics */}
        <div
          data-scroll
          className={`mb-12 ${visibleSections["metrics"] ? "visible" : ""}`}
          id="metrics"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Real-time Electrical Metrics
          </h2>
          <p className="text-gray-500 mb-6">
            Current system performance indicators
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Sensor Input Voltage",
                value: "2.45V",
                unit: "V",
                color: "orange",
              },
              {
                label: "Sensor Input Current",
                value: "145mA",
                unit: "mA",
                color: "rose",
              },
              {
                label: "Rectifier Output",
                value: "1.92V",
                unit: "V",
                color: "purple",
              },
              {
                label: "Charging Status",
                value: "Active",
                unit: "Status",
                color: "pink",
              },
              {
                label: "Battery Voltage",
                value: "3.72V",
                unit: "V",
                color: "violet",
              },
              {
                label: "Boost Converter Output",
                value: "11.85V",
                unit: "V",
                color: "magenta",
              },
              {
                label: "System Load Current",
                value: "280mA",
                unit: "mA",
                color: "fuchsia",
              },
              {
                label: "Temperature",
                value: "32.5°C",
                unit: "°C",
                color: "amber",
              },
            ].map((metric, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
              >
                <p className="text-gray-500 text-sm font-medium mb-2">
                  {metric.label}
                </p>
                <p className="text-3xl font-bold text-gray-900">
                  {metric.value}
                </p>
                <div
                  className={`inline-block mt-3 px-2 py-1 rounded text-xs font-semibold bg-${metric.color}-100 text-${metric.color}-700`}
                >
                  {metric.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <div
          data-scroll
          className={`mb-12 ${visibleSections["pricing"] ? "visible" : ""}`}
          id="pricing"
        >
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Upgrade Your System
            </h2>
            <p className="text-gray-500">
              Choose the perfect solar panel plan for your energy harvesting
              needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg border-2 p-8 transition-transform hover:scale-105 ${
                  plan.popular
                    ? "border-orange-500 bg-gradient-to-br from-orange-50 to-rose-50 shadow-lg"
                    : "border-gray-200 bg-white shadow-sm"
                }`}
              >
                {plan.popular && (
                  <div className="mb-4 inline-block bg-orange-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-1 text-orange-600 font-semibold text-lg">
                  {plan.area}
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.specs.map((spec, sidx) => (
                    <li key={sidx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-700">{spec}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    window.open("https://example.com/pricing", "_blank")
                  }
                  className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
                    plan.popular
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-gray-100 text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-orange-50 border border-orange-200 rounded-lg text-center">
            <p className="text-gray-700">
              Want to explore more features?{" "}
              <a
                href="https://example.com/docs"
                className="text-orange-600 font-semibold hover:underline"
              >
                View Documentation
              </a>
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer
          data-scroll
          className={`border-t-2 border-gray-200 pt-12 pb-6 ${
            visibleSections["footer"] ? "visible" : ""
          }`}
          id="footer"
        >
          {/* Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                About EnergyHarvest
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Leading provider of piezoelectric energy harvesting solutions
                for sustainable power generation.
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 transition"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 transition"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-orange-500 hover:text-orange-600 transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    Solar Panels
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    Monitoring System
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    Integration Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    API Documentation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-orange-500 transition text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    +91 (123) 456-7890
                  </span>
                </li>
                <li className="flex gap-3">
                  <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">
                    support@energyharvest.com
                  </span>
                </li>
                <li className="flex gap-3">
                  <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Divider */}
          <div className="border-t border-gray-200 pt-6">
            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-600 text-sm">
                Last updated: {new Date().toLocaleString()} | System Status:{" "}
                <span className="font-semibold text-emerald-600">
                  Operational
                </span>
              </p>
              <div className="flex gap-6">
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition text-sm"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition text-sm"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-orange-500 transition text-sm"
                >
                  Cookie Policy
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-xs mt-4 text-center">
              &copy; 2025 EnergyHarvest. All rights reserved. | Energy
              Harvesting System Dashboard v2.0 | Ready for ESP8266 Integration
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
