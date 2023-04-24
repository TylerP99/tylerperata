import React from 'react'

import { useLocation } from "react-router-dom"

import Hero from '../components/landing-components/Hero';
import ProjectDisplay from '../components/landing-components/ProjectDisplay';
import ContactForm from '../features/message/ContactForm';
import ContentBlock from '../components/ContentBlock';

function Landing() {
  const location = useLocation();
  console.log(location);

  return (
    <main className="w-full bg-[#02041c] text-white">
      <ContentBlock>
        <Hero/>
      </ContentBlock>
      <ContentBlock>
        <ProjectDisplay/>
      </ContentBlock>
      <ContentBlock>
        <ContactForm/>
      </ContentBlock>
    </main>
  )
}

export default Landing