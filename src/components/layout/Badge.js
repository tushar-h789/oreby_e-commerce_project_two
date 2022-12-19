import React from 'react'

const Badge = ({title}) => {
  return (
    <span className='bg-primary inline-block absolute md:max-xl:mt-[-15px] top-5 left-5 text-white py-2 px-7'>{title}</span>
  )
}  

export default Badge