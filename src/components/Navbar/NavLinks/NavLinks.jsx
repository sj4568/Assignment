import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function NavLinks() {
    const linksArr = ["Categories", "Website Builders", "Today's deals"];
    const links = linksArr.map(link => {
        return <span className='link'>{link}</span>
    })

  return (
    <div className='navlink'>
    {links}
    </div>
  )
}
