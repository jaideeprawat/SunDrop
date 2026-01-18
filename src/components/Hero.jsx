import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // for arrow icons

// const images = [
//      process.env.PUBLIC_URL +"/assets/solar1.png",
//    process.env.PUBLIC_URL +"/assets/solar2.png",
//    process.env.PUBLIC_URL +"/assets/solar3.png",
// ];
const images = [
  process.env.PUBLIC_URL + "/assets/solar1.png",
  process.env.PUBLIC_URL + "/assets/solar2.png",
  process.env.PUBLIC_URL + "/assets/solar3.png",
];


const Hero = () => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  // Scroll to current image
  useEffect(() => {
    if (sliderRef.current) {
      const width = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: width * current,
        behavior: "smooth",
      });
    }
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-gray-100">
      {/* Image container */}
      <div
        ref={sliderRef}
        className="flex overflow-hidden h-full snap-x snap-mandatory scroll-smooth"
      >
        {images.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full relative">
            <img
              src={src}
              alt={`${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-4xl font-bold">
              Sustainable Solar Energy
            </div>
          </div>
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
      >
        <ChevronLeft size={28} />
      </button>

      {/* Right Button */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 hover:bg-black/60 p-3 rounded-full text-white"
      >
        <ChevronRight size={28} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === i ? "bg-white" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
