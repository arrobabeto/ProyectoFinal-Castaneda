import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../services/products.js';
import ItemList from '../components/ItemList.jsx';

export default function ItemListContainer() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetcher = categoryId
      ? () => getProductsByCategory(categoryId)
      : getProducts;

    fetcher()
      .then(res => setProducts(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) {
    return <p>Cargando catálogo...</p>;
  }

  return (
    <div>
      <h1>{categoryId ? `Categoría: ${categoryId}` : 'Catálogo completo'}</h1>
      <ItemList products={products} />
    </div>
  );
}