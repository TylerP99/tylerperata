import { useGetProjectsQuery } from "./projectSlice";

import Technology from "./Technology";
import LinkButton from "../../components/LinkButton";

function ProjectCard({projectId}) {

  const { project } = useGetProjectsQuery("projectList", {
    selectFromResult: ({data}) => ({
      project: data?.entities[projectId]
    })
  });

  if(project) return (
    <section className="w-full bg-black shadow px-5 py-3 mb-5 border-2 md:w-[48%] lg:w-[31%] xl:w-[23%]">
      <section className="mb-3">
        <h2
        className="text-center font-medium text-lg mb-3"
        >
          {project.name}
        </h2>
        <img
        className="flex items-center justify-center border-2 border-white min-h-[200px]"
        src={project.image} 
        alt="The landing page of the project"
        /> 
      </section>
      <section className="info">
        <ul className="flex flex-wrap justify-center items-center gap-3 mb-2 mx-auto">
          {project.technologies.map(x => <Technology text={x}/>)}
        </ul>
        <ul className="flex flex-col justify-even items-center w-3/4 mx-auto">
          <li className="w-full mb-2"><LinkButton text="Github Source Code" link={project.github} /></li>
          <li className="w-full"><LinkButton text="Live Site" link={project.liveLink} /></li>
        </ul>
      </section>
    </section>
  )

  return null
}

export default ProjectCard;