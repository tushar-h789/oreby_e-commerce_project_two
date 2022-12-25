import React from 'react'
import Badge from './Badge'
import Image from './Image'
import Flex from './Flex'
import {AiFillHeart} from "react-icons/ai"
import {TfiReload} from "react-icons/tfi"
import {FaShoppingCart} from "react-icons/fa"
   

const Products = ({src, badge}) => {
  return (
    <div >
        <div className='relative overflow-y-hidden group'>
        <Image imgsrc={src}/>
        
        {badge && <Badge title="New"/> }
        <div className='bg-white md:bottom-[-40%] bottom-[-42%]  md:max-xl:bottom-[-62%] group-hover:bottom-0 h-40 absolute bottom-0 left-0 w-full py-6 px-7 ease-in duration-300'>
        <Flex className="flex gap-x-1 sm:gap-x-4 items-center justify-end">
            <p className='font-dm font-regular md:max-xl:text-sm text-base sm:text-base text-[#6D6D6D]' >Add to Wish List</p>
            <AiFillHeart className='text-base  '/>
        </Flex>
        <Flex className="flex gap-x-1 sm:gap-x-4 items-center justify-end my-5">
            <p className='font-dm font-regular md:max-xl:text-sm text-base sm:text-base text-[#6D6D6D]' >Compare</p>
            <TfiReload className='text-base  '/>
        </Flex>
        <Flex className="flex gap-x-1 sm:gap-x-4 items-center justify-end">
            <p className='font-dm font-regular md:max-xl:text-sm text-base sm:text-base text-[#6D6D6D]' >Add to Cart</p>
            <FaShoppingCart className='text-base  '/>
        </Flex>
        </div>
        </div>

        <div className='mb-12 md:mb-0'>
            <Flex className="flex justify-between items-center mt-0 md:mt-6">

            <h3 className='font-dm font-bold md:max-xl:text-sm'>Basic Crew Neck Tee</h3>
            <p className='font-dm font-regular md:max-xl:text-sm text-[#767676] text-base'>$44.00</p>
            </Flex>
            <p className='font-dm mt-1 md:mt-4 md:max-xl:text-sm font-regular text-[#767676] text-base'>Black</p>
        </div>
    </div>
  )
}

export default Products