import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Technology from "./components/Technology";
import Sustainability from "./components/Sustainability";
import Team from "./components/Team";
import Contact from "./components/Contact";

// import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Smart Energy Bricks
              </div>
              <div className="hidden md:flex space-x-8">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Live Dashboard
                </Link>
                <Link
                  to="/technology"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Technology Stack
                </Link>
                <Link
                  to="/sustainability"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Sustainability & Impact
                </Link>
                <Link
                  to="/team"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Team & Mentors
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
              {/* Mobile menu button */}
              <div className="md:hidden">
                <button className="text-gray-700 hover:text-green-600">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />

                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
