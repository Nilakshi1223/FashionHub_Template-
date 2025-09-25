import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api"; // axios instance with baseURL

// Local fallback images
import Mini1 from "../../assets/Women/MiniDress/mini1.webp";
import Mini2 from "../../assets/Women/MiniDress/mini2.webp";
import Mini3 from "../../assets/Women/MiniDress/mini3.webp";

const MiniDress = () => {
  const [miniDresses, setMiniDresses] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  // Fallback data if DB is empty
  const defaultDresses = [
    { id: 1, name: "Classic Black Mini Dress", price: 149.99, rate: 4.8, image: Mini1 },
    { id: 2, name: "Floral Print Mini Dress", price: 129.99, rate: 4.7, image: Mini2 },
    { id: 3, name: "Casual White Mini Dress", price: 139.99, rate: 4.6, image: Mini3 },
  ];

  useEffect(() => {
    const fetchMiniDresses = async () => {
      try {
        const res = await api.get("/items/read.php?category=Mini Dress");
        if (res.data.success && res.data.data.length > 0) {
          setMiniDresses(res.data.data); // ✅ DB data
        } else {
          setMiniDresses(defaultDresses); // ✅ fallback
        }
      } catch (err) {
        console.error("Failed to fetch mini dresses", err);
        setMiniDresses(defaultDresses); // ✅ fallback on error
      }
    };
    fetchMiniDresses();
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
          <h1 className="text-4xl font-bold text-pink-600">Mini Dresses</h1>
          <p className="mt-2 text-gray-600">
            Perfect mini dresses for every occasion.
          </p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {miniDresses.map((minidress, index) => (
          <motion.div
            key={minidress.id || index}
            className="bg-white shadow-md rounded-xl overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="relative">
              <img
                src={
                  minidress.image.startsWith("http") || minidress.image.startsWith("/")
                    ? minidress.image
                    : `http://localhost/fashion_backend/uploads/${minidress.image}`
                }
                alt={minidress.name || minidress.title}
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
              <h3 className="text-lg font-semibold">
                {minidress.name || minidress.title}
              </h3>
              <p className="text-pink-600 font-bold mt-2">
                Rs. {minidress.price}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {minidress.rate || minidress.rating} / 5
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
    //       <h1 className="text-4xl font-bold text-pink-400">Mini Dresses</h1>
    //       <p className="mt-2 text-gray-300">
    //         Perfect mini dresses for every occasion.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {miniDresses.map((dress, index) => (
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
    //       <h1 className="text-4xl font-bold text-teal-400">Mini Dresses</h1>
    //       <p className="mt-2 text-teal-100">
    //         Perfect mini dresses for every occasion.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {miniDresses.map((dress, index) => (
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

export default MiniDress;
