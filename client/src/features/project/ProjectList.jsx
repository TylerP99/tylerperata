import { useSelector, useDispatch } from "react-redux";
import { FaPen, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import { selectAllProjects, deleteProject } from "./projectSlice";


function ProjectList() {

  const dispatch = useDispatch();

  const projects = useSelector(selectAllProjects);

  const handleDelete = (e) => {
    e.preventDefault();

    const id = e.currentTarget.dataset.id;

    dispatch(deleteProject(id));
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
    </article>
  )

  return (
    <div>
      <h1>Projects</h1>
      <section>
        {projects.map(x => <ProjectCard project={x} />)}
      </section>
    </div>
  )
}

export default ProjectList