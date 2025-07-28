// import { loadStripe } from '@stripe/stripe-js';
// import { useEffect, useState } from 'react';
// import CheckoutForm from './CheckoutForm';
// import { Elements } from '@stripe/react-stripe-js'

// const Payment = () => {
//   const [stripePromise, setStripePromise] = useState(null);
//   const [clientSecret, setClientSecret] = useState("");

//   useEffect(() => {
//     fetch('http://localhost:5234/config')  // <-- point to backend port
//       .then(async (r) => {
//         const { publishableKey } = await r.json();
//         setStripePromise(loadStripe(publishableKey));
//       })
//   }, []);


//   useEffect(() => {
//     fetch('http://localhost:5234/create-payment-intent', {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({}) // Include any required data here
//     })
//       .then(async (r) => {
//         const { clientSecret } = await r.json();
//         setClientSecret(clientSecret);
//       })
//       .catch((error) => {
//         console.error("Error fetching payment intent:", error);
//       });
//   }, []);


//   return (
//     <div>
//       <h1>React Strip</h1>
//       {stripePromise && clientSecret && (
//         <Elements stripe={stripePromise} options={{ clientSecret }}>
//           <CheckoutForm />

//         </Elements>
//       )}

//     </div>
//   );
// };

// export default Payment;

// Payment.jsx
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const Payment = () => {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch the publishable key from the backend
    fetch('http://localhost:5234/config')
      .then(async (res) => {
        const { publishableKey } = await res.json();
        setStripePromise(loadStripe(publishableKey));
      });
  }, []);

  useEffect(() => {
    // Create a payment intent on the server
    fetch('http://localhost:5234/create-payment-intent', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({}) // Add order/cart data if needed
    })
      .then(async (res) => {
        const { clientSecret } = await res.json();
        setClientSecret(clientSecret);
      })
      .catch((error) => {
        console.error("Error fetching payment intent:", error);
      });
  }, []);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Payment</h1>
      {stripePromise && clientSecret ? (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      ) : (
        <p>Loading payment form...</p>
      )}
    </div>
  );
};

export default Payment;
