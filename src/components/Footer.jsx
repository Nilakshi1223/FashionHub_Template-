import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* About Us */}
        <div>
          <h3 className="font-bold text-lg mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            FashionHub brings you the latest trends in fashion with a
            curated selection of clothing, footwear, and accessories.
          </p>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="font-bold text-lg mb-4">Customer Service</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a href="#" className="hover:text-pink-500">Help & Contact</a></li>
            <li><a href="#" className="hover:text-pink-500">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-pink-500">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-pink-500">FAQ</a></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link to="/" className="hover:text-pink-500">Home</Link></li>
            <li><Link to="/womenfashion" className="hover:text-pink-500">Women</Link></li>
            <li><Link to="/menfashion" className="hover:text-pink-500">Men</Link></li>
            <li><Link to="/footwear" className="hover:text-pink-500">Footwear</Link></li>
            <li><Link to="/accessories" className="hover:text-pink-500">Accessories</Link></li>

          
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-bold text-lg mb-4">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to get the latest fashion updates and offers.
          </p>
          
        </div>

        {/* Social Media */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-pink-500"><FiFacebook /></a>
            <a href="#" className="hover:text-pink-500"><FiInstagram /></a>
            <a href="#" className="hover:text-pink-500"><FiTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FiYoutube /></a>
          </div>
          <p className="text-gray-400 text-sm mt-4">
            © 2025 FashionHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
