import React from 'react'
import Header from '../../Home/Header/Header';
import Services from '../../Home/Services/Services';
import Product from '../../Home/Products/Product';
import SignUp from '../../Home/SignUp/SignUp';

export default function Home() {
  return (
    <div className='home'>
      <Header />
      <Services />
      <Product />
      <SignUp/>
    </div>
  );
}
