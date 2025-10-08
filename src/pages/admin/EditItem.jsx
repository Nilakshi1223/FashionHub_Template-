import React, { useState, useEffect } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import api from "../../api";

export default function EditItem() {
  const { id } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const mainCategoryParam = searchParams.get("mainCategory");

  const navigate = useNavigate();

  const [mainCategory, setMainCategory] = useState(mainCategoryParam || "");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [rate, setRate] = useState("");
  const [image, setImage] = useState(null);
  const [currentImage, setCurrentImage] = useState("");

  useEffect(() => {
  const fetchItem = async () => {
    try {
      const res = await api.get(`/items/read.php?id=${id}&mainCategory=${mainCategory}`);
      if (res.data.success && res.data.data.length > 0) {
        const item = res.data.data[0];
        setMainCategory(item.mainCategory); // ✅ Table name
        setCategory(item.category);         // ✅ Sub category
        setBrand(item.brand);
        setName(item.name);
        setPrice(item.price);
        setRate(item.rate);
        setCurrentImage(item.image);
      }
    } catch (err) {
      console.error("Error fetching item:", err);
    }
  };
  fetchItem();
}, [id, mainCategory]);




  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", id);
    formData.append("mainCategory", mainCategory);
    formData.append("category", category);
    formData.append("brand", brand);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("rate", rate);
    if (image) formData.append("image", image);

    try {
      const res = await api.post("/items/update.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        alert("✅ Item updated successfully!");
        navigate("/admin/items");
      } else {
        alert("❌ Failed to update item: " + res.data.message);
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error updating item.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl bg-white p-8 rounded-2xl shadow-xl border border-blue-200 transition-transform hover:scale-[1.01]"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6 tracking-wide">
          ✏️ Edit Item Details
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Main Category
            </label>
            <select
              value={mainCategory}
              onChange={(e) => setMainCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="">-- Select --</option>
              <option value="Women">Women</option>
              <option value="Men">Men</option>
              <option value="Footwear">Footwear</option>
              <option value="Accessories">Accessories</option>
            </select>
          </div>

          {/* Sub Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Sub Category
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              required
            >
              <option value="">-- Select --</option>
              {mainCategory === "Women" && (
                <>
                  <option value="Saree">Saree</option>
                  <option value="Mini dress">Mini dress</option>
                  <option value="Top">Top</option>
                  <option value="Dress">Dress</option>
                </>
              )}
              {mainCategory === "Men" && (
                <>
                  <option value="Jackets">Jackets</option>
                  <option value="Jeans">Jeans</option>
                  <option value="T-shirts">T-shirts</option>
                  <option value="Shirts">Shirts</option>
                </>
              )}
              {mainCategory === "Footwear" && (
                <>
                  <option value="Heels">Heels</option>
                  <option value="Boots">Boots</option>
                  <option value="Sandals">Sandals</option>
                  <option value="Sneakers">Sneakers</option>
                </>
              )}
              {mainCategory === "Accessories" && (
                <>
                  <option value="Handbags">Handbags</option>
                  <option value="SunGlasses">SunGlasses</option>
                  <option value="Hats">Hats</option>
                  <option value="Jewelry">Jewelry</option>
                </>
              )}
            </select>
          </div>

          {/* Brand */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Brand
            </label>
            <input
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Ex: Zara, Adidas..."
            />
          </div>

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Item Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Price (LKR)
            </label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              required
            />
          </div>

          {/* Rate */}
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Rating (1–5)
            </label>
            <input
              type="number"
              step="0.01"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 outline-none"
              placeholder="Ex: 4.8"
            />
          </div>

          {/* Current Image */}
          {currentImage && (
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">
                Current Image
              </label>
              <img
                src={currentImage}
                alt={name}
                className="h-24 w-24 object-cover rounded-xl mt-2 shadow"
              />
            </div>
          )}

          {/* Upload New Image */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Upload New Image
            </label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-gray-700 bg-gray-50 border border-gray-300 rounded-xl py-2 px-3 focus:ring-2 focus:ring-blue-400 outline-none"
            />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full mt-8 bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-all"
        >
          Update Item
        </button>
      </form>
    </div>
  );
}
