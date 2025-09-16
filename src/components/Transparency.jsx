import React, { useState, useEffect } from 'react';
import { 
  Shield, Search, Filter, Download, Eye, CheckCircle, Clock, 
  Hash, Zap, MapPin, Calendar, TrendingUp, AlertTriangle,
  Copy, ExternalLink, Verified, Lock, Globe, BarChart3,
  RefreshCw, ArrowRight, Info, Server, Database, Users
} from 'lucide-react';

export default function TransparencyPage() {
  const [selectedTimeframe, setSelectedTimeframe] = useState('24h');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [searchHash, setSearchHash] = useState('');
  const [selectedRecord, setSelectedRecord] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState('verified');
  const [liveUpdating, setLiveUpdating] = useState(true);
  const [blockchainStats, setBlockchainStats] = useState({
    totalBlocks: 47291,
    totalRecords: 1247856,
    verifiedEnergy: 2847291,
    activeNodes: 156
  });

  // Simulate live updates
  useEffect(() => {
    if (!liveUpdating) return;
    
    const interval = setInterval(() => {
      setBlockchainStats(prev => ({
        totalBlocks: prev.totalBlocks + 1,
        totalRecords: prev.totalRecords + Math.floor(Math.random() * 10) + 5,
        verifiedEnergy: prev.verifiedEnergy + Math.floor(Math.random() * 50) + 20,
        activeNodes: prev.activeNodes + (Math.random() > 0.5 ? 1 : -1)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, [liveUpdating]);

  const blockchainRecords = [
    {
      id: 1,
      blockNumber: 47291,
      timestamp: new Date(Date.now() - 2 * 60 * 1000),
      hash: 'a7f3d9c8e2b1f6a4d7e8c9b2a5f8d3e6c1b4a7f2d9e8c5b1a4f7e2d8c6b3a9f5',
      deviceId: 'EH-NYC-001',
      location: 'New York, NY',
      energyProduced: 234.5,
      stepCount: 12847,
      efficiency: 96.2,
      verified: true,
      networkFees: 0.0001,
      validatorNodes: 12,
      previousHash: 'c8e1a4f7b2d9e6c3b8a5f2d7e4c1b6a9f3d8e5c2b7a4f1e9d6c3b8a5f2d7e4c1'
    },
    {
      id: 2,
      blockNumber: 47290,
      timestamp: new Date(Date.now() - 5 * 60 * 1000),
      hash: 'c8e1a4f7b2d9e6c3b8a5f2d7e4c1b6a9f3d8e5c2b7a4f1e9d6c3b8a5f2d7e4c1',
      deviceId: 'EH-LON-045',
      location: 'London, UK',
      energyProduced: 189.2,
      stepCount: 9847,
      efficiency: 94.8,
      verified: true,
      networkFees: 0.0001,
      validatorNodes: 15,
      previousHash: 'f2d9b6c3e8a5d2b7f4e1c8b5a2f9d6e3c8b5a2f7d4e1b8c5a2f9d6e3c8b5a2f7'
    },
    {
      id: 3,
      blockNumber: 47289,
      timestamp: new Date(Date.now() - 8 * 60 * 1000),
      hash: 'f2d9b6c3e8a5d2b7f4e1c8b5a2f9d6e3c8b5a2f7d4e1b8c5a2f9d6e3c8b5a2f7',
      deviceId: 'EH-TKY-078',
      location: 'Tokyo, Japan',
      energyProduced: 267.8,
      stepCount: 15234,
      efficiency: 89.4,
      verified: true,
      networkFees: 0.0001,
      validatorNodes: 18,
      previousHash: 'b5c7a2f9d6e3c8b5a2f7d4e1b8c5a2f9d6e3c8b5a2f7d4e1b8c5a2f9d6e3c8b5'
    },
    {
      id: 4,
      blockNumber: 47288,
      timestamp: new Date(Date.now() - 11 * 60 * 1000),
      hash: 'b5c7a2f9d6e3c8b5a2f7d4e1b8c5a2f9d6e3c8b5a2f7d4e1b8c5a2f9d6e3c8b5',
      deviceId: 'EH-BER-023',
      location: 'Berlin, Germany',
      energyProduced: 201.3,
      stepCount: 11456,
      efficiency: 97.1,
      verified: true,
      networkFees: 0.0001,
      validatorNodes: 14,
      previousHash: 'd8e5c2b9f6a3d7e4c1b8a5f2d9e6c3b0a7f4d1e8c5b2a9f6d3e0c7b4a1f8d5e2'
    },
    {
      id: 5,
      blockNumber: 47287,
      timestamp: new Date(Date.now() - 14 * 60 * 1000),
      hash: 'd8e5c2b9f6a3d7e4c1b8a5f2d9e6c3b0a7f4d1e8c5b2a9f6d3e0c7b4a1f8d5e2',
      deviceId: 'EH-SYD-156',
      location: 'Sydney, Australia',
      energyProduced: 178.9,
      stepCount: 8923,
      efficiency: 93.7,
      verified: true,
      networkFees: 0.0001,
      validatorNodes: 11,
      previousHash: 'a1f8d5e2c9b6a3f0d7e4c1b8a5f2d9e6c3b0a7f4d1e8c5b2a9f6d3e0c7b4a1f8'
    }
  ];

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    // Could add a toast notification here
  };

  const formatHash = (hash) => {
    return `${hash.substring(0, 8)}...${hash.substring(hash.length - 8)}`;
  };

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = Math.floor((now - timestamp) / 1000 / 60);
    if (diff < 1) return 'Just now';
    if (diff < 60) return `${diff} min ago`;
    if (diff < 1440) return `${Math.floor(diff / 60)} hours ago`;
    return timestamp.toLocaleDateString();
  };

  const networkHealth = {
    uptime: 99.97,
    avgBlockTime: 12.3,
    pendingTransactions: 23,
    networkHashrate: '1.2 TH/s'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 text-white">
      {/* Header */}
      <header className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Transparency Portal</h1>
                <p className="text-sm text-gray-400">Blockchain Verification System</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 bg-green-500/20 border border-green-500/30 rounded-lg px-3 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-green-400">Network Online</span>
              </div>
              
              <button
                onClick={() => setLiveUpdating(!liveUpdating)}
                className={`p-2 rounded-lg transition-all ${
                  liveUpdating ? 'bg-green-500/20 text-green-400' : 'bg-white/10'
                }`}
              >
                <RefreshCw className={`w-5 h-5 ${liveUpdating ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-4">
            <Verified className="w-5 h-5 text-green-400" />
            <span className="text-green-400 font-medium">100% Verified & Immutable</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold">
            Complete
            <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent"> Transparency</span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every unit of energy generated is permanently recorded on our blockchain. 
            Verify, audit, and trust our immutable energy production records.
          </p>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Database className="w-8 h-8 text-green-400" />
                </div>
                <div className="text-right">
                  <p className="text-green-400 text-sm font-medium">Total Blocks</p>
                  <p className="text-2xl font-bold">{blockchainStats.totalBlocks.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-green-400">+1 every ~12 seconds</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-lg rounded-2xl p-6 border border-blue-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Server className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-right">
                  <p className="text-blue-400 text-sm font-medium">Total Records</p>
                  <p className="text-2xl font-bold">{blockchainStats.totalRecords.toLocaleString()}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-blue-400">100% Verified</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-lg rounded-2xl p-6 border border-purple-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Zap className="w-8 h-8 text-purple-400" />
                </div>
                <div className="text-right">
                  <p className="text-purple-400 text-sm font-medium">Verified Energy</p>
                  <p className="text-2xl font-bold">{blockchainStats.verifiedEnergy.toLocaleString()}</p>
                  <p className="text-purple-400 text-xs">kWh</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-purple-400">Immutably stored</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-lg rounded-2xl p-6 border border-orange-500/30">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Globe className="w-8 h-8 text-orange-400" />
                </div>
                <div className="text-right">
                  <p className="text-orange-400 text-sm font-medium">Active Nodes</p>
                  <p className="text-2xl font-bold">{blockchainStats.activeNodes}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-400">Network validators</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="px-6 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="grid lg:grid-cols-4 gap-4">
              {/* Hash Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by block hash..."
                  value={searchHash}
                  onChange={(e) => setSearchHash(e.target.value)}
                  className="w-full bg-black/20 border border-white/20 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:border-green-500/50"
                />
              </div>

              {/* Timeframe Filter */}
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="bg-black/20 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500/50"
              >
                <option value="1h">Last Hour</option>
                <option value="24h">Last 24 Hours</option>
                <option value="7d">Last 7 Days</option>
                <option value="30d">Last 30 Days</option>
                <option value="all">All Time</option>
              </select>

              {/* Location Filter */}
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-black/20 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:border-green-500/50"
              >
                <option value="all">All Locations</option>
                <option value="new-york">New York</option>
                <option value="london">London</option>
                <option value="tokyo">Tokyo</option>
                <option value="berlin">Berlin</option>
                <option value="sydney">Sydney</option>
              </select>

              {/* Export Button */}
              <button className="bg-gradient-to-r from-green-500 to-blue-600 px-4 py-2 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2">
                <Download className="w-4 h-4" />
                <span>Export</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Blockchain Records */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Records List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold">Recent Blockchain Records</h3>
                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Auto-refreshing every 5 seconds</span>
                </div>
              </div>

              {blockchainRecords.map((record) => (
                <div
                  key={record.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all cursor-pointer hover:border-green-500/30 ${
                    selectedRecord?.id === record.id ? 'border-green-500/50 bg-green-500/5' : 'border-white/10'
                  }`}
                  onClick={() => setSelectedRecord(record)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl flex items-center justify-center">
                        <span className="font-mono text-sm font-bold">#{record.blockNumber}</span>
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold">Block #{record.blockNumber}</span>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span className="text-green-400 text-sm">Verified</span>
                        </div>
                        <p className="text-gray-400 text-sm">{formatTimestamp(record.timestamp)}</p>
                      </div>
                    </div>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        copyToClipboard(record.hash);
                      }}
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-all"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                    <div>
                      <p className="text-gray-400 text-xs uppercase">Device ID</p>
                      <p className="font-mono text-sm">{record.deviceId}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase">Energy (kWh)</p>
                      <p className="font-semibold text-green-400">{record.energyProduced}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase">Steps</p>
                      <p className="font-semibold">{record.stepCount.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 text-xs uppercase">Efficiency</p>
                      <p className="font-semibold text-blue-400">{record.efficiency}%</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-400">{record.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Hash className="w-4 h-4 text-gray-400" />
                        <span className="font-mono text-sm text-gray-400">{formatHash(record.hash)}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded">
                        {record.validatorNodes} nodes
                      </span>
                      <ArrowRight className="w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                </div>
              ))}

              <button className="w-full py-3 bg-white/5 border border-white/20 rounded-xl hover:bg-white/10 transition-all">
                Load More Records
              </button>
            </div>

            {/* Detailed Record View */}
            <div className="space-y-6">
              {selectedRecord ? (
                <>
                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold">Block Details</h3>
                      <div className="flex items-center space-x-1 text-green-400">
                        <Verified className="w-5 h-5" />
                        <span className="text-sm">Verified</span>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-gray-400 text-sm">Block Number</p>
                        <p className="font-mono text-lg font-bold">#{selectedRecord.blockNumber}</p>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">Timestamp</p>
                        <p className="font-semibold">{selectedRecord.timestamp.toLocaleString()}</p>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">Block Hash</p>
                        <div className="flex items-center space-x-2">
                          <p className="font-mono text-xs break-all">{selectedRecord.hash}</p>
                          <button
                            onClick={() => copyToClipboard(selectedRecord.hash)}
                            className="p-1 hover:bg-white/10 rounded"
                          >
                            <Copy className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-400 text-sm">Previous Hash</p>
                        <p className="font-mono text-xs break-all text-gray-500">{selectedRecord.previousHash}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold mb-4">Energy Data</h3>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Energy Generated</p>
                        <p className="text-2xl font-bold text-green-400">{selectedRecord.energyProduced}</p>
                        <p className="text-green-400 text-sm">kWh</p>
                      </div>
                      
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Step Count</p>
                        <p className="text-2xl font-bold">{selectedRecord.stepCount.toLocaleString()}</p>
                        <p className="text-gray-400 text-sm">steps</p>
                      </div>
                      
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Efficiency</p>
                        <p className="text-2xl font-bold text-blue-400">{selectedRecord.efficiency}%</p>
                      </div>
                      
                      <div className="bg-black/20 rounded-lg p-4">
                        <p className="text-gray-400 text-sm">Network Fee</p>
                        <p className="text-2xl font-bold">{selectedRecord.networkFees}</p>
                        <p className="text-gray-400 text-sm">ETH</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                    <h3 className="text-xl font-semibold mb-4">Verification</h3>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Validator Nodes</span>
                        <span className="font-semibold">{selectedRecord.validatorNodes} nodes</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Consensus</span>
                        <div className="flex items-center space-x-1 text-green-400">
                          <CheckCircle className="w-4 h-4" />
                          <span>Achieved</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400">Tamper Protection</span>
                        <div className="flex items-center space-x-1 text-green-400">
                          <Lock className="w-4 h-4" />
                          <span>Secured</span>
                        </div>
                      </div>
                    </div>

                    <button className="w-full mt-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg hover:from-green-500/30 hover:to-blue-500/30 transition-all flex items-center justify-center space-x-2">
                      <ExternalLink className="w-4 h-4" />
                      <span>View on Block Explorer</span>
                    </button>
                  </div>
                </>
              ) : (
                <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10 text-center">
                  <Eye className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Select a Record</h3>
                  <p className="text-gray-400">Click on any blockchain record to view detailed information</p>
                </div>
              )}

              {/* Network Health */}
              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4">Network Health</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Network Hashrate</span>
                    <span className="font-semibold">{networkHealth.networkHashrate}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 backdrop-blur-lg rounded-3xl p-8 border border-green-500/20">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-4">Why Trust Our Transparency?</h3>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our blockchain infrastructure ensures complete data integrity and transparency through cutting-edge cryptographic security.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Lock className="w-8 h-8 text-green-400" />
                </div>
                <h4 className="text-xl font-semibold">Immutable Records</h4>
                <p className="text-gray-400">
                  Once data is recorded on our blockchain, it cannot be altered, deleted, or tampered with by anyone.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h4 className="text-xl font-semibold">Decentralized Validation</h4>
                <p className="text-gray-400">
                  Multiple validator nodes verify each transaction, ensuring consensus and preventing single points of failure.
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h4 className="text-xl font-semibold">Public Accessibility</h4>
                <p className="text-gray-400">
                  All energy production data is publicly accessible and verifiable by anyone, anywhere, at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Access */}
      <section className="px-6 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold">Developer API Access</h3>
                <p className="text-gray-300">
                  Integrate our transparency data into your applications with our comprehensive REST API. 
                  Access real-time blockchain data, verify records, and build trust into your systems.
                </p>
                
                <div className="space-y-3">
                  {[
                    'Real-time blockchain data feeds',
                    'Historical energy production records',
                    'Device verification endpoints',
                    'Network health monitoring',
                    'Comprehensive documentation'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <button className="bg-gradient-to-r from-green-500 to-blue-600 px-6 py-3 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all font-semibold">
                    Get API Key
                  </button>
                  <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition-all font-semibold">
                    View Documentation
                  </button>
                </div>
              </div>
              
              <div className="bg-black/40 rounded-xl p-6 border border-green-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-400">API Example</span>
                  <button
                    onClick={() => copyToClipboard(`curl -H "Authorization: Bearer YOUR_API_KEY" \\\n  https://api.energychain.io/v1/blocks/latest`)}
                    className="p-1 hover:bg-white/10 rounded"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
                <pre className="text-green-400 text-sm font-mono overflow-x-auto">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  https://api.energychain.io/v1/blocks/latest

{
  "blockNumber": 47291,
  "hash": "a7f3d9c8e2b1f6a4d7e8c9b2a5f8d3e6c1b4a7f2d9e8c5b1a4f7e2d8c6b3a9f5",
  "timestamp": "2025-09-16T14:32:18Z",
  "energyProduced": 234.5,
  "verified": true
}`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">EnergyChain</span>
              </div>
              <p className="text-gray-400">
                Transparent energy harvesting powered by blockchain technology.
              </p>
              <div className="text-sm text-gray-500">
                Network Status: <span className="text-green-400">Operational</span>
              </div>
            </div>
            
            {[
              {
                title: "Transparency",
                links: ["Blockchain Explorer", "Energy Records", "Network Statistics", "Audit Reports"]
              },
              {
                title: "Developers",
                links: ["API Documentation", "SDKs", "Code Examples", "Support"]
              },
              {
                title: "Resources",
                links: ["Whitepaper", "Technical Specs", "Community", "Blog"]
              }
            ].map((section, index) => (
              <div key={index} className="space-y-4">
                <h3 className="font-semibold">{section.title}</h3>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 sm:mb-0">
              © 2025 EnergyChain. All energy data verified and immutable.
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-sm text-green-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Blockchain Live</span>
              </div>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Status Page
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}