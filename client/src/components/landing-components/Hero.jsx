import {Link} from "react-router-dom";
import { useState } from "react";

import {BsStack} from "react-icons/bs"
import { FaUser, FaLaptopCode, FaCaretDown } from 'react-icons/fa';

import SocialDisplay from './SocialDisplay';

function Hero() {

  const [hover, setHover] = useState(false);

  return (
    <section className="flex flex-col w-[95%] mx-auto h-[100vh] pt-[4rem]">

      <section className="justify-between items-center md:flex md:p-32 md:pb-20" >

        <section className='flex flex-col items-center mb-20 md:items-start '>
          <h3
          className="text-2xl md:text-4xl"
          >Hello, my name is</h3>
          <h1
          className='flex justify-center items-center w-full bg-inherit text-5xl px-10 pb-5 mb-1 text-center text-green font-bold md:px-0 md:text-8xl'
          >
            Tyler Perata
          </h1>
          <SocialDisplay className='text-4xl md:text-6xl '/>
          
          
        </section>      


        <section className='flex flex-col items-center mb-20 md:items-end'>
          
          <h3
          className="text-lg mb-2 md:pr-10 md:text-2xl"
          >I am a</h3>

          <h3
          className='flex flex-row-reverse items-center justify-between text-white bg-inherit bg-red-500 rounded-full text-2xl font-bold py-8 px-5 gap-5 mb-3 md:text-3xl'
          >
            <BsStack/>
            Full Stack
            <div></div>
          </h3>
          <h2
            className='flex items-center justify-center gap-5 w-full text-white bg-inherit text-3xl animate-slideLeft md:text-6xl'
          >
            <span>Web Developer</span>
            <FaLaptopCode/>
          </h2>
          
        </section>  

      </section>

      <section className="flex flex-col items-center">

        <p className="mb-20 text-xl text-center" >I enjoy building cool and useful sites and solving interesting problems!</p>

        <p className="text-xl md:text-xl bold mb-5">Let's make something great together</p>

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