// CartDrawer.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import CartContent from '../Cart/CartContent';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
    const navigate = useNavigate();
    const { user, guestId } = useSelector((state) => state.auth);
    const { cart } = useSelector((state) => state.cart);
    const userId = user ? user._id : null;

    const handleCheckout = () => {
        toggleCartDrawer();
        if (!user) {
            navigate('/login?redirect=checkout');
        } else {
            navigate('/checkout');
        }
    };

    return (
        <AnimatePresence>
            {drawerOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    onClick={toggleCartDrawer}
                />
            )}

            <motion.div
                className="fixed top-0 right-0 w-full sm:w-96 h-full bg-gradient-to-b from-white to-rose-50 shadow-2xl z-50 flex flex-col"
                initial={{ x: '100%' }}
                animate={{
                    x: drawerOpen ? 0 : '100%',
                    transition: {
                        type: "spring",
                        damping: 25,
                        stiffness: 300
                    }
                }}
                exit={{ x: '100%' }}
            >
                <div className='flex justify-between items-center p-4 border-b border-rose-100'>
                    <h2 className='text-xl font-bold'>Your Cart</h2>
                    <motion.button
                        onClick={toggleCartDrawer}
                        whileHover={{ scale: 1.1, rotate: 90 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-rose-600 hover:text-rose-800"
                    >
                        <IoMdClose className='h-6 w-6' />
                    </motion.button>
                </div>

                <div className='flex-grow p-4 overflow-y-auto'>
                    {cart && cart?.products?.length > 0 ? (
                        <CartContent cart={cart} userId={userId} guestId={guestId} />
                    ) : (
                        <motion.div
                            className="flex flex-col items-center justify-center h-full text-center py-12"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            {/* Shopping Bag SVG */}
                            <motion.div
                                initial={{ scale: 0.8, rotate: -8 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                                className="mb-6 p-6 rounded-full bg-gradient-to-br from-pink-400 via-rose-500 to-red-500 shadow-xl relative"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-20 w-20 text-white drop-shadow-md"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5 8h14l1 12H4L5 8zm5-4a2 2 0 00-2 2v2h2V6h6v2h2V6a2 2 0 00-2-2h-6z" />
                                </svg>

                                <motion.div
                                    className="absolute -top-1 -right-1 bg-white text-rose-500 p-1 rounded-full shadow-md"
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 animate-ping"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01" />
                                    </svg>
                                </motion.div>
                            </motion.div>


                            <h3 className="text-xl font-bold text-rose-800 mb-2">Your cart is empty</h3>
                            <p className="text-rose-600 mb-6 max-w-xs">Add some fashion treasures to your shopping bag</p>
                            <motion.button
                                onClick={toggleCartDrawer}
                                className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1, transition: { delay: 0.4 } }}
                            >
                                Start Shopping
                            </motion.button>
                        </motion.div>
                    )}
                </div>

                {cart && cart?.products?.length > 0 && (
                    <motion.div
                        className='p-4 bg-gradient-to-r from-rose-50 to-pink-50 border-t border-rose-100 sticky bottom-0'
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                    >
                        <div className="flex justify-between mb-4 text-rose-900">
                            <span className="font-medium">Subtotal</span>
                            <span className="font-bold">${cart.totalPrice?.toLocaleString()}</span>
                        </div>
                        <motion.button
                            onClick={handleCheckout}
                            className='w-full bg-gradient-to-r from-rose-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all shadow-md'
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Checkout
                        </motion.button>
                        <p className='text-xs text-rose-600 mt-2 text-center'>
                            Shipping, taxes, and discount codes calculated at checkout.
                        </p>
                    </motion.div>
                )}
            </motion.div>
        </AnimatePresence>
    );
};

export default CartDrawer;