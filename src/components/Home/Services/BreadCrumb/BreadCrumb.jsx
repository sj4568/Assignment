import React from 'react'

export default function BreadCrumb() {
    const breadData = [
      "Home",
      "Hosting for all",
      "Hosting",
      "Hosting6",
      "Hosting5",
    ];
    const breadArr = breadData.map((data,index) => {
        return index !== breadData.length - 1 ? <span>{data + " > "}</span> : <span>{data }</span>
    })
  return (
    <div className='breadcrumb'>
      {breadArr}
    </div>
  )
}
