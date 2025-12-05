import React from "react";
import { FaSolarPanel, FaWater, FaLightbulb, FaTools, FaBatteryFull } from "react-icons/fa";

const services = [
  { 
    title: "Solar Panel Installation", 
    desc: "High-quality solar panels for residential and commercial rooftops, helping you save on electricity bills.",
    icon: <FaSolarPanel size={40} className="text-yellow-600" />
  },
  { 
    title: "Solar Water Heater Installation", 
    desc: "Efficient solar water heating solutions for homes and businesses, reducing dependency on conventional energy.",
    icon: <FaWater size={40} className="text-blue-500" />
  },
  { 
    title: "Solar Street Light Installation", 
    desc: "Durable and eco-friendly solar street lights to illuminate roads, gardens, and public areas sustainably.",
    icon: <FaLightbulb size={40} className="text-green-500" />
  },
  { 
    title: "Maintenance & Service", 
    desc: "Complete maintenance and after-sales support for solar systems to ensure uninterrupted performance.",
    icon: <FaTools size={40} className="text-gray-600" />
  },
  { 
    title: "Solar Panels", 
    desc: "High-efficiency solar panels for reliable energy generation.",
    icon: <FaSolarPanel size={40} className="text-yellow-500" />
  },
  { 
    title: "Batteries", 
    desc: "High-capacity batteries for energy storage and backup.",
    icon: <FaBatteryFull size={40} className="text-red-500" />
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50" >
      <div className="container mx-auto px-6 text-center">
        <h2
          style={{
            textAlign: "center",
            marginBottom: 30,
            fontSize: "30px",
            fontWeight: "800",
            color: "#0f172a",
          }}
        >
          Our Services
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div 
              key={i} 
              className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <div className="mb-4">{s.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{s.title}</h4>
              <p className="text-gray-600 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
