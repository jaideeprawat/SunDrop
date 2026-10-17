import { useState } from "react";
import {
  Sun,
  ShieldCheck,
  BadgeCheck,
  Phone,
  Zap,
} from "lucide-react";

export default function AquraySolarLanding() {
  const [selectedBrand, setSelectedBrand] = useState("");

  const brands = [
    "Adani Solar",
    "Tata Power Solar",
    "Waaree",
    "Luminous",
    "Havells",
    "Microtek",
    "ReNew",
    "Eastman",
  ];

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* HERO */}

      <section className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <div>
              <span className="bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold text-sm">
                AQURAY SOLAR SOLUTION
              </span>

              <h1 className="text-5xl font-bold mt-6 leading-tight">
                Reduce Your Electricity Bill With Smart Solar Rooftop Solutions
              </h1>

              <p className="mt-6 text-lg text-slate-300">
                Compare top solar brands, choose your preferred kit and get a
                free site survey from our expert team.
              </p>

              <div className="flex gap-4 mt-8 flex-wrap">
                <button className="bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold">
                  Get Free Quote
                </button>

                <button className="border border-white px-6 py-3 rounded-xl">
                  Book Site Survey
                </button>
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1509391366360-2e959784a276"
                alt="solar"
                className="rounded-3xl shadow-2xl"
              />
            </div>

          </div>
        </div>
      </section>

      {/* TRUST */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Why Choose Aquray Solar Solution
        </h2>

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-3xl p-6 shadow">
            <BadgeCheck className="text-green-600" size={40} />
            <h3 className="font-bold mt-4">15+ Installations</h3>
            <p className="text-slate-500 mt-2">
              Successfully completed projects.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <Sun className="text-yellow-500" size={40} />
            <h3 className="font-bold mt-4">Top Brands</h3>
            <p className="text-slate-500 mt-2">
              Multiple trusted solar options.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <ShieldCheck className="text-blue-600" size={40} />
            <h3 className="font-bold mt-4">Warranty Support</h3>
            <p className="text-slate-500 mt-2">
              Long-term customer assistance.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 shadow">
            <Zap className="text-orange-500" size={40} />
            <h3 className="font-bold mt-4">Free Survey</h3>
            <p className="text-slate-500 mt-2">
              Personalized solar planning.
            </p>
          </div>

        </div>
      </section>

      {/* BRAND SELECTOR */}

      <section className="bg-white py-20">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Choose Your Preferred Solar Brand
          </h2>

          <p className="text-center text-slate-500 mt-3">
            Select your favorite brand and get a customized quotation.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => setSelectedBrand(brand)}
                className={`rounded-3xl p-8 border-2 transition-all text-left
                ${
                  selectedBrand === brand
                    ? "border-green-500 bg-green-50"
                    : "border-slate-200 hover:border-yellow-400"
                }`}
              >
                <h3 className="font-bold text-lg">{brand}</h3>

                <p className="text-slate-500 mt-2">
                  Click to select this brand.
                </p>
              </button>
            ))}

          </div>

          {selectedBrand && (
            <div className="bg-green-100 text-green-700 mt-10 p-4 rounded-xl text-center font-semibold">
              Selected Brand: {selectedBrand}
            </div>
          )}

        </div>

      </section>

      {/* PROJECTS */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-4xl font-bold text-center">
          Recent Installations
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          {[1, 2, 3,4].map((item) => (
            <div
              key={item}
              className="bg-slate-200 h-72 rounded-3xl flex items-center justify-center"
            >
              Project Photo {item}
            </div>
          ))}

        </div>

      </section>

      {/* FORM */}

      <section className="bg-slate-900 text-white py-20">

        <div className="max-w-3xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center">
            Book Free Site Survey
          </h2>
          <div className="bg-white text-black rounded-3xl p-8 mt-10">

\
            <div className="grid gap-4">

              <input
                className="border rounded-xl p-3"
                placeholder="Your Name"
              />

              <input
                className="border rounded-xl p-3"
                placeholder="Mobile Number"
              />

              <input
                className="border rounded-xl p-3"
                placeholder="City"
              />

              <input
                className="border rounded-xl p-3"
                value={selectedBrand}
                placeholder="Selected Brand"
                readOnly
              />

              <button className="bg-yellow-400 text-black py-4 rounded-xl font-bold">
                Get Solar Recommendation
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/919999999999"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg"
      >
        <Phone />
      </a>

    </div>
  );
}