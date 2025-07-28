// import React from 'react'
// import { IoLogoInstagram } from 'react-icons/io'
// import { RiTwitterXLine } from 'react-icons/ri'
// import { TbBrandMeta } from 'react-icons/tb'
// import { Link } from 'react-router-dom'
// import { FiPhoneCall} from 'react-icons/fi'

// const Footer = () => {
//   return (
//     <footer className='border-t py-12'>
//         <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0'>
//             <div>
//                 <h3 className='text-lg text-gray-800 mb-4'>NewsLetter</h3>
//                 <p className='text-gray-500 mb-4'>
//                     Be the first to hear about new products, exclusive events, and online offer.
//                 </p>
//                 <p className='font-medium text-sm text-gray-600 mb-6'>
//                     Sign up and get 10% off your first order.
//                 </p>
//                 <form className='flex'>
//                     <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border border-l border-b border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all ' required />
//                     <button type='submit' className='bg-black text-white px-6 py-3 text-sm rounded-r-md hover:bg-gray-800 transition-all'>Subscribe</button>
//                 </form>
//             </div>
//             <div >
//                 <h3 className='text-lg text-gray-800 mb-4 '>Shop</h3>
//                 <ul className='space-y-2 text-gray-600 '>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>Men's Top Wear</Link>
//                     </li>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>Women's Top Wear</Link>
//                     </li>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>Men's Bottom Wear</Link>
//                     </li>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>Women's Bottom Wear</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div >
//                 <h3 className='text-lg text-gray-800 mb-4 '>Support</h3>
//                 <ul className='space-y-2 text-gray-600 '>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>Contact Us</Link>
//                     </li>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>About Us</Link>
//                     </li>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>FAQs</Link>
//                     </li>
//                     <li>
//                         <Link to="#" className='hover:text-gray-500 transition-colors '>Features</Link>
//                     </li>
//                 </ul>
//             </div>
//             <div>
//                 <h3 className='text-lg text-gray-800 mb-4 '>Follow Us</h3>
//                 <div className='flex items-center space-x-4 mb-6'>
//                     <a href="https://www.facebook.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
//                         <TbBrandMeta className='h-5 w-5'/>
                    
//                     </a>
//                     <a href="https://www.instagram.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
//                         <IoLogoInstagram className='h-5 w-5'/>
                    
//                     </a>
//                     <a href="https://www.twitter.com" target='_blank' rel='noopener noreferrer' className='hover:text-gray-300'>
//                         <RiTwitterXLine className='h-4 w-4'/>
                    
//                     </a>
//                 </div>
//                 <p className='text-gray-500'>Call Us</p>
//                 <p>
//                     <FiPhoneCall className='inline-block mr-2 '/>0123-456-789
//                 </p>
//             </div>

//         </div>
//         <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-gray-200 pt-6'>
//             <p className='text-gray-500 text-sm tracking-tighter text-center'>&copy; 2025, Humais. All Rights Reserved.</p>
//         </div>
//     </footer>
//   )
// }

// export default Footer




// sfsffs
// import React from "react";
// import { IoLogoInstagram } from "react-icons/io";
// import { RiTwitterXLine } from "react-icons/ri";
// import { TbBrandMeta } from "react-icons/tb";
// import { FiPhoneCall } from "react-icons/fi";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 15 },
//   visible: (delay = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: { delay, duration: 0.5, ease: "easeOut" },
//   }),
// };

// const socialLinks = [
//   { icon: TbBrandMeta, url: "https://www.facebook.com", label: "Facebook" },
//   { icon: IoLogoInstagram, url: "https://www.instagram.com", label: "Instagram" },
//   { icon: RiTwitterXLine, url: "https://www.twitter.com", label: "Twitter" },
// ];

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-gray-300 py-16">
//       <motion.div
//         className="container mx-100 px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         {/* Newsletter */}
//         <motion.div variants={fadeInUp} custom={0}>
//           <h3 className="uppercase tracking-widest text-sm mb-6 font-semibold text-white">
//             Newsletter
//           </h3>
//           <p className="mb-6 leading-relaxed text-gray-400">
//             Subscribe to get exclusive offers and updates.
//           </p>
//           <form className="flex justify-center md:justify-start">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="rounded-full px-5 py-3 w-full max-w-xs text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
//               required
//             />
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               type="submit"
//               className="ml-3 bg-indigo-600 hover:bg-indigo-700 transition text-white rounded-full px-6 font-semibold"
//             >
//               Subscribe
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* Quick Links */}
//         <motion.div variants={fadeInUp} custom={1} className="space-y-8">
//           <div>
//             <h3 className="uppercase tracking-widest text-sm mb-4 font-semibold text-white">
//               Shop
//             </h3>
//             <ul className="space-y-3">
//               {["Men's Top Wear", "Women's Top Wear", "Men's Bottom Wear", "Women's Bottom Wear"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to="#"
//                     className="hover:text-white transition-colors font-medium"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h3 className="uppercase tracking-widest text-sm mb-4 font-semibold text-white">
//               Support
//             </h3>
//             <ul className="space-y-3">
//               {["Contact Us", "About Us", "FAQs", "Features"].map((item) => (
//                 <li key={item}>
//                   <Link
//                     to="#"
//                     className="hover:text-white transition-colors font-medium"
//                   >
//                     {item}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </motion.div>

