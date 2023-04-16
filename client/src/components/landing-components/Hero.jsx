import {Link} from "react-router-dom";
import { useState } from "react";

import {BsStack} from "react-icons/bs"
import { FaUser, FaLaptopCode, FaCaretDown } from 'react-icons/fa';

import SocialDisplay from './SocialDisplay';

function Hero() {

  const [hover, setHover] = useState(false);

  return (
    <section className="flex flex-col w-[95%] mx-auto h-[100vh] pt-[4rem]">

      <section className='mb-5 flex flex-col items-center'>
        <h3>Hello, my name is</h3>
        <h1
        className='flex justify-between items-center w-full text-white bg-inherit border-8 border-green rounded-full text-4xl transition-opacity animate-growWidth md:w-[80vw] md:h-[10vw] p-10 mb-1'

        >
          <FaUser/>
          <span>Tyler Perata</span>
          <div></div>
        </h1>
        <SocialDisplay className='text-6xl'/>
        
        
      </section>      


      <section className='flex flex-col items-center mb-10'>
        
        <h3>I am a</h3>

        <h3
        className='flex flex-row-reverse items-center justify-between text-white bg-inherit bg-red-500 rounded-full text-2xl font-bold px-10 py-10 gap-5 animate-slideLeft mb-3 md:w-[40vw] h-[5vw]'
        >
          <BsStack/>
          Full Stack
          <div></div>
        </h3>
        <h2
          className='flex flex-row-reverse items-center justify-between w-full text-white bg-inherit border-b-8 border-red-500 rounded-full text-3xl p-10 animate-slideLeft md:w-[80vw] md:h-[10vw]'
        >
          <FaLaptopCode/>
          <span>Web Developer</span>
          <div></div>
        </h2>
        
      </section>  

      <section className="flex flex-col items-center">

        <p className="text-xl md:text-xl bold mb-5">Let's make something great together</p>

        <section className="w-[90%] flex flex-col justify-around items-center mb-5 md:flex-row md:w-[40%]">
          <Link className="block mb-3 text-center border border-white px-10 py-5 text-2xl hover:bg-white/20 hover:shadow-sm hover:shadow-white" to="/freelancing">Freelancing</Link>
          <Link className="block mb-3 text-center border border-white px-10 py-5 text-2xl hover:bg-white/20 hover:shadow-sm hover:shadow-white" to="/resume">My Resume</Link>
        </section>

        <a href="#work" className={"flex flex-col items-center hover:cursor-pointer"} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <p
            className={hover && "underline"}
          >See my work below</p>
          <FaCaretDown className={"transition" + (hover ? " translate-y-1" : "")} />
        </a>


      </section>

    </section>
  )
}

export default Hero