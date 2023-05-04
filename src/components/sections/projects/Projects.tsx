import { ReactElement } from "react";
import { Project, projects, title } from "../../../data/projects";
import "./Projects.scss";

export default function Projects(): ReactElement<"div"> {
  return (
    <div className="projects">
      <section className="section is-medium">
        <div className="columns pb-6 mb-6 is-centered">
          <div className="column  is-one-third ">
            <h1 className="title is-1 has-text-centered">{title}</h1>
          </div>
        </div>

        {projects.map((project: Project, index: number) => {
          return (
            <div className="project" key={index}>
              <div className="columns  mb-6">
                <div className="column is-one-third">
                  <figure className="image is-3by2">
                    <img
                      src={project.thumbnail}
                      alt={project.name}
                      className="project-thumbnail"
                    />
                  </figure>
                </div>
                <div className="column  is-offset-one-fifth">
                  <p className="title is-3 is-spaced">{project.name}</p>
                  <p className="subtitle is-5">{project.description}</p>
                  <div className="project-techstack">{project.techStack}</div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
