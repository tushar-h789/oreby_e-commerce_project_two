import Container from './Container'
import React from 'react'
import Heading from './Heading'
import Flex from './Flex'
import Products from './Products'
import Slider from "react-slick";
import SampleNextArrow from './SampleNextArrow'
import SamplePrevArrow from './SamplePrevArrow'

const Newarrival = () => {

  

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (


    <div className='mt-5 md:mt-32'>
        <Container>
        <Heading title="New Arrivals"/>
        {/* <Flex className="sm:flex sm:max-md:flex-wrap sm:max-md:justify-between md:gap-x-10"> */}

        <Slider {...settings}>
        <div className='sm:max-w-[313px] md:max-w-[370px]'>
                <Products src="assets/p1.png" badge={true}/>

            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p2.png" badge={false}/>
            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p3.png" badge={true}/>
            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p4.png" badge={false}/>
            </div>
            <div className='sm:max-w-[313px] md:max-w-[370px]'>
            <Products src="assets/p4.png" badge={false}/>
            </div>

        </Slider>
            
        {/* </Flex> */}
    </Container>
    </div>
  )
}

export default Newarrival