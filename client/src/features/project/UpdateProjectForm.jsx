import { useState, useEffect } from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {v4 as uuid} from "uuid";

import { FaTimes, FaExclamationCircle } from "react-icons/fa";

import { useUpdateProjectMutation, selectProjectByID } from "./projectSlice";

import SpinnerButton from "../../components/SpinnerButton";

function UpdateProjectForm() {

  const navigate = useNavigate();

  const { id } = useParams();

  const project = useSelector((state) => selectProjectByID(state, id));

  const [updateProject, {isLoading}] = useUpdateProjectMutation();

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

  const [errorMsg, setErrorMsg] = useState(null);


  useEffect(() => {
    setErrorMsg(null);
  }, [formData, image]);

  useEffect(() => {
    if(image === "") return;
    console.log(image);
    setImageURL(URL.createObjectURL(image));
  }, [image]);

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleDismiss = (e) => {
    e.preventDefault();
    setErrorMsg(null);
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

  const handleSubmit = async (e) => {
      e.preventDefault();
      const data = new FormData();
      const tech = technologies.map(x => x.name);
      data.append("name", formData.name);
      data.append("description", formData.description);
      data.append("image", image);
      data.append("technologies", tech);
      data.append("github", formData.github);
      data.append("liveLink", formData.liveLink);

      try{
        await updateProject({data, _id: id}).unwrap();
        navigate("/admin/projects");
      }
      catch(e) {
          console.error(e);
          if(!Number(e.status)) setErrorMsg("No server response");
          else setErrorMsg(e.data.error);
      }
  };

  return (
    <div
    className='bg-black text-white max-w-[750px] mx-auto border-white border-y-2'
    >
      <form
      className='py-8 px-16'
      onSubmit={handleSubmit}
      >

        <h2
        className="text-2xl mx-auto text-center mb-7 w-fit border-b-2 border-white px-2"
        >Update Project</h2>

        {
          errorMsg !== null ?
            <section className='flex justify-between items-center p-1 mb-5 border border-white' >
              <p className="flex items-center gap-1" ><FaExclamationCircle color="rgb(239 68 68)" />{errorMsg}</p>
              <button type='button' onClick={handleDismiss}><FaTimes/></button>
            </section>
          : undefined
        }

        <section
        className="flex flex-col mb-5"
        >
            <label
            className="text-xl"
            htmlFor="name"
            >Project Name</label>
            <input
            className="border p-1 text-lg bg-slate-800"
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={formData.name}
            required
            />
        </section>  
        <section
        className="flex flex-col mb-5"
        >
            <label
            className="text-xl"
            htmlFor="description"
            >Project Description</label>
            <textarea
            className="border p-1 text-lg bg-slate-800"
            id="description"
            name="description"
            type="text"
            onChange={handleChange}
            value={formData.description}
            required
            />
        </section>  

        <section
        className="flex flex-col mb-5"
        >
            <label
            className="text-xl bg-slate-800 w-[48%] overflow-scroll border-2 text-center cursor-pointer py-3 hover:bg-white/25 mb-2"
            htmlFor="image"
            >
                <span>Upload Image</span>
                <input 
                className="hidden"
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                />
            </label>
            <p className="mb-2" >{image ? image.name : "No file uploaded"}</p>
            {imageURL ? <img className="w-[90%] mx-auto" src={imageURL} alt=""/> : undefined}
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
            className="border p-1 text-lg bg-slate-800"
            id="technologies"
            name="technologies"
            type="text"
            onKeyDown={handleTechnologyAdd}
            onChange={handleChange}
            value={formData.technologies}
            />

        </section>

        <section
        className="flex flex-col mb-5"
        >
            <label
            className="text-xl"
            htmlFor="github"
            >Project Repo</label>
            <input
            className="border p-1 text-lg bg-slate-800"
            id="github"
            name="github"
            type="text"
            onChange={handleChange}
            value={formData.github}
            required
            />
        </section> 

        <section
        className="flex flex-col mb-5"
        >
            <label
            className="text-xl"
            htmlFor="liveLink"
            >Project Live Link</label>
            <input
            className="border p-1 text-lg bg-slate-800"
            id="liveLink"
            name="liveLink"
            type="text"
            onChange={handleChange}
            value={formData.liveLink}
            required
            />
        </section>  

        <SpinnerButton
        type="submit"
        text="Update Project"
        isLoading={isLoading}
        />
      </form>
    </div>
  )
}

export default UpdateProjectForm