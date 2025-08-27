import React, { useState } from "react";
import { motion } from "framer-motion";
import Heels1 from "../../assets/Footwear/Heels/heels1.webp";
import Heels2 from "../../assets/Footwear/Heels/heels2.webp";
import Heels3 from "../../assets/Footwear/Heels/heels3.webp";
import { FiHeart } from "react-icons/fi";

const Heels = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const heels = [
    { title: "Elegant Heels", price: 109.99, rating: 4.8, img: Heels1 },
    { title: "Party Heels", price: 129.99, rating: 4.7, img: Heels2 },
    { title: "Casual Heels", price: 99.99, rating: 4.6, img: Heels3 },
    { title: "Elegant Heels", price: 109.99, rating: 4.8, img: Heels1 },
    { title: "Party Heels", price: 129.99, rating: 4.7, img: Heels2 },
    { title: "Casual Heels", price: 99.99, rating: 4.6, img: Heels3 },
    { title: "Elegant Heels", price: 109.99, rating: 4.8, img: Heels1 },
    { title: "Party Heels", price: 129.99, rating: 4.7, img: Heels2 },
    { title: "Casual Heels", price: 99.99, rating: 4.6, img: Heels3 },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-pink-50 to-white py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-pink-600">Heels Collection</h1>
          <p className="mt-2 text-gray-600">Stylish heels for parties and special occasions.</p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {heels.map((item, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5}}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-pink-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart className={`text-lg ${likedIndex === index ? "text-pink-500" : "text-gray-700"}`} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-pink-600 font-bold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {item.rating} / 5</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    // <div className="pt-16 bg-gray-950 min-h-screen">
    //   {/* Header */}
    //   <motion.section
    //     className="bg-gradient-to-r from-gray-950 via-gray-900 to-pink-950 py-12"
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <div className="max-w-7xl mx-auto px-6 text-center">
    //       <h1 className="text-4xl font-bold text-pink-400">Heels Collection</h1>
    //       <p className="mt-2 text-gray-300">Stylish heels for parties and special occasions.</p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {heels.map((item, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-gray-900 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5}}
    //         whileHover={{ scale: 1.03 }}
    //       >
    //         <div className="relative">
    //           <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
    //           <button
    //             className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
    //           likedIndex === index
    //             ? "bg-pink-600"
    //             : "bg-gray-800 hover:bg-gray-700"
    //         }`}
    //             onClick={() => setLikedIndex(index)}
    //           >
    //             <FiHeart className={`text-lg ${likedIndex === index ?"text-white" : "text-pink-400"}`} />
    //           </button>
    //         </div>
    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
    //           <p className="text-pink-400 font-bold mt-2">Rs. {item.price}</p>
    //           <p className="text-sm text-gray-400 mt-1">⭐ {item.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>

  );
};

export default Heels;
