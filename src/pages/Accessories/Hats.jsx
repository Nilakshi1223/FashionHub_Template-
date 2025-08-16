import React, { useState } from "react";
import Hat1 from "../../assets/Accessories/Hats/hat1.jpg";
import Hat2 from "../../assets/Accessories/Hats/hat2.jpg";
import Hat3 from "../../assets/Accessories/Hats/hat3.jpg";
import { FiHeart } from "react-icons/fi";

const Hats = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const hats = [
    { title: "Classic Fedora Hat", price: 3999, rating: 4.5, img: Hat1 },
    { title: "Beach Sun Hat", price: 2999, rating: 4.6, img: Hat2 },
    { title: "Casual Baseball Cap", price: 1999, rating: 4.4, img: Hat3 },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-yellow-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-yellow-600">Hats Collection</h1>
          <p className="mt-2 text-gray-600">
            Stay stylish and protected with our trendy hats.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {hats.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img src={item.img} alt={item.title} className="w-full h-64 object-cover" />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index ? "bg-yellow-100" : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(likedIndex === index ? null : index)}
              >
                <FiHeart
                  className={`text-lg ${
                    likedIndex === index ? "text-yellow-500" : "text-gray-700"
                  }`}
                />
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

export default Hats;