//         {/* Social & Contact */}
//         <motion.div variants={fadeInUp} custom={2} className="flex flex-col items-center md:items-start">
//           <h3 className="uppercase tracking-widest text-sm mb-6 font-semibold text-white">
//             Follow Us
//           </h3>
//           <div className="flex space-x-6 mb-8">
//             {socialLinks.map(({ icon: Icon, url, label }, i) => (
//               <motion.a
//                 key={i}
//                 href={url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 aria-label={label}
//                 whileHover={{ scale: 1.3, boxShadow: "0 0 8px rgba(99,102,241,0.7)" }}
//                 whileTap={{ scale: 0.9 }}
//                 className="p-3 rounded-full bg-gray-800 hover:bg-indigo-600 transition-colors text-indigo-400"
//               >
//                 <Icon className="w-6 h-6" />
//               </motion.a>
//             ))}
//           </div>

//           <div className="text-center md:text-left">
//             <p className="uppercase tracking-widest text-sm font-semibold mb-3 text-white">
//               Contact Us
//             </p>
//             <p className="flex items-center justify-center md:justify-start gap-2 text-indigo-400 font-medium text-lg">
//               <FiPhoneCall className="w-5 h-5" /> 0123-456-789
//             </p>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Bottom Bar */}
//       <motion.div
//         className="mt-16 border-t border-gray-700 pt-6 text-center text-gray-500 text-sm select-none"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.6 }}
//         viewport={{ once: true, amount: 0.3 }}
//       >
//         &copy; 2025 Humais. All Rights Reserved.
//       </motion.div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandMeta } from "react-icons/tb";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.6, ease: "easeOut" },
  }),
};

const socialLinks = [
  { icon: TbBrandMeta, url: "https://www.facebook.com", label: "Facebook" },
  { icon: IoLogoInstagram, url: "https://www.instagram.com", label: "Instagram" },
  { icon: RiTwitterXLine, url: "https://www.twitter.com", label: "Twitter" },
];

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-rose-700 via-pink-700 to-fuchsia-800 text-white pt-20 pb-10 px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 bg-white/5 backdrop-blur-sm border border-pink-500/30 rounded-3xl p-10 shadow-2xl"
      >
        {/* Newsletter */}
        <motion.div variants={fadeInUp} custom={0}>
          <h3 className="uppercase font-bold tracking-widest mb-4 text-sm text-pink-100">
            Stay Connected
          </h3>
          <p className="text-pink-200 mb-6">
            Sign up for exclusive updates and offers.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-l-full px-5 py-3 w-full text-gray-900 bg-white border border-fuchsia-300 focus:outline-none"
              required
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="rounded-r-full bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold px-6 transition"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={fadeInUp} custom={0.2} className="md:pl-6">
          <div className="mb-8">
            <h3 className="uppercase font-bold tracking-widest mb-4 text-sm text-pink-100">
              Explore
            </h3>
            <ul className="space-y-2 text-pink-200">
              {["New Arrivals", "Best Sellers", "Gift Cards", "Stores"].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-white transition font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="uppercase font-bold tracking-widest mb-4 text-sm text-pink-100">
              Customer Care
            </h3>
            <ul className="space-y-2 text-pink-200">
              {["Help Center", "Track Order", "Returns", "Terms & Privacy"].map((item) => (
                <li key={item}>
                  <Link to="#" className="hover:text-white transition font-medium">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Social & Contact */}
        <motion.div variants={fadeInUp} custom={0.4} className="flex flex-col items-center md:items-start">
          <h3 className="uppercase font-bold tracking-widest mb-4 text-sm text-pink-100">
            Follow Us
          </h3>
          <div className="flex space-x-5 mb-6">
            {socialLinks.map(({ icon: Icon, url, label }, i) => (
              <motion.a
                key={i}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                className="p-3 bg-fuchsia-700 hover:bg-fuchsia-600 rounded-full text-white transition"
              >
                <Icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
          
          
        </motion.div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-sm text-pink-300 mt-12"
      >
        &copy; 2025 <span className="font-semibold text-white">Shopovia</span>. All rights reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;

