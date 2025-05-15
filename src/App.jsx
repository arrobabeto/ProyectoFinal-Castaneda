import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import CartWidget from './components/CartWidget.jsx';
import ItemListContainer from './containers/ItemListContainer.jsx';
import ItemDetailContainer from './containers/ItemDetailContainer.jsx';
import Cart from './containers/Cart.jsx';
import CheckoutForm from './components/CheckoutForm.jsx';
import { CartProvider } from './context/CartContext.jsx';
import './styles/app.css';


export default function App() {
  return (
    <CartProvider>
      <NavBar />
   <Routes>  

        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<CheckoutForm />} />
        <Route path="*" element={<h2>404: Página no encontrada</h2>} />
      </Routes>
    </CartProvider>
  );
}