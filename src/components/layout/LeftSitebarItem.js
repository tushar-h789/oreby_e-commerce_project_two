import React, { useState } from 'react'
import {GoTriangleDown} from "react-icons/go"

const LeftSitebarItem = ({subdropdown, title}) => {
    let [drop, setDrop] = useState(subdropdown)
    let [show, setShow] = useState(false)

  return (
    <div>
        {drop 
        ? 
        <div onClick={()=>{setShow(!show)}} 
        className='flex justify-between items-center cursor-pointer'>
        <h3>{title}</h3>
        <GoTriangleDown/>
    </div>
        :
        <h3 className='cursor-pointer'>{title}</h3>
        }

        {show &&
    <div>
        <p>asdfadfsasdf</p>
        <p>asdfadfsasdf</p>
        <p>asdfadfsasdf</p>
        <p>asdfadfsasdf</p>
    </div>
    }
    </div>
  )
}

export default LeftSitebarItem