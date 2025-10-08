import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api"; // Axios instance

// Default images
import Jewelry1 from "../../assets/Accessories/Jewelry/jewelry1.webp";
import Jewelry2 from "../../assets/Accessories/Jewelry/jewelry2.webp";
import Jewelry3 from "../../assets/Accessories/Jewelry/jewelry3.webp";

const Jewelry = () => {
  const [jewelry, setJewelry] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  // Default fallback items
  const defaultJewelry = [
    { title: "Elegant Necklace", price: 7999, rating: 4.8, image: Jewelry1 },
    { title: "Diamond Earrings", price: 12999, rating: 4.9, image: Jewelry2 },
    { title: "Gold Bracelet", price: 9999, rating: 4.7, image: Jewelry3 },
  ];

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const res = await api.get("/items/read.php?mainCategory=Accessories&category=Jewelry");
        if (res.data.success && res.data.data.length > 0) {
          setJewelry(res.data.data);
        } else {
          setJewelry(defaultJewelry); // fallback
        }
      } catch (err) {
        console.error("Failed to fetch jewelry", err);
        setJewelry(defaultJewelry);
      }
    };

    fetchJewelry();
  }, []);

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
        {jewelry.map((jewelry, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img
                src={
                  jewelry.image?.startsWith("http") || jewelry.image?.startsWith("/")
                    ? jewelry.image
                    : `http://localhost/fashion_backend/uploads/${jewelry.image}`
                }
                alt={jewelry.title}
                className="w-full h-64 object-cover"
              />
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
              <h3 className="text-lg font-semibold">{jewelry.name ||jewelry.title}</h3>
              <p className="text-purple-600 font-bold mt-2">Rs. {jewelry.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {jewelry.rating} / 5</p>
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
    //       <h1 className="text-4xl font-bold text-purple-400">Jewelry Collection</h1>
    //       <p className="mt-2 text-gray-300">
    //         Shine bright with our exclusive range of jewelry.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {jewelry.map((item, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-gray-900 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //         whileHover={{ scale: 1.03 }}
    //       >
    //         <div className="relative">
    //           <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
    //           <button
    //             className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
    //           likedIndex === index
    //             ? "bg-purple-600"
    //             : "bg-gray-800 hover:bg-gray-700"
    //         }`}
    //             onClick={() => setLikedIndex(likedIndex === index ? null : index)}
    //           >
    //             <FiHeart
    //               className={`text-lg ${
    //                 likedIndex === index ? "text-white" : "text-purple-400"
    //               }`}
    //             />
    //           </button>
    //         </div>
    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-gray-100" >{item.title}</h3>
    //           <p className="text-purple-400 font-bold mt-2">Rs. {item.price}</p>
    //           <p className="text-sm text-gray-400 mt-1">⭐ {item.rating} / 5</p>
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
    //       <h1 className="text-4xl font-bold text-teal-400">Jewelry Collection</h1>
    //       <p className="mt-2 text-teal-200">
    //         Shine bright with our exclusive range of jewelry.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {jewelry.map((item, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-gray-900 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //         whileHover={{ scale: 1.03 }}
    //       >
    //         <div className="relative">
    //           <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
    //           <button
    //             className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
    //           likedIndex === index
    //                 ? "bg-teal-400"
    //                 : "bg-teal-800 hover:bg-teal-700"
    //         }`}
    //             onClick={() => setLikedIndex(likedIndex === index ? null : index)}
    //           >
    //             <FiHeart
    //               className={`text-lg ${
    //                 likedIndex === index ? "text-white" : "text-teal-400"
    //               }`}
    //             />
    //           </button>
    //         </div>
    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-teal-100" >{item.title}</h3>
    //           <p className="text-teal-400 font-bold mt-2">Rs. {item.price}</p>
    //           <p className="text-sm text-teal-200 mt-1">⭐ {item.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>

  );
};

export default Jewelry;
