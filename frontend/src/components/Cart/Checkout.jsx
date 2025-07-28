
// import React, { useEffect, useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import CheckoutForm from './CheckoutForm';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { createCheckout } from "../../../redux/slices/checkoutslice";
// import axios from 'axios';




// const Checkout = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const { cart, loading, error } = useSelector((state) => state.cart);
//   const { user } = useSelector((state) => state.auth);
//   const [shippingAddress, setShippingAddress] = useState({
//     firstname: "",
//     lastname: "",
//     address: "",
//     city: "",
//     postalCode: "",
//     country: "",
//     phone: ""
//   });


//   const [isProcessing, setIsProcessing] = useState(false);
//   const [stripePromise, setStripePromise] = useState(null);
//   const [clientSecret, setClientSecret] = useState("");
//   const [checkoutId, setCheckoutId] = useState(null);


//   useEffect(() => {
//     if (!cart || !cart.products || cart.products.length === 0) {
//       navigate("/");
//     }
//   }, [cart, navigate]);

//   const handleCreatedCheckout = async (e) => {
//     e.preventDefault();
//     setIsProcessing(true);

//     try {
//       const keyRes = await fetch('http://localhost:5234/config');
//       const { publishableKey } = await keyRes.json();
//       const stripe = await loadStripe(publishableKey);
//       setStripePromise(stripe);

//       const intentRes = await fetch('http://localhost:5234/create-payment-intent', {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({})
//       });
//       const { clientSecret } = await intentRes.json();
//       setClientSecret(clientSecret);

//     } catch (err) {
//       console.error("Payment setup error:", err);
//     }

//     setIsProcessing(false);
//     if (cart && cart.products.length > 0) {
//       const res = dispatch(createCheckout({
//         checkoutItems: cart.products,
//         shippingAddress,
//         paymentMethod: "Stripe",
//         totalPrice: cart.totalPrice,
//       }));
//       if (res.payload && res.payload._id) {
//         setStripePromise(res.payload._id);
//         setCheckoutId(res.payload._id);
//       }
//     }
//   };
//   const handlePaymentSuccess = async (Details) => {
//     try {
//       const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}pay`, {
//         paymentStatus: "paid", paymentDetails: {
//           id: paymentIntent.id,
//           method: 'stripe',
//           status: 'succeeded'
//         }

//       },
//         {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//           },
//         }
//       );
//       if (response.status === 200) {
//         await handleFinalizeCheckout(checkoutId);
//       } else {
//         console.error(error);

//       }
//     } catch (error) {
//       console.error(error);

//     }
//   };
//   const handleFinalizeCheckout = async (checkoutId) => {
//     try {
//       const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`, {}, {
//         headers: {
//           Authorization: `Bearer ${localStorage.getItem("userToken")}`,
//         },
//       });
//       if (response.status === 200) {
//         navigate("/completion");
//       } else {
//         console.error(error);
//       }
//     } catch (error) {
//       console.error(error);
//     }

//   }
//   if (loading) return <p>Loading cart ...</p>
//   if (error) return <p>Error: {error}</p>;
//   if (!cart || !cart.products || cart.products.length === 0) {
//     return <p>Your Cart is empty</p>
//   }

//   return (
//     <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
//       <div className='bg-white rounded-lg p-8'>
//         <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
//         <form onSubmit={handleCreatedCheckout}>
//           <h3 className='text-lg mb-4'>Contact Details</h3>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//               <input
//                 type="email"
//                 value={user ? user.email : ""}
//                 className="w-full p-2 rounded bg-gray-100 text-gray-800 focus:outline-none cursor-not-allowed"
//                 disabled
//               />
//             </div>
//           </div>


//           <h3 className="text-xl mb-4 ">Delivery</h3>

