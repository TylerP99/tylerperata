import React from 'react'

import {BsStack} from "react-icons/bs"
import { FaUser, FaLaptopCode, FaDatabase } from 'react-icons/fa'

import SocialDisplay from './SocialDisplay'

function Hero() {
  return (
    <section className="flex flex-col">

      <section className='mb-5'>
        <h1
        className='flex justify-between items-center text-black bg-green border-2 border-white rounded-full text-5xl transition-opacity animate-growWidth w-[80vw] h-[10vw] p-10'

        >
          <FaUser/>
          <span>Tyler Perata</span>
          <div></div>
        </h1>
        
        
      </section>     

      <section className=''>

      <h3
      className='text-black bg-red-500 border-2 border-white rounded-full text-3xl p-10 pr-10 animate-slideLeft w-[40vw]'
      >Full Stack</h3>
      <h2
        className='text-black bg-red-500 border-2 border-white rounded-full text-5xl p-10 pr-40 animate-slideLeft'
        >Web Developer</h2>
        
      </section>   

    </section>
  )
}

export default Hero