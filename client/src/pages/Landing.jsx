import React from 'react'

import { Link, useLocation } from "react-router-dom"

import Navigation from '../components/Navigation';
import Hero from '../components/landing-components/Hero';
import ProjectDisplay from '../components/landing-components/ProjectDisplay';

function Landing() {
  const location = useLocation();
  console.log(location);

  return (
    <>
    <Navigation />
    <Hero/>
    <ProjectDisplay/>
    </>
  )
}

export default Landing