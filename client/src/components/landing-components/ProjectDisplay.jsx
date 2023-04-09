import ProjectCard from "../../features/project/ProjectCard"
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
        <SectionHeader text="My Projects"/>
        <section className="flex flex-wrap gap-1 justify-around align-center px-3">
            {projects.slice(2).map(x => (<ProjectCard/>))}
        </section>
    </section>
  )
}

export default ProjectDisplay