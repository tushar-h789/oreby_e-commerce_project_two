import Container from './Container'
import React from 'react'
import Flex from './Flex'
import {TbNumber2} from "react-icons/tb"
import {FaCarSide} from "react-icons/fa"
import {RxReload} from "react-icons/rx"

function AdditionalInfo() {
  return (
    <div className='border border-solid border-[#F0F0F0] py-2 sm:py-7'>
        <Container>
        <Flex className="flex justify-between">
        <Flex className="flex gap-1 sm:gap-x-4 items-center">
            <TbNumber2 className='sm:text-2xl text-[10px]  '/>
            <p className='font-dm font-regular text-[10px] sm:text-base text-[#6D6D6D]' >Two years warranty</p>
        </Flex>
        <Flex className="flex gap-1 sm:gap-x-4 items-center">
            <FaCarSide className='sm:text-2xl text-[10px]'/>
            <p className='font-dm font-regular text-[10px] sm:text-base text-[#6D6D6D]' >Free shipping</p>
        </Flex>
        <Flex className="flex gap-1 sm:gap-x-4 items-center">
            <RxReload className='sm:text-2xl text-[10px]'/>
            <p className='font-dm font-regular text-[10px] sm:text-base text-[#6D6D6D]' >Return policy in 30 days</p>
        </Flex>
        
        </Flex>
    </Container>
    </div>
  )
}

export default AdditionalInfo