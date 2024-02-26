import React from 'react'
import ProductContainer from './ProductContainer/ProductContainer';

export default function Product() {
  return (
    <div className='products'>
          <div className="title">Related deals you might like for</div>
          <ProductContainer/>
    </div>
  );
}
