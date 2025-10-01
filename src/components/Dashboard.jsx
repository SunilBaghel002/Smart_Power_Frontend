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

export default function Dashboard() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("24h");
  const [realTimeData, setRealTimeData] = useState({
    totalSteps: 0,
    voltageProduced: 0.00,
    energyRate: 0.00,
    efficiency: 94.2,
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Gradual increase for totalSteps and voltageProduced after 10 seconds
  useEffect(() => {
    let timeout;
    let interval;

    // Start after 10 seconds
    timeout = setTimeout(() => {
      interval = setInterval(() => {
        setRealTimeData((prev) => ({
          ...prev,
          totalSteps: prev.totalSteps + 1,
          voltageProduced: 3+ Math.random()*1,
          energyRate: 15 + Math.random() * 5, // Lower range: 15-20 kW/hour
          efficiency: 92 + Math.random() * 4,
        }));
      }, 3000); // Update every 2 seconds
    }, 20000); // 10-second delay

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 1000);
  };

  const locations = [
    {
      name: "New York Hub",
      devices: 234,
      energy: 12847,
      status: "active",
      efficiency: 96.2,
    },
    {
      name: "London Center",
      devices: 189,
      energy: 9634,
      status: "active",
      efficiency: 94.8,
    },
    {
      name: "Tokyo Station",
      devices: 156,
      energy: 7892,
      status: "maintenance",
      efficiency: 89.4,
    },
    {
      name: "Berlin Campus",
      devices: 203,
      energy: 11234,
      status: "active",
      efficiency: 97.1,
    },
    {
      name: "Sydney Grid",
      devices: 178,
      energy: 8456,
      status: "active",
      efficiency: 93.7,
    },
  ];

  const blockchainData = [
    {
      block: "#47291",
      timestamp: "2 min ago",
      devices: 45,
      energy: 234.5,
      hash: "a7f3...9c2d",
      verified: true,
    },
    {
      block: "#47290",
      timestamp: "5 min ago",
      devices: 38,
      energy: 189.2,
      hash: "c8e1...4a7b",
      verified: true,
    },
    {
      block: "#47289",
      timestamp: "8 min ago",
      devices: 52,
      energy: 267.8,
      hash: "f2d9...8e3c",
      verified: true,
    },
    {
      block: "#47288",
      timestamp: "11 min ago",
      devices: 41,
      energy: 201.3,
      hash: "b5c7...6f2a",
      verified: true,
    },
  ];

  const recentAlerts = [
    {
      type: "warning",
      message: "Tokyo Station efficiency below 90%",
      time: "5 min ago",
    },
    {
      type: "success",
      message: "Berlin Campus reached daily target",
      time: "1 hour ago",
    },
    {
      type: "info",
      message: "New device connected in Sydney Grid",
      time: "2 hours ago",
    },
  ];

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
                  <h1 className="text-xl font-bold">Smart Power Dashboard</h1>
                  <p className="text-sm text-gray-400">
                    Global Energy Monitoring
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
                  Energy Rate
                </p>
                <p className="text-3xl font-bold">
                  {realTimeData.energyRate.toFixed(1)}
                </p>
                <p className="text-purple-400 text-sm">kW/hour</p>
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
                          {location.devices} devices
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
                      <p className="text-sm text-gray-400">Efficiency</p>
                      <p className="text-lg font-semibold">
                        {location.efficiency}%
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

          {/* Blockchain Verification */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Blockchain Ledger</h3>
              <div className="flex items-center space-x-2 text-green-400">
                <Shield className="w-5 h-5" />
                <span className="text-sm">100% Verified</span>
              </div>
            </div>

            <div className="space-y-4">
              {blockchainData.map((block, index) => (
                <div key={index} className="bg-black/20 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="font-mono text-sm">{block.block}</span>
                    </div>
                    <span className="text-xs text-gray-400">
                      {block.timestamp}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-2">
                    <div>
                      <p className="text-xs text-gray-400">Devices</p>
                      <p className="text-sm font-medium">{block.devices}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Energy</p>
                      <p className="text-sm font-medium">{block.energy} kWh</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-gray-400">
                      {block.hash}
                    </span>
                    <div className="flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-xs text-green-400">Verified</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg hover:from-green-500/30 hover:to-blue-500/30 transition-all">
              View Full Blockchain Explorer
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
    </div>
  );
}
