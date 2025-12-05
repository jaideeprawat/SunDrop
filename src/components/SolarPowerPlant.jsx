import React from "react";
import { Sun, BatteryCharging, Leaf, Building2 } from "lucide-react";

export default function SolarPowerPlant() {
  return (
    
    <section
      id="solar-plant"
      className="pt-24 bg-gradient-to-b from-sky-50 to-white text-gray-800"
    >
      {/* Hero Section */}
      <div className="relative bg-sky-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Solar Power Plants
        </h1>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-sky-100">
          Harness the power of the sun to generate clean, renewable, and
          cost-effective electricity for your home or business.
        </p>
      </div>

      {/* Intro Section */}
      <div className="container mx-auto py-14 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-sky-700 mb-4">
          Why Choose Solar Power?
        </h2>
        <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 leading-relaxed">
          Solar power plants convert sunlight into electricity using advanced
          photovoltaic (PV) technology. They are efficient, eco-friendly, and
          reduce your dependency on conventional energy sources while saving
          costs in the long run.
        </p>
      </div>

      {/* Benefits Section */}
      <div className="bg-white py-14 px-6">
        <div className="container mx-auto grid md:grid-cols-4 gap-6 text-center">
          {[
            {
              Icon: Sun,
              title: "Renewable Energy",
              desc: "100% clean and sustainable energy directly from the sun.",
              color: "text-yellow-500",
            },
            {
              Icon: BatteryCharging,
              title: "Lower Bills",
              desc: "Reduce electricity costs with self-generated solar power.",
              color: "text-sky-600",
            },
            {
              Icon: Leaf,
              title: "Eco-Friendly",
              desc: "Minimize your carbon footprint and protect the environment.",
              color: "text-green-600",
            },
            {
              Icon: Building2,
              title: "For Homes & Industries",
              desc: "Perfect solution for residential, commercial, or industrial setups.",
              color: "text-sky-700",
            },
          ].map(({ Icon, title, desc, color }, i) => (
            <div
              key={i}
              className="p-6 shadow-md rounded-xl hover:shadow-lg transition bg-white"
            >
              <Icon className={`mx-auto ${color}`} size={38} />
              <h3 className="text-lg md:text-xl font-semibold mt-3">
                {title}
              </h3>
              <p className="text-gray-600 mt-2 text-sm md:text-base">{desc}</p>
            </div>
          ))}
        </div>
      </div>
{/* Types of Solar Power Systems Section */}
      <div className="bg-sky-50 py-16 px-6" id="solar-types">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-sky-700 mb-6">
            Types of Solar Power Systems
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-lg text-gray-700 mb-12">
            Depending on your energy needs, location, and grid access, you can
            choose between On-Grid, Off-Grid, or Hybrid solar systems. Each
            offers unique benefits and features.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* On-Grid System */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img
                src="/assets/ongrid.png"
                alt="On Grid Solar System"
  className="w-full h-auto object-contain"
              />
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2">
                  On-Grid Solar System
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-3">
                  Connected directly to the electricity grid. It allows you to
                  use solar power and send excess energy back to the grid
                  through <strong>net metering</strong>.
                </p>
                <ul className="text-gray-600 text-left list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>✔ Low installation cost (no batteries)</li>
                  <li>✔ Earn money from surplus electricity</li>
                  <li>❌ Does not work during power cuts</li>
                </ul>
              </div>
            </div>

            {/* Off-Grid System */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img
                src="/assets/offgrid.png"
                alt="Off Grid Solar System"
  className="w-full h-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2">
                  Off-Grid Solar System
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-3">
                  Works independently from the grid using{" "}
                  <strong>batteries</strong> to store solar power for later use
                  — perfect for remote areas or backup.
                </p>
                <ul className="text-gray-600 text-left list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>✔ Works during power cuts</li>
                  <li>✔ Full energy independence</li>
                  <li>❌ Higher cost due to batteries</li>
                </ul>
              </div>
            </div>

            {/* Hybrid System */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              <img
                src="/assets/hybridgrid.png"
                alt="Hybrid Solar System"
  className="w-full h-auto object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-semibold text-sky-700 mb-2">
                  Hybrid Solar System
                </h3>
                <p className="text-gray-700 text-sm md:text-base mb-3">
                  Combines the best of both worlds —{" "}
                  <strong>grid connection + battery backup</strong>. Use solar
                  power, store excess, and export the rest.
                </p>
                <ul className="text-gray-600 text-left list-disc pl-5 space-y-1 text-sm md:text-base">
                  <li>✔ Works during power cuts</li>
                  <li>✔ Battery + Grid combo for stability</li>
                  <li>❌ Slightly higher cost</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative my-14">
        <img
          src="/assets/solar2.png"
          alt="Solar Power Plant"
          className="w-full h-[380px] object-cover rounded-none md:rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-2xl md:text-3xl font-semibold">
          Powering a Brighter Tomorrow
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center py-14 bg-sky-600 text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to Install a Solar Power Plant?
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
