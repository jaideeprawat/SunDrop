import React from "react";
import { Sun, BatteryCharging, Lightbulb, Leaf, Wrench } from "lucide-react";

export default function SolarStreetLight() {
  return (
    <section
      id="solar-street-light"
      className="pt-24 bg-gradient-to-b from-sky-50 to-white text-gray-800"
    >
      {/* Hero Section */}
      <div className="relative bg-sky-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Solar Street Lights
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-sky-100">
          Illuminate streets, campuses, and public spaces sustainably with
          reliable and cost-effective solar-powered lighting systems.
        </p>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto py-14 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 mb-4">
          Why Choose Solar Street Lights?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Solar street lights harness solar energy during the day and power
          high-efficiency LED lights at night. They are independent of the grid,
          require minimal maintenance, and enhance safety while saving energy
          and costs.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-14 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            {
              Icon: Sun,
              title: "Energy Independent",
              desc: "No reliance on electricity grids — powered entirely by sunlight.",
              color: "text-yellow-500",
            },
            {
              Icon: BatteryCharging,
              title: "Smart Battery Backup",
              desc: "Automatically stores solar power for nighttime or cloudy days.",
              color: "text-sky-600",
            },
            {
              Icon: Lightbulb,
              title: "Bright & Reliable Lighting",
              desc: "Long-lasting LED lights ensure bright illumination with low energy use.",
              color: "text-orange-500",
            },
            {
              Icon: Leaf,
              title: "Eco-Friendly Solution",
              desc: "Zero carbon emissions — promoting clean and sustainable living.",
              color: "text-green-600",
            },
          ].map(({ Icon, title, desc, color }, i) => (
            <div
              key={i}
              className="p-6 shadow-md rounded-xl hover:shadow-lg transition bg-white"
            >
              <Icon className={`mx-auto ${color}`} size={38} />
              <h3 className="text-lg md:text-xl font-semibold mt-3">{title}</h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
{/* Reliability & Smart LED Solutions Section */}
<div className="bg-gradient-to-b from-yellow-50 to-sky-50 py-16 px-6">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
      Reliability & Smart LED Solutions
    </h2>
    <p className="max-w-3xl mx-auto text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
      We are a leading manufacturer and trader of superior quality LED Electric Lights. 
      Our product line includes <strong>LED Street Lights</strong>, <strong>LED Flood Lights</strong>, 
      and <strong>Solar Street Lights</strong> suitable for homes, offices, hospitality, and various other industries.
    </p>

    <div className="grid md:grid-cols-2 gap-8 text-left bg-white rounded-xl shadow-md p-8">
      <div>
        <h3 className="text-2xl font-semibold text-sky-700 mb-3">Quality & Performance</h3>
        <p className="text-gray-700 mb-4 leading-relaxed">
          Our solar lighting products are manufactured using <strong>high-quality components</strong> 
          and <strong>advanced technology</strong>, ensuring international quality standards. 
          They are highly demanded for their <strong>durability</strong>, <strong>light weight</strong>, 
          <strong>easy installation</strong>, <strong>high functionality</strong>, 
          and <strong>long service life</strong>.
        </p>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-sky-700 mb-3">Street Light Range</h3>
        <ul className="text-gray-700 space-y-2 text-base md:text-lg list-disc list-inside">
          <li>12 Watt Street Light</li>
          <li>12 Watt Solar Street Light (SMF Battery)</li>
          <li>12 Watt Solar Street Light</li>
          <li>18 Watt Street Light</li>
          <li>18 Watt LED with SMF Battery</li>
        </ul>
      </div>
    </div>
  </div>
</div>

{/* Types of Solar Street Lights Section */}
<div className="bg-sky-50 py-20 px-6" id="solar-types">
  <div className="container mx-auto text-center">

    <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-4">
      Types of Solar Street Lights
    </h2>

    <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-10">
      Choose from a variety of solar street lights designed for different environments 
      and lighting needs. All are energy-efficient, eco-friendly, and require minimal maintenance.
    </p>

    {/* Center Banner Image */}
    <div className="mb-12">
      <img
        src="/assets/allfour_streetlight.png"
        alt="Solar Street Light Types Overview"
        className="mx-auto w-full max-w-3xl object-contain drop-shadow-md"
      />
    </div>

    {/* Four Cards Grid */}
    <div className="grid md:grid-cols-4 gap-8 mt-6">

      {/* All-in-One Solar Street Light */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2">
          All-in-One Solar Street Light
        </h3>
        <p className="text-gray-700 text-sm md:text-base mb-3">
          Combines solar panel, LED, battery, and controller in one compact unit — perfect for 
          residential areas, gardens, and communities.
        </p>
        <ul className="text-gray-600 text-left list-disc pl-5 space-y-1 text-sm md:text-base">
          <li>✔ Easy installation</li>
          <li>✔ Smart dusk-to-dawn operation</li>
          <li>✔ Modern compact design</li>
          <li>✔ Zero electricity cost</li>
        </ul>
      </div>

      {/* Semi-Integrated Solar Street Light */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2">
          Semi-Integrated Solar Street Light
        </h3>
        <p className="text-gray-700 text-sm md:text-base mb-3">
          Hybrid model where the LED & controller are integrated, and the solar panel is separate 
          for flexible installation.
        </p>
        <ul className="text-gray-600 text-left list-disc pl-5 space-y-1 text-sm md:text-base">
          <li>✔ High energy conversion</li>
          <li>✔ Flexible panel direction</li>
          <li>✔ Extended battery life</li>
        </ul>
      </div>

      {/* Integrated Solar Street Light */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2">
          Integrated Solar Street Light
        </h3>
        <p className="text-gray-700 text-sm md:text-base mb-3">
          LED, battery & controller in one unit — solar panel remains separate for optimal sunlight capture.
        </p>
        <ul className="text-gray-600 text-left list-disc pl-5 space-y-1 text-sm md:text-base">
          <li>✔ Compact & durable</li>
          <li>✔ Low maintenance</li>
          <li>✔ Best for public/commercial areas</li>
        </ul>
      </div>

      {/* Standalone Solar Street Light */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6">
        <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2">
          Standalone Solar Street Light
        </h3>
        <p className="text-gray-700 text-sm md:text-base mb-3">
          Fully independent system with separate solar panel & battery enclosure — ideal for highways 
          and rural installations.
        </p>
        <ul className="text-gray-600 text-left list-disc pl-5 space-y-1 text-sm md:text-base">
          <li>✔ 100% off-grid</li>
          <li>✔ Weather-resistant</li>
          <li>✔ Perfect for large projects</li>
        </ul>
      </div>

    </div>
  </div>
</div>


      {/* Image Section */}
      <div className="relative my-14">
        <img
          src="/assets/solarlightbanner.png"
          alt="Solar Street Lights"
          className="w-full h-[420px] object-contain md:rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl md:text-3xl font-semibold">
          Lighting the Future — Sustainably
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-14 bg-sky-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Install Solar Street Lights?
        </h2>
        <p className="mb-5 text-sky-100 text-base md:text-lg">
          We offer complete solar lighting solutions — design, supply,
          installation, and after-service support.
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
