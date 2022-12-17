import image from "../assets/hyrule_compendium.png"

function ProjectCard() {

  const cardStyle = "w-1/3 border";

  const headerStyle = "";


  return (
    <section className="w-full shadow px-3 py-5 mb-5 md:w-2/5 xl:w-1/5">
      <section className="mb-3">
        <h2
        className="text-center font-medium text-lg mb-2"
        >
          Project Name
        </h2>
        <img
        src={image} 
        /> 
      </section>
      <section className="info">
        <ul className="flex flex-wrap gap-3 mb-2">
          <li className="border px-2 py-1">Nodejs</li>
          <li className="border px-2 py-1">Expressjs</li>
          <li className="border px-2 py-1">TailwindCss</li>
          <li className="border px-2 py-1">TailwindCss</li>
          <li className="border px-2 py-1">Nodejs</li>
          <li className="border px-2 py-1">Nodejs</li>
          <li className="border px-2 py-1">Expressjs</li>
        </ul>
        <p>A complete, multiline description of the project. Should explain what the project does, how it works, and maybe some impressions from working on the project. This might not stay, not sure yet.</p>
        <ul>
          <li><a>Github Link</a></li>
          <li><a>Live Link</a></li>
        </ul>
      </section>
    </section>
  )
}

export default ProjectCard