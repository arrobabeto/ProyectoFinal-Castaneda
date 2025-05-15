import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItem = (item, qty) => {
    setCartItems(prev => {
      const existing = prev.find(ci => ci.id === item.id);
      if (existing) return prev.map(ci => ci.id===item.id ? {...ci, qty: ci.qty+qty} : ci);
      return [...prev, { ...item, qty }];
    });
  };
  const removeItem = id => setCartItems(prev => prev.filter(ci => ci.id!==id));
  const clearCart = () => setCartItems([]);
  const getTotalQty = () => cartItems.reduce((sum,ci)=>sum+ci.qty,0);
  const getTotalPrice = () => cartItems.reduce((sum,ci)=>sum+ci.qty*ci.price,0);

  return (
    <CartContext.Provider value={{ cartItems, addItem, removeItem, clearCart, getTotalQty, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() { return useContext(CartContext); }