import React from "react";
import image from '../../../../../assets/Images/Image.png'
export default function ProductCard() {
  return (
    <div className="productCard">
      <div className="imageBox">
        <img src={image} alt="" />
      </div>
      <div className="textBox">
        <div className="saleBox">
          <span>20%</span>
          <span>Limited Time</span>
        </div>
        <div className="title">Webbuilder 1</div>
        <div className="des">Computer Modern clasic with wix support</div>
        <div className="price">
          <div className="amount">$39.96</div>
          <div className="small-price">$49.96</div>
          <div className="sale">(20% off)</div>
        </div>
        <div className="buttonBox">
          <button>View Deal</button>
        </div>
      </div>
    </div>
  );
}
