import React from 'react'
import LinkShow from './LinkShow/LinkShow';

export default function Footer() {
    const catagoris = {
      title: "Categories",
      links: ["Web Builder", "Hosting", "Data Center", "Robotic-Automation"],
    };
    const Contact = {
      title: "Contact",
      links: [
        "Contact",
        "Privacy Policy",
        "Terms Of Service",
        "Categories",
        "About",
      ],
    };
  return (
    <div className="footer">
      <LinkShow data={catagoris} />
      <LinkShow data={Contact} />
      <div>
        <select name="" id="" className='menu'>
          <option value="">United States</option>
        </select>
      </div>
    </div>
  );
}
