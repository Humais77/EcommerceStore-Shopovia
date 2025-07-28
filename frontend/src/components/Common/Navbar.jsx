import { Link } from "react-router-dom";
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight, } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { useState } from "react";
import { useSelector } from "react-redux";
import bag from '../../assets/bag.png'
import Logo2 from '../../assets/Logo2.png'

const navItemVariant = {
  hidden: { opacity: 0, y: -10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: "spring",
      stiffness: 100,
    },
  }),
};

const Navbar = () => {
  const [drawerOpen, SetDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);
  const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
  const toggleCartDrawer = () => SetDrawerOpen(!drawerOpen);
  const navLinks = ["Men", "Women", "Top Wear", "Bottom Wear"];
  const { cart } = useSelector((state) => state.cart);
  const cartItemCount = cart?.products?.reduce((total, product) => total + product.quantity, 0) || 0;
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="container mx-auto flex items-center justify-between py-4 px-6 relative z-50">
        <div className="hidden md:flex space-x-6">
          <div>
            <Link
              to="/collections/all?gender=Men"
              className=" group relative text-gray-600 hover:text-black text-lg font-semibold uppercase tracking-wide transition-all duration-200"
            >
              Men
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
          <div>
            <Link
              to="/collections/all?gender=Women"
              className="group relative text-gray-600 hover:text-black text-lg   font-semibold uppercase tracking-wide transition-all duration-200"
            >
              Women
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>
          <div></div>
        </div>

        <div>
          <Link
            to="/"
            className="text-3xl font-bold tracking-wide text-gray-900 hover:text-black transition-all duration-300"
          >
        
            <img
              src={Logo2}
              alt="Logo"
              className="h-10 w-auto object-contain my-0"
            />

          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            {user && user.role === "admin" && (
              <Link to="/admin" className="md:inline bg-rose-500 hover:bg-rose-600 text-white text-sm px-3 py-1 rounded-full transition">
                Admin
              </Link>
            )}
          </motion.div>

          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to="/profile" className="hover:text-black">
              <HiOutlineUser className="h-6 w-6 text-gray-700" />
            </Link>
          </motion.div>

          <motion.button
            onClick={toggleCartDrawer}
            whileHover={{ scale: 1.1 }}
            className="relative hover:text-black"
            aria-label="Open cart"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">{cartItemCount}</span>
            )}
          </motion.button>

          <div className="overflow-hidden ">
            <SearchBar />
          </div>

          <motion.button
            onClick={toggleNavDrawer}
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            aria-label="Toggle nav drawer"
          >
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </motion.button>
        </div>
      </div>

      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleCartDrawer}
        />
      )}

      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: navDrawerOpen ? 0 : "-100%" }}
        transition={{ type: "spring", stiffness: 90 }}
        className="fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-xl z-50"
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="/collections/all?gender=Men"
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black text-base transition relative group"
            >
              Men
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
            <Link
              to="/collections/all?gender=Women"
              onClick={toggleNavDrawer}
              className=" block text-gray-600 hover:text-black text-base transition relative group"
            >
              Women
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
            </Link>
          </nav>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;





// second choics
// import { Link } from "react-router-dom";
// import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomRight } from "react-icons/hi2";
// import SearchBar from "./SearchBar";
// import CartDrawer from "../Layout/CartDrawer";
// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//   const [drawerOpen, SetDrawerOpen] = useState(false);
//   const [navDrawerOpen, setNavDrawerOpen] = useState(false);

//   const toggleNavDrawer = () => {
//     setNavDrawerOpen(!navDrawerOpen);
//   };

//   const toggleCartDrawer = () => {
//     SetDrawerOpen(!drawerOpen);
//   };

//   // Framer Motion variants
//   const navDrawerVariants = {
//     hidden: { x: "-100%" },
//     visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
//     exit: { x: "-100%", transition: { ease: "easeInOut", duration: 0.3 } },
//   };

//   const backdropVariants = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 0.4, transition: { duration: 0.3 } },
//     exit: { opacity: 0, transition: { duration: 0.3 } },
//   };


//   const hoverScale = { scale: 1.1 };
//   const tapScale = { scale: 0.95 };

//   // Common underline hover class for menu links
//   const underlineHoverClass =
//     "relative w-fit after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-black after:transition-all hover:after:w-full";


