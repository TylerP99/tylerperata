import {Link} from "react-router-dom";

import {BsStack} from "react-icons/bs"
import { FaUser, FaLaptopCode, FaCaretDown } from 'react-icons/fa'

import SocialDisplay from './SocialDisplay'

function Hero() {
  return (
    <section className="flex flex-col w-[95%] mx-auto h-[100vh] border-white border pt-20">

      <section className='mb-5'>
        <h1
        className='flex justify-between items-center text-white bg-inherit border-8 border-green rounded-full text-5xl transition-opacity animate-growWidth w-[80vw] h-[10vw] p-10 mb-1'

        >
          <FaUser/>
          <span>Tyler Perata</span>
          <div></div>
        </h1>
        <SocialDisplay className='ml-20'/>
        
        
      </section>     

      <section className='flex flex-col items-end mb-[4%]'>

        <h3
        className='flex flex-row-reverse items-center justify-between text-white bg-inherit border-8 border-red-500 rounded-full text-3xl p-10 animate-slideLeft mb-3 w-[40vw] h-[5vw]'
        >
          <BsStack/>
          Full Stack
          <div></div>
        </h3>
        <h2
          className='flex flex-row-reverse items-center justify-between text-white bg-inherit border-8 border-red-500 rounded-full text-5xl p-10 animate-slideLeft w-[80vw] h-[10vw]'
        >
          <FaLaptopCode/>
          <span>Web Developer</span>
          <div></div>
        </h2>
        
      </section>   

      <section className="flex flex-col items-center">

        <p className="text-3xl bold border-b-2 border-white mb-5">Let's make something great together</p>

        <section className="w-[40%] flex justify-around items-center mb-5">
          <Link className="block text-center border border-white px-10 py-5 text-2xl hover:underline hover:bg-white/20 hover:shadow-sm hover:shadow-white" to="/freelancing">Freelancing</Link>
          <Link className="block text-center border border-white px-10 py-5 text-2xl hover:underline hover:bg-white/20 hover:shadow-sm hover:shadow-white" to="/resume">My Resume</Link>
        </section>

        <section className="flex flex-col items-center">
          <p>See my work below</p>
          <FaCaretDown/>
        </section>


      </section>

    </section>
  )
}

export default Hero