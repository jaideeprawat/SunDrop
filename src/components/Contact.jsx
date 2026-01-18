import React, { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [notice, setNotice] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setNotice("⚠ Please fill all the details before sending.");
      return;
    }

    // Temporary notice instead of sending email
    setNotice(
      "📩 This email service is currently not active. Please contact us directly via phone: +91 7302528798 or email: aquaraysolar@zohomail.in"
    );

    // Optional: clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Let’s make your home or business solar-powered! Reach out for a quote, installation, or any solar queries.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            {[
              { icon: <MapPin className="text-yellow-500 w-7 h-7" />, title: "Visit Us", desc: "Lakshya Enclave, Banjarawala, Dehradun" },
              { icon: <Phone className="text-yellow-500 w-7 h-7" />, title: "Call Us", desc: "+91 7302528798" },
              { icon: <Mail className="text-yellow-500 w-7 h-7" />, title: "Email", desc: "aquaraysolar@zohomail.in" },
              { icon: <Clock className="text-yellow-500 w-7 h-7" />, title: "Working Hours", desc: "Mon - Sat: 9 AM - 6 PM" },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-4">
                {item.icon}
                <div>
                  <h4 className="font-semibold text-sky-800 mb-1">{item.title}</h4>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}

            {/* Social Links */}
            {/* Social Links */}
<div>
  <h4 className="font-semibold text-sky-800 mb-2">Follow Us</h4>
  <div className="flex space-x-4">
    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61584620100276"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-block", transition: "transform 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg"
        className="w-7 h-7"
        alt="Facebook"
        style={{ filter: "invert(35%) sepia(99%) saturate(2640%) hue-rotate(205deg) brightness(92%) contrast(93%)" }}
      />
    </a>

    {/* Instagram - Original Gradient */}
    <a
      href="https://www.instagram.com/aquaraysolar/"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-block", transition: "transform 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
        className="w-7 h-7"
        alt="Instagram"
      />
    </a>

    {/* WhatsApp */}
    <a
      href="https://wa.me/917302528798?text=Hello%20Aquaray%20Solar%20Solutions"
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-block", transition: "transform 0.2s" }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.2)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img
        src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg"
        className="w-7 h-7"
        alt="WhatsApp"
        style={{ filter: "invert(38%) sepia(96%) saturate(527%) hue-rotate(92deg) brightness(92%) contrast(91%)" }}
      />
    </a>
  </div>
</div>

          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-gray-200">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Message</label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your solar needs..."
                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0284c7]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#0284c7] text-white py-3 rounded-lg font-semibold hover:bg-[#facc15] transition-all duration-300"
            >
              Send Message
            </button>

            {notice && (
              <p className="text-yellow-600 font-semibold text-center mt-2">
                {notice}
              </p>
            )}
          </form>
        </div>

        {/* Map */}
        <div className="mt-16 rounded-xl overflow-hidden shadow-lg border border-gray-200">
          <iframe
            title="Aquaray Solar Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3445.5765359147454!2d78.0253685!3d30.2776446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929003c74e20f%3A0xfcd3d657e2ad0160!2sLakshya%20Enclave%20B%20Block%20Banjarawala.!5e0!3m2!1sen!2sin!4v1764816588026!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
