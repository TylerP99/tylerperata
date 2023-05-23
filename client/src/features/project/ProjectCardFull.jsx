function ProjectCardFull({project}) {
  return (
    <article
    className={"border mb-5 p-5 md:flex justify-between md:max-h-[400px] bg-black" + (index%2 === 0 ? " flex-row" : " flex-row-reverse")}
    >
      <section className="md:w-[48%] max-h-[100%] overflow-hidden mb-2" >
        <h3
        className="text-2xl mb-4 border-b-4"
        >{project.name}</h3>
        <section className="">
          <section className="flex flex-wrap gap-2 mb-2">
            {project.technologies.length ? 
            project.technologies.map(x => <Technology text={x}/>)
            :
            undefined}
          </section>
          <p className="mb-2 indent-8 overflow-scroll max-h-[150px] p-1" >{project.description}</p>
          <section className="flex items-center justify-between" >
              <LinkButton className="w-[48%]" text="Live Site" link={project.liveLink} />
              <LinkButton className="w-[48%]" text="Github Repo" link={project.github} />
          </section>
        </section>
      </section> 
      <AdvancedImage className="w-full md:w-[48%] border-8 rounded-lg" cldImg={myCld.image(project.cloudinaryID)} plugins={[lazyload(), responsive()]} />
    </article>
  )
}

export default ProjectCardFull