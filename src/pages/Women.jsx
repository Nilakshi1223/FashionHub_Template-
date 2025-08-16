import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import WomenImg from "../assets/women.jpg";
import DressImg from "../assets/dress.jpg";
import TopImg from "../assets/top.jpg";
import SareeImg from "../assets/saree.jpg";
import MiniDressImg from "../assets/minidress.jpg";

import Dresses from "./Women/Dresses";
import Sarees from "./Women/Sarees";
import Tops from "./Women/Tops";
import MiniDress from "./Women/MiniDress";

const categories = [
  { name: "Dresses", img: DressImg, path: "/women/dresses" },
  { name: "Saree", img: SareeImg, path: "/women/sarees" },
  { name: "Tops", img: TopImg, path: "/women/tops" },
  { name: "Mini Dress", img: MiniDressImg, path: "/women/minidress" },
];

const WomenFashion = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-pink-50 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
          <div>
            <span className="bg-pink-100 text-pink-600 text-sm font-medium px-3 py-1 rounded-full">
              Women's Fashion
            </span>
            <h1 className="text-5xl font-bold mt-4">
              Elegant & <span className="text-pink-500">Trendy</span>
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Explore our curated collection of stylish and elegant fashion pieces
              for women. From dresses to accessories, find your perfect look.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <img
              src={WomenImg}
              alt="Women's Fashion"
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
            Browse our most popular women's fashion categories
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

      <Dresses />
      <Sarees />
      <Tops />
      <MiniDress />
    </div>
  );
};

export default WomenFashion;
