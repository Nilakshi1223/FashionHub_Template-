import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api";

import Bag1 from "../../assets/Accessories/Handbag/bag1.webp";
import Bag2 from "../../assets/Accessories/Handbag/bag2.webp";
import Bag3 from "../../assets/Accessories/Handbag/bag3.webp";

const Handbag = () => {
  const [handbags, setHandbags] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  const defaultHandbags = [
    { title: "Designer Handbag", price: 14999, rating: 4.9, image: Bag1 },
    { title: "Leather Tote Bag", price: 11999, rating: 4.7, image: Bag2 },
    { title: "Casual Sling Bag", price: 7999, rating: 4.6, image: Bag3 },
  ];

  useEffect(() => {
    const fetchHandbags = async () => {
      try {
        const res = await api.get("/items/read.php?mainCategory=Accessories&category=Handbag");
        if (res.data.success && res.data.data.length > 0) {
          setHandbags(res.data.data);
        } else {
          setHandbags(defaultHandbags);
        }
      } catch (err) {
        console.error("Failed to fetch handbags", err);
        setHandbags(defaultHandbags);
      }
    };
    fetchHandbags();
  }, []); // <- run once on mount

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
          <h1 className="text-4xl font-bold text-pink-600">Handbags Collection</h1>
          <p className="mt-2 text-gray-600">
            Stylish handbags to carry your essentials in elegance.
          </p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {handbags.map((item, index) => (
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
                  item.image?.startsWith("http") || item.image?.startsWith("/")
                    ? item.image
                    : `http://localhost/fashion_backend/uploads/${item.image}`
                }
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-pink-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(likedIndex === index ? null : index)}
              >
                <FiHeart
                  className={`text-lg ${
                    likedIndex === index ? "text-pink-500" : "text-gray-700"
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.name ||item.title}</h3>
              <p className="text-pink-600 font-bold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {item.rating} / 5</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>


//     <div className="pt-16 bg-gray-950 min-h-screen">
//   {/* Header */}
//   <motion.section
//     className="bg-gradient-to-r from-gray-900 via-gray-800 to-teal-900 py-12"
//     initial={{ opacity: 0, y: 30 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//   >
//     <div className="max-w-7xl mx-auto px-6 text-center">
//       <h1 className="text-4xl font-bold text-teal-400">Handbags Collection</h1>
//       <p className="mt-2 text-teal-200">
//         Stylish handbags to carry your essentials in elegance.
//       </p>
//     </div>
//   </motion.section>

//   {/* Product Grid */}
//   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//     {handbags.map((item, index) => (
//       <motion.div
//         key={index}
//         className="bg-teal-900 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: index * 0.1, duration: 0.5 }}
//         whileHover={{ scale: 1.03 }}
//       >
//         <div className="relative">
//           <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
//           <button
//             className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
//               likedIndex === index
//                     ? "bg-teal-400"
//                     : "bg-teal-800 hover:bg-teal-700"
//             }`}
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
//           <h3 className="text-lg font-semibold text-teal-100">{item.title}</h3>
//           <p className="text-teal-400 font-bold mt-2">Rs. {item.price}</p>
//           <p className="text-sm text-teal-200 mt-1">⭐ {item.rating} / 5</p>
//         </div>
//       </motion.div>
//     ))}
//   </div>
// </div>


  );
};

export default Handbag;
