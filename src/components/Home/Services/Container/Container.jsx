import React from 'react'
import Content from './Content/Content'
import HighLight from './Content/HighLight/HighLight';
import { FaTrophy } from 'react-icons/fa';
import { IoDiamondOutline } from "react-icons/io5";
export default function Container() {
  const ContentArr = [
    {
      shortName: "Biulder",
      companyName: "WixPro 72-Inch Responsive Website Builder",
      companyDetails:
        "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highLight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      point: 9.8,
      compliment: "Excilent",
      star: 5,
      badge: {
        icon: <FaTrophy />,
        text: "Best Choice",
      },
    },
    {
      shortName: "Builder 1",
      companyName: "SiteCraft 68-Inch Ultimate Web Design Studio",
      companyDetails:
        "Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
      highLight:
        "[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
      point: 9.3,
      compliment: "Excilent",
      star: 5,
      badge: {
        icon: <IoDiamondOutline />,
        text: "Best Value",
      },
    },
    {
      shortName: "Biulder",
      companyName: "WixPro 72-Inch Responsive Website Builder",
      companyDetails:
        "- Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
      highLight:
        "[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
      point: 9.5,
      compliment: "Excilent",
      star: 5,
    },
    {
      shortName: "CDK",
      companyName: "CDK Resposive Builder: ",
      companyDetails:
        " An extensive library of widgets and apps, and detailed step-by-step guides",
      highLight: <HighLight />,
      point: 9.5,
      compliment: "Excilent",
      star: 5,
    },
  ];
  const arr = ContentArr.map((data,index)=> {
    return <Content content={data} index={index + 1} />
  })
  return (
    <div className='container'>
   {arr}
    </div>
  );
}
