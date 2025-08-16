import React, { useState } from "react";
import { motion } from "framer-motion";
import Saree1 from "../../assets/Women/Saree/saree1.webp";
import Saree2 from "../../assets/Women/Saree/saree2.webp";
import Saree3 from "../../assets/Women/Saree/saree3.webp";
import { FiHeart } from "react-icons/fi";

const Sarees = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const sarees = [
    { title: "Elegant Silk Saree", price: 199.99, rating: 4.9, img: Saree1 },
    { title: "Floral Cotton Saree", price: 149.99, rating: 4.7, img: Saree2 },
    { title: "Designer Georgette Saree", price: 179.99, rating: 4.8, img: Saree3 },
    { title: "Traditional Kanjivaram Saree", price: 249.99, rating: 5.0, img: Saree1 },
    { title: "Soft Linen Saree", price: 129.99, rating: 4.6, img: Saree2 },
    { title: "Party Wear Net Saree", price: 189.99, rating: 4.7, img: Saree3 },
    { title: "Traditional Kanjivaram Saree", price: 249.99, rating: 5.0, img: Saree1 },
    { title: "Soft Linen Saree", price: 129.99, rating: 4.6, img: Saree2 },
    { title: "Party Wear Net Saree", price: 189.99, rating: 4.7, img: Saree3 },
    { title: "Traditional Kanjivaram Saree", price: 249.99, rating: 5.0, img: Saree1 },
    { title: "Soft Linen Saree", price: 129.99, rating: 4.6, img: Saree2 },
    { title: "Party Wear Net Saree", price: 189.99, rating: 4.7, img: Saree3 },
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
          <h1 className="text-4xl font-bold text-pink-600">Sarees Collection</h1>
          <p className="mt-2 text-gray-600">
            Explore our premium range of sarees for every occasion.
          </p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sarees.map((saree, index) => (
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
                src={saree.img}
                alt={saree.title}
                className="w-full h-64 object-cover"
              />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index
                    ? "bg-pink-100"
                    : "bg-white hover:bg-gray-100"
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
              <h3 className="text-lg font-semibold">{saree.title}</h3>
              <p className="text-pink-600 font-bold mt-2">Rs. {saree.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {saree.rating} / 5
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Sarees;
