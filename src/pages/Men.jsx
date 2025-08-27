import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import MenImg from "../assets/men.webp";
import ShirtImg from "../assets/shirt.webp";
import TShirtImg from "../assets/tshirt.webp";
import JeansImg from "../assets/jeans.webp";
import JacketImg from "../assets/jacket.webp";

import Shirts from "./Men/Shirts";
import TShirts from "./Men/TShirts";
import Jeans from "./Men/Jeans";
import Jackets from "./Men/Jackets";

const categories = [
  { name: "Shirts", img: ShirtImg, path: "/men/shirts" },
  { name: "T-Shirts", img: TShirtImg, path: "/men/tshirts" },
  { name: "Jeans", img: JeansImg, path: "/men/jeans" },
  { name: "Jackets", img: JacketImg, path: "/men/jackets" },
];

const MenFashion = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-blue-50 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
          <div>
            <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
              Men's Fashion
            </span>
            <h1 className="text-5xl font-bold mt-4">
              Classic & <span className="text-blue-500">Stylish</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Explore our premium collection of men’s wear — from casuals to
              formals, find the perfect outfit for any occasion.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={MenImg}
              alt="Men's Fashion"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 mt-2 text-center">
            Browse our most popular men’s fashion categories
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <Link to={cat.path}>
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-100">
                    <span className="text-white text-lg font-bold">{cat.name}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Shirts />
      <TShirts />
      <Jeans />
      <Jackets />
    </div>

//     <div className="pt-16">
//   {/* Hero Section */}
//   <motion.section
//     className="bg-gradient-to-r from-black via-gray-950 to-pink-950"
//     initial={{ opacity: 0, y: 50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.8 }}
//   >
//     <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
//       <div>
//         <span className="bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
//           Men's Fashion
//         </span>
//         <h1 className="text-5xl font-bold mt-4 text-gray-100">
//           Classic & <span className="text-blue-400">Stylish</span>
//         </h1>
//         <p className="text-gray-400 mt-4 text-lg">
//           Explore our premium collection of men’s wear — from casuals to
//           formals, find the perfect outfit for any occasion.
//         </p>
//       </div>
//       <div className="flex justify-center md:justify-end">
//         <img
//           src={MenImg}
//           alt="Men's Fashion"
//           className="rounded-2xl shadow-lg w-full max-w-md object-cover"
//         />
//       </div>
//     </div>
//   </motion.section>

//   {/* Shop by Category Section */}
//   <section className="py-16 bg-gradient-to-r from-gray-950 via-black to-pink-950">
//     <div className="max-w-7xl mx-auto px-6">
      
//       <p className="text-gray-400 mt-2 text-center">
//         Browse our most popular men’s fashion categories
//       </p>

//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {categories.map((cat, index) => (
//           <motion.div
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//             className="relative group rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-gray-900"
//           >
//             <Link to={cat.path}>
//               <img
//                 src={cat.img}
//                 alt={cat.name}
//                 className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               {/* Hover overlay */}
//               <div className="absolute inset-0 bg-blue-900 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-300">
//                 <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>
//   </section>

//   {/* Category-specific sections */}
//   <Shirts />
//   <TShirts />
//   <Jeans />
//   <Jackets />
// </div>

  );
};

export default MenFashion;
