import ClipLoader from "react-spinners/ClipLoader";

import { useGetProjectsQuery } from "../../features/project/projectSlice";
import ProjectCard from "../../features/project/ProjectCardShort";
import SectionHeader from "../headers/SectionHeader";
import InternalLinkButton from "../buttons/InternalLinkButton";


function ProjectDisplay() {

  const {data: projects, isLoading, isSuccess} = useGetProjectsQuery("projectsList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  let projectDisplay = null;

  if(isLoading) projectDisplay = <ClipLoader/>

  if(isSuccess) {
    projectDisplay = (
    <section id="work" className="pb-20">
        <section className="flex flex-wrap gap-1 justify-between align-center px-3">
            {projects?.ids.slice(0, 3).map(x => (<ProjectCard projectId={x}/>))}
        </section>
    </section>
  )
  }

  return (
    <section className="pb-40" >
      <SectionHeader text="My Projects"/>
      <section
        className="border w-[90%] max-w-[2000px] mx-auto flex justify-center items-center"
      >
        {projectDisplay}
      </section>
      <InternalLinkButton className="w-fit mx-auto" to="/portfolio" text="View Full Portfolio" />
    </section>
  )
}

export default ProjectDisplay