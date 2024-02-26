import React from 'react'
import { Link } from 'react-router-dom'

export default function LinkShow({ data }) {
    const title = data?.title
    const links = data?.links
    const LinkData = links?.map(link => {
        return <span className="links">{link }</span>
    })
  return (
    <div className='linkshow'>
          <h1 className='title'>{title}</h1>
          <div className='links'>
              {LinkData}
          </div>
    </div>
  )
}
