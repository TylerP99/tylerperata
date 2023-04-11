import { useSelector } from "react-redux";

import { selectAllProjects } from "../features/project/projectSlice";

import PageHeader from '../components/PageHeader'

function Portfolio() {

  const projects = useSelector(selectAllProjects);

  console.log(projects);

  return (
    <>
    <div>
      <PageHeader text="Portfolio" />

      <section>
        {projects.map(x => <p>{x.name}</p>)}
      </section>
    </div>
    </>
  )
}

export default Portfolio