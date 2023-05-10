import React from 'react';
import propTypes from 'prop-types';

import { BsFillCartPlusFill } from 'react-icons/bs';
import './ProductCard.css';
import formatCurrency from '../../utils/formatCurrency';

function ProductCard({ data }) {
  const { title, thumbnail, price } = data;

  return (
    <section className="w-full max-w-xs bg-white flex flex-col cursor-pointer my-0 mx-auto relative hover:shadow-lg product-card">
      <img 
        src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')}
        alt="product" 
        className="w-full" 
      />
      <div className="p-5 border-t border-solid border-neutral-200">
        <h2 className="text-3xl font-normal block mb-3">{formatCurrency(price, 'BRL')}</h2>
        <h2 className="text-base font-medium text-black/50">{title}</h2>
      </div>
      <button type="button" className="absolute top-0 right-0 w-11 h-11 mx-4 my-3 text-cart hidden items-center justify-center rounded-full bg-white/80 text-2xl cursor-pointer button__add-cart">
        <BsFillCartPlusFill />
      </button>
    </section>
  );
}

export default ProductCard;

ProductCard.propTypes = {
  data: propTypes.shape({

  }),
}.isRequired;
