import Container from './Container'
import React from 'react'
import Flex from './Flex'
import { Link } from 'react-router-dom'
import Image from './Image'

function Advertise() {
  return (
    <div className='mt-5 md:mt-36'>
        <Container>
        <Flex className="flex gap-x-3 md:gap-x-10">
            <div className='max-w-2/4 '>
                <Link to="#">
                    <Image imgsrc="assets/adeOne.png"/>
                </Link>
            </div>
            <div className='max-w-2/4'>
                <Link to="#" >
                    <Image imgsrc="assets/adeTwo.png"/>
                </Link>
                <Link to="#" className='inline-block mt-2 md:mt-10'>
                    <Image imgsrc="assets/adeThree.png"/>
                </Link>
            </div>
            
        </Flex>
    </Container>
    </div>
  )
}

export default Advertise