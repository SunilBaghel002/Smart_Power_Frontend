import React, { useState, useEffect } from "react";
import {
  Zap,
  Shield,
  ShoppingCart,
  Heart,
  Star,
  Filter,
  Search,
  Grid,
  List,
  Plus,
  Minus,
  CheckCircle,
  Truck,
  RotateCcw,
  Headphones,
  Award,
  Cpu,
  Battery,
  Layers,
  Package,
  ArrowRight,
  Info,
  Tag,
  Users,
} from "lucide-react";

export default function EnergyHarvestShop() {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("featured");
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: "all", name: "All Products", count: 12 },
    { id: "components", name: "Components", count: 6 },
    { id: "circuits", name: "Circuits", count: 3 },
    { id: "systems", name: "Complete Systems", count: 2 },
    { id: "accessories", name: "Accessories", count: 1 },
  ];

  const products = [
    // Individual Components
    {
      id: 1,
      name: "Piezoelectric Energy Harvester",
      category: "components",
      price: 29.99,
      originalPrice: 34.99,
      rating: 4.8,
      reviews: 127,
      image: "/api/placeholder/300/300",
      badge: "Best Seller",
      features: [
        "High-efficiency conversion",
        "Durable ceramic design",
        "Weather resistant",
      ],
      description:
        "Premium piezoelectric sensor optimized for step energy harvesting with maximum efficiency.",
      inStock: true,
      quantity: 50,
      specifications: {
        "Power Output": "0.5-2.0W",
        "Voltage Range": "3-12V",
        Dimensions: "40x20x5mm",
        Material: "PZT Ceramic",
      },
    },
    {
      id: 2,
      name: "Arduino Uno R3 - Energy Edition",
      category: "components",
      price: 24.99,
      rating: 4.9,
      reviews: 89,
      badge: "Enhanced",
      features: [
        "Pre-configured for energy harvesting",
        "Extended I/O pins",
        "USB-C power",
      ],
      description:
        "Custom Arduino Uno optimized for energy monitoring and data collection systems.",
      inStock: true,
      quantity: 35,
    },
    {
      id: 3,
      name: "Energy Storage Module",
      category: "components",
      price: 39.99,
      rating: 4.7,
      reviews: 65,
      features: [
        "Supercapacitor technology",
        "Fast charge/discharge",
        "Long lifespan",
      ],
      description:
        "Advanced energy storage solution with intelligent power management capabilities.",
      inStock: true,
      quantity: 28,
    },
    {
      id: 4,
      name: "Wireless Transmission Unit",
      category: "components",
      price: 34.99,
      rating: 4.6,
      reviews: 43,
      features: [
        "WiFi & Bluetooth",
        "Low power consumption",
        "Secure encryption",
      ],
      description:
        "Reliable wireless module for transmitting energy data to the blockchain network.",
      inStock: true,
      quantity: 42,
    },
    {
      id: 5,
      name: "Sensor Array Board",
      category: "components",
      price: 19.99,
      rating: 4.5,
      reviews: 38,
      features: ["Multi-sensor support", "Plug-and-play", "Compact design"],
      description:
        "Expansion board supporting multiple piezoelectric sensors simultaneously.",
      inStock: true,
      quantity: 67,
    },
    {
      id: 6,
      name: "Power Management IC",
      category: "components",
      price: 15.99,
      rating: 4.8,
      reviews: 91,
      features: [
        "Efficient voltage regulation",
        "Over-current protection",
        "Thermal management",
      ],
      description:
        "Intelligent power management solution for optimal energy utilization.",
      inStock: false,
      quantity: 0,
    },

    // Circuit Assemblies
    {
      id: 7,
      name: "Basic Energy Circuit",
      category: "circuits",
      price: 89.99,
      originalPrice: 99.99,
      rating: 4.7,
      reviews: 156,
      badge: "Popular",
      features: [
        "2x Piezoelectric sensors",
        "Arduino Uno included",
        "Basic monitoring",
      ],
      description:
        "Entry-level circuit assembly perfect for learning and small-scale projects.",
      inStock: true,
      quantity: 23,
      includes: [
        "2x Piezoelectric Harvesters",
        "Arduino Uno R3",
        "Connecting cables",
        "Instruction manual",
      ],
    },
    {
      id: 8,
      name: "Advanced Monitoring Circuit",
      category: "circuits",
      price: 149.99,
      rating: 4.9,
      reviews: 78,
      badge: "Pro",
      features: ["4x Sensors", "Wireless transmission", "Real-time monitoring"],
      description:
        "Professional-grade circuit with wireless capabilities and advanced monitoring features.",
      inStock: true,
      quantity: 18,
      includes: [
        "4x Piezoelectric Harvesters",
        "Arduino Uno Enhanced",
        "Wireless Module",
        "Storage Module",
        "Pro Software",
      ],
    },
    {
      id: 9,
      name: "Industrial Grade Circuit",
      category: "circuits",
      price: 299.99,
      rating: 4.8,
      reviews: 34,
      badge: "Industrial",
      features: [
        "8x High-power sensors",
        "Rugged housing",
        "Industrial protocols",
      ],
      description:
        "Heavy-duty circuit designed for industrial applications and harsh environments.",
      inStock: true,
      quantity: 12,
      includes: [
        "8x Industrial Harvesters",
        "Ruggedized Controller",
        "Industrial Housing",
        "Professional Installation",
      ],
    },

    // Complete Systems
    {
      id: 10,
      name: "Home Energy System",
      category: "systems",
      price: 499.99,
      originalPrice: 599.99,
      rating: 4.9,
      reviews: 234,
      badge: "Complete",
      features: [
        "Plug & Play setup",
        "Mobile app included",
        "Blockchain integration",
      ],
      description:
        "Complete home energy harvesting system with professional installation and support.",
      inStock: true,
      quantity: 8,
      includes: [
        "Complete Circuit Assembly",
        "Installation Kit",
        "Mobile App License",
        "Blockchain Access",
        "1-Year Support",
      ],
    },
    {
      id: 11,
      name: "Commercial Energy Platform",
      category: "systems",
      price: 1299.99,
      rating: 4.8,
      reviews: 67,
      badge: "Enterprise",
      features: [
        "Scalable architecture",
        "Admin dashboard",
        "Professional support",
      ],
      description:
        "Enterprise-level energy harvesting platform for commercial and industrial use.",
      inStock: true,
      quantity: 5,
      includes: [
        "Multiple Circuit Units",
        "Central Hub",
        "Admin Dashboard Access",
        "Professional Installation",
        "Enterprise Support",
      ],
    },

    // Accessories
    {
      id: 12,
      name: "Installation & Mounting Kit",
      category: "accessories",
      price: 24.99,
      rating: 4.6,
      reviews: 89,
      features: [
        "Universal mounting",
        "Weather protection",
        "Easy installation",
      ],
      description:
        "Professional mounting and installation accessories for secure deployment.",
      inStock: true,
      quantity: 156,
    },
  ];

  const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const filteredProducts = products
    .filter(
      (product) =>
        (selectedCategory === "all" || product.category === selectedCategory) &&
        (searchTerm === "" ||
          product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">EnergyChain Shop</h1>
                <p className="text-sm text-gray-400">
                  Energy Harvesting Components
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                  <Heart className="w-5 h-5" />
                </button>
                {favorites.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {favorites.length}
                  </span>
                )}
              </div>

              <div className="relative">
                <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all">
                  <ShoppingCart className="w-5 h-5" />
                </button>
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </span>
                )}
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-400">Cart Total</p>
                <p className="font-bold">${cartTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Build Your
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
              {" "}
              Energy Future
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From individual components to complete systems - everything you need
            for transparent energy harvesting
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-green-500/50"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center space-x-4">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500/50"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="name">Name A-Z</option>
              </select>

              <div className="flex bg-white/10 rounded-lg p-1">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded ${
                    viewMode === "grid"
                      ? "bg-green-500/30"
                      : "hover:bg-white/10"
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded ${
                    viewMode === "list"
                      ? "bg-green-500/30"
                      : "hover:bg-white/10"
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories and Products */}
      <section className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Categories Sidebar */}
            <div className="lg:w-64 space-y-6">
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all ${
                        selectedCategory === category.id
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "hover:bg-white/10"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span>{category.name}</span>
                        <span className="text-sm text-gray-400">
                          ({category.count})
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold mb-4">Why Choose Us</h3>
                <div className="space-y-3">
                  {[
                    {
                      icon: <Truck className="w-5 h-5" />,
                      text: "Free Shipping",
                    },
                    {
                      icon: <RotateCcw className="w-5 h-5" />,
                      text: "30-Day Returns",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      text: "Quality Guaranteed",
                    },
                    {
                      icon: <Headphones className="w-5 h-5" />,
                      text: "24/7 Support",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 text-sm text-gray-300"
                    >
                      <div className="text-green-400">{item.icon}</div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-gray-400">
                  Showing {filteredProducts.length} products
                </p>
              </div>

              <div
                className={
                  viewMode === "grid"
                    ? "grid md:grid-cols-2 xl:grid-cols-3 gap-6"
                    : "space-y-6"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    viewMode={viewMode}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={toggleFavorite}
                    onAddToCart={addToCart}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shopping Cart Sidebar (if cart has items) */}
      {cart.length > 0 && (
        <div className="fixed right-4 bottom-4 bg-white/10 backdrop-blur-lg rounded-2xl p-4 border border-white/20 max-w-sm">
          <h3 className="font-semibold mb-3">Cart Summary</h3>
          <div className="space-y-2 mb-4 max-h-32 overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-sm"
              >
                <span>{item.name}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>
          <div className="border-t border-white/20 pt-3">
            <div className="flex justify-between font-semibold mb-3">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-green-500 to-blue-600 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function ProductCard({
  product,
  viewMode,
  isFavorite,
  onToggleFavorite,
  onAddToCart,
}) {
  const [quantity, setQuantity] = useState(1);

  if (viewMode === "list") {
    return (
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all">
        <div className="flex gap-6">
          <div className="w-32 h-32 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
            {product.category === "components" && (
              <Cpu className="w-12 h-12 text-green-400" />
            )}
            {product.category === "circuits" && (
              <Layers className="w-12 h-12 text-blue-400" />
            )}
            {product.category === "systems" && (
              <Package className="w-12 h-12 text-purple-400" />
            )}
            {product.category === "accessories" && (
              <Battery className="w-12 h-12 text-orange-400" />
            )}
          </div>

          <div className="flex-1 space-y-3">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-gray-400">{product.description}</p>
              </div>
              <button
                onClick={() => onToggleFavorite(product.id)}
                className={`p-2 rounded-lg transition-all ${
                  isFavorite
                    ? "bg-red-500/20 text-red-400"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`}
                />
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-600"
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-400">
                  ({product.reviews})
                </span>
              </div>

              {product.badge && (
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="text-2xl font-bold text-green-400">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <div className="flex items-center space-x-3">
                <div className="flex items-center bg-white/10 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-white/10 rounded-l-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-3 py-2">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-white/10 rounded-r-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>

                <button
                  onClick={() => onAddToCart(product, quantity)}
                  disabled={!product.inStock}
                  className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                    product.inStock
                      ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                      : "bg-gray-600 cursor-not-allowed"
                  }`}
                >
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-green-500/30 transition-all group">
      <div className="relative mb-4">
        <div className="aspect-square bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
          {product.category === "components" && (
            <Cpu className="w-16 h-16 text-green-400" />
          )}
          {product.category === "circuits" && (
            <Layers className="w-16 h-16 text-blue-400" />
          )}
          {product.category === "systems" && (
            <Package className="w-16 h-16 text-purple-400" />
          )}
          {product.category === "accessories" && (
            <Battery className="w-16 h-16 text-orange-400" />
          )}
        </div>

        <button
          onClick={() => onToggleFavorite(product.id)}
          className={`absolute top-3 right-3 p-2 rounded-lg transition-all ${
            isFavorite
              ? "bg-red-500/20 text-red-400"
              : "bg-black/20 hover:bg-black/40"
          }`}
        >
          <Heart className={`w-5 h-5 ${isFavorite ? "fill-current" : ""}`} />
        </button>

        {product.badge && (
          <span className="absolute top-3 left-3 bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs">
            {product.badge}
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <p className="text-gray-400 text-sm">{product.description}</p>
        </div>

        <div className="flex items-center space-x-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < Math.floor(product.rating)
                  ? "text-yellow-400 fill-current"
                  : "text-gray-600"
              }`}
            />
          ))}
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-green-400">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through ml-2">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <div
            className={`text-xs px-2 py-1 rounded ${
              product.inStock
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex items-center bg-white/10 rounded-lg flex-1">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="p-2 hover:bg-white/10 rounded-l-lg"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="px-3 py-2 flex-1 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="p-2 hover:bg-white/10 rounded-r-lg"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => onAddToCart(product, quantity)}
            disabled={!product.inStock}
            className={`p-2 rounded-lg transition-all ${
              product.inStock
                ? "bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700"
                : "bg-gray-600 cursor-not-allowed"
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
