import React, { useState } from 'react'
import {GoTriangleDown} from "react-icons/go"
import LeftSitebarItem from './LeftSitebarItem'

const SidebarContent = ({dropDown}) => {
    let [drop, setDrop] = useState(dropDown)
    let [show, setShow] = useState(dropDown)
  return (
    <div>
        {drop 
        ? 
        <div onClick={()=>{setShow(!show)}} 
        className='flex justify-between items-center cursor-pointer'>
        <h3>Shop by Category</h3>
        <GoTriangleDown/>
    </div>
        :
        <h3 className='cursor-pointer'>Shop by Category 10</h3>
        }

    {show &&
    <>
        <LeftSitebarItem subdropdown={true} title="Category 1"/>
        <LeftSitebarItem subdropdown={false} title="Category 1"/>
        <LeftSitebarItem subdropdown={true} title="Category 1"/>
        <LeftSitebarItem subdropdown={false} title="Category 1"/>
    </>
    } 

    {!drop &&
    <>
    <LeftSitebarItem subdropdown={true} title="Category 20"/>
    <LeftSitebarItem subdropdown={false} title="Category 20"/>
    <LeftSitebarItem subdropdown={true} title="Category 20"/>
    <LeftSitebarItem subdropdown={false} title="Category 20"/>
</>
    
    }
    </div>
  )
}

export default SidebarContent