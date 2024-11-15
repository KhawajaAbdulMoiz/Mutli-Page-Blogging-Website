import React from 'react'
import Image from 'next/image'
import Footer from '../Footer/page'

export default function Engage() {
  return (
    <div>
       
      <div className="container bg-customPurple h-[534px] ml-[1.8%]">
        <h1 className='text-center text-bold text-[48px] font-200 font-raleway text-black text-white pt-[10%]'>
        Get our stories delivered From<br/> us to your inbox weekly.
        </h1>
        <div className='flex gap-2 justify-center font-200 font-raleway'>
        <input className='w-[14%] p-2 rounded mt-6' type="email" placeholder='Your Email' required/>
        <button className="font-raleway font-thin mt-6 border-2 border-white text-white py-2 px-6 rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
        Get Started
        </button>
        
        </div>
      </div>
    </div>
  )
}
