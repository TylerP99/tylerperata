import { useState, useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {v4 as uuid} from "uuid";

import { FaTimes } from "react-icons/fa";


import { updateProject, selectProjectStatus, selectProjectByID } from "./projectSlice";

function UpdateProjectForm() {

  const { id } = useParams();

  const project = useSelector((state) => selectProjectByID(state, id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
      name: project.name,
      description: project.description,
      technologies: "",
      github: project.github,
      liveLink: project.liveLink,
  });

  const [image, setImage] = useState("");
  const [imageURL, setImageURL] = useState("");

  const [technologies, setTechnologies] = useState(project.technologies.map( x => {
      return {name:x, id: uuid()}
  }));

  useEffect(() => {
    if(image === "") return;
    console.log(image);
    setImageURL(URL.createObjectURL(image));
  }, [image]);

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

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
}

  const handleSubmit = (e) => {
      e.preventDefault();
      const data = new FormData();
      const tech = technologies.map(x => x.name);
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("image", image);
      data.append("technologies", tech);
      data.append("github", formData.github);
      data.append("liveLink", formData.liveLink);
      dispatch(updateProject({project: data, id}));

      navigate("/admin/projects");
  };

  return (
    <>
    <h1 className="text-4xl border-b-black border-b-2 mb-5 p-4">Update Project</h1>

    <form 
    className="w-[95%] mx-auto"
    onSubmit={handleSubmit}
    >
        <img src={imageURL} />
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

        <section
        className="flex flex-col mb-4"
        >
            <label
            className="text-xl"
            htmlFor="description"
            >Project Image</label>
            <input 
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
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

        <button type="submit">Update Project</button>
    </form>
    </>
  )
}

export default UpdateProjectForm