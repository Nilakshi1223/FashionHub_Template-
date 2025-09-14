import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AccessoriesImg from "../assets/accessories.webp";
import JewelryImg from "../assets/jewelry.webp";
import HandbagImg from "../assets/handbag.webp";
import HatsImg from "../assets/hats.webp";
import SunGlassImg from "../assets/sunglass.webp";

import Jewelry from "./Accessories/Jewelry";
import Handbag from "./Accessories/Handbag";
import Hats from "./Accessories/Hats";
import SunGlass from "./Accessories/SunGlass";

const categories = [
  { name: "Jewelry", img: JewelryImg, path: "/accessories/jewelry" },
  { name: "Handbag", img: HandbagImg, path: "/accessories/handbag" },
  { name: "Hats", img: HatsImg, path: "/accessories/hats" },
  { name: "SunGlass", img: SunGlassImg, path: "/accessories/sunglass" },
];

const Accessories = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-purple-50 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
          <div>
            <span className="bg-purple-100 text-purple-600 text-sm font-medium px-3 py-1 rounded-full">
              Accessories
            </span>
            <h1 className="text-5xl font-bold mt-4">
              Complete Your <span className="text-purple-500">Look</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Discover stylish accessories to complement your outfits. From
              watches to jewelry, find the perfect pieces to elevate your style.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={AccessoriesImg}
              alt="Accessories Collection"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-gray-600 mt-2 text-center">
            Browse our most popular accessory categories
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
        <Jewelry />
        <Handbag />
        <Hats />
        <SunGlass />
      </section>
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
//         <span className="bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
//           Accessories
//         </span>
//         <h1 className="text-5xl font-bold text-gray-100 mt-4">
//           Complete Your <span className="text-purple-400">Look</span>
//         </h1>
//         <p className="text-gray-300 mt-4 text-lg">
//           Discover stylish accessories to complement your outfits. From
//           watches to jewelry, find the perfect pieces to elevate your style.
//         </p>
//       </div>
//       <div className="flex justify-center md:justify-end">
//         <img
//           src={AccessoriesImg}
//           alt="Accessories Collection"
//           className="rounded-2xl shadow-lg w-full max-w-md object-cover transform transition duration-500 hover:scale-105"
//         />
//       </div>
//     </div>
//   </motion.section>

//   {/* Shop by Category Section */}
//   <section className="py-16 bg-gradient-to-r from-gray-950 via-black to-pink-950">
//     <div className="max-w-7xl mx-auto px-6">
//       <p className="text-gray-400 mt-2 text-center">
//         Browse our most popular accessory categories
//       </p>

//       <div className="mt-10 grid grid-cols-1 mb-16 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
//               <div className="absolute inset-0 bg-purple-900 bg-opacity-0 group-hover:bg-opacity-50 flex items-center justify-center transition duration-300">
//                 <span className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition">
//                   {cat.name}
//                 </span>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </div>
//     </div>

//     {/* Category-specific sections */}
//     <Jewelry />
//     <Handbag />
//     <Hats />
//     <SunGlass />
//   </section>
// </div>


// <div className="pt-24 bg-gradient-to-b from-gray-950 via-gray-900 to-teal-950 text-white font-sans">
//       {/* Hero Section */}
//       <motion.section
//         className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-teal-950 overflow-hidden rounded-b-3xl"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
//           <div className="space-y-6">
//             <span className="bg-teal-700 text-white text-sm font-semibold px-4 py-2 rounded-full tracking-wide">
//               Accessories
//             </span>
//             <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
//               Complete Your <span className="text-teal-300">Look</span>
//             </h1>
//             <p className="text-teal-200 text-lg">
//               Discover stylish accessories to complement your outfits. From watches to jewelry, find the perfect pieces to elevate your style.
//             </p>
//             <Link
//               to="/accessories/jewelry"
//               className="inline-block bg-teal-600 hover:bg-teal-500 text-white font-bold px-6 py-3 rounded-full transition"
//             >
//               Shop Now
//             </Link>
//           </div>

//           <div className="relative">
//             <img
//               src={AccessoriesImg}
//               alt="Accessories Collection"
//               className="rounded-3xl shadow-2xl w-full object-cover transform hover:scale-105 transition-transform duration-500"
//             />
//             <div className="absolute top-4 left-4 bg-teal-700 bg-opacity-50 px-3 py-1 rounded-lg text-sm font-semibold">
//               New Arrivals
//             </div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Shop by Category Section */}
//       <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-teal-950">
//         <div className="max-w-7xl mx-auto px-6">
//           <motion.h2
//             className="text-3xl md:text-4xl font-bold text-center mb-8"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             Shop by Category
//           </motion.h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
//             {categories.map((cat, index) => (
//               <motion.div
//                 key={index}
//                 className="group relative rounded-2xl overflow-hidden shadow-lg cursor-pointer border border-teal-700"
//                 whileHover={{ scale: 1.05 }}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, duration: 0.5 }}
//               >
//                 <Link to={cat.path}>
//                   <img
//                     src={cat.img}
//                     alt={cat.name}
//                     className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
//                     <span className="text-white text-lg font-bold">{cat.name}</span>
//                   </div>
//                 </Link>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Featured Categories Section */}
//       <section className="py-20 bg-gray-950">
//         <div className="max-w-7xl mx-auto px-6 space-y-20">
//           <Jewelry />
//           <Handbag />
//           <Hats />
//           <SunGlass />
//         </div>
//       </section>
//     </div>

  );
};

export default Accessories;
