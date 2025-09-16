src/App.js
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Dashboard from './components/Dashboard';
import Transparency from './components/Transparency';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        {/* Navigation */}
        <nav className="bg-gray-800 p-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-bold">EnergyHarvest</div>
            <div className="space-x-4">
              <Link to="/" className="text-white hover:text-gray-300">Home</Link>
              <Link to="/shop" className="text-white hover:text-gray-300">Shop</Link>
              <Link to="/dashboard" className="text-white hover:text-gray-300">Dashboard</Link>
              <Link to="/transparency" className="text-white hover:text-gray-300">Transparency</Link>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transparency" element={<Transparency />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

src/components/Home.js
function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Welcome to EnergyHarvest</h1>
      <p className="text-lg text-center mb-8">
        Discover our innovative energy-harvesting system powered by piezoelectric sensors and blockchain transparency.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Energy Harvesting</h2>
          <p>Our system uses piezoelectric sensors to capture energy from footsteps, monitored via Arduino Uno.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Blockchain Transparency</h2>
          <p>Every unit of energy is recorded on an immutable blockchain for trust and verification.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Global Energy Map</h2>
          <p>Future plans include a global map showcasing clean energy contributions from users worldwide.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;

src/components/Shop.js
function Shop() {
  const products = [
    { id: 1, name: 'Piezoelectric Sensor', price: 29.99, description: 'High-sensitivity sensor for energy harvesting.' },
    { id: 2, name: 'Complete Energy System', price: 199.99, description: 'Full kit with Arduino Uno and sensors.' },
    { id: 3, name: 'Modular Brick', price: 49.99, description: 'Integrable module for scalable setups.' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Shop Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-lg font-bold mb-4">${product.price}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Shop;

src/components/Dashboard.js
function Dashboard() {
  // Mock data for demonstration
  const stats = {
    totalEnergy: '1,245 kWh',
    devices: 150,
    locations: 10,
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Total Energy</h2>
          <p className="text-2xl font-bold">{stats.totalEnergy}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Connected Devices</h2>
          <p className="text-2xl font-bold">{stats.devices}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Locations</h2>
          <p className="text-2xl font-bold">{stats.locations}</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Energy Production by Location</h2>
        <p className="text-gray-600">Placeholder for real-time analytics chart (e.g., using Chart.js).</p>
      </div>
    </div>
  );
}

export default Dashboard;

src/components/Transparency.js
function Transparency() {
  // Mock blockchain data
  const transactions = [
    { id: 'tx1', energy: '5.2 kWh', timestamp: '2025-09-15 10:00', hash: '0xabc123...' },
    { id: 'tx2', energy: '3.8 kWh', timestamp: '2025-09-15 09:45', hash: '0xdef456...' },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">Blockchain Transparency</h1>
      <p className="text-lg text-center mb-8">
        View immutable records of energy production stored on the blockchain.
      </p>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Transaction ID</th>
              <th className="p-2">Energy Generated</th>
              <th className="p-2">Timestamp</th>
              <th className="p-2">Hash</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b">
                <td className="p-2">{tx.id}</td>
                <td className="p-2">{tx.energy}</td>
                <td className="p-2">{tx.timestamp}</td>
                <td className="p-2 truncate">{tx.hash}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Transparency;





