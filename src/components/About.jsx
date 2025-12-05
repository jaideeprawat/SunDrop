import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50"
      style={{
        paddingTop: "60px",
        paddingBottom: "60px",
        backgroundColor: "#f8fafc",
      }}
    >
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl">

        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            marginBottom: 16,
            fontSize: "32px",
            fontWeight: "800",
            color: "#0f172a",
          }}
        >
          About Aquaray Solar Solutions
        </h2>

        {/* Description */}
        <p
          style={{
            textAlign: "center",
            margin: "0 auto",
            marginBottom: 24,
            fontSize: "16px",
            lineHeight: "26px",
            color: "#475569",
            maxWidth: "780px",
          }}
        >
          Aquaray Solar Solutions is a trusted solar energy company delivering
          high-quality, affordable, and sustainable on-grid and off-grid solar
          systems. We help homes and businesses reduce electricity bills, achieve
          energy independence, and shift to clean renewable power with ease.
          Our focus is simple — premium installations, transparent pricing, and
          long-term customer support.
        </p>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {[
  {
    title: "Innovative Solar Solutions",
    desc: "We bring cutting-edge solar technology tailored for homes and businesses."
  },
  {
    title: "Affordable & Transparent",
    desc: "Competitive pricing with no hidden costs — sustainable energy within reach."
  },
  {
    title: "Customer-Focused Support",
    desc: "From installation to maintenance, we are committed to your satisfaction."
  }
]
.map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <h3
                style={{
                  textAlign: "center",
                  marginBottom: 10,
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#facc15",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  textAlign: "center",
                  fontSize: "15px",
                  color: "#475569",
                  lineHeight: "22px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
