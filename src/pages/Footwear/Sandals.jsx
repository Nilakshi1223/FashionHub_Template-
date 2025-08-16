import React, { useState } from "react";
import Sandals1 from "../../assets/Footwear/Sandals/sandals1.jpg";
import Sandals2 from "../../assets/Footwear/Sandals/sandals2.jpg";
import Sandals3 from "../../assets/Footwear/Sandals/sandals3.jpg";
import { FiHeart } from "react-icons/fi";

const Sandals = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const sandals = [
    { title: "Summer Sandals", price: 79.99, rating: 4.7, img: Sandals1 },
    { title: "Beach Sandals", price: 69.99, rating: 4.6, img: Sandals2 },
    { title: "Casual Sandals", price: 89.99, rating: 4.8, img: Sandals3 },
    { title: "Summer Sandals", price: 79.99, rating: 4.7, img: Sandals1 },
    { title: "Beach Sandals", price: 69.99, rating: 4.6, img: Sandals2 },
    { title: "Casual Sandals", price: 89.99, rating: 4.8, img: Sandals3 },
    { title: "Summer Sandals", price: 79.99, rating: 4.7, img: Sandals1 },
    { title: "Beach Sandals", price: 69.99, rating: 4.6, img: Sandals2 },
    { title: "Casual Sandals", price: 89.99, rating: 4.8, img: Sandals3 },
    
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-gradient-to-r from-yellow-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-yellow-600">Sandals Collection</h1>
          <p className="mt-2 text-gray-600">Lightweight and stylish sandals for all occasions.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sandals.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-yellow-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart className={`text-lg ${likedIndex === index ? "text-yellow-500" : "text-gray-700"}`} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-yellow-600 font-bold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {item.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sandals;