//           <div className="mb-4 grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">First Name</label>
//               <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//                 <input
//                   type="text"
//                   value={shippingAddress.firstname}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, firstname: e.target.value })
//                   }
//                   className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-700">Last Name</label>
//               <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//                 <input
//                   type="text"
//                   value={shippingAddress.lastname}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, lastname: e.target.value })
//                   }
//                   className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Address</label>
//             <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//               <input
//                 type="text"
//                 value={shippingAddress.address}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, address: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4 grid grid-cols-2 gap-4">
//             <div>
//               <label className="block text-gray-700">City</label>
//               <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//                 <input
//                   type="text"
//                   value={shippingAddress.city}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, city: e.target.value })
//                   }
//                   className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-gray-700">Postal Code</label>
//               <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//                 <input
//                   type="text"
//                   value={shippingAddress.postalCode}
//                   onChange={(e) =>
//                     setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
//                   }
//                   className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">County</label>
//             <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//               <input
//                 type="text"
//                 value={shippingAddress.country}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, country: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
//                 required
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label className="block text-gray-700">Phone</label>
//             <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
//               <input
//                 type="text"
//                 value={shippingAddress.phone}
//                 onChange={(e) =>
//                   setShippingAddress({ ...shippingAddress, phone: e.target.value })
//                 }
//                 className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
//                 required
//               />
//             </div>
//           </div>

//           <div className='mt-6'>
//             {!clientSecret ? (
//               <button type='submit' className='w-full bg-black text-white py-3 rounded'>
//                 {isProcessing ? 'Processing...' : 'Continue to Payment'}
//               </button>
//             ) : null}
//           </div>
//         </form>
//         {stripePromise && clientSecret && (
//           <div className="mt-6">
//             <Elements stripe={stripePromise} options={{ clientSecret }}>
//               <CheckoutForm onPaymentSuccess={handlePaymentSuccess} />
//             </Elements>
//           </div>
//         )}
//       </div>
//       <div className='bg-gray-50 p-6 rounded-lg'>
//         <h3 className='text-lg mb-4'>Order Summary</h3>
//         <div className='border-t py-4 mb-4'>
//           {cart.products.map((product, index) => (
//             <div key={index} className='flex items-start justify-between py-2 border-b' >
//               <div className='flex items-start'>
//                 <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4' />
//                 <div >
//                   <h3 className='text-md'>{product.name}</h3>
//                   <p className='text-gray-500'>Size: {product.size}</p>
//                   <p className='text-gray-500'>Color: {product.color}</p>
//                 </div>
//               </div>
//               <p className='tex-wl '>${product.price?.toLocaleString()}</p>
//             </div>
//           ))}
//         </div>
//         <div className='flex justify-between items-center text-lg mb-4'>
//           <p>Subtotal</p>
//           <p>${cart.totalPrice?.toLocaleString()}</p>
//         </div>
//         <div className='flex justify-between items-center text-lg'>
//           <p>Shipping</p>
//           <p>Free</p>
//         </div>
//         <div className='flex justify-between items-center text-lg mt-4 border-t pt-4'>
//           <p>Total</p>
//           <p>${cart.totalPrice?.toLocaleString()}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createCheckout } from "../../../redux/slices/checkoutslice";
import axios from 'axios';




