import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import ScrollHandler from "./components/ScrollHandler";

import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SolarCalculator from "./components/SolarCalculator";
import SolarPowerPlant from "./components/SolarPowerPlant";
import SolarWaterHeater from "./components/SolarWaterHeater";
import SolarStreetLight from "./components/SolarStreetlight";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <ScrollHandler headerOffset={80} />

        <Routes>
          {/* Home Page with Sections */}
          <Route
            path="/"
            element={
              <>
                <div id="homeSection"><Hero /></div>
                <div id="aboutSection"><About /></div>
                <div id="calculatorSection"><SolarCalculator /></div>
                <div id="servicesSection"><Services /></div>
                <div id="contactSection"><Contact /></div>
                <div id="footerSection"><Footer /></div>
              </>
            }
          />

          {/* Product Pages */}
          <Route path="/products/solar-power-plant" element={<SolarPowerPlant />} />
          <Route path="/products/solar-water-heater" element={<SolarWaterHeater />} />
          <Route path="/products/solar-street-light" element={<SolarStreetLight />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
