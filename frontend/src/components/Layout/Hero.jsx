// import { Link } from "react-router-dom"
// import heroImg from "../../assets/rabbit-hero.webp"
// // import image from "../../assets/image.png"
// import header_img from '../../assets/images/header_img.png'

// const Hero = () => {
//   return (
//     <section className="relative">
//         {/* <img src={heroImg} alt="Rabbit" className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover" /> */}
//         <img src="https://asimjofa.com/cdn/shop/files/Desktop_Banner_shop_now_revised.jpg?v=1750752692&width=1500" alt="Rabbit" className="w-full h-[300px] md:h-[500px] lg:h-[650px] object-cover" />
//         <div className="absolute inset-0 bg-black bg-opacity-5 flex items-center justify-center">
//             <div className="text-center text-white p-6">
//                 <h1 className="text-4xl md:text-9xl font-bold tracking-tighter uppercase mb-4">Vacation <br /> Ready</h1>
//                 <p className="text-sm tracking-tighter md:text-lg mb-6">
//                     Explore our vacation-ready outfits with fast worldwide shipping.
//                 </p>
//                 <Link to="#" className="bg-white text-gray-950 px-6 py-2 rounded-sm text-lg">Shop Now</Link>
//             </div>
//         </div>
//     </section>
//   )
// }

// export default Hero
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bannerData = [
  {
    id: 1,
    image: "https://charcoal.com.pk/cdn/shop/files/Web_Banner_Desk_54_ae679acc-6069-40b7-bcd9-573676ce9e0d.webp?v=1750053955&width=1400" ,
    link: "/collections/all?gender=Men",
  },
  {
    id: 2,
    image: "https://asimjofa.com/cdn/shop/files/Desktop_Banner_shop_now_revised.jpg?v=1750752692&width=1500",
    link: "/collections/all?gender=Women",
  },
  {
    id: 3,
    image: "https://diners.com.pk/cdn/shop/files/Ethnic-web-Banner_1880x.webp?v=1750506262",
    link: "/collections/all?gender=Men",
  },
  {
    id: 4,
    image: "https://asimjofa.com/cdn/shop/files/Web-Banner_c7b285cf-1f57-49cd-ba70-7d32ae095ea1.webp?v=1750414676&width=1400",
    link: "/collections/all?gender=Women",
  },
  {
    id: 5,
    image: "https://turbobrandsfactory.com/cdn/shop/files/BANNER22.jpg?v=1750673705&width=1400" ,
    link: "/collections/all?gender=Men",
  },
  {
    id: 6,
    image: "https://asimjofa.com/cdn/shop/files/Shop_Now_Desktop_Banner----_copy.jpg?v=1748863712&width=1400" ,
    link: "/collections/all?gender=Women",
  },
];


const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(currentIndex);
      setCurrentIndex((prev) => (prev + 1) % bannerData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <section className="w-full h-[300px] md:h-[500px] lg:h-[650px] relative overflow-hidden">
      {bannerData.map((item, index) => (
        <motion.div
          key={item.id}
          className="w-full h-full absolute top-0 left-0 cursor-pointer"
          style={{
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: index === currentIndex ? 10 : 0,
            opacity: index === currentIndex ? 1 : 0,
          }}
          initial={{ opacity: 0, x: 100 }}
          animate={index === currentIndex ? { opacity: 1, x: 0 } : { opacity: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          onClick={() => window.location.href = item.link}
        />
      ))}
    </section>
  );
};

export default Hero;
