import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const categories = ['Seiko', 'Tissot', 'Longines'];
  return (
    <nav>
      <NavLink to="/">Todos</NavLink>
      {categories.map(c => (
        <NavLink key={c} to={`/category/${c}`}>{c}</NavLink>
      ))}
    </nav>
  );
}