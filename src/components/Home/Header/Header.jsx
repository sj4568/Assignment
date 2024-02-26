import React from 'react'
import Update from './Update/Update';
import Options from './Options/Options';

export default function Header() {
  return (
    <header className='header'>
          <div className="headline">Best Website builders in the US</div>
          <Update />
          <Options/>
    </header>
  );
}
