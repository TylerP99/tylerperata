import Hero from '../components/landing-components/Hero';
import ProjectDisplay from '../components/landing-components/ProjectDisplay';
import ContactForm from '../features/message/ContactForm';


function Landing() {

  return (
    <main className="w-full bg-[#02041c] text-white">
      <Hero/>
      <ProjectDisplay/>
      <ContactForm/>
    </main>
  )
}

export default Landing