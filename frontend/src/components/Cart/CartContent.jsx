// CartContent.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { RiDeleteBin3Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateToCartItemQuantity } from "../../../redux/slices/cartSlice";

const CartContent = ({ cart, userId, guestId }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (productId, delta, quantity, size, color) => {
    const newQuantity = quantity + delta;
    if (newQuantity >= 1) {
      dispatch(updateToCartItemQuantity({
        productId,
        quantity: newQuantity,
        guestId,
        userId,
        size,
        color,
      }));
    }
  };

  const handleRemoveFromCart = (productId, size, color) => {
    dispatch(removeFromCart({ productId, guestId, userId, size, color }));
  };

  return (
    <AnimatePresence>
      {cart.products.map((product,index) => (
        <motion.div
          key={
            product.productId && product.size && product.color
              ? `${product.productId}-${product.size}-${product.color}`
              : `${index}-${product.name || 'unknown'}`
          }
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100, transition: { duration: 0.3 } }}
          transition={{ type: "spring", damping: 15, stiffness: 200 }}
          className='flex items-start justify-between py-4 border-b border-rose-100'
        >
          <div className='flex items-center'>
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className='w-20 h-24 object-cover mr-4 rounded-lg border border-rose-200 shadow-sm'
                />
                {product.quantity > 1 && (
                  <motion.span
                    className="absolute -top-2 -right-2 bg-rose-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    {product.quantity}
                  </motion.span>
                )}
              </div>
            </motion.div>

            <div className='text-sm'>
              <h3 className="font-medium text-rose-900">{product.name}</h3>
              <p className="text-xs text-rose-600">Size: {product.size} | Color: {product.color}</p>

              <div className='flex items-center mt-2'>
                <motion.button
                  onClick={() => handleAddToCart(product.productId, -1, product.quantity, product.size, product.color)}
                  className='border border-rose-200 text-rose-700 rounded px-3 py-1 font-medium bg-rose-50'
                  whileHover={{ scale: 1.1, backgroundColor: "#fecdd3" }}
                  whileTap={{ scale: 0.9 }}
                >
                  -
                </motion.button>

                <motion.span
                  className='mx-4 w-6 text-center text-rose-900 font-medium'
                  key={product.quantity}
                  initial={{ scale: 1.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  {product.quantity}
                </motion.span>

                <motion.button
                  onClick={() => handleAddToCart(product.productId, +1, product.quantity, product.size, product.color)}
                  className='border border-rose-200 text-rose-700 rounded px-3 py-1 font-medium bg-rose-50'
                  whileHover={{ scale: 1.1, backgroundColor: "#fecdd3" }}
                  whileTap={{ scale: 0.9 }}
                >
                  +
                </motion.button>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <p className="font-medium text-rose-900">${product.price.toLocaleString()}</p>
            <motion.button
              onClick={() => handleRemoveFromCart(product.productId, product.size, product.color)}
              className='mt-2'
              whileHover={{ scale: 1.2, color: "#e11d48" }}
              whileTap={{ scale: 0.8 }}
            >
              <RiDeleteBin3Line className='h-5 w-5 text-rose-500 hover:text-rose-700' />
            </motion.button>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
};

export default CartContent;