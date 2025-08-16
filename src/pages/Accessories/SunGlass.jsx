import React, { useState } from "react";
import Glass1 from "../../assets/Accessories/SunGlass/glass1.jpg";
import Glass2 from "../../assets/Accessories/SunGlass/glass2.jpg";
import Glass3 from "../../assets/Accessories/SunGlass/glass3.jpg";
import { FiHeart } from "react-icons/fi";
import Jewelry from "./Jewelry";
import Handbag from "./Handbag";
import Hats from "./Hats";

const SunGlass = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const glasses = [
    { title: "Classic Aviator", price: 4999, rating: 4.8, img: Glass1 },
    { title: "Retro Round Glasses", price: 3999, rating: 4.6, img: Glass2 },
    { title: "Sporty Sunglasses", price: 5999, rating: 4.7, img: Glass3 },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Sunglasses Collection</h1>
          <p className="mt-2 text-gray-600">
            Protect your eyes in style with our sunglasses.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {glasses.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-blue-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(likedIndex === index ? null : index)}
              >
                <FiHeart
                  className={`text-lg ${
                    likedIndex === index ? "text-blue-500" : "text-gray-700"
                  }`}
                />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {item.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SunGlass;
