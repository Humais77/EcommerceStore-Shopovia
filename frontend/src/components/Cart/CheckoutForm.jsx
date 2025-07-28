// import React, { useState } from 'react'
// import { useStripe, useElements } from '@stripe/react-stripe-js';
// import { PaymentElement } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//     const stripe = useStripe();
//     const elements = useElements();

//     const [message,setMessage] = useState(null);
//     const [isProcessing, setIsProcessing] = useState(false);
//     const handleSubmit =async(e)=>{
//         e.preventDefault();

//         if(!stripe || !elements){
//             return;
//         }
//         setIsProcessing(true);

//         const {error,paymentIntent} = await stripe.confirmPayment({
//             elements,
//             confirmParams:{
//                 return_url:`${window.location,origin}/completion`

//             },
//             redirect: 'if_required',
//         });
//         if(error){
//             setMessage(error.message);

//         }else if(paymentIntent && paymentIntent.status ==='succeeded'){
//             setMessage("Payment status: "+paymentIntent.status+"Hey")

//         }else{
//             setMessage("Unexpected State")
//         }
//         setIsProcessing(false);
//     };
//   return (
//     <form id='payment-form' onSubmit={handleSubmit}>
//         <PaymentElement/>
//         <button disabled={isProcessing} id='submit'>
//             <span id='button-text'>
//                 {isProcessing ? "Processing..." : "Pay Now"}
//             </span>
//         </button>
//         {message && <div id='payment-message'>{message}</div>}
//     </form>
//   )
// }

// export default CheckoutForm
// correct
// import React, { useState } from 'react';
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [message, setMessage] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!stripe || !elements) {
//       return;
//     }

//     setIsProcessing(true);

//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: `${window.location.origin}/completion`,  // Fixed typo here
//       },
//       redirect: 'if_required',
//     });

//     if (error) {
//       setMessage(error.message);
//     } else if (paymentIntent && paymentIntent.status === 'succeeded') {
//       setMessage(`✅ Payment successful: ${paymentIntent.status}`);
//     } else {
//       setMessage('⚠️ Unexpected payment state');
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <form id="payment-form" onSubmit={handleSubmit} className="max-w-md mx-auto p-4 bg-white rounded shadow space-y-4">
//       <PaymentElement />
//       <button
//         disabled={isProcessing || !stripe || !elements}
//         id="submit"
//         className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
//       >
//         <span id="button-text">
//           {isProcessing ? 'Processing...' : 'Pay Now'}
//         </span>
//       </button>
//       {message && <div id="payment-message" className="text-center text-red-500">{message}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;

// CheckoutForm.jsx
// import React, { useState } from 'react';
// import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

// const CheckoutForm = ({ onPaymentSuccess }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [message, setMessage] = useState(null);
//   const [isProcessing, setIsProcessing] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!stripe || !elements) return;

//     setIsProcessing(true);

//     const { error, paymentIntent } = await stripe.confirmPayment({
//       elements,
//       confirmParams: {
//         return_url: `${window.location.origin}/completion`

//       },
//       redirect: "if_required"
//     });
    


//     if (error) {
//       setMessage(error.message);
//     } else if (paymentIntent.status === 'succeeded') {
//        onPaymentSuccess(paymentIntent);
//       window.location.href = '/completion';
//     } else {
//       setMessage("Unexpected payment state.");
//     }

//     setIsProcessing(false);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <PaymentElement />
//       <button
//         disabled={isProcessing}
//         className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
//       >
//         {isProcessing ? "Processing..." : "Pay Now"}
//       </button>
//       {message && <div className="mt-4 text-red-600">{message}</div>}
//     </form>
//   );
// };

// export default CheckoutForm;
import React, { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';

const CheckoutForm = ({ onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`, // used only if redirect is needed
      },
      redirect: "if_required"
    });

    if (error) {
      setMessage(error.message);
    } else if (paymentIntent && paymentIntent.status === 'succeeded') {
      // ✅ Trigger the payment success handler
      await onPaymentSuccess(paymentIntent); // will handle redirection
    } else {
      setMessage("Unexpected payment status. Please try again.");
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button
        disabled={isProcessing || !stripe || !elements}
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
      >
        {isProcessing ? "Processing..." : "Pay Now"}
      </button>
      {message && <div className="mt-4 text-red-600">{message}</div>}
    </form>
  );
};

export default CheckoutForm;


