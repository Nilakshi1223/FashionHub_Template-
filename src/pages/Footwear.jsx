import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import ShoesImg from "../assets/shoes.jpg";
import SneakersImg from "../assets/sneakers.jpg";
import BootsImg from "../assets/boots.jpg";
import SandalsImg from "../assets/sandals.jpg";
import HeelsImg from "../assets/heels.jpg";

import Sneakers from "./Footwear/Sneakers";
import Boots from "./Footwear/Boots";
import Sandals from "./Footwear/Sandals";
import Heels from "./Footwear/Heels";

const categories = [
  { name: "Sneakers", img: SneakersImg, path: "/footwear/sneakers" },
  { name: "Boots", img: BootsImg, path: "/footwear/boots" },
  { name: "Sandals", img: SandalsImg, path: "/footwear/sandals" },
  { name: "Heels", img: HeelsImg, path: "/footwear/heels" },
];

const Footwear = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-orange-50 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
          <div>
            <span className="bg-orange-100 text-orange-600 text-sm font-medium px-3 py-1 rounded-full">
              Premium Footwear
            </span>
            <h1 className="text-5xl font-bold mt-4">
              Comfort & <span className="text-orange-500">Style</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Explore our collection of stylish and comfortable footwear for every occasion.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={ShoesImg}
              alt="Footwear Collection"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Shop by Category</h2>
          <p className="text-gray-600 mt-2 text-center">
            Browse our popular footwear categories
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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

      <Sneakers />
      <Boots />
      <Sandals />
      <Heels />
    </div>
  );
};

export default Footwear;
