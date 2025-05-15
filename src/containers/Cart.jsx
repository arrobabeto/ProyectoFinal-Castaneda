import React from 'react';
import CartItem from '../components/CartItem.jsx';
import { useCart } from '../context/CartContext.jsx';
import { Link } from 'react-router-dom';

export default function Cart() {
  const { cartItems, removeItem, getTotalPrice, clearCart } = useCart();
  if (cartItems.length===0) return <div>Carrito vacío. <Link to="/">Volver</Link></div>;
  return (
    <div>
      {cartItems.map(item=>(<CartItem key={item.id} item={item} onRemove={removeItem}/>))}
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout">Checkout</Link>
    </div>
  );
}