import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import HeroImage from "../assets/hero-image.webp";
import WomenImg from "../assets/women.webp";
import MenImg from "../assets/men.webp";
import ShoesImg from "../assets/shoes.webp";
import AccessoriesImg from "../assets/accessories.webp";
import DressImg from "../assets/dress.webp";
import JacketImg from "../assets/jacket.webp";
import SneakersImg from "../assets/sneakers.webp";
import BagImg from "../assets/bag.webp";
import { FiHeart } from "react-icons/fi";

const Home = () => {
  const categories = [
    { title: "Women's Fashion", subtitle: "Elegant & Trendy", img: WomenImg, overlay: "bg-pink-500 bg-opacity-50", link: "/womenfashion" },
    { title: "Men's Fashion", subtitle: "Classic & Modern", img: MenImg, overlay: "bg-blue-500 bg-opacity-50", link: "/menfashion" },
    { title: "Premium Footwear", subtitle: "Comfort & Style", img: ShoesImg, overlay: "bg-orange-500 bg-opacity-50", link: "/footwear" },
    { title: "Accessories", subtitle: "Complete Your Look", img: AccessoriesImg, overlay: "bg-purple-500 bg-opacity-50", link: "/accessories" },
  ];

  const products = [
    { tag: "Sale", category: "Dresses", title: "Elegant Summer Dress", rating: 4.8, price: 1800.0, oldPrice: 2200.0, img: DressImg },
    { tag: "Sale", category: "Outerwear", title: "Premium Leather Jacket", rating: 4.9, price: 2800.0, oldPrice: 3100.0, img: JacketImg },
    { category: "Footwear", title: "Designer Sneakers", rating: 4.7, price: 1200.0, img: SneakersImg },
    { tag: "Sale", category: "Bags", title: "Luxury Handbag", rating: 4.8, price: 2000.0, oldPrice: 2200.0, img: BagImg },
  ];

  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (index) => {
    setLikedProducts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const cardHover = { scale: 1.05, transition: { duration: 0.3 } };

  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-pink-50 to-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
          <motion.div variants={fadeInUp}>
            <span className="bg-pink-100 text-pink-600 text-sm font-medium px-3 py-1 rounded-full">New Collection 2024</span>
            <h1 className="text-5xl font-bold mt-4">Fashion That <span className="text-pink-500">Speaks</span> Your Style</h1>
            <p className="text-gray-600 mt-4 text-lg">
              Discover the latest trends in clothing, footwear, and accessories. Express your unique personality with our curated collection of fashion-forward pieces.
            </p>
          </motion.div>
          <motion.div className="flex justify-center md:justify-end" variants={fadeInUp}>
            <img src={HeroImage} alt="Fashion Model" className="rounded-2xl shadow-lg w-full max-w-md object-cover" />
          </motion.div>
        </div>
      </motion.section>

      {/* Shop by Category Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Shop by Category</motion.h2>
          <motion.p className="text-gray-600 mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
            Discover our carefully curated collections designed to elevate your style
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={cardHover}
                className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer"
              >
                <Link to={cat.link}>
                  <img src={cat.img} alt={cat.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className={`absolute inset-0 ${cat.overlay} flex flex-col justify-end p-4 text-white`}>
                    <h3 className="text-lg font-bold">{cat.title}</h3>
                    <p className="text-sm">{cat.subtitle}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section id="featured-products" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.h2 className="text-3xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Featured Products</motion.h2>
          <motion.p className="text-gray-600 mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
            Handpicked favorites from our latest collection
          </motion.p>

          <motion.div
            className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
          >
            {products.map((product, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative"
              >
                <div className="relative">
                  <img src={product.img} alt={product.title} className="w-full h-64 object-cover" />
                  {product.tag && <span className="absolute top-3 left-3 bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full">{product.tag}</span>}
                  <button onClick={() => toggleLike(index)} className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:bg-gray-100">
                    <FiHeart className={`transition-colors duration-300 ${likedProducts[index] ? "text-pink-500" : "text-gray-700"}`} />
                  </button>
                </div>
                <div className="p-4 text-left">
                  <span className="text-gray-500 text-sm">{product.category}</span>
                  <h3 className="font-bold text-lg">{product.title}</h3>
                  <div className="flex items-center text-yellow-500 text-sm mt-1">
                    ★ <span className="ml-1 text-gray-700">{product.rating}</span>
                  </div>
                  <div className="mt-2 flex items-center space-x-2">
                    <span className="font-bold text-lg">Rs. {product.price}</span>
                    {product.oldPrice && <span className="text-gray-400 line-through text-sm">Rs. {product.oldPrice}</span>}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
