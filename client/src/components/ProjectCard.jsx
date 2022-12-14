

function ProjectCard() {
  return (
    <section className="card">
      <section className="header">
        <img />
        <h2>Project Name</h2>
      </section>
      <section className="info">
        <p>Summary of this project that is relatively brief</p>
        <section>
          <h3>Made with</h3>
          <ul>
            <li>Nodejs</li>
            <li>Expressjs</li>
            <li>TailwindCss</li>
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