import React from 'react';
import { Link } from 'react-router-dom';

export default function ItemList({ products }) {
  return (
    <ul>
      {products.map(p => (
        <li key={p.id}>
          <Link to={`/item/${p.id}`}>{p.title} — ${p.price}</Link>
        </li>
      ))}
    </ul>
  );
}