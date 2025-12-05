import React from "react";
import { Flame, Droplets, Leaf,Home } from "lucide-react";

export default function SolarWaterHeater() {
  return (
    
    <section
      id="solar-plant"
      className="pt-24 bg-gradient-to-b from-sky-50 to-white text-gray-800"
    >
      {/* Hero Section */}
      <div className="relative bg-sky-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Solar Water Heater
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-sky-100">
           Eco-friendly water heating powered by sunlight.
        </p>
      </div>
{/* About Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 mb-4">
          What is a Solar Water Heater?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          A Solar Water Heater (SWH) captures energy from the sun to heat water
          for residential, commercial, or industrial use. It helps reduce
          electricity consumption, lower carbon emissions, and ensures a
          consistent supply of hot water throughout the year.
        </p>
      </section>

     {/* Benefits Section - Solar Water Heater (Blue-Yellow Theme) */}
<div className="bg-gradient-to-b from-sky-50 to-yellow-50 py-14 px-6">
  <div className="container mx-auto grid md:grid-cols-4 gap-6 text-center">
    {[
      {
        Icon: Flame,
        title: "Hot Water Anytime",
        desc: "Enjoy a continuous supply of hot water powered naturally by the sun.",
        color: "text-yellow-500",
      },
      {
        Icon: Droplets,
        title: "Energy Savings",
        desc: "Cut down on electricity or gas bills with efficient solar heating.",
        color: "text-sky-600",
      },
      {
        Icon: Leaf,
        title: "Eco-Friendly",
        desc: "A clean and renewable way to heat water while reducing carbon emissions.",
        color: "text-green-600",
      },
      {
        Icon: Home,
        title: "For All Applications",
        desc: "Perfect for homes, hotels, hospitals, and commercial facilities.",
        color: "text-yellow-600",
      },
    ].map(({ Icon, title, desc, color }, i) => (
      <div
        key={i}
        className="p-6 shadow-md rounded-xl hover:shadow-lg transition bg-white"
      >
        <Icon className={`mx-auto ${color}`} size={38} />
        <h3 className="text-lg md:text-xl font-semibold mt-3 text-sky-800">
          {title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm md:text-base">{desc}</p>
      </div>
    ))}
  </div>
</div>

      {/* Image Section */}
      <div className="relative my-14">
        <img
  src="/assets/solarheater.png"
  alt="Solar Water Heater"
  className="w-full h-[380px] object-contain rounded-none md:rounded-lg shadow-lg"
/>
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl md:text-3xl font-semibold">
          Powering a Brighter Tomorrow
        </div>
      </div>
         {/* Benefits Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          Benefits of Solar Water Heaters
        </h2>
        <ul className="max-w-2xl mx-auto text-gray-700 space-y-3 text-left text-lg">
          <li>✅ Save up to 70% on electricity bills</li>
          <li>✅ Low maintenance and long operational life</li>
          <li>✅ Works efficiently even in cloudy weather</li>
          <li>✅ Reduces greenhouse gas emissions</li>
          <li>✅ Suitable for homes, hotels, hospitals, and industries</li>
        </ul>
      </section>

      {/* CTA Section */}
      <div className="text-center py-14 bg-sky-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
         Interested in Installing a Solar Water Heater?
        </h2>
        <p className="mb-5 text-sky-100 text-base md:text-lg">
          Our experts provide complete solutions — from consultation to
          installation and maintenance.
        </p>
        <a
          href="#contact"
          className="bg-yellow-400 text-sky-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Contact Us Today
        </a>
      </div>
    </section>
  );
}
