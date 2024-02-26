import React from 'react'

export default function Options() {
    const optionsArr = [
      "Tools",
      "AWS Builder",
      "Start Build",
      "Build Supplies",
      "Tooling",
      "BlueHosting",
    ];
    const options = optionsArr.map(option => {
        return <div className='option'>{option}</div>
    })
  return (
    <div className='options'>
    {options}
    </div>
  )
}
