import React from 'react'
import { CiSearch } from "react-icons/ci";
export default function SearchBar() {
  return (
      <div className='searchBox'>
          <div className='search-icons'><CiSearch/></div>
      <input type="text" className='inputBox'  />
    </div>
  )
}
