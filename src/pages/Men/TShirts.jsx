import React, { useState } from "react";
import { motion } from "framer-motion";
import TShirt1 from "../../assets/Men/TShirts/tshirt1.webp";
import TShirt2 from "../../assets/Men/TShirts/tshirt2.webp";
import TShirt3 from "../../assets/Men/TShirts/tshirt3.webp";
import { FiHeart } from "react-icons/fi";

const TShirts = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const tshirts = [
    { title: "Graphic Tee", price: 1499, rating: 4.7, img: TShirt1 },
    { title: "Basic Round Neck", price: 999, rating: 4.6, img: TShirt2 },
    { title: "Striped Casual Tee", price: 1299, rating: 4.8, img: TShirt3 },
    { title: "Graphic Tee", price: 1499, rating: 4.7, img: TShirt1 },
    { title: "Basic Round Neck", price: 999, rating: 4.6, img: TShirt2 },
    { title: "Striped Casual Tee", price: 1299, rating: 4.8, img: TShirt3 },
  ];

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
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="relative">
              <img src={tshirt.img} alt={tshirt.title} className="w-full h-64 object-cover" />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-blue-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart className={`text-lg ${likedIndex === index ? "text-blue-500" : "text-gray-700"}`} />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{tshirt.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {tshirt.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {tshirt.rating} / 5</p>
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
