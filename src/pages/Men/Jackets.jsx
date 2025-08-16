import React, { useState } from "react";
import Jacket1 from "../../assets/Men/Jackets/jacket1.jpg";
import Jacket2 from "../../assets/Men/Jackets/jacket2.jpg";
import Jacket3 from "../../assets/Men/Jackets/jacket3.jpg";
import { FiHeart } from "react-icons/fi";

const Jackets = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const jackets = [
    {
      title: "Leather Jacket",
      price: 4999,
      rating: 4.9,
      img: Jacket1,
    },
    {
      title: "Bomber Jacket",
      price: 4599,
      rating: 4.8,
      img: Jacket2,
    },
    {
      title: "Denim Jacket",
      price: 3999,
      rating: 4.7,
      img: Jacket3,
    },
    {
      title: "Leather Jacket",
      price: 4999,
      rating: 4.9,
      img: Jacket1,
    },
    {
      title: "Bomber Jacket",
      price: 4599,
      rating: 4.8,
      img: Jacket2,
    },
    {
      title: "Denim Jacket",
      price: 3999,
      rating: 4.7,
      img: Jacket3,
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Men's Jackets</h1>
          <p className="mt-2 text-gray-600">
            Stylish jackets to complete your look.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jackets.map((jacket, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={jacket.img}
                alt={jacket.title}
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
              <h3 className="text-lg font-semibold">{jacket.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {jacket.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {jacket.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jackets;
