import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiSearch,
  FiShoppingBag,
  FiUser,
  FiMenu,
  FiX,
  FiChevronDown,
} from "react-icons/fi";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  // Scroll to Featured Products
  const scrollToFeatured = () => {
    const section = document.getElementById("featured-products");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSaleClick = () => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToFeatured, 300);
    } else {
      scrollToFeatured();
    }
    setMobileOpen(false);
  };

  // Submenus
  const subMenus = {
    women: [
      { name: "Dresses", path: "/women/dresses" },
      { name: "Tops", path: "/women/tops" },
      { name: "Sarees", path: "/women/sarees" },
      { name: "Mini Dress", path: "/women/minidress" },
    ],
    men: [
      { name: "Jackets", path: "/men/jackets" },
      { name: "Shirts", path: "/men/shirts" },
      { name: "T-Shirts", path: "/men/tshirts" },
      { name: "Jeans", path: "/men/jeans" },
    ],
    footwear: [
      { name: "Sneakers", path: "/footwear/sneakers" },
      { name: "Sandals", path: "/footwear/sandals" },
      { name: "Boots", path: "/footwear/boots" },
      { name: "Heels", path: "/footwear/heels" },
    ],
    accessories: [
      { name: "Handbags", path: "/accessories/handbag" },
      { name: "Hats", path: "/accessories/hats" },
      { name: "Jewelry", path: "/accessories/jewelry" },
      { name: "SunGlasses", path: "/accessories/sunglass" },
    ],
  };

  return (
    <nav className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-pink-500 p-2 rounded-md">
            <span className="text-white font-bold text-xl">📷</span>
          </div>
          <span className="text-2xl font-bold text-pink-500">FashionHub</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium relative">
          <Link to="/" className="hover:text-pink-500">
            Home
          </Link>

          {/* Women Dropdown */}
          <div className="group relative">
            <Link
              to="/women"
              className="hover:text-pink-500 flex items-center"
            >
              Women <FiChevronDown className="ml-1" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-0 rounded-lg border w-56">
              {subMenus.women.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 hover:bg-pink-50 border-b last:border-b-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Men Dropdown */}
          <div className="group relative">
            <Link to="/men" className="hover:text-pink-500 flex items-center">
              Men <FiChevronDown className="ml-1" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-0 rounded-lg border w-56">
              {subMenus.men.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 hover:bg-pink-50 border-b last:border-b-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Footwear Dropdown */}
          <div className="group relative">
            <Link
              to="/footwear"
              className="hover:text-pink-500 flex items-center"
            >
              Footwear <FiChevronDown className="ml-1" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-0 rounded-lg border w-56">
              {subMenus.footwear.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 hover:bg-pink-50 border-b last:border-b-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Accessories Dropdown */}
          <div className="group relative">
            <Link
              to="/accessories"
              className="hover:text-pink-500 flex items-center"
            >
              Accessories <FiChevronDown className="ml-1" />
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-white shadow-md mt-0 rounded-lg border w-56">
              {subMenus.accessories.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="block px-4 py-2 hover:bg-pink-50 border-b last:border-b-0"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <button
            onClick={handleSaleClick}
            className="flex items-center space-x-1 hover:text-pink-500"
          >
            <span>Sale</span>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              Hot
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            className="block px-6 py-3 hover:bg-pink-50"
            onClick={() => setMobileOpen(false)}
          >
            Home
          </Link>

          {/* Mobile Submenus */}
{Object.entries(subMenus).map(([key, items]) => (
  <div key={key}>
    <div className="flex justify-between items-center border-b">
      {/* Left: Navigate to main page */}
      <Link
        to={`/${key}`}
        className="px-6 py-3 hover:bg-pink-50 flex-1"
        onClick={() => setMobileOpen(false)}
      >
        {key.charAt(0).toUpperCase() + key.slice(1)}
      </Link>

      {/* Right: Toggle submenu */}
      <button
        className="px-6 py-3 hover:bg-pink-50"
        onClick={() => setOpenMenu(openMenu === key ? "" : key)}
      >
        <FiChevronDown
          className={`transform transition-transform ${
            openMenu === key ? "rotate-180" : ""
          }`}
        />
      </button>
    </div>

    {/* Submenu items */}
    {openMenu === key && (
      <div className="pl-8 border-l border-r border-b w-full bg-white">
        {items.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 hover:bg-pink-50 border-b last:border-b-0"
          >
            {item.name}
          </Link>
        ))}
      </div>
    )}
  </div>
))}


          <div
            onClick={handleSaleClick}
            className="block px-6 py-3 hover:bg-pink-50 flex items-center space-between cursor-pointer"
          >
            <span>Sale</span>
            <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              Hot
            </span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
