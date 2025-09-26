import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Dashboard from './components/Dashboard';
import Transparency from './components/Transparency';
// import './App.css';

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