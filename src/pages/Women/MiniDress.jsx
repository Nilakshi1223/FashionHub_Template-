import React, { useState } from "react";
import Mini1 from "../../assets/Women/MiniDress/mini1.jpg";
import Mini2 from "../../assets/Women/MiniDress/mini2.jpg";
import Mini3 from "../../assets/Women/MiniDress/mini3.jpg";
import { FiHeart } from "react-icons/fi";

const MiniDress = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const miniDresses = [
    {
      title: "Classic Black Mini Dress",
      price: 149.99,
      rating: 4.8,
      img: Mini1,
    },
    {
      title: "Floral Print Mini Dress",
      price: 129.99,
      rating: 4.7,
      img: Mini2,
    },
    {
      title: "Casual White Mini Dress",
      price: 139.99,
      rating: 4.6,
      img: Mini3,
    },
    {
      title: "Classic Black Mini Dress",
      price: 149.99,
      rating: 4.8,
      img: Mini1,
    },
    {
      title: "Floral Print Mini Dress",
      price: 129.99,
      rating: 4.7,
      img: Mini2,
    },
    {
      title: "Casual White Mini Dress",
      price: 139.99,
      rating: 4.6,
      img: Mini3,
    },
    {
      title: "Classic Black Mini Dress",
      price: 149.99,
      rating: 4.8,
      img: Mini1,
    },
    {
      title: "Floral Print Mini Dress",
      price: 129.99,
      rating: 4.7,
      img: Mini2,
    },
    {
      title: "Casual White Mini Dress",
      price: 139.99,
      rating: 4.6,
      img: Mini3,
    },
    {
      title: "Classic Black Mini Dress",
      price: 149.99,
      rating: 4.8,
      img: Mini1,
    },
    {
      title: "Floral Print Mini Dress",
      price: 129.99,
      rating: 4.7,
      img: Mini2,
    },
    {
      title: "Casual White Mini Dress",
      price: 139.99,
      rating: 4.6,
      img: Mini3,
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-pink-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-pink-600">Mini Dresses</h1>
          <p className="mt-2 text-gray-600">
            Perfect mini dresses for every occasion.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {miniDresses.map((dress, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={dress.img}
                alt={dress.title}
                className="w-full h-64 object-cover"
              />
              <button
                className={`absolute top-3 right-3 p-2 rounded-full shadow transition ${
                  likedIndex === index
                    ? "bg-pink-100"
                    : "bg-white hover:bg-gray-100"
                }`}
                onClick={() => setLikedIndex(index)}
              >
                <FiHeart
                  className={`text-lg ${
                    likedIndex === index ? "text-pink-500" : "text-gray-700"
                  }`}
                />
              </button>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{dress.title}</h3>
              <p className="text-pink-600 font-bold mt-2">Rs. {dress.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {dress.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MiniDress;
