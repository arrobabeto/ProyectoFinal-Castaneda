import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';

export default function CartWidget() {
  const { getTotalQty } = useCart();
  return (
    <Link to="/cart">
      � {getTotalQty()}
    </Link>
  );
}
