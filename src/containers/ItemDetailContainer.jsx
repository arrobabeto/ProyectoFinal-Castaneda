import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../services/products.js';
import ItemDetail from '../components/ItemDetail.jsx';

export default function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getProductById(itemId)
      .then(res => setProduct(res))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) {
    return <p>Cargando detalles...</p>;
  }

  return <ItemDetail product={product} />;
}