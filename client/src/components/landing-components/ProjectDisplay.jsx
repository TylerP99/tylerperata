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
  ]

  return (
    <section className="place-content-center">
        <h2 className="center">Projects</h2>
        <section className="flex  flex-wrap justify-around align-center">
            {projects.map(x => (<ProjectCard/>))}
        </section>
    </section>
  )
}

export default ProjectDisplay