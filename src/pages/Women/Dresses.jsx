import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api"; // axios instance with baseURL

// Local fallback images
import Dress1 from "../../assets/Women/Dress/dress.webp";
import Dress2 from "../../assets/Women/Dress/dress2.webp";
import Dress3 from "../../assets/Women/Dress/dress3.webp";

const Dresses = () => {
  const [dresses, setDresses] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  // Default fallback dresses
  const defaultDresses = [
    { id: 1, name: "Elegant Summer Dress", price: 129.99, rate: 4.8, image: Dress1 },
    { id: 2, name: "Floral Maxi Dress", price: 149.99, rate: 4.7, image: Dress2 },
    { id: 3, name: "Casual Mini Dress", price: 99.99, rate: 4.6, image: Dress3 },
  ];

  useEffect(() => {
    const fetchDresses = async () => {
      try {
        const res = await api.get("/items/read.php?category=Dress");
        if (res.data.success && res.data.data.length > 0) {
          setDresses(res.data.data); // ✅ DB data
        } else {
          setDresses(defaultDresses); // ✅ fallback
        }
      } catch (err) {
        console.error("Failed to fetch dresses", err);
        setDresses(defaultDresses); // ✅ fallback on error
      }
    };
    fetchDresses();
  });

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
            key={dress.id || index}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={
                  dress.image.startsWith("http") || dress.image.startsWith("/")
                    ? dress.image
                    : `http://localhost/fashion_backend/uploads/${dress.image}`
                }
                alt={dress.name || dress.title}
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
              <h3 className="text-lg font-semibold">{dress.name || dress.title}</h3>
              <p className="text-pink-600 font-bold mt-2">Rs. {dress.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {dress.rate || dress.rating} / 5</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>



    // <div className="pt-16 bg-gray-950 min-h-screen">
    //   {/* Header */}
    //   <motion.section
    //     className="bg-gradient-to-r from-gray-950 via-gray-900 to-pink-950 py-12"
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <div className="max-w-7xl mx-auto px-6 text-center">
    //       <h1 className="text-4xl font-bold text-pink-400">Dresses Collection</h1>
    //       <p className="mt-2 text-gray-300">
    //         Discover our latest collection of elegant and trendy dresses.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {dresses.map((dress, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-gray-900 shadow-md rounded-xl overflow-hidden cursor-pointer"
    //         whileHover={{ scale: 1.03 }}
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //       >
    //         <div className="relative">
    //           <img
    //             src={dress.img}
    //             alt={dress.title}
    //             className="w-full h-64 object-cover"
    //           />
    //           <button
    //         className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
    //           likedIndex === index
    //             ? "bg-pink-600"
    //             : "bg-gray-800 hover:bg-gray-700"
    //         }`}
    //         onClick={() => setLikedIndex(likedIndex === index ? null : index)}
    //       >
    //         <FiHeart
    //           className={`text-lg ${
    //             likedIndex === index ? "text-white" : "text-pink-400"
    //           }`}
    //         />
    //       </button>
    //         </div>
    //         <div className="p-4">
    //           <h3 className="text-lg font-semibold text-gray-100">{dress.title}</h3>
    //           <p className="text-pink-400 font-bold mt-2">Rs. {dress.price}</p>
    //           <p className="text-sm text-gray-400 mt-1">⭐ {dress.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>

    
    // <div className="pt-16 bg-gray-950 min-h-screen">
    //   {/* Header */}
    //   <motion.section
    //     className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 py-12"
    //     initial={{ opacity: 0, y: 50 }}
    //     animate={{ opacity: 1, y: 0 }}
    //     transition={{ duration: 0.8 }}
    //   >
    //     <div className="max-w-7xl mx-auto px-6 text-center">
    //       <h1 className="text-4xl font-bold text-teal-400">Dresses Collection</h1>
    //       <p className="mt-2 text-teal-100">
    //         Discover our latest collection of elegant and trendy dresses.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {dresses.map((dress, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-teal-900 shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl transition"
    //         whileHover={{ scale: 1.03 }}
    //         initial={{ opacity: 0, y: 30 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //       >
    //         <div className="relative">
    //           <img
    //             src={dress.img}
    //             alt={dress.title}
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
    //           <h3 className="text-lg font-semibold text-teal-100">{dress.title}</h3>
    //           <p className="text-teal-400 font-bold mt-2">Rs. {dress.price}</p>
    //           <p className="text-sm text-teal-200 mt-1">⭐ {dress.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>



  );
};

export default Dresses;
