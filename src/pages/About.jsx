import React from "react";
import { motion } from "framer-motion";
import AboutImage from "../assets/about.jpg"; 
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const About = () => {
  const feedbacks = [
    {
      name: "Emma Watson",
      gender: "female",
      message: "I absolutely love FashionHub! The collection is trendy and the quality is amazing.",
      avatar: "https://i.pravatar.cc/150?img=11",
      rating: 5,
    },
    {
      name: "Sophia Lee",
      gender: "female",
      message: "FashionHub keeps me updated with the latest trends. Highly recommend it!",
      avatar: "https://i.pravatar.cc/150?img=13",
      rating: 4,
    },
    {
      name: "John Doe",
      gender: "male",
      message: "Shopping here is always a pleasure. Fast delivery and excellent customer service!",
      avatar: "https://i.pravatar.cc/150?img=12",
      rating: 5,
    },
    {
      name: "Michael Smith",
      gender: "male",
      message: "Quality products at great prices. Love the variety in their collection.",
      avatar: "https://i.pravatar.cc/150?img=14",
      rating: 4,
    },
  ];

  return (
    <div className="pt-24 bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-r from-pink-50 to-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16 gap-10">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-5xl font-bold text-pink-600">About FashionHub</h1>
            <p className="text-gray-600 mt-4 text-lg">
              FashionHub is your ultimate destination for stylish and trendy clothing, accessories, and footwear. We bring you the latest fashion collections for men, women, and kids, curated to elevate your style.
            </p>
            <p className="text-gray-600 mt-2 text-lg">
              Our mission is to provide quality fashion at affordable prices while ensuring a seamless shopping experience.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={AboutImage}
              alt="About FashionHub"
              className="rounded-2xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </motion.section>

      {/* Love Notes Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-600">Love Notes</h2>
          <p className="text-gray-600 mt-2">Hear what our clients say about us</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {feedbacks.map((fb, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 flex flex-col items-center relative"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                {/* Quote Icon */}
                <FaQuoteLeft className="text-pink-200 text-3xl absolute top-4 left-4" />
                
                {/* Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden mt-8">
                  <img
                    src={fb.avatar}
                    alt={fb.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Message */}
                <p className="text-gray-700 text-sm mt-4">{fb.message}</p>

                {/* Name */}
                <h3 className="mt-4 font-semibold text-lg text-pink-600">{fb.name}</h3>

                {/* Rating */}
                <div className="flex mt-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <FaStar
                      key={i}
                      className={`${
                        i < fb.rating ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-pink-600">Our Mission</h2>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            At FashionHub, our mission is to make fashion accessible to everyone. We strive to combine quality, style, and affordability, ensuring that our customers always look and feel their best.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
