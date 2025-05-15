import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemList({ products }) {
  return (
    <div className="product-grid">
      {products.map(p => (
        <div key={p.id} className="product-card">
          {/* Si tienes URLs de imagen, agrégalas aquí */}
          {/* <img src={p.imageUrl} alt={p.title} /> */}
          <h3>{p.title}</h3>
          <p>${p.price}</p>
          <Link to={`/item/${p.id}`} className="detail-button">Ver detalle</Link>
        </div>
      ))}
    </div>
  );
}