import React from "react";
import { motion } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiTwitter,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Contact = () => {
  return (
    <div className="bg-gradient-to-r mt-16 from-white via-pink-50 to-white min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 bg-gradient-to-r from-pink-50 via-white to-pink-100">
        <motion.h1
          className="text-5xl font-bold text-pink-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          We’d love to hear from you. Whether you have a question about our
          collections, orders, or anything else, our team is ready to answer all
          your queries.
        </motion.p>
      </section>

      {/* Contact Details + Form */}
      <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-16">
        {/* Contact Info */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-gray-900"
          >
            Contact Information
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-gray-600">
            Reach us through any of the following ways, and we’ll respond as
            soon as possible.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-4"
          >
            <FiMapPin className="text-pink-500 text-xl" />
            <span>No. 25, Fashion Street, Colombo, Sri Lanka</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-4"
          >
            <FiPhone className="text-pink-500 text-xl" />
            <span>+94 71 234 5678</span>
          </motion.div>
          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-4"
          >
            <FiMail className="text-pink-500 text-xl" />
            <span>support@fashionhub.com</span>
          </motion.div>
          {/* WhatsApp */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center space-x-4"
          >
            <FaWhatsapp className="text-pink-500 text-xl" />
            <a
              href="https://wa.me/94712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              +94 71 234 5678 (WhatsApp)
            </a>
          </motion.div>

          {/* Social Media */}
          <motion.div variants={fadeInUp} className="flex space-x-6 mt-6">
            <a
              href="https://facebook.com"
              className="text-gray-500 hover:text-pink-500"
            >
              <FiFacebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-500 hover:text-pink-500"
            >
              <FiInstagram size={24} />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-pink-500"
            >
              <FiTwitter size={24} />
            </a>
            <a
              href="https://wa.me/94712345678"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-pink-500"
            >
              <FaWhatsapp size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          className="bg-white rounded-xl shadow-lg p-6 space-y-4 border border-gray-200"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            variants={fadeInUp}
            className="text-2xl font-bold text-gray-900 mb-4"
          >
            Send Us a Message
          </motion.h2>

          <motion.input
            variants={fadeInUp}
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:border-pink-500"
          />
          <motion.input
            variants={fadeInUp}
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:border-pink-500"
          />
          <motion.textarea
            variants={fadeInUp}
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-gray-50 text-gray-800 border border-gray-300 focus:outline-none focus:border-pink-500"
          ></motion.textarea>

          <motion.button
            variants={fadeInUp}
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </section>
    </div>


//     <div className="bg-gradient-to-r mt-16 from-black via-gray-950 to-black min-h-screen text-gray-200">
//       {/* Hero Section */}
//       <section className="text-center py-16 px-6 bg-gradient-to-r from-black via-gray-950 to-pink-950">
//         <motion.h1
//           className="text-5xl font-bold text-pink-400"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           Get in Touch
//         </motion.h1>
//         <motion.p
//           className="text-gray-400 mt-4 max-w-2xl mx-auto"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           We’d love to hear from you. Whether you have a question about our
//           collections, orders, or anything else, our team is ready to answer all
//           your queries.
//         </motion.p>
//       </section>

//       {/* Contact Details + Form */}
//       <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-16">
//         {/* Contact Info */}
//         <motion.div
//           className="space-y-6"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-3xl font-bold text-gray-100"
//           >
//             Contact Information
//           </motion.h2>
//           <motion.p variants={fadeInUp} className="text-gray-400">
//             Reach us through any of the following ways, and we’ll respond as
//             soon as possible.
//           </motion.p>

//           <motion.div
//             variants={fadeInUp}
//             className="flex items-center space-x-4"
//           >
//             <FiMapPin className="text-pink-400 text-xl" />
//             <span>No. 25, Fashion Street, Colombo, Sri Lanka</span>
//           </motion.div>
//           <motion.div
//             variants={fadeInUp}
//             className="flex items-center space-x-4"
//           >
//             <FiPhone className="text-pink-400 text-xl" />
//             <span>+94 71 234 5678</span>
//           </motion.div>
//           <motion.div
//             variants={fadeInUp}
//             className="flex items-center space-x-4"
//           >
//             <FiMail className="text-pink-400 text-xl" />
//             <span>support@fashionhub.com</span>
//           </motion.div>
//           {/* WhatsApp */}
//           <motion.div
//             variants={fadeInUp}
//             className="flex items-center space-x-4"
//           >
//             <FaWhatsapp className="text-pink-400 text-xl" />
//             <a
//               href="https://wa.me/94712345678"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-pink-400"
//             >
//               +94 71 234 5678 (WhatsApp)
//             </a>
//           </motion.div>

//           {/* Social Media */}
//           <motion.div variants={fadeInUp} className="flex space-x-6 mt-6">
//             <a
//               href="https://facebook.com"
//               className="text-gray-400 hover:text-pink-400"
//             >
//               <FiFacebook size={24} />
//             </a>
//             <a
//               href="https://instagram.com"
//               className="text-gray-400 hover:text-pink-400"
//             >
//               <FiInstagram size={24} />
//             </a>
//             <a
//               href="https://wa.me/94712345678"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-400 hover:text-pink-400"
//             >
//               <FaWhatsapp size={24} />
//             </a>
//           </motion.div>
//         </motion.div>

//         {/* Contact Form */}
//         <motion.form
//           className="bg-gray-900 rounded-xl shadow-lg p-6 space-y-4"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, amount: 0.3 }}
//           variants={{
//             hidden: {},
//             visible: { transition: { staggerChildren: 0.2 } },
//           }}
//         >
//           <motion.h2
//             variants={fadeInUp}
//             className="text-2xl font-bold text-gray-100 mb-4"
//           >
//             Send Us a Message
//           </motion.h2>

//           <motion.input
//             variants={fadeInUp}
//             type="text"
//             placeholder="Your Name"
//             className="w-full px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:border-pink-400"
//           />
//           <motion.input
//             variants={fadeInUp}
//             type="email"
//             placeholder="Your Email"
//             className="w-full px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:border-pink-400"
//           />
//           <motion.textarea
//             variants={fadeInUp}
//             placeholder="Your Message"
//             rows="5"
//             className="w-full px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:border-pink-400"
//           ></motion.textarea>

//           <motion.button
//             variants={fadeInUp}
//             type="submit"
//             className="w-full bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 rounded-lg transition"
//           >
//             Send Message
//           </motion.button>
//         </motion.form>
//       </section>
//     </div>

  
    // <div className="bg-gradient-to-r mt-16 from-black via-gray-950 to-black min-h-screen text-gray-200">
    //   {/* Hero Section */}
    //   <section className="text-center py-16 px-6 bg-gradient-to-r from-black via-gray-900 to-teal-900">
    //     <motion.h1
    //       className="text-5xl font-bold text-teal-400"
    //       initial={{ opacity: 0, y: -30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 0.8 }}
    //     >
    //       Get in Touch
    //     </motion.h1>
    //     <motion.p
    //       className="text-gray-400 mt-4 max-w-2xl mx-auto"
    //       initial={{ opacity: 0, y: 30 }}
    //       animate={{ opacity: 1, y: 0 }}
    //       transition={{ duration: 1 }}
    //     >
    //       We’d love to hear from you. Whether you have a question about our
    //       collections, orders, or anything else, our team is ready to answer all
    //       your queries.
    //     </motion.p>
    //   </section>

    //   {/* Contact Details + Form */}
    //   <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 py-16">
    //     {/* Contact Info */}
    //     <motion.div
    //       className="space-y-6"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.3 }}
    //       variants={{
    //         hidden: {},
    //         visible: { transition: { staggerChildren: 0.2 } },
    //       }}
    //     >
    //       <motion.h2
    //         variants={fadeInUp}
    //         className="text-3xl font-bold text-gray-100"
    //       >
    //         Contact Information
    //       </motion.h2>
    //       <motion.p variants={fadeInUp} className="text-gray-400">
    //         Reach us through any of the following ways, and we’ll respond as
    //         soon as possible.
    //       </motion.p>

    //       <motion.div
    //         variants={fadeInUp}
    //         className="flex items-center space-x-4"
    //       >
    //         <FiMapPin className="text-teal-400 text-xl" />
    //         <span>No. 25, Fashion Street, Colombo, Sri Lanka</span>
    //       </motion.div>
    //       <motion.div
    //         variants={fadeInUp}
    //         className="flex items-center space-x-4"
    //       >
    //         <FiPhone className="text-teal-400 text-xl" />
    //         <span>+94 71 234 5678</span>
    //       </motion.div>
    //       <motion.div
    //         variants={fadeInUp}
    //         className="flex items-center space-x-4"
    //       >
    //         <FiMail className="text-teal-400 text-xl" />
    //         <span>support@fashionhub.com</span>
    //       </motion.div>
    //       {/* WhatsApp */}
    //       <motion.div
    //         variants={fadeInUp}
    //         className="flex items-center space-x-4"
    //       >
    //         <FaWhatsapp className="text-teal-400 text-xl" />
    //         <a
    //           href="https://wa.me/94712345678"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="hover:text-teal-400"
    //         >
    //           +94 71 234 5678 (WhatsApp)
    //         </a>
    //       </motion.div>

    //       {/* Social Media */}
    //       <motion.div variants={fadeInUp} className="flex space-x-6 mt-6">
    //         <a
    //           href="https://facebook.com"
    //           className="text-gray-400 hover:text-teal-400"
    //         >
    //           <FiFacebook size={24} />
    //         </a>
    //         <a
    //           href="https://instagram.com"
    //           className="text-gray-400 hover:text-teal-400"
    //         >
    //           <FiInstagram size={24} />
    //         </a>
    //         <a
    //           href="https://wa.me/94712345678"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-gray-400 hover:text-teal-400"
    //         >
    //           <FaWhatsapp size={24} />
    //         </a>
    //       </motion.div>
    //     </motion.div>

    //     {/* Contact Form */}
    //     <motion.form
    //       className="bg-gray-900 rounded-xl shadow-lg p-6 space-y-4"
    //       initial="hidden"
    //       whileInView="visible"
    //       viewport={{ once: true, amount: 0.3 }}
    //       variants={{
    //         hidden: {},
    //         visible: { transition: { staggerChildren: 0.2 } },
    //       }}
    //     >
    //       <motion.h2
    //         variants={fadeInUp}
    //         className="text-2xl font-bold text-gray-100 mb-4"
    //       >
    //         Send Us a Message
    //       </motion.h2>

    //       <motion.input
    //         variants={fadeInUp}
    //         type="text"
    //         placeholder="Your Name"
    //         className="w-full px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:border-teal-400"
    //       />
    //       <motion.input
    //         variants={fadeInUp}
    //         type="email"
    //         placeholder="Your Email"
    //         className="w-full px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:border-teal-400"
    //       />
    //       <motion.textarea
    //         variants={fadeInUp}
    //         placeholder="Your Message"
    //         rows="5"
    //         className="w-full px-4 py-3 rounded-lg bg-black/50 text-gray-200 border border-gray-700 focus:outline-none focus:border-teal-400"
    //       ></motion.textarea>

    //       <motion.button
    //         variants={fadeInUp}
    //         type="submit"
    //         className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 rounded-lg transition"
    //       >
    //         Send Message
    //       </motion.button>
    //     </motion.form>
    //   </section>
    // </div>

  );
};

export default Contact;
