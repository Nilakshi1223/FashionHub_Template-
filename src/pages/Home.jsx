import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeroImage from "../assets/hero-image.jpg";
import WomenImg from "../assets/women.jpg";
import MenImg from "../assets/men.jpg";
import ShoesImg from "../assets/shoes.jpg";
import AccessoriesImg from "../assets/accessories.jpg";
import DressImg from "../assets/dress.jpg";
import JacketImg from "../assets/jacket.jpg";
import SneakersImg from "../assets/sneakers.jpg";
import BagImg from "../assets/bag.jpg";
import { FiHeart } from "react-icons/fi";

const Home = () => {
  const categories = [
    {
      title: "Women's Fashion",
      subtitle: "Elegant & Trendy",
      img: WomenImg,
      overlay: "bg-pink-500 bg-opacity-50",
      link: "/womenfashion",
    },
    {
      title: "Men's Fashion",
      subtitle: "Classic & Modern",
      img: MenImg,
      overlay: "bg-blue-500 bg-opacity-50",
      link: "/menfashion",
    },
    {
      title: "Premium Footwear",
      subtitle: "Comfort & Style",
      img: ShoesImg,
      overlay: "bg-orange-500 bg-opacity-50",
      link: "/footwear",
    },
    {
      title: "Accessories",
      subtitle: "Complete Your Look",
      img: AccessoriesImg,
      overlay: "bg-purple-500 bg-opacity-50",
      link: "/accessories",
    },
  ];

  const products = [
    {
      tag: "Sale",
      category: "Dresses",
      title: "Elegant Summer Dress",
      rating: 4.8,
      price: 1800.00,
      oldPrice: 2200.00,
      img: DressImg,
    },
    {
      tag: "Sale",
      category: "Outerwear",
      title: "Premium Leather Jacket",
      rating: 4.9,
      price: 2800.00,
      oldPrice: 3100.00,
      img: JacketImg,
    },
    {
      category: "Footwear",
      title: "Designer Sneakers",
      rating: 4.7,
      price: 1200.00,
      img: SneakersImg,
    },
    {
      tag: "Sale",
      category: "Bags",
      title: "Luxury Handbag",
      rating: 4.8,
      price: 2000.00,
      oldPrice: 2200.00,
      img: BagImg,
    },
  ];

  // Track liked state for each product
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (index) => {
    setLikedProducts((prev) => ({
      ...prev,
      [index]: !prev[index], // toggle this specific product
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-50 to-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
          <div>
            <span className="bg-pink-100 text-pink-600 text-sm font-medium px-3 py-1 rounded-full">
              New Collection 2024
            </span>
            <h1 className="text-5xl font-bold mt-4">
              Fashion That <span className="text-pink-500">Speaks</span> Your Style
            </h1>
            <p className="text-gray-600 mt-4 text-lg">
              Discover the latest trends in clothing, footwear, and accessories.
              Express your unique personality with our curated collection of
              fashion-forward pieces.
            </p>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src={HeroImage}
              alt="Fashion Model"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </section>

      {/* Shop by Category Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Shop by Category</h2>
          <p className="text-gray-600 mt-2">
            Discover our carefully curated collections designed to elevate your style
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((cat, index) => (
              <Link key={index} to={cat.link}>
                <div className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div
                    className={`absolute inset-0 ${cat.overlay} flex flex-col justify-end p-4 text-white`}
                  >
                    <h3 className="text-lg font-bold">{cat.title}</h3>
                    <p className="text-sm">{cat.subtitle}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <p className="text-gray-600 mt-2">
            Handpicked favorites from our latest collection
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative"
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-64 object-cover"
                  />
                  {product.tag && (
                    <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.tag}
                    </span>
                  )}
                  <button
                    onClick={() => toggleLike(index)}
                    className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100"
                  >
                    <FiHeart
                      className={`transition-colors duration-300 ${
                        likedProducts[index] ? "text-pink-500" : "text-gray-700"
                      }`}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4 text-left">
                  <span className="text-gray-500 text-sm">{product.category}</span>
                  <h3 className="font-bold text-lg">{product.title}</h3>
                  <div className="flex items-center text-yellow-500 text-sm mt-1">
                    ★ <span className="ml-1 text-gray-700">{product.rating}</span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="font-bold text-lg">Rs. {product.price}</span>
                    {product.oldPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        Rs. {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