//   return (
//     <>
//       <nav className="container mx-auto flex items-center justify-between py-4 px-6">
//         {/* Logo with hover scale */}
//         <motion.div whileHover={hoverScale} whileTap={tapScale} className="cursor-pointer">
//           <Link to="/" className="text-2xl font-medium select-none">
//             Rabbait
//           </Link>
//         </motion.div>

//         {/* Desktop menu links with underline animation */}
//         <div className="hidden md:flex space-x-6">
//           <Link to="/collections/all" className={underlineHoverClass}>
//             Men
//           </Link>
//           <Link to="#" className={underlineHoverClass}>
//             Women
//           </Link>
//           <Link to="#" className={underlineHoverClass}>
//             Top Wear
//           </Link>
//           <Link to="#" className={underlineHoverClass}>
//             Bottom Wear
//           </Link>
//         </div>

//         <div className="flex items-center space-x-4">
//           {/* Admin button with framer motion hover */}
//           <motion.div whileHover={hoverScale} whileTap={tapScale}>
//             <Link to="/admin" className="block bg-black px-2 rounded text-sm text-white select-none">
//               Admin
//             </Link>
//           </motion.div>

//           {/* Profile icon with hover */}
//           <motion.div whileHover={hoverScale} whileTap={tapScale}>
//             <Link to="/profile" className="hover:text-black">
//               <HiOutlineUser className="h-6 w-6 text-gray-700" />
//             </Link>
//           </motion.div>

//           {/* Cart icon with hover */}
//           <motion.button
//             onClick={toggleCartDrawer}
//             className="relative hover:text-black focus:outline-none"
//             whileHover={hoverScale}
//             whileTap={tapScale}
//             aria-label="Open cart"
//           >
//             <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
//             <span className="absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5 select-none">
//               4
//             </span>
//           </motion.button>

//           {/* Search bar with slight scale on focus */}
//           <motion.div whileFocus={{ scale: 1.05 }} className="overflow-hidden">
//             <SearchBar />
//           </motion.div>

//           {/* Hamburger menu button with hover */}
//           <motion.button
//             onClick={toggleNavDrawer}
//             className="md:hidden focus:outline-none"
//             whileHover={hoverScale}
//             whileTap={tapScale}
//             aria-label="Open menu"
//           >
//             <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
//           </motion.button>
//         </div>
//       </nav>

//       {/* Cart Drawer and backdrop */}
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

//       {drawerOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 transition-opacity duration-300"
//           onClick={toggleCartDrawer}
//         />
//       )}


//       {/* Navigation drawer with animation */}
//       <AnimatePresence>
//         {navDrawerOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
//               onClick={toggleNavDrawer}
//               variants={backdropVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             />
//             <motion.div
//               className="fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-50"
//               variants={navDrawerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <div className="flex justify-end p-4">
//                 <button onClick={toggleNavDrawer} className="focus:outline-none" aria-label="Close menu">
//                   <IoMdClose className="h-6 w-6 text-gray-600" />
//                 </button>
//               </div>
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-4 select-none">Menu</h2>
//                 <nav className="grid gap-4">
//                   <Link to="/collections/men" onClick={toggleNavDrawer} className={underlineHoverClass}>
//                     Men
//                   </Link>
//                   <Link to="/collections/women" onClick={toggleNavDrawer} className={underlineHoverClass}>
//                     Women
//                   </Link>
//                   <Link to="/collections/top-wear" onClick={toggleNavDrawer} className={underlineHoverClass}>
//                     Top Wear
//                   </Link>
//                   <Link to="/collections/bottom-wear" onClick={toggleNavDrawer} className={underlineHoverClass}>
//                     Bottom Wear
//                   </Link>
//                 </nav>
//               </div>

//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
// import { Link } from "react-router-dom";
// import {
//   HiOutlineUser,
//   HiOutlineShoppingBag,
//   HiBars3BottomRight,
// } from "react-icons/hi2";
// import { IoMdClose } from "react-icons/io";
// import { motion, AnimatePresence } from "framer-motion";
// import SearchBar from "./SearchBar";
// import CartDrawer from "../Layout/CartDrawer";
// import { useState } from "react";

// const navItemVariant = {
//   hidden: { opacity: 0, y: -10 },
//   visible: (i) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.1,
//       type: "spring",
//       stiffness: 100,
//     },
//   }),
// };

// const drawerVariants = {
//   hidden: { x: "-100%" },
//   visible: { x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } },
//   exit: { x: "-100%", transition: { duration: 0.25 } },
// };

