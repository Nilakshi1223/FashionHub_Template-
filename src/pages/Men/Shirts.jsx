import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api"; // axios instance with baseURL

// Fallback images
import Shirt1 from "../../assets/Men/Shirts/shirt1.webp";
import Shirt2 from "../../assets/Men/Shirts/shirt2.webp";
import Shirt3 from "../../assets/Men/Shirts/shirt3.webp";

const Shirts = () => {
  const [shirts, setShirts] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  const defaultShirts = [
    { id: 1, name: "Classic White Shirt", price: 2499, rate: 4.9, image: Shirt1 },
    { id: 2, name: "Checked Casual Shirt", price: 1999, rate: 4.7, image: Shirt2 },
    { id: 3, name: "Slim Fit Formal Shirt", price: 2799, rate: 4.8, image: Shirt3 },
  ];

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const res = await api.get("/items/read.php?mainCategory=Men&category=Shirts");
        if (res.data.success && res.data.data.length > 0) {
          setShirts(res.data.data); // DB data
        } else {
          setShirts(defaultShirts); // fallback
        }
      } catch (err) {
        console.error("Failed to fetch shirts", err);
        setShirts(defaultShirts); // fallback on error
      }
    };
    fetchShirts();
  }, []);

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
          <h1 className="text-4xl font-bold text-blue-600">Men's Shirts</h1>
          <p className="mt-2 text-gray-600">
            Explore our premium collection of shirts for every occasion.
          </p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {shirts.map((shirt, index) => (
          <motion.div
            key={shirt.id || index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img
                src={
                  shirt.image?.startsWith("http") || shirt.image?.startsWith("/")
                    ? shirt.image
                    : `http://localhost/fashion_backend/uploads/${shirt.image}`
                }
                alt={shirt.name || shirt.title}
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
              <h3 className="text-lg font-semibold">{shirt.name || shirt.title}</h3>
              <p className="text-sm text-gray-500 mt-1">
                Brand:{" "}
                <span className="font-medium text-gray-700">
                  {shirt.brand || "Unknown"}
                </span>
              </p>
              <p className="text-blue-600 font-bold mt-2">Rs. {shirt.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {shirt.rate || shirt.rating} / 5</p>
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
    //       <h1 className="text-4xl font-bold text-blue-400">Men's Shirts</h1>
    //       <p className="mt-2 text-gray-300">
    //         Explore our premium collection of shirts for every occasion.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {shirts.map((shirt, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-gray-900 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //         whileHover={{ scale: 1.03 }}
    //       >
    //         <div className="relative">
    //           <img src={shirt.img} alt={shirt.title} className="w-full h-64 object-cover" />
    //           <button
    //         className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
    //           likedIndex === index
    //             ? "bg-blue-600"
    //             : "bg-gray-800 hover:bg-gray-700"
    //         }`}
    //         onClick={() => setLikedIndex(likedIndex === index ? null : index)}
    //       >
    //         <FiHeart
    //           className={`text-lg ${
    //             likedIndex === index ? "text-white" : "text-blue-400"
    //           }`}
    //         />
    //       </button>
    //         </div>

    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-gray-100">{shirt.title}</h3>
    //           <p className="text-blue-400 font-bold mt-2">Rs. {shirt.price}</p>
    //           <p className="text-sm text-gray-400 mt-1">⭐ {shirt.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>

    
    // <div className="pt-16 bg-gray-950 min-h-screen">
    //   {/* Header */}
    //   <motion.section
    //     className="bg-gradient-to-r  from-gray-900 via-gray-800 to-teal-900 py-12"
    //     initial={{ opacity: 0, y: 30 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <div className="max-w-7xl mx-auto px-6 text-center">
    //       <h1 className="text-4xl font-bold text-teal-400">Men's Shirts</h1>
    //       <p className="mt-2 text-teal-100">
    //         Explore our premium collection of shirts for every occasion.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {shirts.map((shirt, index) => (
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
    //             src={shirt.img}
    //             alt={shirt.title}
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
    //           <h3 className="text-lg font-semibold text-teal-100">{shirt.title}</h3>
    //           <p className="text-teal-400 font-bold mt-2">Rs. {shirt.price}</p>
    //           <p className="text-sm text-teal-200 mt-1">⭐ {shirt.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Shirts;
