import Container from './Container'
import React from 'react'
import Heading from './Heading'
import Flex from './Flex'
import Products from './Products'

const Bestseller = () => {
  return (
    <div className='mt-5 md:mt-32'>
        <Container>
        <Heading title="Our Bestsellers"/>
        <Flex className="sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10">
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
                <Products src="assets/p5.png" badge={true}/>

            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p6.png" badge={false}/>
            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p7.png" badge={true}/>
            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p8.png" badge={false}/>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default Bestseller