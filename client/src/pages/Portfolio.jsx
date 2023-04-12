import { useSelector } from "react-redux";

import { selectAllProjects } from "../features/project/projectSlice";

import PageHeader from '../components/PageHeader'

function ProjectCard({project}) {
  return (
    <article
    className="border mb-5"
    >
      <h3>{project.name}</h3>
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