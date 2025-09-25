import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api";

export default function AddItem() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("rate", rate);
    formData.append("image", image);

    await api.post("/items/add.php", formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    navigate("/items");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-lg p-10">
        <h2 className="text-3xl font-extrabold text-pink-700 mb-8 text-center drop-shadow-sm">
          ➕ Add New Item
        </h2>
        
        <form onSubmit={handleAdd} className="space-y-6">
          {/* Item Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Name</label>
            <input
              type="text"
              placeholder="Enter item name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Category</label>
            <input
              type="text"
              placeholder="e.g., Saree, Sunglasses"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Price (Rs.)</label>
            <input
              type="number"
              placeholder="Enter price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium text-gray-600">Rating</label>
            <input
              type="number"
              step="0.1"
              placeholder="e.g., 4.5"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="mt-2 w-full px-4 py-3 border rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
              required
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Upload Image</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
                         file:rounded-lg file:border-0 file:text-sm file:font-semibold
                         file:bg-pink-50 file:text-pink-700 hover:file:bg-pink-100 transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 to-pink-400 text-white py-3 rounded-xl font-semibold shadow-lg hover:from-pink-600 hover:to-pink-500 transform hover:scale-105 transition-all duration-300"
          >
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
}
