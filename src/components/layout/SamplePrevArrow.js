import React from 'react'
import {MdArrowBack} from "react-icons/md"

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <span
        className="!flex bg-red-500 h-16 w-16 items-center  justify-center rounded-full bg-[rgba(0,0,0,.20)] absolute top-[40%] left-0 z-50"
        style={{...style }}
        onClick={onClick}
      >
        <MdArrowBack className='text-2xl text-white'/> 
        </span>
    );
  }
export default SamplePrevArrow