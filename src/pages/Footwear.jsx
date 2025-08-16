import React from "react";
import { Link } from "react-router-dom";
import ShoesImg from "../assets/shoes.jpg";
import SneakersImg from "../assets/sneakers.jpg";
import BootsImg from "../assets/boots.jpg";
import SandalsImg from "../assets/sandals.jpg";
import HeelsImg from "../assets/heels.jpg";
import { FiHeart } from "react-icons/fi";
import Sneakers from "./Footwear/Sneakers";
import Boots from "./Footwear/Boots";
import Sandals from "./Footwear/Sandals";
import Heels from "./Footwear/Heels";

const Footwear = () => {
  const categories = [
    { name: "Sneakers", img: SneakersImg, path: "/footwear/sneakers" },
    { name: "Boots", img: BootsImg, path: "/footwear/boots" },
    { name: "Sandals", img: SandalsImg, path: "/footwear/sandals" },
    { name: "Heels", img: HeelsImg, path: "/footwear/heels" },
  ];


  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-50 to-white">
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
              From sneakers to boots, find the perfect pair for your wardrobe.
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
      </section>

      {/* Shop by Category Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">Shop by Category</h2>
          <p className="text-gray-600 mt-2 text-center">
            Browse our popular footwear categories
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
      </section>

      <Sneakers/>
      <Boots/>
      <Sandals/>
      <Heels/>
    </div>
  );
};

export default Footwear;
