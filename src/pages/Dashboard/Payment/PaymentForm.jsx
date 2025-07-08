import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setError(error.message);
      setSuccess('');
    } else {
      setError('');
      setSuccess('Payment method created successfully!');
      console.log("💳 PaymentMethod:", paymentMethod);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='space-y-4 p-6 bg-white rounded-xl shadow-md w-full max-w-md mx-auto'>
        <CardElement className='p-2 border rounded' />
        
        <button 
          type='submit' 
          className='btn btn-primary w-full text-black'
          disabled={!stripe}
        >
          Pay for parcel pickup
        </button>

        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}
      </form>
    </div>
  );
};

export default PaymentForm;
