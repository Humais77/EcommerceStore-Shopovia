import React from 'react';
import { Link } from 'react-router-dom';
import featured from "../../assets/featured.webp";
import image from "../../assets/image.png";
import { motion } from 'framer-motion';

const FeaturedCollection = () => {
  return (
    
    <section className="py-20 px-4 lg:px-0">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center rounded-3xl overflow-hidden shadow-md bg-gradient-to-r from-green-100 to-green-50">
        
        {/* Text Content */}
        <div className="lg:w-1/2 p-8 lg:p-16 text-center lg:text-left">
          <h3 className="text-sm uppercase tracking-wide text-green-600 font-semibold mb-2">
            Comfort and Style
          </h3>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Apparel made for your everyday life
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Explore our range of premium clothing designed to combine fashion and function effortlessly—so you can look good and feel even better, every single day.
          </p>
          <Link
            to="/collection/all"
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all"
          >
            Shop Now
          </Link>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <img
            src={image}
            alt="Featured Collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
