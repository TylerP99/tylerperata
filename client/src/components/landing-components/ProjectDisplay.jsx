import ProjectCard from "../ProjectCard"

function ProjectDisplay() {

  const projects = [
    {
      name: "Hyrule Compendium",
  },
  {
    name: "Hyrule Compendium",
},
{
  name: "Hyrule Compendium",
}
  ]

  return (
    <section>
        <h2>Projects</h2>
        <section className="flex">
            {projects.map(x => (<ProjectCard/>))}
        </section>
    </section>
  )
}

export default ProjectDisplay