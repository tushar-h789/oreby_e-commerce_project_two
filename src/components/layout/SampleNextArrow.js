import React from 'react'
import {MdArrowForward} from "react-icons/md"

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <span
        className="!flex bg-red-500 h-16 w-16 items-center  justify-center rounded-full bg-[rgba(0,0,0,.20)] absolute top-[40%] right-[25px]"
        style={{...style }}
        onClick={onClick}
      >
        <MdArrowForward className='text-2xl text-white'/> 
        </span>
    );
  }

export default SampleNextArrow