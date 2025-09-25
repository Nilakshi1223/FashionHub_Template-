import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api"; // axios instance with baseURL
import Saree1 from "../../assets/Women/Saree/saree1.webp";
import Saree2 from "../../assets/Women/Saree/saree2.webp";
import Saree3 from "../../assets/Women/Saree/saree3.webp";

const Sarees = () => {
  const [sarees, setSarees] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  // Default static sarees (fallback if DB empty)
  const defaultSarees = [
    { id: 1, name: "Elegant Silk Saree", price: 199.99, rate: 4.9, image: Saree1 },
    { id: 2, name: "Floral Cotton Saree", price: 149.99, rate: 4.7, image: Saree2 },
    { id: 3, name: "Designer Georgette Saree", price: 179.99, rate: 4.8, image: Saree3 },
  ];

  useEffect(() => {
    const fetchSarees = async () => {
      try {
        const res = await api.get("/items/read.php?category=Ladies Saree");
        if (res.data.success && res.data.data.length > 0) {
          setSarees(res.data.data);
        } else {
          setSarees(defaultSarees); // fallback
        }
      } catch (err) {
        console.error("Failed to fetch sarees", err);
        setSarees(defaultSarees); // fallback if error
      }
    };
    fetchSarees();
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
            key={saree.id || index}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={
                  saree.image.startsWith("http") || saree.image.startsWith("/")
                    ? saree.image
                    : `http://localhost/fashion_backend/uploads/${saree.image}`
                }
                alt={saree.name}
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
              <h3 className="text-lg font-semibold">{saree.name}</h3>
              <p className="text-pink-600 font-bold mt-2">Rs. {saree.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {saree.rate} / 5
              </p>
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
    //       <h1 className="text-4xl font-bold text-pink-400">Sarees Collection</h1>
    //       <p className="mt-2 text-gray-300">
    //         Explore our premium range of sarees for every occasion.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {sarees.map((saree, index) => (
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
    //             src={saree.img}
    //             alt={saree.title}
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
    //           <h3 className="text-lg font-semibold text-gray-100">{saree.title}</h3>
    //           <p className="text-pink-400 font-bold mt-2">Rs. {saree.price}</p>
    //           <p className="text-sm text-gray-400 mt-1">
    //             ⭐ {saree.rating} / 5
    //           </p>
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
    //       <h1 className="text-4xl font-bold text-teal-400">Sarees Collection</h1>
    //       <p className="mt-2 text-teal-100">
    //         Explore our premium range of sarees for every occasion.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {sarees.map((saree, index) => (
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
    //             src={saree.img}
    //             alt={saree.title}
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
    //           <h3 className="text-lg font-semibold text-teal-100">{saree.title}</h3>
    //           <p className="text-teal-400 font-bold mt-2">Rs. {saree.price}</p>
    //           <p className="text-sm text-teal-200 mt-1">
    //             ⭐ {saree.rating} / 5
    //           </p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>

  );
};

export default Sarees;
