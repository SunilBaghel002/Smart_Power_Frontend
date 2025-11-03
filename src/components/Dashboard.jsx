"use client"

import { useState, useEffect } from "react"
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
} from "recharts"
import { AlertCircle, Battery, Zap, Activity, TrendingUp, AlertTriangle, CheckCircle, Clock } from "lucide-react"

// Simulated real-time data
const generateEnergyData = () => {
  return Array.from({ length: 24 }, (_, i) => ({
    time: `${i}:00`,
    energy: Math.floor(Math.random() * 500) + 200,
    power: Math.floor(Math.random() * 150) + 50,
  }))
}

const generateTrendData = () => {
  return Array.from({ length: 7 }, (_, i) => ({
    day: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i],
    generated: Math.floor(Math.random() * 5000) + 3000,
    harvested: Math.floor(Math.random() * 4500) + 2500,
  }))
}

const generateStepFrequency = () => {
  return Array.from({ length: 12 }, (_, i) => ({
    hour: `${i}:00`,
    steps: Math.floor(Math.random() * 200) + 50,
    frequency: Math.floor(Math.random() * 150) + 40,
  }))
}

export default function EnergyHarvestingDashboard() {
  const [energyData, setEnergyData] = useState(generateEnergyData())
  const [trendData, setTrendData] = useState(generateTrendData())
  const [stepFrequency, setStepFrequency] = useState(generateStepFrequency())
  const [selectedTimeframe, setSelectedTimeframe] = useState("daily")
  const [alerts, setAlerts] = useState([
    { id: 1, type: "warning", message: "Battery charge level below 20%", component: "TP4056 Charging Module" },
    { id: 2, type: "critical", message: "Voltage regulator efficiency dropped to 85%", component: "AMS1117 Regulator" },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setEnergyData(generateEnergyData())
      setTrendData(generateTrendData())
      setStepFrequency(generateStepFrequency())
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Component Status Data
  const componentStatus = [
    { name: "Piezoelectric Sensor", efficiency: 92, status: "healthy", lifetime: "85%", voltage: "4.2V" },
    { name: "Li-ion Battery", efficiency: 78, status: "warning", lifetime: "45%", voltage: "3.7V" },
    { name: "Voltage Regulator (AMS1117)", efficiency: 85, status: "warning", lifetime: "72%", voltage: "5.0V" },
    { name: "TP4056 Charging Module", efficiency: 88, status: "healthy", lifetime: "92%", voltage: "4.2V" },
    { name: "DC-DC Boost Converter", efficiency: 91, status: "healthy", lifetime: "88%", voltage: "12V" },
    { name: "BMS 3s Battery Module", efficiency: 94, status: "healthy", lifetime: "95%", voltage: "11.1V" },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-50 border-green-200"
      case "warning":
        return "bg-amber-50 border-amber-200"
      case "critical":
        return "bg-red-50 border-red-200"
      default:
        return "bg-gray-50 border-gray-200"
    }
  }

  const getStatusBadgeColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-500 text-white"
      case "warning":
        return "bg-amber-500 text-white"
      case "critical":
        return "bg-red-500 text-white"
      default:
        return "bg-gray-500 text-white"
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case "healthy":
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-amber-600" />
      case "critical":
        return <AlertCircle className="w-4 h-4 text-red-600" />
      default:
        return null
    }
  }

  // KPI Data
  const totalEnergyGenerated = energyData.reduce((sum, d) => sum + d.energy, 0)
  const avgPower = (energyData.reduce((sum, d) => sum + d.power, 0) / energyData.length).toFixed(2)
  const peakVoltage = 12.5
  const systemUptime = "24d 14h 32m"
  const batteryLevel = 42

  const chartColors = {
    primary: "#3b82f6",
    secondary: "#10b981",
    accent: "#f59e0b",
    danger: "#ef4444",
  }

  const pieData = [
    { name: "Solar Contribution", value: 35 },
    { name: "Piezoelectric Contribution", value: 45 },
    { name: "Other Sources", value: 20 },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 lg:px-12 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-2">
            <Zap className="w-10 h-10" />
            <h1 className="text-4xl font-bold">Energy Harvesting System Dashboard</h1>
          </div>
          <p className="text-blue-100">Real-time monitoring and analytics for piezoelectric energy generation</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
        {/* KPI Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-12">
          {/* Total Energy Generated */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Total Energy Generated</p>
                <h3 className="text-3xl font-bold text-gray-900">{(totalEnergyGenerated / 1000).toFixed(2)} kWh</h3>
              </div>
              <Zap className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-gray-500 text-xs">+12.5% from yesterday</p>
          </div>

          {/* Average Power */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Average Power Output</p>
                <h3 className="text-3xl font-bold text-gray-900">{avgPower} W</h3>
              </div>
              <Activity className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-gray-500 text-xs">Current 24hr average</p>
          </div>

          {/* Peak Voltage */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Peak Voltage Output</p>
                <h3 className="text-3xl font-bold text-gray-900">{peakVoltage}V</h3>
              </div>
              <TrendingUp className="w-8 h-8 text-amber-600" />
            </div>
            <p className="text-gray-500 text-xs">Maximum recorded today</p>
          </div>

          {/* Battery Level */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">Battery Charge Level</p>
                <h3 className="text-3xl font-bold text-gray-900">{batteryLevel}%</h3>
              </div>
              <Battery className="w-8 h-8 text-yellow-600" />
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${batteryLevel}%` }}></div>
            </div>
          </div>

          {/* System Uptime */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="flex items-start justify-between mb-4">
              <div>
                <p className="text-gray-500 text-sm font-medium mb-1">System Uptime</p>
                <h3 className="text-2xl font-bold text-gray-900">{systemUptime}</h3>
              </div>
              <Clock className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-gray-500 text-xs">Since last reboot</p>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Energy Generation Over Time */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Energy Generation Over 24 Hours</h2>
              <p className="text-gray-500 text-sm mt-1">Real-time energy production tracking</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={energyData}>
                <defs>
                  <linearGradient id="colorEnergy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                  formatter={(value) => `${value} Wh`}
                />
                <Area type="monotone" dataKey="energy" stroke="#3b82f6" fillOpacity={1} fill="url(#colorEnergy)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Power Output Trend */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Power Output Trend</h2>
              <p className="text-gray-500 text-sm mt-1">Hourly power measurement analysis</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                  formatter={(value) => `${value} W`}
                />
                <Legend />
                <Line type="monotone" dataKey="power" stroke="#10b981" strokeWidth={2} dot={false} name="Power (W)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Weekly Energy Comparison */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Weekly Energy Analysis</h2>
              <p className="text-gray-500 text-sm mt-1">Generated vs Harvested energy comparison</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip
                  contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                  formatter={(value) => `${value} Wh`}
                />
                <Legend />
                <Bar dataKey="generated" fill="#3b82f6" radius={[8, 8, 0, 0]} name="Generated (Wh)" />
                <Bar dataKey="harvested" fill="#10b981" radius={[8, 8, 0, 0]} name="Harvested (Wh)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Energy Source Distribution */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Energy Source Distribution</h2>
              <p className="text-gray-500 text-sm mt-1">Contribution breakdown by source</p>
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
                  <Cell fill="#3b82f6" />
                  <Cell fill="#10b981" />
                  <Cell fill="#f59e0b" />
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Step Frequency Analysis */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-xl font-bold text-gray-900">Step Frequency & Activity Level</h2>
              <p className="text-gray-500 text-sm mt-1">Kinetic energy harvesting rates throughout the day</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={stepFrequency}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="hour" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <Tooltip contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                <Legend />
                <Line type="monotone" dataKey="steps" stroke="#f59e0b" strokeWidth={2} name="Steps Detected" />
                <Line type="monotone" dataKey="frequency" stroke="#8b5cf6" strokeWidth={2} name="Frequency (Hz)" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Component Status & Health Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Component Status & Efficiency</h2>
          <p className="text-gray-500 mb-6">Real-time health monitoring of all system components</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {componentStatus.map((component, idx) => (
              <div key={idx} className={`border rounded-lg p-6 ${getStatusColor(component.status)}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base">{component.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">Efficiency & Performance</p>
                  </div>
                  {getStatusIcon(component.status)}
                </div>

                {/* Efficiency Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">Efficiency</span>
                    <span className="text-sm font-bold text-gray-900">{component.efficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        component.efficiency > 90
                          ? "bg-green-500"
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
                    <p className="text-xs text-gray-600 font-medium">Lifetime</p>
                    <p className="text-sm font-bold text-gray-900">{component.lifetime}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600 font-medium">Voltage</p>
                    <p className="text-sm font-bold text-gray-900">{component.voltage}</p>
                  </div>
                </div>

                {/* Status Badge */}
                <div className="mt-4 pt-4 border-t border-current border-opacity-20">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusBadgeColor(component.status)}`}
                  >
                    {component.status.charAt(0).toUpperCase() + component.status.slice(1)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts & Notifications Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Alerts & Notifications</h2>
          <p className="text-gray-500 mb-6">Active system alerts and maintenance notifications</p>

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
                    <p className="text-sm opacity-75 mt-1">Component: {alert.component}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Real-time Metrics Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Real-time Electrical Metrics</h2>
          <p className="text-gray-500 mb-6">Current system performance indicators</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Sensor Input Voltage", value: "2.45V", unit: "V", color: "blue" },
              { label: "Sensor Input Current", value: "145mA", unit: "mA", color: "green" },
              { label: "Rectifier Output", value: "1.92V", unit: "V", color: "purple" },
              { label: "Charging Status", value: "Active", unit: "Status", color: "amber" },
              { label: "Battery Voltage", value: "3.72V", unit: "V", color: "indigo" },
              { label: "Boost Converter Output", value: "11.85V", unit: "V", color: "cyan" },
              { label: "System Load Current", value: "280mA", unit: "mA", color: "rose" },
              { label: "Temperature", value: "32.5°C", unit: "°C", color: "orange" },
            ].map((metric, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <p className="text-gray-500 text-sm font-medium mb-2">{metric.label}</p>
                <p className="text-3xl font-bold text-gray-900">{metric.value}</p>
                <div
                  className={`inline-block mt-3 px-2 py-1 rounded text-xs font-semibold bg-${metric.color}-100 text-${metric.color}-700`}
                >
                  {metric.unit}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 text-center">
          <p className="text-gray-600 text-sm">
            Last updated: {new Date().toLocaleString()} | System Status:{" "}
            <span className="font-semibold text-green-600">Operational</span>
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Energy Harvesting System Dashboard v1.0 | NodeMCU ESP8266 Connected
          </p>
        </div>
      </div>
    </div>
  )
}
