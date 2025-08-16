import React, { useState } from "react";
import TShirt1 from "../../assets/Men/TShirts/tshirt1.jpg";
import TShirt2 from "../../assets/Men/TShirts/tshirt2.jpg";
import TShirt3 from "../../assets/Men/TShirts/tshirt3.jpg";
import { FiHeart } from "react-icons/fi";

const TShirts = () => {
  const [likedIndex, setLikedIndex] = useState(null);

  const tshirts = [
    {
      title: "Graphic Tee",
      price: 1499,
      rating: 4.7,
      img: TShirt1,
    },
    {
      title: "Basic Round Neck",
      price: 999,
      rating: 4.6,
      img: TShirt2,
    },
    {
      title: "Striped Casual Tee",
      price: 1299,
      rating: 4.8,
      img: TShirt3,
    },
    {
      title: "Graphic Tee",
      price: 1499,
      rating: 4.7,
      img: TShirt1,
    },
    {
      title: "Basic Round Neck",
      price: 999,
      rating: 4.6,
      img: TShirt2,
    },
    {
      title: "Striped Casual Tee",
      price: 1299,
      rating: 4.8,
      img: TShirt3,
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      <section className="bg-gradient-to-r from-blue-50 to-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold text-blue-600">Men's T-Shirts</h1>
          <p className="mt-2 text-gray-600">
            Comfortable and stylish t-shirts for casual wear.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {tshirts.map((tshirt, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative">
              <img
                src={tshirt.img}
                alt={tshirt.title}
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
              <h3 className="text-lg font-semibold">{tshirt.title}</h3>
              <p className="text-blue-600 font-bold mt-2">Rs. {tshirt.price}</p>
              <p className="text-sm text-gray-500 mt-1">
                ⭐ {tshirt.rating} / 5
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TShirts;
