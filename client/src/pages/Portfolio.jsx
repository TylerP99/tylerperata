import { useSelector } from "react-redux";

import { selectAllProjects } from "../features/project/projectSlice";

import PageHeader from '../components/PageHeader'

import Technology from "../features/project/Technology";

function ProjectCard({project}) {
  return (
    <article
    className="border mb-5"
    >
      <h3>{project.name}</h3>
      {project.technologies.length ? 
      project.technologies.map(x => <Technology text={x}/>)
      :
      undefined
      }
    </article>
  )
}

function Portfolio() {

  const projects = useSelector(selectAllProjects);

  console.log(projects);

  return (
    <>
    <div>
      <PageHeader text="Portfolio" />

      <section>
        {projects.map(x => <ProjectCard key={x._id} project={x} />)}
      </section>
    </div>
    </>
  )
}

export default Portfolio