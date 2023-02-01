import Container from '../components/layout/Container'
import React from 'react'
import Breadcrumb from '../components/layout/Breadcrumb'
import Flex from '../components/layout/Flex'
import Image from '../components/layout/Image'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <Container>
        <Breadcrumb/>
        <Flex className="md:flex">
            <div className='md:w-2/4'>
                <Link to="#">
                <Image imgsrc="assets/aboutimg1.png" className="w-full  gap-x-10"/>
                </Link>
            </div>
            <div className='md:w-2/4 md:mt-0 mt-10'>
                <Link>
                <Image imgsrc="assets/aboutimg.png" className="w-full"/>
                </Link>
            </div>
        </Flex>

        <div className='mt-32 mb-28'>
            <h4 className='font-dm font-regular text-[20px] md:text-[39px]'>Orebi is one of the world’s leading ecommerce brands and is internationally recognized for celebrating the essence of classic Worldwide cool looking style.</h4>
        </div>

        <Flex className="md:flex justify-between">
            <div className='md:w-[32%] w-[100%] mb-10'>
                <h4 className='font-dm font-bold text-2xl mb-3'>Our Vision</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className='md:w-[32%] w-[100%] mb-10'>
                <h4 className='font-dm font-bold text-2xl mb-3'>Our Story</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic.</p>
            </div>
            <div className='md:w-[32%] w-[100%] mb-10'>
                <h4 className='font-dm font-bold text-2xl mb-3'>Our Brands</h4>
                <p className='font-dm font-regular text-base text-[#767676]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
            </div>
        </Flex>
    </Container>
  )
}

export default About