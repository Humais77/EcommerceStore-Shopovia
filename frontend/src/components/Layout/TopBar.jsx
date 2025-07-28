// import { TbBrandMeta } from 'react-icons/tb';
// import { IoLogoInstagram } from 'react-icons/io';
// import { RiTwitterXLine } from 'react-icons/ri';

// const TopBar = () => {
//   return (
//     <div className='bg-red-600 text-white'>
//         <div className='container mx-auto flex justify-between items-start py-3 px-4 '>
//             <div className='hidden md:flex items-center space-x-4 '>
//                 <a href="#" className='hover:text-gray-300'>
//                     <TbBrandMeta className='h-5 w-5'/>
//                 </a>
//                 <a href="#" className='hover:text-gray-300'>
//                     <IoLogoInstagram className='h-5 w-5'/>
//                 </a>
//                 <a href="#" className='hover:text-gray-300'>
//                     <RiTwitterXLine className='h-4 w-4'/>
//                 </a>
//             </div>
//             <div className='text-sm text-center flex-grow '>
//                 <span >We ship worldwide - Fast and reliable shipping</span>
//             </div>
//             <div className='text-sm hidden md:block'>
//                 <a href="tel:+1234567890" className='hower:text-gray-300'>
//                     +1 (234) 567-890
//                 </a>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default TopBar

// tesing
import { Link, useNavigate } from "react-router-dom";
import twitter from '../../assets/icons/twitter.svg';
import facebook from '../../assets/icons/facebook.svg';
import instagram from '../../assets/icons/instagram.svg';
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/slices/authSlice";
import { clearCart } from "../../../redux/slices/cartSlice";

const TopBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <div className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 relative z-10 text-white text-sm shadow">
      <div className="container mx-auto flex justify-between items-center py-3 px-4 relative z-10">

        {/* Left Navigation with Slide Animation */}
        <div className="flex items-center space-x-8 font-medium">
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({ ...pv, opacity: 0 }));
            }}
            className="relative flex w-fit rounded-full border border-white/30 bg-white/10 p-1"
          >
            {[
              { label: "Home", to: "/" },
              { label: "About", to: "/about" },
              { label: "Contact", to: "/ContactPage" },
              { label: "Blog", to: "/blog" },
            ].map(({ label, to }) => (
              <Tab key={label} setPosition={setPosition} to={to}>
                {label}
              </Tab>
            ))}

            <Cursor position={position} />
          </ul>
        </div>

        {/* Social Icons + Sign In */}
        <div className="flex items-center space-x-3">
          <a href="#" className="flex items-center justify-center bg-white/10 hover:bg-white/20 p-2 w-8 h-8 rounded-full transition transform hover:-translate-y-1 shadow-sm">
            <img src={facebook} alt="facebook" className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center justify-center bg-white/10 hover:bg-white/20 p-2 w-8 h-8 rounded-full transition transform hover:-translate-y-1 shadow-sm">
            <img src={instagram} alt="Instagram" className="w-5 h-5" />
          </a>
          <a href="#" className="flex items-center justify-center bg-white/10 hover:bg-white/20 p-2 w-8 h-8 rounded-full transition transform hover:-translate-y-1 shadow-sm">
            <img src={twitter} alt="Twitter" className="w-5 h-5" />
          </a>

          <div className=" text-purple-800 hidden md:flex items-center ml-4 pl-4 border-l border-white/50">
            {user ? (
              <button
                onClick={handleLogout}
                className="bg-white text-pink-600 hover:bg-pink-100 font-medium px-4 py-1.5 rounded-full text-sm transition-all shadow-sm hover:shadow-md"
              >
                Sign Out
              </button>
            ) : (
              <Link
                to="/login"
                className="bg-white text-pink-600 hover:bg-pink-100 font-medium px-4 py-1.5 rounded-full text-sm transition-all shadow-sm hover:shadow-md"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Tab = ({ children, setPosition, to }) => {
  const ref = useRef(null);

  return (
    <Link
      ref={ref}
      to={to}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-2.5 md:text-base"
    >
      {children}
    </Link>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-10"
    />
  );
};

export default TopBar;
