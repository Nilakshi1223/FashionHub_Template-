import { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [summary, setSummary] = useState({});
  const [latest, setLatest] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get("/dashboard.php").then((res) => {
      if (res.data.success) {
        setSummary(res.data.summary);
        setLatest(res.data.latest_items);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-8">
      {/* Header */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-800 mb-10 drop-shadow-md">
        Admin Dashboard
      </h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {[
          { title: "Total Items", value: summary.total_items },
          { title: "Total Categories", value: summary.total_categories },
          { title: "Total Users", value: summary.total_users },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-pink-600 mb-2">{card.title}</h3>
            <p className="text-3xl font-bold text-pink-700">{card.value ?? 0}</p>
          </div>
        ))}
      </div>

      {/* Latest Items */}
      <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
        <h3 className="text-2xl font-bold text-gray-700 mb-6 border-b pb-2">Latest Items</h3>
        {latest.length > 0 ? (
          <ul className="space-y-4">
            {latest.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-pink-50 rounded-xl hover:bg-pink-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <span className="font-medium text-gray-700">{item.name}</span>
                <span className="text-sm text-gray-500">{item.category}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500 text-sm">No recent items found.</p>
        )}
      </div>

      {/* Manage Items Button */}
      <button
        onClick={() => navigate("/admin/items")}
        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-semibold rounded-2xl shadow-lg hover:from-pink-700 hover:to-pink-600 transform hover:scale-105 transition-all duration-300"
      >
        Manage Items
      </button>
    </div>
  );
}
