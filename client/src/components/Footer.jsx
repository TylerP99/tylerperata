import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer
    className='bg-black text-white absolute bottom-0 w-[100%] border-t border-white py-10'
    >
      <section className='mx-auto w-fit' >
        Made by Tyler Perata
      </section>
    </footer>
  )
}

export default Footer