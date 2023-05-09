import ProjectCard from "../../features/project/ProjectCardShort";
import SectionHeader from "../headers/SectionHeader";
import { Link } from "react-router-dom";

import { useGetProjectsQuery } from "../../features/project/projectSlice";

import LinkButton from "../LinkButton";

function ProjectDisplay() {

  const res = useGetProjectsQuery();

  console.log("Res", res);

  const {data: projects, isLoading, isSuccess} = useGetProjectsQuery("projectsList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  let projectDisplay = null;

  if(isLoading) projectDisplay = <p>Loading...</p>

  if(isSuccess) {
    projectDisplay = (
    <section id="work" className="pb-20">
        <section className="flex flex-wrap gap-1 justify-around align-center px-3">
            {projects?.ids.slice(0, 3).map(x => (<ProjectCard projectId={x}/>))}
        </section>
    </section>
  )
  }

  return (
    <section className="pb-40" >
      <SectionHeader text="My Projects"/>
      {projectDisplay}
      <Link className="block w-[50%] max-w-[400px] text-center text-xl py-3 px-5 mx-auto border-2 border-white bg-black hover:bg-white/20" to="/portfolio">View Full Portfolio</Link>
    </section>
  )
}

export default ProjectDisplay