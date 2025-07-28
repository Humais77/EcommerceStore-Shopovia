import { motion } from "framer-motion";

const sliderVariants = {
  initial: {
    x: "100vw",
    opacity: 0,
    scale: 0.96,
  },
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1], // Ease-out cubic-bezier for smoothness
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    scale: 0.96,
    transition: {
      duration: 0.45,
      ease: [0.65, 0, 0.35, 1],
    },
  },
};

const PageWrapper = ({ children, animate = true }) => {
  return animate ? (
    <motion.div
      variants={sliderVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="min-h-screen will-change-transform"
    >
      {children}
    </motion.div>
  ) : (
    <>{children}</>
  );
};

export default PageWrapper;
