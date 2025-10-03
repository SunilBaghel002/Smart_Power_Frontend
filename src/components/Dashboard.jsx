// Updated Frontend: Dashboard.jsx (React with API calls)
import React, { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  Globe,
  BarChart3,
  Cpu,
  TrendingUp,
  TrendingDown,
  MapPin,
  Users,
  Battery,
  Activity,
  Server,
  AlertTriangle,
  CheckCircle,
  Filter,
  Download,
  RefreshCw,
  Search,
  Calendar,
  Settings,
  Bell,
} from "lucide-react";

const API_BASE = "http://localhost:5000/api";

export default function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");
  const [realTimeData, setRealTimeData] = useState({
    totalSteps: 0,
    voltageProduced: 0.0,
    energyRate: 0.0,
    efficiency: 0.0,
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch data from backend
  const fetchData = async () => {
    try {
      const response = await fetch(`${API_BASE}/data`);
      const data = await response.json();
      setRealTimeData(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Poll for updates every 3 seconds (after initial load)
  useEffect(() => {
    fetchData(); // Initial fetch

    const interval = setInterval(() => {
      fetchData();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Keyboard event listener for Shift + B
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.shiftKey && e.key.toLowerCase() === "b") {
        e.preventDefault();
        setShowSecretModal(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_BASE}/increment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: enteredPassword }),
      });
      if (response.ok) {
        setIsAuthenticated(true);
        setShowSecretModal(false);
        setEnteredPassword("");
        fetchData(); // Refresh data
      } else {
        alert("Incorrect password!");
        setEnteredPassword("");
      }
    } catch (err) {
      alert("Error authenticating!");
      setEnteredPassword("");
    }
  };

  const handleIncrement = async () => {
    try {
      const response = await fetch(`${API_BASE}/increment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: "Satyam121" }), // Password sent each time for simplicity
      });
      if (response.ok) {
        fetchData(); // Refresh data
      } else {
        alert("Authentication failed!");
      }
    } catch (err) {
      console.error("Error incrementing:", err);
    }
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    fetchData();
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex items-center justify-center">
        <div className="animate-spin">Loading...</div>
      </div>
    );
  }

  const locations = [
    {
      name: "MIT Campus Plaza",
      devices: 45,
      energy: 12847,
      status: "active",
      efficiency: 96.2,
      brickCount: 45,
      avgVoltage: 3.8,
    },
    {
      name: "Stanford University Walkway",
      devices: 32,
      energy: 9634,
      status: "active",
      efficiency: 94.8,
      brickCount: 32,
      avgVoltage: 4.1,
    },
    {
      name: "Tokyo Tech Center",
      devices: 28,
      energy: 7892,
      status: "maintenance",
      efficiency: 89.4,
      brickCount: 28,
      avgVoltage: 3.2,
    },
    {
      name: "Berlin Innovation Hub",
      devices: 38,
      energy: 11234,
      status: "active",
      efficiency: 97.1,
      brickCount: 38,
      avgVoltage: 4.3,
    },
    {
      name: "Sydney University Square",
      devices: 25,
      energy: 8456,
      status: "active",
      efficiency: 93.7,
      brickCount: 25,
      avgVoltage: 3.9,
    },
  ];

  const arduinoData = [
    {
      deviceId: "ARD-MIT-001",
      timestamp: "2 min ago",
      bricks: 12,
      voltage: 4.2,
      energy: 234.5,
      steps: 1847,
      batteryLevel: 87,
      temperature: 23.4,
    },
    {
      deviceId: "ARD-STAN-045",
      timestamp: "5 min ago",
      bricks: 8,
      voltage: 3.9,
      energy: 189.2,
      steps: 1234,
      batteryLevel: 92,
      temperature: 24.1,
    },
    {
      deviceId: "ARD-TOK-078",
      timestamp: "8 min ago",
      bricks: 15,
      voltage: 3.2,
      energy: 267.8,
      steps: 2134,
      batteryLevel: 76,
      temperature: 22.8,
    },
    {
      deviceId: "ARD-BER-023",
      timestamp: "11 min ago",
      bricks: 10,
      voltage: 4.3,
      energy: 201.3,
      steps: 1567,
      batteryLevel: 89,
      temperature: 21.9,
    },
  ];

  const recentAlerts = [
    {
      type: "warning",
      message: "Tokyo Tech Center: Low battery level (76%) on ARD-TOK-078",
      time: "5 min ago",
    },
    {
      type: "success",
      message: "Berlin Innovation Hub: Daily energy target exceeded (150%)",
      time: "1 hour ago",
    },
    {
      type: "info",
      message: "New Arduino unit ARD-SYD-025 connected and calibrated",
      time: "2 hours ago",
    },
    {
      type: "warning",
      message: "High temperature detected on ARD-STAN-045 (28.5°C)",
      time: "3 hours ago",
    },
  ];

  // Secret Modal
  const renderSecretModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 w-80">
        <h3 className="text-xl font-semibold mb-4 text-white">
          Enter Password
        </h3>
        <form onSubmit={handlePasswordSubmit}>
          <input
            type="password"
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 mb-4"
            required
          />
          <div className="flex space-x-3">
            <button
              type="submit"
              className="flex-1 py-2 bg-green-500/20 border border-green-500/30 rounded-lg hover:bg-green-500/30 transition-all text-white"
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setShowSecretModal(false);
                setEnteredPassword("");
              }}
              className="flex-1 py-2 bg-red-500/20 border border-red-500/30 rounded-lg hover:bg-red-500/30 transition-all text-white"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  // Secret Increment Tool (after authentication)
  const renderSecretTool = () => (
    <div className="fixed bottom-6 right-6 z-40">
      <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-4 border border-purple-500/30">
        <h4 className="text-sm font-semibold mb-2 text-purple-300">
          Secret Increment Tool
        </h4>
        <p className="text-xs text-purple-400 mb-3">Authenticated Access</p>
        <button
          onClick={handleIncrement}
          className="w-full py-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white font-medium hover:from-green-600 hover:to-blue-600 transition-all"
        >
          Increment Parameters
        </button>
        <button
          onClick={() => setIsAuthenticated(false)}
          className="w-full mt-2 py-1 text-xs text-red-400 hover:text-red-300 transition-all"
        >
          Close Tool
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold">
                    Smart Energy Bricks Dashboard
                  </h1>
                  <p className="text-sm text-gray-400">
                    Real-time Piezoelectric Energy Monitoring
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm">Live</span>
              </div>

              <button
                onClick={handleRefresh}
                className={`p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all ${
                  isRefreshing ? "animate-spin" : ""
                }`}
                aria-label="Refresh dashboard data"
              >
                <RefreshCw className="w-5 h-5" />
              </button>

              <button
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                aria-label="View notifications"
              >
                <Bell className="w-5 h-5" />
              </button>

              <button
                className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                aria-label="Open settings"
              >
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-400 text-sm font-medium">
                  Total Steps
                </p>
                <p className="text-3xl font-bold">
                  {realTimeData.totalSteps.toLocaleString()}
                </p>
                <p className="text-green-400 text-sm">Steps</p>
              </div>
              <div className="p-3 bg-green-500/20 rounded-xl">
                <Zap className="w-8 h-8 text-green-400" />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <TrendingUp className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">
                +12.5% from yesterday
              </span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-400 text-sm font-medium">
                  Voltage Produced
                </p>
                <p className="text-3xl font-bold">
                  {realTimeData.voltageProduced.toLocaleString()}
                </p>
                <p className="text-blue-400 text-sm">mV</p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded-xl">
                <Cpu className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <TrendingUp className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">+3.2% this week</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-400 text-sm font-medium">
                  Battery Level
                </p>
                <p className="text-3xl font-bold">
                  {Math.min(85 + Math.random() * 10, 95).toFixed(1)}
                </p>
                <p className="text-purple-400 text-sm">%</p>
              </div>
              <div className="p-3 bg-purple-500/20 rounded-xl">
                <Activity className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <TrendingUp className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">Peak performance</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-400 text-sm font-medium">
                  System Efficiency
                </p>
                <p className="text-3xl font-bold">
                  {realTimeData.efficiency.toFixed(1)}%
                </p>
                <p className="text-orange-400 text-sm">Overall</p>
              </div>
              <div className="p-3 bg-orange-500/20 rounded-xl">
                <Battery className="w-8 h-8 text-orange-400" />
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-4">
              <CheckCircle className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-400">Optimal range</span>
            </div>
          </div>
        </div>

        {/* Charts and Analytics */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Energy Production Chart */}
          <div className="lg:col-span-2 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">
                Energy Production Trends
              </h3>
              <div className="flex items-center space-x-2">
                <select
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="bg-white/10 border border-white/20 rounded-lg px-3 py-1 text-sm"
                  aria-label="Select time range for energy production trends"
                >
                  <option value="24h">Last 24 Hours</option>
                  <option value="7d">Last 7 Days</option>
                  <option value="30d">Last 30 Days</option>
                </select>
              </div>
            </div>

            {/* Simulated Chart */}
            <div className="h-64 bg-black/20 rounded-xl p-4 flex items-end justify-around">
              {Array.from({ length: 12 }, (_, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div
                    className="bg-gradient-to-t from-green-500 to-green-400 rounded-t w-6"
                    style={{ height: `${Math.random() * 160 + 40}px` }}
                  ></div>
                  <span className="text-xs text-gray-400">{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Alerts */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">System Alerts</h3>
              <span className="text-sm text-gray-400">
                {recentAlerts.length} active
              </span>
            </div>

            <div className="space-y-4">
              {recentAlerts.map((alert, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg"
                >
                  <div
                    className={`p-1 rounded-full ${
                      alert.type === "warning"
                        ? "bg-yellow-500/20"
                        : alert.type === "success"
                        ? "bg-green-500/20"
                        : "bg-blue-500/20"
                    }`}
                  >
                    {alert.type === "warning" && (
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    )}
                    {alert.type === "success" && (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    )}
                    {alert.type === "info" && (
                      <Activity className="w-4 h-4 text-blue-400" />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{alert.message}</p>
                    <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Location Monitoring */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Location Performance */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Location Performance</h3>
              <div className="flex items-center space-x-2">
                <button
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  aria-label="Filter locations"
                >
                  <Filter className="w-4 h-4" />
                </button>
                <button
                  className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                  aria-label="Download location data"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-blue-400" />
                      <div>
                        <h4 className="font-medium">{location.name}</h4>
                        <p className="text-sm text-gray-400">
                          {location.brickCount} smart bricks
                        </p>
                      </div>
                    </div>
                    <div
                      className={`px-2 py-1 rounded-full text-xs ${
                        location.status === "active"
                          ? "bg-green-500/20 text-green-400"
                          : location.status === "maintenance"
                          ? "bg-yellow-500/20 text-yellow-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {location.status}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-400">Energy Output</p>
                      <p className="text-lg font-semibold">
                        {location.energy.toLocaleString()} kWh
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Avg Voltage</p>
                      <p className="text-lg font-semibold text-blue-400">
                        {location.avgVoltage}V
                      </p>
                    </div>
                  </div>

                  <div className="mt-3">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-green-400 to-blue-500 h-2 rounded-full"
                        style={{ width: `${location.efficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Arduino System Status */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Arduino System Status</h3>
              <div className="flex items-center space-x-2 text-green-400">
                <Cpu className="w-5 h-5" />
                <span className="text-sm">All Systems Online</span>
              </div>
            </div>

            <div className="space-y-4">
              {arduinoData.map((device, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="font-mono text-sm">
                        {device.deviceId}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {device.timestamp}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-gray-400">Smart Bricks</p>
                      <p className="text-sm font-medium">{device.bricks}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Voltage (V)</p>
                      <p className="text-sm font-medium text-blue-400">
                        {device.voltage}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Steps</p>
                      <p className="text-sm font-medium">{device.steps}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-400">Battery</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-8 bg-gray-600 rounded-full h-2">
                          <div
                            className="bg-green-400 h-2 rounded-full"
                            style={{ width: `${device.batteryLevel}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-green-400">
                          {device.batteryLevel}%
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-gray-400">Temp: </span>
                      <span className="text-xs font-medium">
                        {device.temperature}°C
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg hover:from-green-500/30 hover:to-blue-500/30 transition-all">
              View Arduino Code & Setup Guide
            </button>
          </div>
        </div>

        {/* Global Map Placeholder */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold">Global Energy Map</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <span>Active</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span>Maintenance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <span>Offline</span>
              </div>
            </div>
          </div>

          {/* Simplified world map representation */}
          <div className="h-64 bg-black/20 rounded-xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20"></div>

            {/* Simulated location markers */}
            <div className="relative h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <Globe className="w-16 h-16 text-blue-400 mx-auto animate-pulse" />
                <p className="text-gray-400">
                  Interactive global energy distribution map
                </p>
                <p className="text-sm text-gray-500">
                  Showing {locations.length} active locations worldwide
                </p>
              </div>
            </div>

            {/* Floating stats */}
            <div className="absolute top-4 left-4 bg-black/40 rounded-lg p-3">
              <p className="text-sm text-gray-400">Total Locations</p>
              <p className="text-xl font-bold text-green-400">
                {locations.length}
              </p>
            </div>

            <div className="absolute top-4 right-4 bg-black/40 rounded-lg p-3">
              <p className="text-sm text-gray-400">Countries</p>
              <p className="text-xl font-bold text-blue-400">12</p>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional renders for secret features */}
      {showSecretModal && renderSecretModal()}
      {isAuthenticated && renderSecretTool()}
    </div>
  );
}
