import React from 'react'

const InputBox = (props) => {
  return (
    <div className='w-2/4'>
        <h4 className='font-dm font-bold text-base placeholder:font-dm placeholder:font-regular placeholder:text-base mb-2.5 placeholder:text-[#767676]'>{props.title}</h4>
        <props.as placeholder={props.placeholder} className="border-b border-solid border-[#F0F0F0] pb-4 w-full mb-6"/>
    </div>
  )
}

export default InputBox