const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart, loading, error } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const [shippingAddress, setShippingAddress] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: ""
  });


  const [isProcessing, setIsProcessing] = useState(false);
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const [checkoutId, setCheckoutId] = useState(null);


  useEffect(() => {
    if (!cart || !cart.products || cart.products.length === 0) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleCreatedCheckout = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // First create checkout
      if (cart && cart.products.length > 0) {
        const res = await dispatch(createCheckout({
          checkoutItems: cart.products,
          shippingAddress,
          paymentMethod: "Stripe",
          totalPrice: cart.totalPrice,
        }));

        if (res.payload && res.payload._id) {
          setCheckoutId(res.payload._id);  // Set checkout ID first

          // Then setup Stripe
          const keyRes = await fetch('http://localhost:5234/config');
          const { publishableKey } = await keyRes.json();
          const stripe = await loadStripe(publishableKey);
          setStripePromise(stripe);

          // Create payment intent with actual amount
          const intentRes = await fetch('http://localhost:5234/create-payment-intent', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              amount: cart.totalPrice * 100 // Convert to cents
            })
          });
          const { clientSecret } = await intentRes.json();
          setClientSecret(clientSecret);
        }
      }
    } catch (err) {
      console.error("Payment setup error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handlePaymentSuccess = async (paymentIntent) => {
    try {
      // Create checkout in DB after successful payment
      const res = await dispatch(createCheckout({
        checkoutItems: cart.products,
        shippingAddress,
        paymentMethod: "Stripe",
        totalPrice: cart.totalPrice,
      }));

      const createdCheckout = res.payload;
      setCheckoutId(createdCheckout._id);

      // Update checkout status to paid
      const response = await axios.put(`${import.meta.env.VITE_BACKEND_URL}/api/checkout/${createdCheckout._id}/pay`, {
        paymentStatus: "paid",
        paymentDetails: {
          id: paymentIntent.id,
          method: 'stripe',
          status: 'succeeded'
        }
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userToken")}`,
        },
      });

      if (response.status === 200) {
        await handleFinalizeCheckout(createdCheckout._id);
      } else {
        console.error("Payment update failed", response);
      }

    } catch (error) {
      console.error("Payment success handling failed:", error);
    }
  };

  const handleFinalizeCheckout = async (checkoutId) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/api/checkout/${checkoutId}/finalize`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userToken")}`,
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        navigate("/completion");
      } else {
        console.error("Finalize checkout failed:", response);
      }
    } catch (err) {
      console.error("Finalize checkout error:", err);
    }
  };

  if (loading) return <p>Loading cart ...</p>
  if (error) return <p>Error: {error}</p>;
  if (!cart || !cart.products || cart.products.length === 0) {
    return <p>Your Cart is empty</p>
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
      <div className='bg-white rounded-lg p-8'>
        <h2 className='text-2xl uppercase mb-6'>Checkout</h2>
        <form onSubmit={handleCreatedCheckout}>
          <h3 className='text-lg mb-4'>Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
              <input
                type="email"
                value={user ? user.email : ""}
                className="w-full p-2 rounded bg-gray-100 text-gray-800 focus:outline-none cursor-not-allowed"
                disabled
              />
            </div>
          </div>


          <h3 className="text-xl mb-4 ">Delivery</h3>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">First Name</label>
              <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
                <input
                  type="text"
                  value={shippingAddress.firstname}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, firstname: e.target.value })
                  }
                  className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Last Name</label>
              <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
                <input
                  type="text"
                  value={shippingAddress.lastname}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, lastname: e.target.value })
                  }
                  className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, address: e.target.value })
                }
                className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
                <input
                  type="text"
                  value={shippingAddress.city}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, city: e.target.value })
                  }
                  className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Postal Code</label>
              <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
                <input
                  type="text"
                  value={shippingAddress.postalCode}
                  onChange={(e) =>
                    setShippingAddress({ ...shippingAddress, postalCode: e.target.value })
                  }
                  className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
                  required
                />
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">County</label>
            <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, country: e.target.value })
                }
                className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Phone</label>
            <div className="p-[2px] rounded bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500">
              <input
                type="text"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({ ...shippingAddress, phone: e.target.value })
                }
                className="w-full p-2 rounded bg-white text-gray-800 focus:outline-none"
                required
              />
            </div>
          </div>

          <div className='mt-6'>
            {!clientSecret ? (
              <button type='submit' className='w-full bg-black text-white py-3 rounded'>
                {isProcessing ? 'Processing...' : 'Continue to Payment'}
              </button>
            ) : null}
          </div>
        </form>
        {stripePromise && clientSecret && (
          <div className="mt-6">
            <Elements stripe={stripePromise} options={{ clientSecret }}>
              <CheckoutForm onPaymentSuccess={handlePaymentSuccess} />
            </Elements>
          </div>
        )}
      </div>
      <div className='bg-gray-50 p-6 rounded-lg'>
        <h3 className='text-lg mb-4'>Order Summary</h3>
        <div className='border-t py-4 mb-4'>
          {cart.products.map((product, index) => (
            <div key={index} className='flex items-start justify-between py-2 border-b' >
              <div className='flex items-start'>
                <img src={product.image} alt={product.name} className='w-20 h-24 object-cover mr-4' />
                <div >
                  <h3 className='text-md'>{product.name}</h3>
                  <p className='text-gray-500'>Size: {product.size}</p>
                  <p className='text-gray-500'>Color: {product.color}</p>
                </div>
              </div>
              <p className='tex-wl '>${product.price?.toLocaleString()}</p>
            </div>
          ))}
        </div>
        <div className='flex justify-between items-center text-lg mb-4'>
          <p>Subtotal</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
        <div className='flex justify-between items-center text-lg'>
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className='flex justify-between items-center text-lg mt-4 border-t pt-4'>
          <p>Total</p>
          <p>${cart.totalPrice?.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
