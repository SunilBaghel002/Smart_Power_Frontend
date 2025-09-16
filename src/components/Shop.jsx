function Shop() {
  const products = [
    {
      id: 1,
      name: "Piezoelectric Sensor",
      price: 29.99,
      description: "High-sensitivity sensor for energy harvesting.",
    },
    {
      id: 2,
      name: "Complete Energy System",
      price: 199.99,
      description: "Full kit with Arduino Uno and sensors.",
    },
    {
      id: 3,
      name: "Modular Brick",
      price: 49.99,
      description: "Integrable module for scalable setups.",
    },
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
