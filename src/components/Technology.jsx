import React, { useState } from "react";
import {
  Cpu,
  Zap,
  Battery,
  Wifi,
  Shield,
  ChevronRight,
  Play,
  Code,
  Layers,
  BarChart3,
  Settings,
  CheckCircle,
  ArrowRight,
  Info,
  Monitor,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Download,
  ExternalLink,
  Book,
  Github,
  Users,
} from "lucide-react";

export default function Technology() {
  const [selectedComponent, setSelectedComponent] = useState("piezoelectric");
  const [activeTab, setActiveTab] = useState("hardware");

  const hardwareComponents = [
    {
      id: "piezoelectric",
      name: "Piezoelectric Sensors",
      description:
        "High-efficiency ceramic sensors that convert mechanical pressure from footsteps into electrical energy",
      specs: {
        "Power Output": "0.5-2.0W per step",
        "Voltage Range": "3-12V",
        Material: "PZT Ceramic",
        Durability: "10M+ steps",
        Efficiency: "85-92%",
      },
      features: [
        "Weather-resistant design",
        "High sensitivity to pressure",
        "Long-lasting ceramic construction",
        "Optimized for human footsteps",
        "Low maintenance requirements",
      ],
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",
      price: "$29.99",
    },
    {
      id: "arduino",
      name: "Arduino Uno R3",
      description:
        "Microcontroller board for data collection, processing, and energy management in the brick system",
      specs: {
        Microcontroller: "ATmega328P",
        "Digital I/O Pins": "14",
        "Analog Input Pins": "6",
        "Operating Voltage": "5V",
        "Input Voltage": "7-12V",
      },
      features: [
        "Real-time data processing",
        "Multiple sensor connections",
        "USB programming interface",
        "Compatible with various shields",
        "Open-source platform",
      ],
      image:
        "https://images.unsplash.com/photo-1553406830-c143465ac264?w=500&q=80",
      price: "$24.99",
    },
    {
      id: "tp4056",
      name: "TP4056 Charging Module",
      description:
        "Lithium battery charging circuit with protection for safe energy storage and power management",
      specs: {
        "Input Voltage": "4-8V",
        "Charging Current": "1A (adjustable)",
        "Battery Type": "Li-ion/Li-Po",
        Protection: "Over-charge, Over-discharge",
        Efficiency: "85%",
      },
      features: [
        "USB-C charging port",
        "LED charge indicators",
        "Thermal protection",
        "Reverse polarity protection",
        "Compact form factor",
      ],
      image:
        "https://images.unsplash.com/photo-1601972599720-a4c3b54be471?w=500&q=80",
      price: "$3.99",
    },
    {
      id: "lcd",
      name: "LCD I2C Display",
      description:
        "16x2 character display with I2C interface for showing real-time energy data and system status",
      specs: {
        "Display Size": "16x2 characters",
        Interface: "I2C (2 pins)",
        Backlight: "Blue/Green LED",
        "Operating Voltage": "5V",
        Contrast: "Adjustable",
      },
      features: [
        "Easy 2-wire connection",
        "Adjustable contrast",
        "Backlight control",
        "Custom character support",
        "Low power consumption",
      ],
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&q=80",
      price: "$8.99",
    },
    {
      id: "battery",
      name: "Li-ion Battery Pack",
      description:
        "High-capacity rechargeable battery for storing harvested energy from piezoelectric sensors",
      specs: {
        Capacity: "2000-5000mAh",
        Voltage: "3.7V nominal",
        Type: "Li-ion 18650",
        Cycles: "500+ charge cycles",
        Safety: "Protected circuit",
      },
      features: [
        "High energy density",
        "Low self-discharge",
        "Built-in protection",
        "Rechargeable design",
        "Environmental friendly",
      ],
      image:
        "https://images.unsplash.com/photo-1609592106311-d5ecd1b9fb1b?w=500&q=80",
      price: "$15.99",
    },
    {
      id: "esp8266",
      name: "ESP8266 WiFi Module",
      description:
        "Wireless connectivity module for transmitting energy data to cloud servers and IoT platforms",
      specs: {
        "WiFi Standard": "802.11 b/g/n",
        Frequency: "2.4GHz",
        Processor: "32-bit RISC",
        "Flash Memory": "4MB",
        "Operating Voltage": "3.3V",
      },
      features: [
        "Built-in WiFi connectivity",
        "TCP/IP protocol stack",
        "Low power consumption",
        "OTA firmware updates",
        "IoT platform integration",
      ],
      image:
        "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=500&q=80",
      price: "$6.99",
    },
  ];

  const softwareFeatures = [
    {
      name: "Real-time Data Collection",
      description:
        "Continuous monitoring of step counts, voltage output, and energy generation rates",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["Arduino IDE", "C++", "Real-time OS"],
    },
    {
      name: "Energy Management System",
      description:
        "Intelligent power routing and battery management for optimal energy storage",
      icon: <Battery className="w-8 h-8" />,
      technologies: ["PWM Control", "MPPT Algorithm", "Battery Protection"],
    },
    {
      name: "IoT Connectivity",
      description:
        "Wireless data transmission to cloud servers and mobile applications",
      icon: <Wifi className="w-8 h-8" />,
      technologies: ["WiFi Protocols", "MQTT", "HTTP APIs"],
    },
    {
      name: "Data Analytics Dashboard",
      description:
        "Web-based interface for monitoring performance and generating reports",
      icon: <Monitor className="w-8 h-8" />,
      technologies: ["React.js", "Chart.js", "WebSocket"],
    },
    {
      name: "Mobile App Integration",
      description:
        "Cross-platform mobile app for remote monitoring and control",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["React Native", "Push Notifications", "Offline Sync"],
    },
    {
      name: "Cloud Infrastructure",
      description: "Scalable backend services for data storage and processing",
      icon: <Cloud className="w-8 h-8" />,
      technologies: ["Node.js", "MongoDB", "AWS/Azure"],
    },
  ];

  const systemArchitecture = {
    layers: [
      {
        name: "Physical Layer",
        description: "Piezoelectric sensors embedded in eco-friendly bricks",
        components: [
          "Piezoelectric Sensors",
          "Brick Housing",
          "Pressure Distribution",
        ],
      },
      {
        name: "Energy Conversion",
        description: "Convert mechanical energy to electrical energy",
        components: [
          "Energy Harvesting Circuit",
          "Voltage Regulation",
          "Power Conditioning",
        ],
      },
      {
        name: "Control & Processing",
        description: "Microcontroller-based data processing and control",
        components: ["Arduino Uno", "Data Processing", "System Control"],
      },
      {
        name: "Energy Storage",
        description: "Battery management and energy storage system",
        components: ["TP4056 Module", "Li-ion Batteries", "Charge Protection"],
      },
      {
        name: "Communication",
        description: "Wireless data transmission and connectivity",
        components: ["ESP8266 WiFi", "Data Protocols", "Cloud Integration"],
      },
      {
        name: "User Interface",
        description: "Local and remote monitoring interfaces",
        components: ["LCD Display", "Web Dashboard", "Mobile App"],
      },
    ],
  };

  const codeExamples = [
    {
      title: "Arduino Energy Monitoring",
      description: "Basic code for reading piezoelectric sensor data",
      language: "C++",
      code: `// Smart Energy Brick - Main Controller
#include <Wire.h>
#include <LiquidCrystal_I2C.h>
#include <WiFi.h>

// Pin definitions
const int PIEZO_PIN = A0;
const int LED_PIN = 13;

// Variables
float voltage = 0.0;
int stepCount = 0;
float totalEnergy = 0.0;

// LCD display
LiquidCrystal_I2C lcd(0x27, 16, 2);

void setup() {
  Serial.begin(9600);
  lcd.init();
  lcd.backlight();
  
  pinMode(LED_PIN, OUTPUT);
  
  lcd.print("Smart Energy");
  lcd.setCursor(0, 1);
  lcd.print("Brick v1.0");
  delay(2000);
}

void loop() {
  // Read piezoelectric sensor
  int sensorValue = analogRead(PIEZO_PIN);
  voltage = (sensorValue * 5.0) / 1023.0;
  
  // Detect step (threshold-based)
  if (voltage > 2.5) {
    stepCount++;
    totalEnergy += voltage * 0.1; // Simple energy calculation
    
    // Blink LED on step
    digitalWrite(LED_PIN, HIGH);
    delay(100);
    digitalWrite(LED_PIN, LOW);
  }
  
  // Update display
  updateDisplay();
  
  // Send data to cloud (every 10 seconds)
  static unsigned long lastSend = 0;
  if (millis() - lastSend > 10000) {
    sendToCloud();
    lastSend = millis();
  }
  
  delay(50);
}

void updateDisplay() {
  lcd.clear();
  lcd.print("Steps: " + String(stepCount));
  lcd.setCursor(0, 1);
  lcd.print("Energy: " + String(totalEnergy, 2) + "mWh");
}

void sendToCloud() {
  // WiFi transmission code here
  Serial.println("Sending data to cloud...");
  // Implementation for cloud connectivity
}`,
    },
    {
      title: "React Dashboard Component",
      description: "Real-time data visualization dashboard",
      language: "JavaScript",
      code: `// Smart Energy Brick Dashboard
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const EnergyDashboard = () => {
  const [data, setData] = useState({
    stepCount: 0,
    voltage: 0,
    totalEnergy: 0,
    efficiency: 0
  });
  
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    // WebSocket connection for real-time data
    const ws = new WebSocket('ws://localhost:3001/energy-data');
    
    ws.onmessage = (event) => {
      const newData = JSON.parse(event.data);
      setData(newData);
      
      // Update chart data
      setChartData(prev => [...prev, {
        time: new Date().toLocaleTimeString(),
        energy: newData.totalEnergy,
        voltage: newData.voltage
      }].slice(-20)); // Keep last 20 points
    };
    
    return () => ws.close();
  }, []);

  return (
    <div className="energy-dashboard">
      <h2>Smart Energy Brick Monitoring</h2>
      
      <div className="metrics-grid">
        <div className="metric-card">
          <h3>Step Count</h3>
          <div className="metric-value">{data.stepCount}</div>
        </div>
        
        <div className="metric-card">
          <h3>Voltage Output</h3>
          <div className="metric-value">{data.voltage.toFixed(2)}V</div>
        </div>
        
        <div className="metric-card">
          <h3>Total Energy</h3>
          <div className="metric-value">{data.totalEnergy.toFixed(2)}mWh</div>
        </div>
        
        <div className="metric-card">
          <h3>Efficiency</h3>
          <div className="metric-value">{data.efficiency.toFixed(1)}%</div>
        </div>
      </div>
      
      <div className="chart-container">
        <LineChart width={800} height={300} data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="energy" stroke="#10b981" />
          <Line type="monotone" dataKey="voltage" stroke="#3b82f6" />
        </LineChart>
      </div>
    </div>
  );
};

export default EnergyDashboard;`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
              <Cpu className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">
                Advanced Technology Stack
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold">
              How Our Smart Bricks
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Generate Energy
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore the cutting-edge technology behind our piezoelectric
              energy-generating bricks. From Arduino microcontrollers to
              wireless IoT connectivity, discover how we're revolutionizing
              sustainable energy.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-green-500 to-blue-600 px-8 py-4 rounded-xl hover:from-green-600 hover:to-blue-700 transition-all font-semibold flex items-center justify-center space-x-2">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
              <button className="border border-white/30 px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Specs</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Tabs */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {[
                  {
                    id: "hardware",
                    name: "Hardware Components",
                    icon: <Cpu className="w-5 h-5" />,
                  },
                  {
                    id: "software",
                    name: "Software Features",
                    icon: <Code className="w-5 h-5" />,
                  },
                  {
                    id: "architecture",
                    name: "System Architecture",
                    icon: <Layers className="w-5 h-5" />,
                  },
                  {
                    id: "code",
                    name: "Code Examples",
                    icon: <Github className="w-5 h-5" />,
                  },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-green-500 to-blue-600 text-white"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                  >
                    {tab.icon}
                    <span>{tab.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Hardware Components Tab */}
          {activeTab === "hardware" && (
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Component List */}
              <div className="lg:col-span-1 space-y-4">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Hardware Components
                </h3>
                {hardwareComponents.map((component) => (
                  <button
                    key={component.id}
                    onClick={() => setSelectedComponent(component.id)}
                    className={`w-full text-left p-4 rounded-xl transition-all ${
                      selectedComponent === component.id
                        ? "bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200"
                        : "bg-white border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {component.name}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {component.description.substring(0, 50)}...
                        </p>
                        <div className="text-lg font-bold text-green-600 mt-2">
                          {component.price}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 transform transition-transform ${
                          selectedComponent === component.id ? "rotate-90" : ""
                        }`}
                      />
                    </div>
                  </button>
                ))}
              </div>

              {/* Component Details */}
              <div className="lg:col-span-2">
                {hardwareComponents
                  .filter((comp) => comp.id === selectedComponent)
                  .map((component) => (
                    <div
                      key={component.id}
                      className="bg-white rounded-2xl p-8 shadow-lg"
                    >
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <img
                            src={component.image}
                            alt={component.name}
                            className="w-full h-64 object-cover rounded-xl mb-6"
                          />

                          <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {component.name}
                          </h3>
                          <p className="text-gray-600 mb-6">
                            {component.description}
                          </p>

                          <div className="flex items-center justify-between mb-6">
                            <div className="text-3xl font-bold text-green-600">
                              {component.price}
                            </div>
                            <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all">
                              Add to Cart
                            </button>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold text-gray-800 mb-4">
                            Technical Specifications
                          </h4>
                          <div className="space-y-3 mb-6">
                            {Object.entries(component.specs).map(
                              ([key, value]) => (
                                <div
                                  key={key}
                                  className="flex justify-between py-2 border-b border-gray-100"
                                >
                                  <span className="text-gray-600">{key}</span>
                                  <span className="font-semibold">{value}</span>
                                </div>
                              )
                            )}
                          </div>

                          <h4 className="text-xl font-semibold text-gray-800 mb-4">
                            Key Features
                          </h4>
                          <div className="space-y-2">
                            {component.features.map((feature, index) => (
                              <div
                                key={index}
                                className="flex items-center space-x-2"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-600">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Software Features Tab */}
          {activeTab === "software" && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Software & IoT Integration
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our comprehensive software stack enables real-time monitoring,
                  data analytics, and seamless integration with IoT platforms.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {softwareFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <div className="text-green-600 mb-4">{feature.icon}</div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-3">
                      {feature.name}
                    </h4>
                    <p className="text-gray-600 mb-4">{feature.description}</p>

                    <div className="space-y-2">
                      <h5 className="font-semibold text-gray-700">
                        Technologies:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {feature.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* System Architecture Tab */}
          {activeTab === "architecture" && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  System Architecture
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  A layered approach to energy harvesting, from physical sensors
                  to cloud-based analytics and user interfaces.
                </p>
              </div>

              <div className="space-y-6">
                {systemArchitecture.layers.map((layer, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg"
                  >
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800">
                          {layer.name}
                        </h4>
                        <p className="text-gray-600">{layer.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 ml-16">
                      {layer.components.map((component, compIndex) => (
                        <div
                          key={compIndex}
                          className="bg-gray-50 rounded-lg p-3 text-center"
                        >
                          <span className="text-gray-700 font-medium">
                            {component}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Code Examples Tab */}
          {activeTab === "code" && (
            <div className="space-y-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Code Examples & Integration
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get started with our open-source codebase and integration
                  examples for building your own smart energy brick system.
                </p>
              </div>

              <div className="space-y-8">
                {codeExamples.map((example, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                  >
                    <div className="p-6 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-semibold text-gray-800">
                            {example.title}
                          </h4>
                          <p className="text-gray-600 mt-1">
                            {example.description}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {example.language}
                          </span>
                          <button className="p-2 text-gray-500 hover:text-gray-700">
                            <Github className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-900 text-gray-100 p-6 overflow-x-auto">
                      <pre className="text-sm">
                        <code>{example.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">
                    Open Source Project
                  </h4>
                  <p className="text-gray-600 mb-6">
                    All our code is available on GitHub. Contribute, fork, or
                    use it for your own projects.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                      <Github className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </button>
                    <button className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all flex items-center justify-center space-x-2">
                      <Book className="w-5 h-5" />
                      <span>Documentation</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Integration Guide */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Integration & Setup Guide
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Step-by-step instructions for implementing your own smart energy
              brick system.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-800">
                Hardware Assembly
              </h4>

              {[
                "Install piezoelectric sensors in brick housing",
                "Connect sensors to Arduino Uno input pins",
                "Attach TP4056 charging module to battery pack",
                "Wire LCD I2C display for status monitoring",
                "Install ESP8266 for wireless connectivity",
                "Test all connections and calibrate sensors",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-lg p-4 flex-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-gray-800">
                Software Configuration
              </h4>

              {[
                "Install Arduino IDE and required libraries",
                "Configure WiFi credentials and cloud endpoints",
                "Set up data transmission protocols (MQTT/HTTP)",
                "Implement energy calculation algorithms",
                "Configure web dashboard and mobile app",
                "Deploy system and monitor performance",
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="bg-white rounded-lg p-4 flex-1">
                    <p className="text-gray-700">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources & Downloads */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">
              Resources & Downloads
            </h3>
            <p className="text-xl text-gray-600">
              Everything you need to get started with your smart energy brick
              project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Technical Documentation",
                description:
                  "Complete hardware specs, wiring diagrams, and assembly instructions",
                icon: <Book className="w-8 h-8" />,
                downloads: [
                  "Hardware Manual (PDF)",
                  "Wiring Diagrams",
                  "Component Datasheets",
                ],
                color: "from-green-500 to-green-600",
              },
              {
                title: "Source Code & Libraries",
                description:
                  "Arduino sketches, web dashboard code, and mobile app source",
                icon: <Code className="w-8 h-8" />,
                downloads: [
                  "Arduino Code",
                  "Dashboard Source",
                  "Mobile App Code",
                ],
                color: "from-blue-500 to-blue-600",
              },
              {
                title: "Design Files & Models",
                description:
                  "3D models, PCB layouts, and mechanical drawings for custom builds",
                icon: <Layers className="w-8 h-8" />,
                downloads: ["3D Print Files", "PCB Designs", "CAD Models"],
                color: "from-purple-500 to-purple-600",
              },
            ].map((resource, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6">
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${resource.color} text-white rounded-2xl flex items-center justify-center mb-4`}
                >
                  {resource.icon}
                </div>

                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {resource.title}
                </h4>
                <p className="text-gray-600 mb-6">{resource.description}</p>

                <div className="space-y-2 mb-6">
                  {resource.downloads.map((download, downloadIndex) => (
                    <div
                      key={downloadIndex}
                      className="flex items-center justify-between"
                    >
                      <span className="text-gray-700">{download}</span>
                      <button className="text-blue-600 hover:text-blue-700">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full bg-gradient-to-r ${resource.color} text-white py-3 rounded-lg hover:shadow-lg transition-all`}
                >
                  Download All
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
