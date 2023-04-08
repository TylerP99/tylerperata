import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {v4 as uuid} from "uuid";

import { FaTimes } from "react-icons/fa";


import { addProject, selectProjectStatus } from "./projectSlice";

function AddProjectForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: "",
      description: "",
      technologies: "",
      github: "",
      liveLink: "",
  });

  const [technologies, setTechnologies] = useState([]);

  const projectStatus = useSelector(selectProjectStatus);

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleTechnologyAdd = (e) => {
      if(e.key !== "Enter" || e.target.value === "") return;
      e.preventDefault();

      const id = uuid();

      setTechnologies([...technologies, { id, name: e.target.value }]);
      setFormData({...formData, technologies: ""});
  };

  const handleTechnologyDelete = (e) => {
      e.preventDefault();

      const targetID = e.currentTarget.dataset.id;
      setTechnologies(technologies.filter(x => x.id !== targetID));
  }

  const handleSubmit = (e) => {
      e.preventDefault();

      const tech = technologies.map(x => x.name);

      const data = {
          ...formData,
          technologies: tech,
      };

      console.log(projectStatus);

      dispatch(addProject(data));

      console.log(projectStatus);
  };

  return (
    <>
    <h1 className="text-4xl border-b-black border-b-2 mb-5 p-4">Add New Project</h1>
    <form 
    className="w-[95%] mx-auto"
    onSubmit={handleSubmit}
    >
        
        <section
        className="flex flex-col mb-4"
        >
            <label
            className="text-xl"
            htmlFor="name"
            >Project Name</label>
            <input
            className="border p-1 text-lg"
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
            required
            />
        </section>  
        <section
        className="flex flex-col mb-4"
        >
            <label
            className="text-xl"
            htmlFor="description"
            >Project Description</label>
            <textarea
            className="border p-1 text-lg"
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
            value={formData.description}
            required
            />
        </section>   

        {/*TODO TECHNOLOGIES*/}
        <section>

            <label className="text-xl" htmlFor="technologies">Add Technologies</label>

            <section>
                {technologies.map(technology => (
                    <section key={technology.id} className="flex justify-between" >
                        <p>{technology.name}</p>
                        <button type="button" data-id={technology.id} onClick={handleTechnologyDelete} ><FaTimes/></button>
                    </section>
                ))}
            </section>

            <input
            className="border p-1 text-lg"
            id="technologies"
            name="technologies"
            type="text"
            onKeyDown={handleTechnologyAdd}
            onChange={handleChange}
            value={formData.technologies}
            />

        </section>

        <section
        className="flex flex-col mb-4"
        >
            <label
            className="text-xl"
            htmlFor="github"
            >Project Repo</label>
            <input
            className="border p-1 text-lg"
            id="github"
            name="github"
            type="text"
            onChange={handleChange}
            value={formData.github}
            required
            />
        </section> 

        <section
        className="flex flex-col mb-4"
        >
            <label
            className="text-xl"
            htmlFor="liveLink"
            >Project Live Link</label>
            <input
            className="border p-1 text-lg"
            id="liveLink"
            name="liveLink"
            type="text"
            onChange={handleChange}
            value={formData.liveLink}
            required
            />
        </section>  

        <button type="submit">Add Project</button>
    </form>
    </>
  )
}

export default AddProjectForm