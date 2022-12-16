import ProjectCard from "../ProjectCard"
import SectionHeader from "../SectionHeader"

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
        <SectionHeader text="My Work"/>
        <section className="flex  flex-wrap justify-around align-center">
            {projects.map(x => (<ProjectCard/>))}
        </section>
    </section>
  )
}

export default ProjectDisplay