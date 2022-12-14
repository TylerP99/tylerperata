import image from "../assets/hyrule_compendium.png"

function ProjectCard() {

  const cardStyle = "w-1/3 border";

  const headerStyle = "";


  return (
    <section className="border w-1/3 px-3 py-1 ">
      <section className="">
        <img src={image} />
        <h2>Project Name</h2>
      </section>
      <section className="info">
        <p>Summary of this project that is relatively brief</p>
        <section>
          <h3>Made with</h3>
          <ul className="flex space-x-3">
            <li className="border px-2 py-1">Nodejs</li>
            <li className="border px-2 py-1">Expressjs</li>
            <li className="border px-2 py-1">TailwindCss</li>
          </ul>
        </section>
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