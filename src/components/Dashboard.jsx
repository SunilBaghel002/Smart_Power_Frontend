"use client";

import { useState, useEffect, useRef } from "react";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Zap,
  Activity,
  TrendingUp,
  Battery,
  Clock,
  Wifi,
  WifiOff,
  X,
  Share2,
  Copy,
  Check,
  Leaf,
  IndianRupee,
  Home,
  AlertTriangle,
  AlertCircle,
} from "lucide-react";

const ESP_URL = "http://10.56.24.97";

export default function EnergyDashboard() {
  const [greeting, setGreeting] = useState(getGreeting());
  const [showBillboard, setShowBillboard] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Live ESP Data
  const [espData, setEspData] = useState({
    steps: 0,
    stepVoltage: 0.0,
    totalVoltage: 0.0,
    lastUpdate: 0,
  });
  const [espInfo, setEspInfo] = useState({ ip: "-", mac: "Unknown" });
  const [lastUpdateStr, setLastUpdateStr] = useState("Never");

  // Chart History — ARRAY OF OBJECTS (Fixed!)
  const [history, setHistory] = useState([]);
  const maxPoints = 24;
  const prevDataRef = useRef(espData);

  // Fetch ESP Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${ESP_URL}/data`, { cache: "no-store" });
        if (!res.ok) throw new Error("Failed");
        const d = await res.json();

        const prev = prevDataRef.current;
        if (
          d.steps !== prev.steps ||
          Math.abs(d.stepVoltage - prev.stepVoltage) > 0.001 ||
          Math.abs(d.totalVoltage - prev.totalVoltage) > 0.001
        ) {
          setIsUpdating(true);
          setTimeout(() => setIsUpdating(false), 600);
        }

        setEspData(d);
        prevDataRef.current = d;
        setIsOnline(true);
        setLastUpdateStr(new Date().toLocaleTimeString());

        const now = new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        setHistory((prev) => {
          const newEntry = {
            time: now,
            energy: d.totalVoltage * 0.1, // Wh
            power: d.stepVoltage * 10,    // W
            steps: d.steps,
          };
          return [...prev, newEntry].slice(-maxPoints);
        });
      } catch (err) {
        setIsOnline(false);
      }
    };

    const fetchInfo = async () => {
      try {
        const res = await fetch(`${ESP_URL}/info`, { cache: "no-store" });
        if (res.ok) {
          const i = await res.json();
          setEspInfo({ ip: i.ip || "-", mac: i.mac || "Unknown" });
        }
      } catch {}
    };

    fetchData();
    fetchInfo();
    const id = setInterval(fetchData, 1000);
    return () => clearInterval(id);
  }, []);

  // Greeting
  useEffect(() => {
    const id = setInterval(() => setGreeting(getGreeting()), 5 * 60 * 1000);
    return () => clearInterval(id);
  }, []);

  // KPI
  const totalEnergy = (espData.totalVoltage * 0.1).toFixed(2);
  const avgPower = (espData.stepVoltage * 10).toFixed(2);
  const batteryLevel = Math.min(100, Math.round(espData.totalVoltage * 8));

  const alerts = batteryLevel < 30
    ? [{ type: "critical", message: "Battery critically low!" }]
    : batteryLevel < 50
    ? [{ type: "warning", message: "Battery below 50%" }]
    : [];

  function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return { text: "Good Morning", color: "from-amber-500 to-orange-500" };
    if (h < 17) return { text: "Good Afternoon", color: "from-orange-500 to-rose-500" };
    if (h < 21) return { text: "Good Evening", color: "from-purple-500 to-pink-500" };
    return { text: "Good Night", color: "from-indigo-500 to-purple-500" };
  }

  const handleCopy = () => {
    const text = `ESP8266 harvested ${totalEnergy} Wh today! Saved ₹${Math.round(parseFloat(totalEnergy) * 8.5 / 1000)}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <header className={`bg-gradient-to-r ${greeting.color} text-white p-8`}>
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">{greeting.text}!</h1>
          <p className="text-xl mt-2 flex items-center gap-2">
            Live ESP8266 Dashboard
            {isOnline ? (
              <span className="flex items-center gap-1 text-green-300">
                <Wifi className="w-5 h-5 animate-pulse" /> ONLINE
              </span>
            ) : (
              <span className="flex items-center gap-1 text-red-300">
                <WifiOff className="w-5 h-5" /> OFFLINE
              </span>
            )}
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto p-6 space-y-8">

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: "Steps", value: espData.steps, icon: Zap, color: "text-orange-500" },
            { label: "Step V", value: `${espData.stepVoltage.toFixed(3)}V`, icon: Activity, color: "text-rose-500" },
            { label: "Total V", value: `${espData.totalVoltage.toFixed(3)}V`, icon: TrendingUp, color: "text-purple-500" },
            { label: "Battery", value: `${batteryLevel}%`, icon: Battery, color: "text-pink-500", progress: true },
            { label: "Last Update", value: lastUpdateStr, icon: Clock, color: "text-violet-500", small: true },
          ].map((k, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-5 shadow-sm border border-gray-200 transition-all ${
                isUpdating ? "animate-pulse" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">{k.label}</p>
                  <p className={`text-2xl font-bold ${k.small ? "text-lg" : ""}`}>{k.value}</p>
                </div>
                <k.icon className={`w-8 h-8 ${k.color}`} />
              </div>
              {k.progress && (
                <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-pink-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${batteryLevel}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Energy (Wh)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={history}>
                <defs>
                  <linearGradient id="energy" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f97316" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#f97316" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip formatter={(v) => `${v} Wh`} />
                <Area type="monotone" dataKey="energy" stroke="#f97316" fill="url(#energy)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border">
            <h3 className="text-lg font-semibold mb-4">Power (W)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip formatter={(v) => `${v} W`} />
                <Line type="monotone" dataKey="power" stroke="#d946ef" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Steps Detected</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={history}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="steps" fill="#a855f7" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Alerts */}
        {alerts.length > 0 && (
          <div className="space-y-3">
            {alerts.map((a, i) => (
              <div
                key={i}
                className={`flex items-center gap-3 p-4 rounded-lg border-l-4 ${
                  a.type === "critical" ? "bg-red-50 border-red-500" : "bg-amber-50 border-amber-500"
                }`}
              >
                {a.type === "critical" ? (
                  <AlertCircle className="w-5 h-5 text-red-600" />
                ) : (
                  <AlertTriangle className="w-5 h-5 text-amber-600" />
                )}
                <p className="font-medium">{a.message}</p>
              </div>
            ))}
          </div>
        )}

        {/* Billboard Button */}
        <button
          onClick={() => setShowBillboard(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-rose-500 text-white rounded-full p-4 shadow-lg hover:scale-110 transition-all flex items-center gap-2 z-10"
        >
          <Zap className="w-5 h-5" />
          <span className="font-bold">Today’s Impact</span>
        </button>

        {/* Billboard Modal */}
        {showBillboard && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-8 relative">
              <button
                onClick={() => setShowBillboard(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold text-center mb-6">Today's Harvest</h2>
              <div className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-500 text-center mb-8">
                {totalEnergy} Wh
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-green-50 p-4 rounded-xl">
                  <Leaf className="w-10 h-10 mx-auto text-green-600 mb-2" />
                  <p className="text-2xl font-bold text-green-700">
                    {((parseFloat(totalEnergy) * 0.7) / 1000).toFixed(2)} kg
                  </p>
                  <p className="text-sm text-gray-600">CO₂ Saved</p>
                </div>
                <div className="bg-amber-50 p-4 rounded-xl">
                  <IndianRupee className="w-10 h-10 mx-auto text-amber-600 mb-2" />
                  <p className="text-2xl font-bold text-amber-700">
                    ₹{Math.round(parseFloat(totalEnergy) * 8.5 / 1000)}
                  </p>
                  <p className="text-sm text-gray-600">Bill Saved</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-xl">
                  <Home className="w-10 h-10 mx-auto text-purple-600 mb-2" />
                  <p className="text-2xl font-bold text-purple-700">
                    {(parseFloat(totalEnergy) / 3.5).toFixed(1)}
                  </p>
                  <p className="text-sm text-gray-600">Homes (1hr)</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-xl">
                <button
                  onClick={handleCopy}
                  className="w-full bg-orange-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-600 transition"
                >
                  {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                  {copied ? "Copied!" : "Copy to Share"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="mt-16 py-8 text-center text-sm text-gray-500 border-t">
        <p>
          ESP: <span className="font-mono">{espInfo.ip}</span> | MAC: {espInfo.mac}
        </p>
        <p className="mt-1">© 2025 EnergyHarvest. Live with ESP8266.</p>
      </footer>
    </div>
  );
}