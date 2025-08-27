import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import HeroImage1 from "../assets/hero-image2.webp";
import HeroImage2 from "../assets/Homebg2.webp";
import HeroImage3 from "../assets/Homebg3.webp";
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
    { title: "Women's Fashion", subtitle: "Elegant & Trendy", img: WomenImg, overlay: "bg-pink-500 bg-opacity-50", link: "/women" },
    { title: "Men's Fashion", subtitle: "Classic & Modern", img: MenImg, overlay: "bg-blue-500 bg-opacity-50", link: "/men" },
    { title: "Premium Footwear", subtitle: "Comfort & Style", img: ShoesImg, overlay: "bg-orange-500 bg-opacity-50", link: "/footwear" },
    { title: "Accessories", subtitle: "Complete Your Look", img: AccessoriesImg, overlay: "bg-purple-500 bg-opacity-50", link: "/accessories" },
  ];

  const products = [
    { tag: "Sale", category: "Dresses", title: "Elegant Summer Dress", rating: 4.8, price: 1800.0, oldPrice: 2200.0, img: DressImg },
    { tag: "Sale", category: "Outerwear", title: "Premium Leather Jacket", rating: 4.9, price: 2800.0, oldPrice: 3100.0, img: JacketImg },
    { category: "Footwear", title: "Designer Sneakers", rating: 4.7, price: 1200.0, img: SneakersImg },
    { tag: "Sale", category: "Bags", title: "Luxury Handbag", rating: 4.8, price: 2000.0, oldPrice: 2200.0, img: BagImg },
  ];

  const heroImages = [
    { src: HeroImage1, alt: "Fashion Model 1" },
    { src: HeroImage2, alt: "Fashion Model 2" },
    { src: HeroImage3, alt: "Fashion Model 3" }
  ];

  const [likedProducts, setLikedProducts] = useState({});
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [direction, setDirection] = useState(0); // 0: forward, 1: backward

  const toggleLike = (index) => {
    setLikedProducts((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Auto-advance the hero image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(0);
      setCurrentHeroIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [heroImages.length]);

  const goToNext = () => {
    setDirection(0);
    setCurrentHeroIndex((prevIndex) => 
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrev = () => {
    setDirection(1);
    setCurrentHeroIndex((prevIndex) => 
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };

  // Variants for smooth slide animation
  const slideVariants = {
    enter: (direction) => ({
      x: direction === 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 0 ? -1000 : 1000,
      opacity: 0
    })
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
  const cardHover = { scale: 1.05, transition: { duration: 0.3 } };

  return (
    <>
      {/* Hero Section with Carousel */}
      <motion.section
        className="bg-gradient-to-r from-pink-50 to-white relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
          <motion.div variants={fadeInUp}>
            <span className="bg-pink-100 text-pink-600 text-sm font-medium px-3 py-1 rounded-full">New Collection 2025</span>
            <h1 className="text-5xl font-bold mt-4">Fashion That <span className="text-pink-500">Speaks</span> Your Style</h1>
            <p className="text-gray-600 mt-4 text-lg">
              Discover the latest trends in clothing, footwear, and accessories. Express your unique personality with our curated collection of fashion-forward pieces.
            </p>
          </motion.div>
          
          <div className="flex justify-center md:justify-end relative">
            <div className="w-full max-w-md h-[32rem] mt-11 overflow-hidden rounded-2xl shadow-lg relative">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentHeroIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 }
                  }}
                  className="absolute w-full h-full"
                >
                  <img 
                    src={heroImages[currentHeroIndex].src} 
                    alt={heroImages[currentHeroIndex].alt} 
                    className="w-full h-full object-cover" 
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            
            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentHeroIndex ? 0 : 1);
                    setCurrentHeroIndex(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentHeroIndex ? 'bg-pink-500 w-4' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Shop by Category Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p className="text-gray-600 mt-2" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.5 }}>
            Step into a world of curated elegance, where every collection elevates your unique style.
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
                  <div className="w-full h-80 overflow-hidden">
                    <img 
                      src={cat.img} 
                      alt={cat.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  </div>
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
          <motion.h2 className="text-3xl font-bold" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>Featuring</motion.h2>
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
                  <div className="w-full h-80 overflow-hidden">
                    <img 
                      src={product.img} 
                      alt={product.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
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

//     <>
//       {/* Hero Section with Carousel - Dark Theme */}
//       <motion.section
//         className="bg-gradient-to-r from-black via-gray-950 to-pink-950 relative overflow-hidden"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } }}
//       >
//         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center px-6 py-16 gap-10">
//           <motion.div variants={fadeInUp}>
//             <span className="bg-pink-800 text-pink-300 text-sm font-medium px-3 py-1 rounded-full">
//               New Collection 2025
//             </span>
//             <h1 className="text-5xl font-bold text-gray-100 mt-4">
//               Fashion That <span className="text-pink-400">Speaks</span> Your Style
//             </h1>
//             <p className="text-gray-400 mt-4 text-lg">
//               Discover the latest trends in clothing, footwear, and accessories.
//               Express your unique personality with our curated collection of
//               fashion-forward pieces.
//             </p>
//           </motion.div>
          
//           <div className="flex justify-center md:justify-end relative">
//             <div className="w-full max-w-md h-[32rem] mt-11 overflow-hidden rounded-2xl shadow-lg relative">
//               <AnimatePresence custom={direction} initial={false}>
//                 <motion.div
//                   key={currentHeroIndex}
//                   custom={direction}
//                   variants={slideVariants}
//                   initial="enter"
//                   animate="center"
//                   exit="exit"
//                   transition={{
//                     x: { type: "spring", stiffness: 300, damping: 30 },
//                     opacity: { duration: 0.4 }
//                   }}
//                   className="absolute w-full h-full"
//                 >
//                   <img 
//                     src={heroImages[currentHeroIndex].src} 
//                     alt={heroImages[currentHeroIndex].alt} 
//                     className="w-full h-full object-cover" 
//                   />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
            
            
//             {/* Dots Indicator */}
//             <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//               {heroImages.map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => {
//                     setDirection(index > currentHeroIndex ? 0 : 1);
//                     setCurrentHeroIndex(index);
//                   }}
//                   className={`w-2 h-2 rounded-full transition-all ${
//                     index === currentHeroIndex ? 'bg-pink-500 w-4' : 'bg-gray-600'
//                   }`}
//                   aria-label={`Go to slide ${index + 1}`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </motion.section>

//   {/* Shop by Category Section */}
//   <section className="py-16 bg-gradient-to-r from-gray-950 to-black">
//     <div className="max-w-7xl mx-auto px-6 text-center">
//       {/* <motion.h2
//         className="text-3xl font-bold text-gray-100"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         Shop by Category
//       </motion.h2> */}
//       <motion.p
//         className="text-gray-400 mt-2"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         Discover our carefully curated collections designed to elevate your style
//       </motion.p>

//       <motion.div
//         className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.2 } },
//         }}
//       >
//         {categories.map((cat, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInUp}
//             whileHover={cardHover}
//             className="relative rounded-xl overflow-hidden shadow-md group cursor-pointer bg-gray-900"
//           >
//             <Link to={cat.link}>
//               <img
//                 src={cat.img}
//                 alt={cat.title}
//                 className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-black/10 group-hover:bg-black/70 flex flex-col justify-end p-4 text-gray-100 transition">
//                 <h3 className="text-lg font-bold">{cat.title}</h3>
//                 <p className="text-sm text-gray-300">{cat.subtitle}</p>
//               </div>
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>

//   {/* Featured Products Section */}
//   <section
//     id="featured-products"
//     className="py-16 bg-gradient-to-r from-black via-gray-950 to-black"
//   >
//     <div className="max-w-7xl mx-auto px-6 text-center">
//       <motion.h2
//         className="text-3xl font-bold text-gray-100"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//       >
//         Featured Products
//       </motion.h2>
//       <motion.p
//         className="text-gray-400 mt-2"
//         initial={{ opacity: 0, y: 20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         Handpicked favorites from our latest collection
//       </motion.p>

//       <motion.div
//         className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//         variants={{
//           hidden: {},
//           visible: { transition: { staggerChildren: 0.2 } },
//         }}
//       >
//         {products.map((product, index) => (
//           <motion.div
//             key={index}
//             variants={fadeInUp}
//             whileHover={{ scale: 1.03 }}
//             className="bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition relative"
//           >
//             <div className="relative">
//               <img
//                 src={product.img}
//                 alt={product.title}
//                 className="w-full h-64 object-cover"
//               />
//               {product.tag && (
//                 <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
//                   {product.tag}
//                 </span>
//               )}
//               <button
//                 onClick={() => toggleLike(index)}
//                 className="absolute top-3 right-3 bg-black/70 p-2 rounded-full shadow hover:bg-black/90"
//               >
//                 <FiHeart
//                   className={`transition-colors duration-300 ${
//                     likedProducts[index] ? "text-pink-500" : "text-gray-300"
//                   }`}
//                 />
//               </button>
//             </div>
//             <div className="p-4 text-left text-gray-200">
//               <span className="text-gray-400 text-sm">{product.category}</span>
//               <h3 className="font-bold text-lg text-gray-100">
//                 {product.title}
//               </h3>
//               <div className="flex items-center text-yellow-400 text-sm mt-1">
//                 ★ <span className="ml-1 text-gray-300">{product.rating}</span>
//               </div>
//               <div className="mt-2 flex items-center space-x-2">
//                 <span className="font-bold text-lg text-pink-400">
//                   Rs. {product.price}
//                 </span>
//                 {product.oldPrice && (
//                   <span className="text-gray-500 line-through text-sm">
//                     Rs. {product.oldPrice}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>
//     </div>
//   </section>
// </>

  );
};

export default Home;
