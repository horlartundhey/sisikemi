import React from 'react';
import Layout from '../components/Layout';
import CartLayout from '../components/Cart/CartLayout';
import CheckoutContent from '../components/CheckoutContent';

const Checkout = () => {
  return (
    <CartLayout>
      <CheckoutContent />
    </CartLayout>
  );
};

export default Checkout;
