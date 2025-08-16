import React, { useState } from "react";
import { motion } from "framer-motion";
import Boots1 from "../../assets/Footwear/Boots/boots1.jpg";
import Boots2 from "../../assets/Footwear/Boots/boots2.jpg";
import Boots3 from "../../assets/Footwear/Boots/boots3.jpg";
import { FiHeart } from "react-icons/fi";

const Boots = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const boots = [
    { title: "Classic Leather Boots", price: 199.99, rating: 4.9, img: Boots1 },
    { title: "Suede Ankle Boots", price: 179.99, rating: 4.7, img: Boots2 },
    { title: "Knee-High Boots", price: 219.99, rating: 4.8, img: Boots3 },
    { title: "Classic Leather Boots", price: 199.99, rating: 4.9, img: Boots1 },
    { title: "Suede Ankle Boots", price: 179.99, rating: 4.7, img: Boots2 },
    { title: "Knee-High Boots", price: 219.99, rating: 4.8, img: Boots3 },
    { title: "Classic Leather Boots", price: 199.99, rating: 4.9, img: Boots1 },
    { title: "Suede Ankle Boots", price: 179.99, rating: 4.7, img: Boots2 },
    { title: "Knee-High Boots", price: 219.99, rating: 4.8, img: Boots3 },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-gray-50 to-white py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-gray-800">Boots Collection</h1>
          <p className="mt-2 text-gray-600">Elegant and durable boots for every style.</p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {boots.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-gray-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart className={`text-lg ${likedIndex === index ? "text-gray-800" : "text-gray-700"}`} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-gray-800 font-bold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {item.rating} / 5</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Boots;
