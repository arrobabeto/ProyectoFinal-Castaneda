import React, { useState } from 'react';
import { createOrder } from '../services/orders.js';
import { useCart } from '../context/CartContext.jsx';

export default function CheckoutForm() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [buyer, setBuyer] = useState({ name: '', email: '', address: '' });
  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState(null);

  const validate = () => {
    const errs = {};
    if (!buyer.name) errs.name = 'El nombre es requerido';
    if (!/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(buyer.email)) errs.email = 'Email inválido';
    if (!buyer.address) errs.address = 'La dirección es requerida';
    return errs;
  };

  const handleChange = e => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    const id = await createOrder({ buyer, items: cartItems, total: getTotalPrice(), date: new Date() });
    setOrderId(id);
    clearCart();
  };

  if (orderId) {
    return <h2>¡Compra confirmada! Tu orden: {orderId}</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input name="name" placeholder="Nombre" value={buyer.name} onChange={handleChange} />
        {errors.name && <p className="error">{errors.name}</p>}
      </div>
      <div>
        <input name="email" type="email" placeholder="Email" value={buyer.email} onChange={handleChange} />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <input name="address" placeholder="Dirección" value={buyer.address} onChange={handleChange} />
        {errors.address && <p className="error">{errors.address}</p>}
      </div>
      <button type="submit">Confirmar compra</button>
    </form>
  );
}