import { useSelector } from "react-redux";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { selectAllProjects, useDeleteProjectMutation } from "./projectSlice";


function ProjectList() {

  const [deleteProject] = useDeleteProjectMutation();

  const projects = useSelector(selectAllProjects);

  const handleDelete = async (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;

    try{
      await deleteProject(id).unwrap();
    }
    catch(e) {
      console.error(e);
    }
  }

  const ProjectCard = ({project}) => (
    <article className="border">
      <Link to={`/admin/editProject/${project._id}`} ><FaPen/></Link>
      <button type="button" onClick={handleDelete} data-id={project._id} ><FaTrash/></button>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <ul>
        <p>build with:</p>
        {project.technologies.map( x => <li>{x}</li> )}
      </ul>
      <p>Linkus</p>
      <p>{project.github}</p>
      <p>{project.liveLink}</p>
      <img src={project.image} alt="" />
    </article>
  )

  return (
    <div>
      <h1>Projects</h1>
      <Link to={"/admin/newProject"} >Add New Project</Link>
      <section>
        {projects.map(x => <ProjectCard project={x} />)}
      </section>
    </div>
  )
}

export default ProjectList