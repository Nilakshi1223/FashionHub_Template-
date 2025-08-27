import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Footwear from "./pages/Footwear";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Dresses from "./pages/Women/Dresses";
import Sarees from "./pages/Women/Sarees";
import Tops from "./pages/Women/Tops";
import MiniDress from "./pages/Women/MiniDress";

import Jackets from "./pages/Men/Jackets";
import Jeans from "./pages/Men/Jeans";
import Shirts from "./pages/Men/Shirts";
import TShirts from "./pages/Men/TShirts";

import Boots from "./pages/Footwear/Boots";
import Heels from "./pages/Footwear/Heels";
import Sandals from "./pages/Footwear/Sandals";
import Sneakers from "./pages/Footwear/Sneakers";

import Jewelry from "./pages/Accessories/Jewelry";
import Handbag from "./pages/Accessories/Handbag";
import Hats from "./pages/Accessories/Hats";
import SunGlass from "./pages/Accessories/SunGlass";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* This ensures every route starts at the top */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />


        <Route path="/women" element={<Women />} />
          <Route path="/women/dresses" element={<Dresses />} />
          <Route path="/women/sarees" element={<Sarees />} />
          <Route path="/women/tops" element={<Tops />} />
          <Route path="/women/minidress" element={<MiniDress />} />

        <Route path="/men" element={<Men />} />
          <Route path="/men/jackets" element={<Jackets />} />
          <Route path="/men/jeans" element={<Jeans />} />
          <Route path="/men/shirts" element={<Shirts />} />
          <Route path="/men/tshirts" element={<TShirts />} />

        <Route path="/footwear" element={<Footwear />} />
          <Route path="/footwear/sneakers" element={<Sneakers />} />
          <Route path="/footwear/boots" element={<Boots />} />
          <Route path="/footwear/sandals" element={<Sandals />} />
          <Route path="/footwear/heels" element={<Heels />} />

        <Route path="/accessories" element={<Accessories />} />
          <Route path="/accessories/jewelry" element={<Jewelry />} />
          <Route path="/accessories/handbag" element={<Handbag />} />
          <Route path="/accessories/hats" element={<Hats />} />
          <Route path="/accessories/sunglass" element={<SunGlass />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
