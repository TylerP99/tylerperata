import { Link } from "react-router-dom";

import { useGetProjectsQuery } from "../../features/project/projectSlice";
import ProjectCard from "../../features/project/ProjectCardShort";
import SectionHeader from "../headers/SectionHeader";
import InternalLinkButton from "../buttons/InternalLinkButton";

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
      <InternalLinkButton className="w-fit mx-auto" to="/portfolio" text="View Full Portfolio" />
    </section>
  )
}

export default ProjectDisplay