import React, { useState } from "react";
import Sneakers1 from "../../assets/Footwear/Sneakers/sneakers1.jpg";
import Sneakers2 from "../../assets/Footwear/Sneakers/sneakers2.jpg";
import Sneakers3 from "../../assets/Footwear/Sneakers/sneakers3.jpg";
import { FiHeart } from "react-icons/fi";

const Sneakers = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const sneakers = [
    { title: "Stylish Sneakers", price: 129.99, rating: 4.8, img: Sneakers1 },
    { title: "Casual Sneakers", price: 119.99, rating: 4.7, img: Sneakers2 },
    { title: "Sporty Sneakers", price: 139.99, rating: 4.9, img: Sneakers3 },
    { title: "Stylish Sneakers", price: 129.99, rating: 4.8, img: Sneakers1 },
    { title: "Casual Sneakers", price: 119.99, rating: 4.7, img: Sneakers2 },
    { title: "Sporty Sneakers", price: 139.99, rating: 4.9, img: Sneakers3 },
    { title: "Stylish Sneakers", price: 129.99, rating: 4.8, img: Sneakers1 },
    { title: "Casual Sneakers", price: 119.99, rating: 4.7, img: Sneakers2 },
    { title: "Sporty Sneakers", price: 139.99, rating: 4.9, img: Sneakers3 },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-gradient-to-r from-orange-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-orange-600">Sneakers Collection</h1>
          <p className="mt-2 text-gray-600">Discover our latest trendy sneakers.</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {sneakers.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition">
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-orange-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart className={`text-lg ${likedIndex === index ? "text-orange-500" : "text-gray-700"}`} />
              </button>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-orange-600 font-bold mt-2">Rs. {item.price}</p>
              <p className="text-sm text-gray-500 mt-1">⭐ {item.rating} / 5</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sneakers;
