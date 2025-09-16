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