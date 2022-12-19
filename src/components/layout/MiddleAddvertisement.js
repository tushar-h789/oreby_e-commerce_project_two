import Container from './Container'
import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const MiddleAddvertisement = () => {
  return (
    <div className=' md:mt-32 md:mb-32'>
        <Container>
            <Link>
        <Image imgsrc="assets/middleadd.png"/>
            </Link>
        </Container>
    </div>
  )
}

export default MiddleAddvertisement