import React from 'react';

export default function CartItem({ item, onRemove }) {
  return (
    <div>
      <h4>{item.title}</h4>
      <p>Cantidad: {item.qty}</p>
      <p>Subtotal: ${item.qty * item.price}</p>
      <button onClick={() => onRemove(item.id)}>Eliminar</button>
    </div>
  );
}