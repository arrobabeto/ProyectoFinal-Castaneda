import React, { useState } from 'react';

export default function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  return (
    <div>
      <button onClick={() => count>1 && setCount(count-1)}>–</button>
      <span>{count}</span>
      <button onClick={() => count<stock && setCount(count+1)}>+</button>
      <button onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
}