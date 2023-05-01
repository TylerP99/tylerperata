import { FaNodeJs, FaReact } from "react-icons/fa"
import { SiTailwindcss } from "react-icons/si"

import image from "../../assets/hyrule_compendium.png"

import Technology from "./Technology";
import LinkButton from "../../components/LinkButton";

function ProjectCard() {

  return (
    <section className="w-full bg-slate-800 shadow px-5 py-3 mb-5 border-2 md:w-[48%] lg:w-[31%] xl:w-[23%]">
      <section className="mb-3">
        <h2
        className="text-center font-medium text-lg mb-3"
        >
          Project Name
        </h2>
        <img
        src={image} 
        alt="The landing page of the project"
        /> 
      </section>
      <section className="info">
        <ul className="flex flex-wrap gap-3 mb-2 mx-auto">
          <li><Technology Icon={FaReact} text="React" /></li>
          <li><Technology Icon={SiTailwindcss} text="TailwindCSS" /></li>
          <li><Technology Icon={FaNodeJs} text="NodeJS" /></li>
          <li><Technology Icon={FaReact} text="React" /></li>
          <li><Technology Icon={FaReact} text="React" /></li>
          <li><Technology Icon={FaReact} text="React" /></li>
          <li><Technology Icon={FaReact} text="React" /></li>
        </ul>
        <p
        className="mb-2"
        >A complete, multiline description of the project. Should explain what the project does, how it works, and maybe some impressions from working on the project. This might not stay, not sure yet.</p>
        <ul className="flex flex-col justify-even items-center w-3/4 mx-auto">
          <li className="w-full mb-2"><LinkButton text="Github Source Code" link="https://www.gog.com/" /></li>
          <li className="w-full"><LinkButton text="Live Site" link="https://www.google.com/" /></li>
        </ul>
      </section>
    </section>
  )
}

export default ProjectCard