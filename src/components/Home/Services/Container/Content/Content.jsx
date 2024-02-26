import React from 'react'
import image from "../../../../../assets/Images/Image.png"
import {FaStar, FaTrophy} from "react-icons/fa"
export default function Content({content,index}) {
  let Arr = []
  for (let i = 0; i < content?.star; i++)
  {
    Arr.push(<FaStar/>)
    }
  return (
    <div className="content">
      <div className="top">
        {content?.badge ? <div className="acivement">
          <div className="icon">
            {content?.badge?.icon}
            <span>{content?.badge?.text}</span>
          </div>
        </div> : <div></div>
        }
        <div className="index">{index}</div>
      </div>
      <div className="imageBox">
        <img src={image} alt="" />
        <div className="name">{content?.shortName}</div>
      </div>
      <div className="mainBox">
        <div className="about">
          <span className="name">{content?.companyName}</span>
          {content?.companyDetails}
        </div>
        <div className="highlight">
          <div className="title">Main highlights</div>
          <div className="sub-content">{content?.highLight}</div>
          <div className="show">Show More</div>
        </div>
      </div>
      <div className="ResultBox">
        <div className="result">
          <div className="result-box">
            <span className="point">{content?.point}</span>
            <span className="compliment">{content?.compliment}</span>
            <span className="star">{Arr}</span>
          </div>
        </div>

        <div className="btn-box">
          <button>View</button>
        </div>
      </div>
    </div>
  );
}
