import React, { useState } from "react";
import { Link } from "react-router-dom";
import AccessoriesImg from "../assets/accessories.jpg";
import JewelryImg from "../assets/jewelry.jpg";
import HandbagImg from "../assets/handbag.jpg";
import HatsImg from "../assets/hats.jpg";
import SunGlassImg from "../assets/sunglass.jpg";
import { FiHeart } from "react-icons/fi";
import Jewelry from "./Accessories/Jewelry";
import Handbag from "./Accessories/Handbag";
import Hats from "./Accessories/Hats";
import SunGlass from "./Accessories/SunGlass";

const Accessories = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const categories = [
    { name: "Jewelry", img: JewelryImg, path: "/accessories/jewelry" },
    { name: "Handbag", img: HandbagImg, path: "/accessories/handbag" },
    { name: "Hats", img: HatsImg, path: "/accessories/hats" },
    { name: "SunGlass", img: SunGlassImg, path: "/accessories/sunglass" },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-50 to-white">
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
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Shop by Category</h2>
          <p className="text-gray-600 mt-2 text-center">
            Browse our most popular women's fashion categories
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <Link
                key={index}
                to={cat.path}
                className="relative group rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-100 transition">
                  <span className="text-white text-lg font-bold">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Jewelry/>
        <Handbag/>
        <Hats/>
        <SunGlass/>
      </section>
    </div>
  );
};

export default Accessories;

