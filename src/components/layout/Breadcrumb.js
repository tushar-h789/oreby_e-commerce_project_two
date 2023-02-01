import React from 'react'
import {RxTriangleRight} from "react-icons/rx"
import { Link } from 'react-router-dom'

const Breadcrumb = ({title}) => {
  return (
    <div className='my-32'>
        <h1 className="font-dm text-5xl font-bold mb-3">{window.location.pathname.split("/")[1]}</h1>
      <p className="font-regular font-dm text-xs text-[#767676] flex items-center gap-x-2 ">
        <Link to="/">Home</Link><RxTriangleRight/> {window.location.pathname.split("/")[1]}
      </p>
    </div>
  )
}

export default Breadcrumb