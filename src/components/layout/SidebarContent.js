import React, { useState } from 'react'
import {GoTriangleDown} from "react-icons/go"
import LeftSitebarItem from './LeftSitebarItem'

const SidebarContent = ({dropDown, droptitle, data}) => {
    let [drop, setDrop] = useState(dropDown)
    let [show, setShow] = useState(dropDown)
  return (
    <div className='mb-14'>
        {drop 
        ? 
        <div onClick={()=>{setShow(!show)}} 
        className='flex justify-between items-center cursor-pointer mb-9'>
        <h3 className='font-dm text-xl font-bold cursor-pointer'>{droptitle}</h3>
        <GoTriangleDown/>
    </div>
        :
        <h3 className='font-dm text-xl font-bold cursor-pointer mb-9'>{droptitle}</h3>
        }

{show && (
        <>
          {data.map((item, index) =>
            item.subcategory ? (
              <>
                <LeftSitebarItem
                  subdropdown={item.subcategory ? true : false}
                  title={item.name}
                >
                  {item.subcategory &&
                    item.subcategory.map((sitem) => (
                      <h1 className="font-regular cursor-pointer border-b bg-orange-100 border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                        {sitem.name}
                      </h1>
                    ))}
                </LeftSitebarItem>
              </>
            ) : (
              <LeftSitebarItem
                subdropdown={item.subcategory ? true : false}
                title={item.name}
                color={item.code}
              >
                {item.subcategory &&
                  item.subcategory.map((sitem) => (
                    <h1 className="font-regular cursor-pointer border-b bg-orange-100 border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                      {sitem.name}
                    </h1>
                  ))}
              </LeftSitebarItem>
            )
          )}
        </>
      )} 

    {!drop &&
    <>
    {data.map((item, index) =>
      item.subcategory ? (
        <>
          <LeftSitebarItem
            subdropdown={item.subcategory ? true : false}
            title={item.name}
          >
            {item.subcategory &&
              item.subcategory.map((sitem) => (
                <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                  {sitem.name}
                </h1>
              ))}
          </LeftSitebarItem>
        </>
      ) : (
        <LeftSitebarItem
          subdropdown={item.subcategory ? true : false}
          title={item.name}
          color={item.code}
        >
          {item.subcategory &&
            item.subcategory.map((sitem) => (
              <h1 className="font-regular cursor-pointer border-b border-solid border-[#767676] py-5 font-dm text-base text-[#767676]">
                {sitem.name}
              </h1>
            ))}
        </LeftSitebarItem>
      )
    )}
  </>
    }
    </div>
  )
}

export default SidebarContent