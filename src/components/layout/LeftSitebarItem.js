import React, { useState } from 'react'
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai"

const LeftSitebarItem = (props) => {
    let [drop, setDrop] = useState(props.subdropdown)
    let [show, setShow] = useState(false)

  return (
    <div>
        {drop 
        ? 
        <div onClick={()=>{setShow(!show)}} 
        className='flex justify-between items-center cursor-pointer border-b border-solid border-[#767676] py-5'>
        <h3 className='font-dm font-regular text-base cursor-pointer text-[#767676]'>
          {props.color &&
            <span className='inline-block h-[11px] w-[11px] rounded-full mr-2' style={{background:props.color}}></span>
          }
          {props.title}</h3>
        <AiOutlinePlus className='text-[#767676]'/>
    </div>
        :
        <>
          <div
        className='flex justify-between items-center cursor-pointer border-b border-solid border-[#767676] py-5'>
        <h3 className='font-dm font-regular text-base cursor-pointer text-[#767676]'>
          {props.color &&
            <span className='inline-block h-[11px] w-[11px] rounded-full mr-2' style={{background:props.color}}></span>
          }
          {props.title}</h3>
    </div>
        </>
        }

        {show &&
    <div>
        {props.children}
    </div>
    }
    </div>
  )
}

export default LeftSitebarItem