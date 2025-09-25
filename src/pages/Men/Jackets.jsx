import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api"; // axios instance with baseURL

// Fallback jacket images
import Jacket1 from "../../assets/Men/Jackets/jacket1.webp";
import Jacket2 from "../../assets/Men/Jackets/jacket2.webp";
import Jacket3 from "../../assets/Men/Jackets/jacket3.webp";

const Jackets = () => {
  const [jackets, setJackets] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  // Fallback jackets if DB is empty
  const defaultJackets = [
    { id: 1, name: "Leather Jacket", price: 4999, rate: 4.9, image: Jacket1 },
    { id: 2, name: "Bomber Jacket", price: 4599, rate: 4.8, image: Jacket2 },
    { id: 3, name: "Denim Jacket", price: 3999, rate: 4.7, image: Jacket3 },
  ];

  useEffect(() => {
    const fetchJackets = async () => {
      try {
        const res = await api.get("/items/read.php?category=Men Jackets");
        if (res.data.success && res.data.data.length > 0) {
          setJackets(res.data.data); // ✅ DB items
        } else {
          setJackets(defaultJackets); // ✅ fallback
        }
      } catch (err) {
        console.error("Failed to fetch jackets", err);
        setJackets(defaultJackets); // ✅ fallback on error
      }
    };
    fetchJackets();
  });

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <motion.section
        className="bg-gradient-to-r from-blue-50 to-white py-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Men's Jackets</h1>
          <p className="mt-2 text-gray-600">Stylish jackets to complete your look.</p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jackets.map((jacket, index) => (
          <motion.div
            key={jacket.id || index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img
                src={
                  jacket.image.startsWith("http") || jacket.image.startsWith("/")
                    ? jacket.image
                    : `http://localhost/fashion_backend/uploads/${jacket.image}`
                }
                alt={jacket.name || jacket.title}
                className="w-full h-64 object-cover"
              />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-blue-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart
                  className={`text-lg ${
                    likedIndex === index ? "text-blue-500" : "text-gray-700"
                  }`}
                />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{jacket.name || jacket.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {jacket.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {jacket.rate || jacket.rating} / 5</p>
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
    //       <h1 className="text-4xl font-bold text-blue-400">Men's Jackets</h1>
    //       <p className="mt-2 text-gray-300">Stylish jackets to complete your look.</p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {jackets.map((jacket, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-gray-900 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //         whileHover={{ scale: 1.03 }}
    //       >
    //         <div className="relative">
    //           <img src={jacket.img} alt={jacket.title} className="w-full h-64 object-cover" />
    //           <button
    //             className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
    //           likedIndex === index
    //             ? "bg-blue-600"
    //             : "bg-gray-800 hover:bg-gray-700"
    //         }`}
    //             onClick={() => setLikedIndex(index)}
    //           >
    //             <FiHeart
    //           className={`text-lg ${
    //             likedIndex === index ? "text-white" : "text-blue-400"
    //           }`}
    //         />
    //           </button>
    //         </div>

    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-gray-100">{jacket.title}</h3>
    //           <p className="text-blue-400 font-bold mt-2">Rs. {jacket.price}</p>
    //           <p className="text-sm text-gray-400 mt-1">⭐ {jacket.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>



    
    // <div className="pt-16 bg-gray-950 min-h-screen">
    //   {/* Header */}
    //   <motion.section
    //     className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 py-12"
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <div className="max-w-7xl mx-auto px-6 text-center">
    //       <h1 className="text-4xl font-bold text-teal-400">Men's Jackets</h1>
    //       <p className="mt-2 text-teal-100">Stylish jackets to complete your look.</p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {jackets.map((jacket, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-teal-900 shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //         whileHover={{ scale: 1.03 }}
    //       >
    //         <div className="relative">
    //           <img
    //             src={jacket.img}
    //             alt={jacket.title}
    //             className="w-full h-64 object-cover"
    //           />
    //           <button
    //             className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
    //               likedIndex === index
    //                 ? "bg-teal-400"
    //                 : "bg-teal-800 hover:bg-teal-700"
    //             }`}
    //             onClick={() => setLikedIndex(likedIndex === index ? null : index)}
    //           >
    //             <FiHeart
    //               className={`text-lg ${
    //                 likedIndex === index ? "text-white" : "text-teal-200"
    //               }`}
    //             />
    //           </button>
    //         </div>

    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-teal-100">{jacket.title}</h3>
    //           <p className="text-teal-400 font-bold mt-2">Rs. {jacket.price}</p>
    //           <p className="text-sm text-teal-200 mt-1">⭐ {jacket.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>

  );
};

export default Jackets;
