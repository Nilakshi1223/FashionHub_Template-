import React, { useState } from "react";
import { motion } from "framer-motion";
import Dress1 from "../../assets/Women/Dress/dress.jpg";
import Dress2 from "../../assets/Women/Dress/dress2.jpg";
import Dress3 from "../../assets/Women/Dress/dress3.jpg";
import { FiHeart } from "react-icons/fi";

const Dresses = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const dresses = [
    { title: "Elegant Summer Dress", price: 129.99, rating: 4.8, img: Dress1 },
    { title: "Floral Maxi Dress", price: 149.99, rating: 4.7, img: Dress2 },
    { title: "Casual Mini Dress", price: 99.99, rating: 4.6, img: Dress3 },
    { title: "Elegant Summer Dress", price: 129.99, rating: 4.8, img: Dress1 },
    { title: "Floral Maxi Dress", price: 149.99, rating: 4.7, img: Dress2 },
    { title: "Casual Mini Dress", price: 99.99, rating: 4.6, img: Dress3 },
    { title: "Elegant Summer Dress", price: 129.99, rating: 4.8, img: Dress1 },
    { title: "Floral Maxi Dress", price: 149.99, rating: 4.7, img: Dress2 },
    { title: "Casual Mini Dress", price: 99.99, rating: 4.6, img: Dress3 },
    { title: "Elegant Summer Dress", price: 129.99, rating: 4.8, img: Dress1 },
    { title: "Floral Maxi Dress", price: 149.99, rating: 4.7, img: Dress2 },
    { title: "Casual Mini Dress", price: 99.99, rating: 4.6, img: Dress3 },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-pink-50 to-white py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-pink-600">Dresses Collection</h1>
          <p className="mt-2 text-gray-600">
            Discover our latest collection of elegant and trendy dresses.
          </p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dresses.map((dress, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={dress.img}
                alt={dress.title}
                className="w-full h-64 object-cover"
              />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-pink-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart
                  className={`text-lg ${
                    likedIndex === index ? "text-pink-500" : "text-gray-700"
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{dress.title}</h3>
              <p className="text-pink-600 font-bold mt-2">Rs. {dress.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {dress.rating} / 5</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Dresses;
