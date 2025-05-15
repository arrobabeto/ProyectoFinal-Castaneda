import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount.jsx';
import { useCart } from '../context/CartContext.jsx';

export default function ItemDetail({ product }) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return <p>Cargando...</p>;
  if (product.stock === 0) {
    return <p>Lo sentimos, este producto está agotado.</p>;
  }

  const handleAdd = qty => { addItem(product, qty); setAdded(true); };

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {added
        ? <Link to="/cart">Ir al carrito</Link>
        : <ItemCount stock={product.stock} initial={1} onAdd={handleAdd} />
      }
    </div>
  );
}