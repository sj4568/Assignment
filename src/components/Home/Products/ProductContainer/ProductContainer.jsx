import React from 'react'
import ProductCard from './ProductCard/ProductCard'

export default function ProductContainer() {
  return (
    <div className='product-container'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
}
