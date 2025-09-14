import React from "react";
import { Link } from "react-router-dom";
import { FiFacebook, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            FashionHub brings you the latest trends in fashion with a
            curated selection of clothing, footwear, and accessories.
          </p>
        </div>

        

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/women" className="hover:text-pink-500">Ladies</Link></li>
            <li><Link to="/men" className="hover:text-pink-500">Gents</Link></li>
            <li><Link to="/footwear" className="hover:text-pink-500">Footwear</Link></li>
            <li><Link to="/accessories" className="hover:text-pink-500">Accessories</Link></li>

          
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="facebook.com" className="hover:text-pink-500"><FiFacebook /></a>
            <a href="insta.com" className="hover:text-pink-500"><FiInstagram /></a>
            <a href="https://wa.me/94712345678" className= "hover:text-pink-400"> <FaWhatsapp /></a>
            <a href="youtube.com" className="hover:text-pink-500"><FiYoutube /></a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            © 2025 IDET. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
