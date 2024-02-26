import React from "react";
import { FaCheck } from "react-icons/fa";

export default function HighLight() {
  const element = [
    {
      range: 9.9,
      text: "building responsive",
    },
    {
      range: 9.9,
      text: "Cool",
    },
    {
      range: 9.9,
      text: "Docs",
    },
  ];
  const arr = element.map((data) => {
    return (
      <div className="element">
        <span className="range">{data.range}</span>
        <span className="text">{data.text}</span>
      </div>
    );
  });
  return (
    <div className="highlight2">
      <div className="high">{arr}</div>
      <div className="why">
        <div className="title">Why we love it</div>
        <div>
          <div className="el">
            <span className="icon">
              <FaCheck />
            </span>
            <span className="text">Documentation</span>
          </div>
          <div className="el">
            <span className="icon">
              <FaCheck />
            </span>
            <span className="text">Easy Use</span>
          </div>
          <div className="el">
            <span className="icon">
              <FaCheck />
            </span>
            <span className="text">Out of box</span>
          </div>
        </div>
      </div>
    </div>
  );
}
