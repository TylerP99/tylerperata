import ProjectCard from "../../features/project/ProjectCardShort";
import SectionHeader from "../SectionHeader";

import { useGetProjectsQuery } from "../../features/project/projectSlice";

function ProjectDisplay() {

  const res = useGetProjectsQuery();

  console.log("Res", res);

  const {data: projects, isLoading, isSuccess} = useGetProjectsQuery("projectsList", {
    pollingInterval: 15000,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true
  });

  if(isLoading) return <p>Loading...</p>

  if(isSuccess) {
    return (
    <section id="work" className="place-content-center">
        <SectionHeader text="My Projects"/>
        <section className="flex flex-wrap gap-1 justify-around align-center px-3">
            {projects?.ids.slice(0, 3).map(x => (<ProjectCard projectId={x}/>))}
        </section>
    </section>
  )
  }

  return null
}

export default ProjectDisplay