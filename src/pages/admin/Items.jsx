import { useEffect, useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

export default function Items() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all items
  const fetchItems = async () => {
    try {
      setLoading(true);
      const res = await api.get("/items/read.php"); // make sure backend returns all items with mainCategory
      setItems(res.data.data || []);
    } catch (err) {
      console.error("Error fetching items:", err);
      setItems([]);
    } finally {
      setLoading(false);
    }
  };

  // Delete item
  const handleDelete = async (id, mainCategory) => {
    if (!window.confirm("Are you sure you want to delete this item?")) return;
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("mainCategory", mainCategory); // needed to delete from correct table

      const res = await api.post("/items/delete.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) fetchItems();
      else alert("Failed to delete: " + res.data.message);
    } catch (err) {
      console.error("Error deleting item:", err);
      alert("Failed to delete item. Please try again.");
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 p-8">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-2xl p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-3xl font-extrabold text-pink-800 drop-shadow-sm">
            📦 Manage Items
          </h2>
          <button
            onClick={() => navigate("/admin/add-item")}
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-400 text-white font-semibold rounded-xl shadow-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
          >
            ➕ Add New Item
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-pink-100">
              <tr>
                {["Image", "Name", "Category", "Main Category", "Price", "Rate", "Actions"].map(
                  (header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-gray-700 font-semibold uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  )
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-gray-500 italic">
                    Loading items...
                  </td>
                </tr>
              ) : items.length > 0 ? (
                items.map((item) => (
                  <tr key={`${item.id}-${item.mainCategory}`} className="hover:bg-pink-50 transition">
                    <td className="px-6 py-4">
                      <img
                        src={
                          item.image?.startsWith("http")
                            ? item.image
                            : `http://localhost/fashion_backend/uploads/${item.image}`
                        }
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg border border-gray-200 shadow-sm"
                      />
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-700">{item.name}</td>
                    <td className="px-6 py-4 text-gray-500">{item.category}</td>
                    <td className="px-6 py-4 text-gray-500">{item.mainCategory}</td>
                    <td className="px-6 py-4 font-semibold text-gray-800">Rs.{item.price}</td>
                    <td className="px-6 py-4 text-yellow-500 font-semibold">⭐ {item.rate}</td>
                    <td className="px-6 py-4 flex justify-center gap-3">
                      <button
                        onClick={() =>
                          navigate(`/admin/edit-item/${item.id}`, { state: { mainCategory: item.mainCategory } })
                        }
                        className="px-4 py-2 bg-pink-500 text-white rounded-lg shadow hover:bg-pink-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(item.id, item.mainCategory)}
                        className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-8 text-gray-500 italic">
                    No items found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
