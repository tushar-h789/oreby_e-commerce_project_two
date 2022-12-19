import Container from './Container'
import React from 'react'
import Heading from './Heading'
import Flex from './Flex'
import Products from './Products'

const SpecialOffer = () => {
  return (
    <div className='mt-5 md:mt-32'>
        <Container>
        <Heading title="Special Offers"/>
        <Flex className="sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10">
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
                <Products src="assets/p9.png" badge={true}/>

            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p10.png" badge={false}/>
            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p11.png" badge={true}/>
            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p12.png" badge={false}/>
            </div>
        </Flex>
    </Container>
    </div>
  )
}

export default SpecialOffer