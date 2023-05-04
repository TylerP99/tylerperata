import ProjectCard from "../../features/project/ProjectCardShort";
import SectionHeader from "../headers/SectionHeader";
import { Link } from "react-router-dom";

import { useGetProjectsQuery } from "../../features/project/projectSlice";

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
    <section id="work" className="place-content-center">
        <SectionHeader text="My Projects"/>
        <section className="flex flex-wrap gap-1 justify-around align-center px-3">
            {projects?.ids.slice(0, 3).map(x => (<ProjectCard projectId={x}/>))}
        </section>
    </section>
  )
  }

  return (
    <section>
      {projectDisplay}
      <Link className="block w-[50%] max-w-[200px] text-center text-xl p-2 mx-auto border-2 border-white" to="/portfolio">View my Full Portfolio</Link>
    </section>
  )
}

export default ProjectDisplay