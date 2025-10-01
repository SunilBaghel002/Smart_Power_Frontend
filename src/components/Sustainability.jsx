import React, { useState, useEffect } from "react";
import {
  Leaf,
  Recycle,
  Globe,
  Zap,
  TrendingUp,
  Users,
  Building,
  Car,
  Factory,
  TreePine,
  Droplets,
  Wind,
  Sun,
  MapPin,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Play,
  Heart,
  Target,
  Award,
  Lightbulb,
  Cpu,
  Battery,
  Package,
  Truck,
  Shield,
} from "lucide-react";

export default function Sustainability() {
  const [activeTab, setActiveTab] = useState("environmental");
  const [impactCounter, setImpactCounter] = useState({
    plasticRecycled: 0,
    energyGenerated: 0,
    carbonReduced: 0,
    citiesImpacted: 0,
  });

  // Animate impact counters
  useEffect(() => {
    const targets = {
      plasticRecycled: 12500, // kg
      energyGenerated: 47283, // kWh
      carbonReduced: 8750, // kg CO2
      citiesImpacted: 23,
    };

    Object.keys(targets).forEach((key) => {
      const target = targets[key];
      const increment = target / 100;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setImpactCounter((prev) => ({ ...prev, [key]: target }));
          clearInterval(timer);
        } else {
          setImpactCounter((prev) => ({ ...prev, [key]: Math.floor(current) }));
        }
      }, 30);
    });
  }, []);

  const environmentalImpacts = [
    {
      title: "Plastic Waste Reduction",
      description:
        "Our bricks are made from 100% recycled plastic waste, diverting tons of plastic from landfills and oceans.",
      stats: [
        {
          label: "Plastic Recycled",
          value: "12.5 tons",
          icon: <Recycle className="w-5 h-5" />,
        },
        {
          label: "Bottles Diverted",
          value: "250,000+",
          icon: <Package className="w-5 h-5" />,
        },
        {
          label: "Landfill Reduction",
          value: "85%",
          icon: <TrendingUp className="w-5 h-5" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80",
      benefits: [
        "Reduces ocean plastic pollution",
        "Diverts waste from landfills",
        "Creates circular economy model",
        "Supports local waste collection",
      ],
    },
    {
      title: "Carbon Footprint Reduction",
      description:
        "Every step on our smart bricks generates clean energy while reducing overall carbon emissions.",
      stats: [
        {
          label: "CO2 Reduced",
          value: "8.75 tons",
          icon: <Wind className="w-5 h-5" />,
        },
        {
          label: "Energy Generated",
          value: "47.3 MWh",
          icon: <Zap className="w-5 h-5" />,
        },
        {
          label: "Efficiency Rate",
          value: "92%",
          icon: <Battery className="w-5 h-5" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1569163139394-de44aa8dbaec?w=600&q=80",
      benefits: [
        "Zero operational emissions",
        "Renewable energy generation",
        "Reduces grid dependency",
        "Long-term sustainability",
      ],
    },
    {
      title: "Urban Green Integration",
      description:
        "Smart bricks seamlessly integrate with urban infrastructure to create sustainable smart cities.",
      stats: [
        {
          label: "Cities Deployed",
          value: "23",
          icon: <Building className="w-5 h-5" />,
        },
        {
          label: "Installations",
          value: "1,250",
          icon: <MapPin className="w-5 h-5" />,
        },
        {
          label: "Coverage Area",
          value: "156 km²",
          icon: <Globe className="w-5 h-5" />,
        },
      ],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
      benefits: [
        "Enhances urban aesthetics",
        "Supports smart city initiatives",
        "Improves infrastructure efficiency",
        "Creates community engagement",
      ],
    },
  ];

  const smartCityApplications = [
    {
      title: "Public Walkways & Sidewalks",
      description:
        "High-traffic pedestrian areas generate continuous clean energy from daily foot traffic.",
      icon: <Users className="w-8 h-8" />,
      energyPotential: "15-25 kWh/day",
      locations: [
        "Shopping districts",
        "University campuses",
        "Transit stations",
        "Parks & plazas",
      ],
      image:
        "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&q=80",
    },
    {
      title: "Transportation Hubs",
      description:
        "Airports, train stations, and bus terminals with thousands of daily passengers.",
      icon: <Car className="w-8 h-8" />,
      energyPotential: "50-100 kWh/day",
      locations: [
        "Airport terminals",
        "Train platforms",
        "Bus stations",
        "Subway entrances",
      ],
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80",
    },
    {
      title: "Commercial Buildings",
      description:
        "Office buildings, malls, and retail spaces with constant visitor flow.",
      icon: <Building className="w-8 h-8" />,
      energyPotential: "30-60 kWh/day",
      locations: [
        "Office lobbies",
        "Shopping centers",
        "Retail stores",
        "Hotels",
      ],
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80",
    },
    {
      title: "Educational Institutions",
      description:
        "Schools and universities with large student populations and daily movement.",
      icon: <Lightbulb className="w-8 h-8" />,
      energyPotential: "20-40 kWh/day",
      locations: [
        "School corridors",
        "Library entrances",
        "Cafeterias",
        "Sports facilities",
      ],
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
    },
    {
      title: "Healthcare Facilities",
      description:
        "Hospitals and clinics requiring reliable auxiliary power for critical systems.",
      icon: <Heart className="w-8 h-8" />,
      energyPotential: "25-45 kWh/day",
      locations: [
        "Hospital entrances",
        "Waiting areas",
        "Corridors",
        "Emergency rooms",
      ],
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&q=80",
    },
    {
      title: "Sports & Recreation",
      description:
        "Stadiums, gyms, and recreational facilities with high foot traffic during events.",
      icon: <Target className="w-8 h-8" />,
      energyPotential: "40-80 kWh/day",
      locations: [
        "Stadium concourses",
        "Gym entrances",
        "Recreation centers",
        "Event venues",
      ],
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
    },
  ];

  const wasteCycleProcess = [
    {
      step: 1,
      title: "Waste Collection",
      description:
        "Partner with local waste management to collect plastic bottles and containers",
      icon: <Truck className="w-8 h-8" />,
      details: [
        "PET bottles collection",
        "HDPE containers",
        "Clean plastic sorting",
        "Quality verification",
      ],
    },
    {
      step: 2,
      title: "Processing & Cleaning",
      description:
        "Industrial cleaning and shredding of plastic waste into uniform pellets",
      icon: <Factory className="w-8 h-8" />,
      details: [
        "Contamination removal",
        "Chemical cleaning",
        "Size reduction",
        "Pellet formation",
      ],
    },
    {
      step: 3,
      title: "Brick Manufacturing",
      description:
        "Molding recycled plastic into durable, weather-resistant brick housings",
      icon: <Package className="w-8 h-8" />,
      details: [
        "Heat molding process",
        "Sensor cavity creation",
        "Weather sealing",
        "Quality testing",
      ],
    },
    {
      step: 4,
      title: "Technology Integration",
      description:
        "Installing piezoelectric sensors and electronic components in brick housings",
      icon: <Cpu className="w-8 h-8" />,
      details: [
        "Sensor installation",
        "Circuit integration",
        "Waterproofing",
        "Performance testing",
      ],
    },
    {
      step: 5,
      title: "Deployment & Monitoring",
      description:
        "Installing smart bricks in urban locations with continuous performance monitoring",
      icon: <MapPin className="w-8 h-8" />,
      details: [
        "Site preparation",
        "Brick installation",
        "Network setup",
        "Data monitoring",
      ],
    },
  ];

  const futureGoals = [
    {
      title: "2025 Goals",
      targets: [
        {
          metric: "Plastic Recycled",
          target: "100 tons",
          current: "12.5 tons",
        },
        {
          metric: "Cities Deployed",
          target: "50 cities",
          current: "23 cities",
        },
        { metric: "Energy Generated", target: "500 MWh", current: "47.3 MWh" },
      ],
      color: "from-green-400 to-green-600",
    },
    {
      title: "2030 Vision",
      targets: [
        {
          metric: "Global Coverage",
          target: "500 cities",
          current: "23 cities",
        },
        {
          metric: "Waste Diverted",
          target: "10,000 tons",
          current: "12.5 tons",
        },
        { metric: "Carbon Neutral", target: "100%", current: "15%" },
      ],
      color: "from-blue-400 to-blue-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 via-emerald-900 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 mb-4">
              <Leaf className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">
                Sustainable Impact
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold">
              Building a Greener Future
              <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                One Step at a Time
              </span>
            </h1>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover how our Smart Energy-Generating Bricks are transforming
              waste into renewable energy, reducing carbon footprints, and
              creating sustainable smart cities worldwide.
            </p>
          </div>

          {/* Impact Counters */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {impactCounter.plasticRecycled.toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">kg Plastic Recycled</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {impactCounter.energyGenerated.toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">kWh Generated</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">
                {impactCounter.carbonReduced.toLocaleString()}
              </div>
              <div className="text-sm text-gray-300">kg CO₂ Reduced</div>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-orange-400 mb-2">
                {impactCounter.citiesImpacted}
              </div>
              <div className="text-sm text-gray-300">Cities Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-2xl p-2 shadow-lg">
              <div className="flex space-x-2">
                {[
                  {
                    id: "environmental",
                    name: "Environmental Impact",
                    icon: <Leaf className="w-5 h-5" />,
                  },
                  {
                    id: "smart-cities",
                    name: "Smart City Applications",
                    icon: <Building className="w-5 h-5" />,
                  },
                  {
                    id: "waste-cycle",
                    name: "Waste-to-Energy Cycle",
                    icon: <Recycle className="w-5 h-5" />,
                  },
                  {
                    id: "future",
                    name: "Future Goals",
                    icon: <Target className="w-5 h-5" />,
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

          {/* Environmental Impact Tab */}
          {activeTab === "environmental" && (
            <div className="space-y-16">
              {environmentalImpacts.map((impact, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <h3 className="text-3xl font-bold text-gray-800 mb-6">
                      {impact.title}
                    </h3>
                    <p className="text-xl text-gray-600 mb-8">
                      {impact.description}
                    </p>

                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {impact.stats.map((stat, statIndex) => (
                        <div
                          key={statIndex}
                          className="bg-white rounded-xl p-4 shadow-md text-center"
                        >
                          <div className="text-green-600 mb-2 flex justify-center">
                            {stat.icon}
                          </div>
                          <div className="text-2xl font-bold text-gray-800">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-600">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800 mb-3">
                        Key Benefits:
                      </h4>
                      {impact.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={benefitIndex}
                          className="flex items-center space-x-3"
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                    <img
                      src={impact.image}
                      alt={impact.title}
                      className="w-full h-96 object-cover rounded-2xl shadow-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Smart Cities Tab */}
          {activeTab === "smart-cities" && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Smart City Applications
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our smart energy bricks are deployed across diverse urban
                  environments, creating sustainable energy infrastructure in
                  high-traffic areas.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {smartCityApplications.map((application, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <img
                      src={application.image}
                      alt={application.title}
                      className="w-full h-48 object-cover"
                    />

                    <div className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="text-green-600">{application.icon}</div>
                        <h4 className="text-xl font-semibold text-gray-800">
                          {application.title}
                        </h4>
                      </div>

                      <p className="text-gray-600 mb-4">
                        {application.description}
                      </p>

                      <div className="bg-green-50 rounded-lg p-3 mb-4">
                        <div className="text-sm text-gray-600">
                          Energy Potential
                        </div>
                        <div className="text-lg font-bold text-green-600">
                          {application.energyPotential}
                        </div>
                      </div>

                      <div>
                        <div className="text-sm font-semibold text-gray-700 mb-2">
                          Deployment Locations:
                        </div>
                        <div className="space-y-1">
                          {application.locations.map((location, locIndex) => (
                            <div
                              key={locIndex}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                              <span className="text-sm text-gray-600">
                                {location}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Global Deployment Map */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Global Deployment Status
                </h4>

                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      23
                    </div>
                    <h5 className="font-semibold text-gray-800">
                      Cities Deployed
                    </h5>
                    <p className="text-gray-600">
                      Active installations worldwide
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      1.2K
                    </div>
                    <h5 className="font-semibold text-gray-800">
                      Active Installations
                    </h5>
                    <p className="text-gray-600">Smart bricks in operation</p>
                  </div>

                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                      156
                    </div>
                    <h5 className="font-semibold text-gray-800">
                      Coverage Area
                    </h5>
                    <p className="text-gray-600">Square kilometers covered</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Waste-to-Energy Cycle Tab */}
          {activeTab === "waste-cycle" && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  From Waste to Clean Energy
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our complete circular economy approach transforms plastic
                  waste into sustainable energy infrastructure, creating value
                  at every step of the process.
                </p>
              </div>

              <div className="space-y-8">
                {wasteCycleProcess.map((step, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div className="grid lg:grid-cols-4 gap-8 items-center">
                      <div className="text-center lg:text-left">
                        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto lg:mx-0 mb-4">
                          <span className="text-2xl font-bold">
                            {step.step}
                          </span>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-800 mb-2">
                          {step.title}
                        </h4>
                        <div className="text-green-600 mb-3">{step.icon}</div>
                      </div>

                      <div className="lg:col-span-2">
                        <p className="text-gray-600 mb-4">{step.description}</p>
                        <div className="grid grid-cols-2 gap-3">
                          {step.details.map((detail, detailIndex) => (
                            <div
                              key={detailIndex}
                              className="flex items-center space-x-2"
                            >
                              <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                              <span className="text-sm text-gray-600">
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="text-center">
                        {index < wasteCycleProcess.length - 1 && (
                          <ArrowRight className="w-8 h-8 text-gray-400 mx-auto" />
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Circular Economy Benefits */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  Circular Economy Benefits
                </h4>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {
                      title: "Waste Reduction",
                      value: "85%",
                      description: "Less plastic in landfills",
                    },
                    {
                      title: "Energy Generation",
                      value: "24/7",
                      description: "Continuous clean power",
                    },
                    {
                      title: "Local Economy",
                      value: "+15%",
                      description: "Job creation impact",
                    },
                    {
                      title: "Cost Savings",
                      value: "40%",
                      description: "Infrastructure costs",
                    },
                  ].map((benefit, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-xl p-6 text-center shadow-md"
                    >
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {benefit.value}
                      </div>
                      <div className="font-semibold text-gray-800 mb-1">
                        {benefit.title}
                      </div>
                      <div className="text-sm text-gray-600">
                        {benefit.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Future Goals Tab */}
          {activeTab === "future" && (
            <div className="space-y-12">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">
                  Future Goals & Roadmap
                </h3>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Our ambitious targets for scaling sustainable energy
                  infrastructure and maximizing environmental impact worldwide.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {futureGoals.map((goalSet, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg"
                  >
                    <div
                      className={`w-full h-2 bg-gradient-to-r ${goalSet.color} rounded-full mb-6`}
                    ></div>

                    <h4 className="text-2xl font-bold text-gray-800 mb-6">
                      {goalSet.title}
                    </h4>

                    <div className="space-y-6">
                      {goalSet.targets.map((target, targetIndex) => (
                        <div key={targetIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-semibold text-gray-700">
                              {target.metric}
                            </span>
                            <span className="text-sm text-gray-600">
                              {target.current} → {target.target}
                            </span>
                          </div>

                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div
                              className={`h-3 bg-gradient-to-r ${goalSet.color} rounded-full transition-all duration-1000`}
                              style={{
                                width: `${Math.min(
                                  (parseInt(
                                    target.current.replace(/[^\d]/g, "")
                                  ) /
                                    parseInt(
                                      target.target.replace(/[^\d]/g, "")
                                    )) *
                                    100,
                                  100
                                )}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Roadmap Timeline */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                  Development Roadmap
                </h4>

                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      period: "2024-2025",
                      title: "Global Expansion",
                      milestones: [
                        "Deploy in 50 cities",
                        "Recycle 100 tons plastic",
                        "Generate 500 MWh energy",
                        "Launch mobile app",
                      ],
                      status: "in-progress",
                    },
                    {
                      period: "2025-2027",
                      title: "Technology Enhancement",
                      milestones: [
                        "AI-powered optimization",
                        "Vehicle pressure sensors",
                        "Improved efficiency (95%+)",
                        "Blockchain integration",
                      ],
                      status: "planned",
                    },
                    {
                      period: "2027-2030",
                      title: "Sustainability Leadership",
                      milestones: [
                        "Carbon neutral operations",
                        "500 city deployment",
                        "10,000 tons waste recycled",
                        "Industry standard setting",
                      ],
                      status: "vision",
                    },
                  ].map((phase, index) => (
                    <div key={index} className="relative">
                      <div
                        className={`p-6 rounded-xl border-2 ${
                          phase.status === "in-progress"
                            ? "border-green-500 bg-green-50"
                            : phase.status === "planned"
                            ? "border-blue-500 bg-blue-50"
                            : "border-purple-500 bg-purple-50"
                        }`}
                      >
                        <div className="text-center mb-4">
                          <div
                            className={`inline-flex px-3 py-1 rounded-full text-sm font-semibold ${
                              phase.status === "in-progress"
                                ? "bg-green-500 text-white"
                                : phase.status === "planned"
                                ? "bg-blue-500 text-white"
                                : "bg-purple-500 text-white"
                            }`}
                          >
                            {phase.period}
                          </div>
                        </div>

                        <h5 className="text-xl font-bold text-gray-800 mb-4 text-center">
                          {phase.title}
                        </h5>

                        <div className="space-y-3">
                          {phase.milestones.map((milestone, milestoneIndex) => (
                            <div
                              key={milestoneIndex}
                              className="flex items-start space-x-2"
                            >
                              <div
                                className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${
                                  phase.status === "in-progress"
                                    ? "bg-green-500"
                                    : phase.status === "planned"
                                    ? "bg-blue-500"
                                    : "bg-purple-500"
                                }`}
                              ></div>
                              <span className="text-gray-700">{milestone}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-2xl p-8 text-center">
                <h4 className="text-2xl font-bold mb-4">
                  Join the Sustainability Revolution
                </h4>
                <p className="text-xl mb-6">
                  Be part of the solution. Support our mission to create a
                  cleaner, more sustainable future through innovative
                  technology.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
                    Partner With Us
                  </button>
                  <button className="border border-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
