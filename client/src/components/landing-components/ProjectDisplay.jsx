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
},
{
  name: "Hyrule Compendium",
},
{
  name: "Hyrule Compendium",
},
{
  name: "Hyrule Compendium",
},
  ]

  return (
    <section className="w-full">
        <h2>Projects</h2>
        <section className="flex flex-wrap w-full">
            {projects.map(x => (<ProjectCard/>))}
        </section>
    </section>
  )
}

export default ProjectDisplay