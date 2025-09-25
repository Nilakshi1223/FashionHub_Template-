import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiHeart } from "react-icons/fi";
import api from "../../api"; // axios instance

// Fallback images
import TShirt1 from "../../assets/Men/TShirts/tshirt1.webp";
import TShirt2 from "../../assets/Men/TShirts/tshirt2.webp";
import TShirt3 from "../../assets/Men/TShirts/tshirt3.webp";

const TShirts = () => {
  const [tshirts, setTshirts] = useState([]);
  const [likedIndex, setLikedIndex] = useState(null);

  const defaultTShirts = [
    { id: 1, name: "Graphic Tee", price: 1499, rate: 4.7, image: TShirt1 },
    { id: 2, name: "Basic Round Neck", price: 999, rate: 4.6, image: TShirt2 },
    { id: 3, name: "Striped Casual Tee", price: 1299, rate: 4.8, image: TShirt3 },
  ];

  useEffect(() => {
    const fetchTShirts = async () => {
      try {
        const res = await api.get("/items/read.php?category=Men T-Shirts");
        if (res.data.success && res.data.data.length > 0) {
          setTshirts(res.data.data);
        } else {
          setTshirts(defaultTShirts); // fallback if DB empty
        }
      } catch (err) {
        console.error("Failed to fetch t-shirts", err);
        setTshirts(defaultTShirts); // fallback on error
      }
    };
    fetchTShirts();
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
          <h1 className="text-4xl font-bold text-blue-600">Men's T-Shirts</h1>
          <p className="mt-2 text-gray-600">
            Comfortable and stylish t-shirts for casual wear.
          </p>
        </div>
      </motion.section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tshirts.map((tshirt, index) => (
          <motion.div
            key={tshirt.id || index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img
                src={
                  tshirt.image?.startsWith("http") || tshirt.image?.startsWith("/")
                    ? tshirt.image
                    : `http://localhost/fashion_backend/uploads/${tshirt.image}`
                }
                alt={tshirt.name || tshirt.title}
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
              <h3 className="text-lg font-semibold">{tshirt.name || tshirt.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {tshirt.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {tshirt.rate || tshirt.rating} / 5</p>
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
    //       <h1 className="text-4xl font-bold text-blue-400">Men's T-Shirts</h1>
    //       <p className="mt-2 text-gray-300">
    //         Comfortable and stylish t-shirts for casual wear.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {tshirts.map((tshirt, index) => (
    //       <motion.div
    //         key={index}
    //         className="bg-gray-900 shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
    //         initial={{ opacity: 0, y: 20 }}
    //         animate={{ opacity: 1, y: 0 }}
    //         transition={{ delay: index * 0.1, duration: 0.5 }}
    //         whileHover={{ scale: 1.03 }}
    //       >
    //         <div className="relative">
    //           <img src={tshirt.img} alt={tshirt.title} className="w-full h-64 object-cover" />
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
    //           <h3 className="text-lg font-semibold text-gray-100">{tshirt.title}</h3>
    //           <p className="text-blue-400 font-bold mt-2">Rs. {tshirt.price}</p>
    //           <p className="text-sm text-gray-400 mt-1">⭐ {tshirt.rating} / 5</p>
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
    //       <h1 className="text-4xl font-bold text-teal-400">Men's T-Shirts</h1>
    //       <p className="mt-2 text-teal-100">
    //         Comfortable and stylish t-shirts for casual wear.
    //       </p>
    //     </div>
    //   </motion.section>

    //   {/* Product Grid */}
    //   <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //     {tshirts.map((tshirt, index) => (
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
    //             src={tshirt.img}
    //             alt={tshirt.title}
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
    //           <h3 className="text-lg font-semibold text-teal-100">{tshirt.title}</h3>
    //           <p className="text-teal-400 font-bold mt-2">Rs. {tshirt.price}</p>
    //           <p className="text-sm text-teal-200 mt-1">⭐ {tshirt.rating} / 5</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>


  );
};

export default TShirts;
