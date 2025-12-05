import React from "react";

const SolarWaterHeater = () => {
  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-600 via-blue-100 to-white text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">Solar Water Heater</h1>
        <p className="mt-4 text-lg text-blue-50">
          Eco-friendly water heating powered by sunlight
        </p>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          What is a Solar Water Heater?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed">
          A Solar Water Heater (SWH) captures energy from the sun to heat water
          for residential, commercial, or industrial use. It helps reduce
          electricity consumption, lower carbon emissions, and ensures a
          consistent supply of hot water throughout the year.
        </p>
      </section>

      {/* How It Works Section */}
      <section className="py-12 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-blue-700 mb-4">
          How It Works
        </h2>
        <p className="max-w-3xl mx-auto text-gray-700 mb-8 leading-relaxed">
          Solar collectors absorb sunlight and convert it into heat. This heat
          warms up the water flowing through copper tubes, which is then stored
          in an insulated tank. The hot water remains ready for use, even during
          non-sunny hours.
        </p>
        <img
          src="/assets/solar-water-heater.png"
          alt="Solar Water Heater working diagram"
          className="mx-auto rounded-2xl shadow-lg max-w-2xl"
        />
      </section>

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

      {/* Call to Action Section */}
      <section className="bg-blue-600 text-white text-center py-12">
        <h2 className="text-3xl font-semibold">
          Interested in Installing a Solar Water Heater?
        </h2>
        <p className="mt-3 text-lg">
          Contact us for a free consultation and personalized quote today!
        </p>
        <button className="mt-6 bg-yellow-400 text-blue-800 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-all">
          Get Quote
        </button>
      </section>
    </div>
  );
};

export default SolarWaterHeater;
