import React, { useState } from "react";
import Shirt1 from "../../assets/Men/Shirts/shirt1.jpg";
import Shirt2 from "../../assets/Men/Shirts/shirt2.jpg";
import Shirt3 from "../../assets/Men/Shirts/shirt3.jpg";
import { FiHeart } from "react-icons/fi";

const Shirts = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const shirts = [
    
    {
      title: "Classic White Shirt",
      price: 2499,
      rating: 4.9,
      img: Shirt1,
    },
    {
      title: "Checked Casual Shirt",
      price: 1999,
      rating: 4.7,
      img: Shirt2,
    },
    {
      title: "Slim Fit Formal Shirt",
      price: 2799,
      rating: 4.8,
      img: Shirt3,
    },
    {
      title: "Classic White Shirt",
      price: 2499,
      rating: 4.9,
      img: Shirt1,
    },
    {
      title: "Checked Casual Shirt",
      price: 1999,
      rating: 4.7,
      img: Shirt2,
    },
    {
      title: "Slim Fit Formal Shirt",
      price: 2799,
      rating: 4.8,
      img: Shirt3,
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Men's Shirts</h1>
          <p className="mt-2 text-gray-600">
            Explore our premium collection of shirts for every occasion.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {shirts.map((shirt, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={shirt.img}
                alt={shirt.title}
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
              <h3 className="text-lg font-semibold">{shirt.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {shirt.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {shirt.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shirts;
