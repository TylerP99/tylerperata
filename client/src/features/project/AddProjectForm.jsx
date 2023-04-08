import { useState } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {v4 as uuid} from "uuid";


import { addProject, selectProjectStatus } from "./projectSlice";

function AddProjectForm() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: "",
      description: "",
      github: "",
      liveLink: "",
  });

  const [technologies, setTechnologies] = useState([]);

  const projectStatus = useSelector(selectProjectStatus);

  const handleChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

  const handleTechChange = (e) => {
      e.preventDefault();
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      console.log(projectStatus);

      dispatch(addProject(formData));

      console.log(projectStatus);
  };

  return (
    <form 
    className="w-[95%] mx-auto"
    onSubmit={handleSubmit}
    >
        <h2
        className='text-2xl bold border-b-2 mx-auto text-center w-[50%] mb-2'
        >Add New Project</h2>   
        
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
    </form>
  )
}

export default AddProjectForm