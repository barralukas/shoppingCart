import React, { useEffect, useContext } from 'react';

import fetchProducts from '../../api/fetchProducts';
import ProductCard from '../ProductCard/ProductCard';
import Loading from '../Loading/Loading';
import AppContext from '../../context/AppContext';

function Products() {
  const { products, setProducts, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    fetchProducts('ssd').then((response) => {
      setProducts(response);
      setLoading(false);
    });
  }, []);
  
  return (
    (loading && <Loading />) || 
    (<section className="pt-32 pr-5 pb-12 grid grid-cols-products gap-5 container">
      {
        products.map((product) => <ProductCard key={product.id} data={product} />)
      }
    </section>)
  );
}

export default Products;
