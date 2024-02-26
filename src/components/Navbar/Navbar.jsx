import React from 'react'
import SearchBar from './SearchBar/SearchBar'
import NavLinks from './NavLinks/NavLinks'

export default function Navbar() {
  return (
    <div className='navbar'>
         
              <SearchBar />
              <NavLinks/>
         
    </div>
  )
}