// const backdropVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 0.4, transition: { duration: 0.3 } },
//   exit: { opacity: 0, transition: { duration: 0.3 } },
// };

// const Navbar = () => {
//   const [drawerOpen, SetDrawerOpen] = useState(false);
//   const [navDrawerOpen, setNavDrawerOpen] = useState(false);
//   const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);
//   const toggleCartDrawer = () => SetDrawerOpen(!drawerOpen);
//   const navLinks = ["Men", "Women", "Top Wear", "Bottom Wear"];

//   return (
//     <>
//       {/* Main Navbar */}
//       <motion.nav
//         initial={{ y: -40, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ type: "spring", stiffness: 80 }}
//         className="container mx-auto flex items-center justify-between py-4 px-6 relative z-50"
//       >
//         {/* Left Links */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           className="hidden md:flex space-x-6"
//         >
//           {navLinks.map((link, i) => (
//             <motion.div key={link} variants={navItemVariant} custom={i}>
//               <Link
//                 to="/collections/all"
//                 className="group relative text-gray-600 hover:text-black text-sm font-semibold uppercase tracking-wide transition-all duration-200"
//               >
//                 {link}
//                 <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-black transition-all duration-300 group-hover:w-full" />
//               </Link>
//             </motion.div>
//           ))}
//         </motion.div>

//         {/* Logo */}
//         <motion.div
//           initial={{ scale: 0.8, opacity: 0 }}
//           animate={{ scale: 1, opacity: 1 }}
//           transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
//         >
//           <Link
//             to="/"
//             className="text-3xl font-bold tracking-wide text-gray-900 hover:text-black transition-all duration-300"
//           >
//             Rabbait
//           </Link>
//         </motion.div>

//         {/* Right Icons */}
//         <div className="flex items-center space-x-4">
//           <motion.div whileHover={{ scale: 1.05 }}>
//             <Link
//               to="/admin"
//               className="md:inline bg-rose-500 hover:bg-rose-600 text-white text-sm px-3 py-1 rounded-full transition"
//             >
//               Admin
//             </Link>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.1 }}>
//             <Link to="/profile" className="hover:text-black">
//               <HiOutlineUser className="h-6 w-6 text-gray-700" />
//             </Link>
//           </motion.div>

//           <motion.button
//             onClick={toggleCartDrawer}
//             whileHover={{ scale: 1.1 }}
//             className="relative hover:text-black"
//             aria-label="Open cart"
//           >
//             <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
//             <span className="absolute -top-1 bg-red-600 text-white text-xs rounded-full px-2 py-0.5">
//               4
//             </span>
//           </motion.button>

//           <div className="overflow-hidden">
//             <SearchBar />
//           </div>

//           {/* Hamburger Menu */}
//           <motion.button
//             onClick={toggleNavDrawer}
//             className="md:hidden"
//             whileHover={{ scale: 1.1 }}
//             aria-label="Toggle nav drawer"
//           >
//             <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
//           </motion.button>
//         </div>
//       </motion.nav>

//       {/* Cart Drawer */}
//       <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

//       {/* Backdrop for Cart */}
//       {drawerOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40 transition-opacity duration-300"
//           onClick={toggleCartDrawer}
//         />
//       )}

//       {/* Mobile Nav Drawer */}
//       <AnimatePresence>
//         {navDrawerOpen && (
//           <>
//             <motion.div
//               className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm z-40"
//               onClick={toggleNavDrawer}
//               variants={backdropVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             />
//             <motion.div
//               className="fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg z-50"
//               variants={drawerVariants}
//               initial="hidden"
//               animate="visible"
//               exit="exit"
//             >
//               <div className="flex justify-end p-4">
//                 <button onClick={toggleNavDrawer}>
//                   <IoMdClose className="h-6 w-6 text-gray-600" />
//                 </button>
//               </div>
//               <div className="p-4">
//                 <h2 className="text-xl font-semibold mb-4 select-none">Menu</h2>
//                 <nav className="space-y-4">
//                   {navLinks.map((link) => (
//                     <Link
//                       key={link}
//                       to="#"
//                       onClick={toggleNavDrawer}
//                       className="block text-gray-600 hover:text-black w-auto text-base transition relative group"
//                     >
//                       {link}
//                       <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full" />
//                     </Link>
//                   ))}
//                 </nav>
//               </div>
//             </motion.div>
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;



