import React, { useState, useEffect } from 'react';

import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts('ssd').then((response) => {
      setProducts(response);
    });
  }, []);
  
  return (
    <section className="pt-32 pr-5 pb-12 grid grid-cols-products gap-5 container">
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
    </section>
  );
}

export default Products;
