import ProjectCard from "./ProjectCard";

import {
  projects
} from "./data";


export default function Projects(){

  return (

    <section
      id="projects"
      className="
        min-h-screen
        px-10
        py-20
        scroll-mt-20
      "
    >

      <h2 className="
        text-4xl
        font-bold
        mb-10
      ">
        Projects
      </h2>


      <div
        className="
          grid
          md:grid-cols-3
          gap-6
        "
      >

        {
          projects.map((project)=>(
            
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              link={project.link}
            />

          ))
        }


      </div>


    </section>

  );

}