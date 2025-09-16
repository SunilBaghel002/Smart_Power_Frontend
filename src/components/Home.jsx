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