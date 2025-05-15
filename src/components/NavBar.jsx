import React from 'react';
import { NavLink } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';

export default function NavBar() {
  const categories = ['Seiko', 'Tissot', 'Longines'];
  return (
    <nav>
      <div className="nav-links">
        <NavLink to="/">Todos</NavLink>
        {categories.map(c => (
          <NavLink key={c} to={`/category/${c}`}>{c}</NavLink>
        ))}
      </div>
      <div className="nav-cart">
        <CartWidget />
      </div>
    </nav>
  );
}