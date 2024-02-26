import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";
import { IoIosInformationCircleOutline } from "react-icons/io";
import {FaCheckCircle, FaInfoCircle, FaRegCheckCircle } from "react-icons/fa"
export default function Update() {
  return (
    <div className="update">
      <div className='details'>
        <div className='det-box'>
          <FaRegCheckCircle className='det-icon' />
          Last Updated - February 22, 2020
        </div>
        <div className='det-box'>
          <IoIosInformationCircleOutline className='det-icon' />
          Advertising Disclosure
        </div>
      </div>
      <div className='det-box2'>
        Top Relevant
        <RiArrowDropDownLine className='drop-arrow' />
      </div>
    </div>
  );
}
