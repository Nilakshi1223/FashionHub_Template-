import React, { useState } from "react";
import Jeans1 from "../../assets/Men/Jeans/jeans1.jpg";
import Jeans2 from "../../assets/Men/Jeans/jeans2.jpg";
import Jeans3 from "../../assets/Men/Jeans/jeans3.jpg";
import { FiHeart } from "react-icons/fi";

const Jeans = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const jeans = [
    {
      title: "Slim Fit Jeans",
      price: 2499,
      rating: 4.8,
      img: Jeans1,
    },
    {
      title: "Straight Cut Jeans",
      price: 2299,
      rating: 4.7,
      img: Jeans2,
    },
    {
      title: "Ripped Denim Jeans",
      price: 2699,
      rating: 4.6,
      img: Jeans3,
    },
    {
      title: "Slim Fit Jeans",
      price: 2499,
      rating: 4.8,
      img: Jeans1,
    },
    {
      title: "Straight Cut Jeans",
      price: 2299,
      rating: 4.7,
      img: Jeans2,
    },
    {
      title: "Ripped Denim Jeans",
      price: 2699,
      rating: 4.6,
      img: Jeans3,
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Men's Jeans</h1>
          <p className="mt-2 text-gray-600">
            Trendy and comfortable jeans for everyday wear.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {jeans.map((jean, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={jean.img}
                alt={jean.title}
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
              <h3 className="text-lg font-semibold">{jean.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {jean.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {jean.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jeans;
