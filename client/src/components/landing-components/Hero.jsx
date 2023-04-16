import {Link} from "react-router-dom";
import { useState } from "react";

import {BsStack} from "react-icons/bs"
import { FaUser, FaLaptopCode, FaCaretDown } from 'react-icons/fa';

import SocialDisplay from './SocialDisplay';

function Hero() {

  const [hover, setHover] = useState(false);

  return (
    <section className="flex flex-col w-[95%] mx-auto h-[100vh] pt-[4rem]">

      <section className='flex flex-col items-center mb-10'>
        <h3
        className="text-2xl"
        >Hello, my name is</h3>
        <h1
        className='flex justify-center items-center w-full bg-inherit text-5xl px-10 pb-5 mb-1 text-center text-green font-bold'
        >
          Tyler Perata
        </h1>
        <SocialDisplay className='text-4xl'/>
        
        
      </section>      


      <section className='flex flex-col items-center mb-20'>
        
        <h3
        className="text-lg mb-2"
        >I am a</h3>

        <h3
        className='flex flex-row-reverse items-center justify-between text-white bg-inherit bg-red-500 rounded-full text-2xl font-bold py-8 px-5 gap-5 mb-3 md:w-[40vw] h-[5vw]'
        >
          <BsStack/>
          Full Stack
          <div></div>
        </h3>
        <h2
          className='flex items-center justify-center gap-5 w-full text-white bg-inherit text-3xl animate-slideLeft'
        >
          <span>Web Developer</span>
          <FaLaptopCode/>
        </h2>
        
      </section>  

      <section className="flex flex-col items-center">

        <p className="text-xl md:text-xl bold mb-5">Let's make something great together</p>

        <section className="w-[50%] flex flex-col justify-around items-center mb-5 md:flex-row md:gap-5">
          <Link className="block mb-3 text-center border border-white w-full px-4 py-3 text-2xl hover:bg-white/20 hover:shadow-sm hover:shadow-white" to="/freelancing">Freelancing</Link>
          <Link className="block mb-3 text-center border border-white w-full px-4 py-3 text-2xl hover:bg-white/20 hover:shadow-sm hover:shadow-white" to="/resume">Resume</Link>
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