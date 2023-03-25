import React from 'react'

import SocialDisplay from './SocialDisplay'

function Hero() {
  return (
    <section className="flex flex-col">

      <section className='mb-5'>
        <h1
        className='text-black bg-green border-2 border-white rounded-full text-5xl p-10 pl-40 transition-opacity animate-fadeIn animate-slideRight'

        >
          Tyler Perata</h1>
        
        
      </section>     

      <section className=''>

      <h2
        className='text-black bg-red-500 border-2 border-white rounded-full text-5xl p-10 pr-40 animate-slideLeft'
        >Web Developer</h2>
        
      </section>   

    </section>
  )
}

export default Hero