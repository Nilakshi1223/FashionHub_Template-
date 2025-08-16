import React, { useState } from "react";
import { motion } from "framer-motion";
import Jewelry1 from "../../assets/Accessories/Jewelry/jewelry1.webp";
import Jewelry2 from "../../assets/Accessories/Jewelry/jewelry2.webp";
import Jewelry3 from "../../assets/Accessories/Jewelry/jewelry3.webp";
import { FiHeart } from "react-icons/fi";

const Jewelry = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const jewelry = [
    { title: "Elegant Necklace", price: 7999, rating: 4.8, img: Jewelry1 },
    { title: "Diamond Earrings", price: 12999, rating: 4.9, img: Jewelry2 },
    { title: "Gold Bracelet", price: 9999, rating: 4.7, img: Jewelry3 },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-purple-50 to-white py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-purple-600">Jewelry Collection</h1>
          <p className="mt-2 text-gray-600">
            Shine bright with our exclusive range of jewelry.
          </p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jewelry.map((item, index) => (
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
                  likedIndex === index ? "bg-purple-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(likedIndex === index ? null : index)}
              >
                <FiHeart
                  className={`text-lg ${
                    likedIndex === index ? "text-purple-500" : "text-gray-700"
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-purple-600 font-bold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {item.rating} / 5</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Jewelry;
