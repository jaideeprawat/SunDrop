import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const HEADER_OFFSET = 80; // height of fixed navbar

  // Change navbar style on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section or navigate
  const scrollToSection = (id) => {
    setMenuOpen(false);

    if (location.pathname !== "/") {
      // Navigate to home page first
      navigate("/" + "#" + id);
    } else {
      // Scroll on same page
      scroller.scrollTo(id, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -HEADER_OFFSET,
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-500">
      {/* Top Bar */}
<div
  className={`transition-all duration-500 overflow-hidden ${
    scrolled ? "opacity-0 h-0" : "opacity-100 h-auto py-2"
  } bg-gradient-to-r from-sky-600 via-sky-500 to-cyan-500 text-white`}
>
  <div className="max-w-7xl mx-auto flex items-center justify-center text-sm font-semibold tracking-wide">
    <span className="animate-pulse">🔥 Get Govt. Solar Subsidy ₹85,800 – Limited Slots!</span>
  </div>
</div>


      {/* Navbar */}
      <nav
        className={`transition-all duration-500 backdrop-blur-md ${
          scrolled ? "bg-white/95 shadow-md py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between relative
  sm:px-4 px-2"> 

          {/* LEFT: Logo */}
          <Link to="/" onClick={() => scrollToSection("homeSection")}
          className="flex items-center h-full">
<img
  src="/assets/aquaray.png"
  alt="Aquaray Solar Logo"
  className={`transition-all duration-500 object-contain
    ${scrolled ? "h-14 md:h-16" : "h-16 md:h-20"}
  `}
  style={{
    maxWidth: "300px",
    width: "100%"
  }}
/>



  

            
          </Link>

          {/* CENTER: Desktop Menu */}
          <div
            className={`hidden md:flex items-center space-x-10 font-medium absolute left-1/2 -translate-x-1/2 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
          >
            <button
              onClick={() => scrollToSection("homeSection")}
              className="hover:text-yellow-300 text-lg"
              
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("aboutSection")}
              className="hover:text-yellow-300 text-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("calculatorSection")}
              className="hover:text-yellow-300 text-lg"
            >
              Calculator
            </button>
            <button
              onClick={() => scrollToSection("servicesSection")}
              className="hover:text-yellow-300 text-lg"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contactSection")}
              className="hover:text-yellow-300 text-lg"
            >
              Contact
            </button>

            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 text-lg hover:text-yellow-300">
                Products <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <Link
                  to="/products/solar-power-plant"
                  className="block px-4 py-2 hover:bg-sky-100 text-gray-700"
                >
                  Solar Power Plant
                </Link>
                <Link
                  to="/products/solar-water-heater"
                  className="block px-4 py-2 hover:bg-sky-100 text-gray-700"
                >
                  Solar Water Heater
                </Link>
                <Link
                  to="/products/solar-street-light"
                  className="block px-4 py-2 hover:bg-sky-100 text-gray-700"
                >
                  Solar Street Light
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT: Mobile Menu Button */}
          <button
            className={`md:hidden ${scrolled ? "text-sky-700" : "text-white"}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4">
            <button
              onClick={() => scrollToSection("homeSection")}
              className="block px-6 py-2 hover:bg-sky-100 w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("aboutSection")}
              className="block px-6 py-2 hover:bg-sky-100 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("calculatorSection")}
              className="block px-6 py-2 hover:bg-sky-100 w-full text-left"
            >
              Calculator
            </button>
            <button
              onClick={() => scrollToSection("servicesSection")}
              className="block px-6 py-2 hover:bg-sky-100 w-full text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("contactSection")}
              className="block px-6 py-2 hover:bg-sky-100 w-full text-left"
            >
              Contact
            </button>

            {/* Mobile Products Dropdown */}
            <div className="border-t mt-2 pt-2">
              <Link
                to="/products/solar-power-plant"
                className="block px-6 py-2 hover:bg-sky-100 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Solar Power Plant
              </Link>
              <Link
                to="/products/solar-water-heater"
                className="block px-6 py-2 hover:bg-sky-100 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Solar Water Heater
              </Link>
              <Link
                to="/products/solar-street-light"
                className="block px-6 py-2 hover:bg-sky-100 w-full"
                onClick={() => setMenuOpen(false)}
              >
                Solar Street Light
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
