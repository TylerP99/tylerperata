import React from 'react'

import { Link, useLocation } from "react-router-dom"

import Navigation from '../components/Navigation';
import Hero from '../components/landing-components/Hero';
import ProjectDisplay from '../components/landing-components/ProjectDisplay';
import Menu from '../components/Menu';
import ContactForm from '../components/ContactForm';

function Landing() {
  const location = useLocation();
  console.log(location);

  return (
    <main className="w-full bg-black text-white">
      <Menu/>
      <Hero/>
      <ProjectDisplay/>
      <ContactForm/>
    </main>
  )
}

export default Landing