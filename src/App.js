import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Shop Pages
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import Footwear from "./pages/Footwear";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Contact from "./pages/Contact";

// Women Subpages
import Dresses from "./pages/Women/Dresses";
import Sarees from "./pages/Women/Sarees";
import Tops from "./pages/Women/Tops";
import MiniDress from "./pages/Women/MiniDress";

// Men Subpages
import Jackets from "./pages/Men/Jackets";
import Jeans from "./pages/Men/Jeans";
import Shirts from "./pages/Men/Shirts";
import TShirts from "./pages/Men/TShirts";

// Footwear Subpages
import Boots from "./pages/Footwear/Boots";
import Heels from "./pages/Footwear/Heels";
import Sandals from "./pages/Footwear/Sandals";
import Sneakers from "./pages/Footwear/Sneakers";

// Accessories Subpages
import Jewelry from "./pages/Accessories/Jewelry";
import Handbag from "./pages/Accessories/Handbag";
import Hats from "./pages/Accessories/Hats";
import SunGlass from "./pages/Accessories/SunGlass";

// Admin Pages
import Login from "./pages/admin/Login";
import Signup from "./pages/admin/Signup";
import Dashboard from "./pages/admin/Dashboard";
import Items from "./pages/admin/Items";
import AddItem from "./pages/admin/AddItem";

function App() {
  const isAdminRoute = window.location.pathname.startsWith("/admin");

  return (
    <Router>
      <ScrollToTop />

      {/* Only show Navbar on shop pages */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Shop Pages */}
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

        {/* Admin Pages - wrapped with pink background */}
        <Route
          path="/admin/*"
          element={
            <div className="bg-pink-50 min-h-screen">
              <Routes>
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<Signup />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="items" element={<Items />} />
                <Route path="add-item" element={<AddItem />} />
              </Routes>
            </div>
          }
        />
      </Routes>

      {/* Only show Footer on shop pages */}
      {!isAdminRoute && <Footer />}
    </Router>
  );
}

export default App;
