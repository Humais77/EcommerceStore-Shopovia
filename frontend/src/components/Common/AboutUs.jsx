import React from "react";
import featured from "../../assets/featured.webp"; // Replace with your image path

const AboutUs = () => {

  return (
<div className="w-full bg-white text-black">
  {/* Hero Section */}
  <section className="w-full h-[70vh] relative">
    <img
      src={featured}
      alt="About Us"
      className="w-full h-full object-cover object-center"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
      <h1 className="text-white text-5xl md:text-7xl font-extrabold tracking-wide uppercase">
        About Us
      </h1>
    </div>
  </section>

  {/* Content Section */}
  <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12">
    {/* Left: Text */}
    <div className="flex flex-col justify-center">
      <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
        Fashion Meets Purpose
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        At <span className="font-semibold text-black">Rabbait</span>, fashion isn't just what we wear — it's how we define ourselves. Our collections blend timeless elegance with street-smart energy, capturing the spirit of a new generation.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        We celebrate individuality, creativity, and fearless style through curated pieces that push boundaries without sacrificing comfort.
      </p>
      <p className="text-gray-700 leading-relaxed">
        Designed for bold spirits and modern icons — our clothes empower you to own your look, your voice, and your future.
      </p>
    </div>

    {/* Right: Highlighted Quote */}
    <div className="bg-gray-100 p-10 flex items-center justify-center rounded-2xl shadow-md">
      <blockquote className="text-2xl md:text-3xl font-bold italic text-center text-gray-800">
        “Style is a way to say who you are without having to speak.”
      </blockquote>
    </div>
  </section>

  {/* Footer Statement */}
  <div className="text-center py-12 bg-black text-white">
    <h3 className="text-xl font-medium tracking-widest uppercase">
      Driven by Vision. Defined by Style.
    </h3>
  </div>
</div>
  );
};

export default AboutUs;

