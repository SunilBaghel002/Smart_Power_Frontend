function Transparency() {
  // Mock blockchain data
  const transactions = [
    {
      id: "tx1",
      energy: "5.2 kWh",
      timestamp: "2025-09-15 10:00",
      hash: "0xabc123...",
    },
    {
      id: "tx2",
      energy: "3.8 kWh",
      timestamp: "2025-09-15 09:45",
      hash: "0xdef456...",
    },
  ];

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-6">
        Blockchain Transparency
      </h1>
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
