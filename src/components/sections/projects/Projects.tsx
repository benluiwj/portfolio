import { ReactElement } from "react";
import { Project, projects, title } from "../../../data/projects";
import "./Projects.scss";
import { motion } from "framer-motion";
// import { motion } from "framer-motion";

export default function Projects(): ReactElement<"div"> {
  return (
    <div className="projects">
      <section className="section is-medium">
        <div className="columns pb-6 mb-6 is-centered">
          <div className="column  is-one-third ">
            <h1 className="title is-1 has-text-centered">{title}</h1>
          </div>
        </div>
        <div className="columns is-multiline">
          {projects.map((project: Project, index: number) => {
            return (
              <div className="column is-one-half-desktop is-half-tablet is-one-third-widescreen">
                <div className="card">
                  <div className="card-image">
                    <figure className="image is-3by2">
                      <img
                        src={project.thumbnail}
                        alt={project.name}
                        className="project-thumbnail"
                      />
                    </figure>
                  </div>
                  <div className="card-content">
                    <p className="title is-3 is-spaced has-text-centered">
                      {"0" + (index + 1) + ". " + project.name}
                    </p>
                    <p className="subtitle is-5">{project.description}</p>
                    <div className="project-techstack">{project.techStack}</div>
                    {project.links === undefined ? (
                      <p>Sorry, I have nothing to show for this project...</p>
                    ) : (
                      <div className="columns">
                        <div className="column is-one-third ">
                          {project.links!.Github !== undefined && (
                            <motion.a
                              initial={{
                                borderBottomWidth: "4px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "white",
                              }}
                              whileHover={{
                                borderBottomWidth: "0px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "white",
                                transition: { duration: 0.1, ease: "easeIn" },
                              }}
                              href={project.links!.Github!}
                              className="subtitle is-4"
                            >
                              Github
                            </motion.a>
                          )}
                        </div>
                        <div className="column is-one-third">
                          {project.links!.Devpost !== undefined && (
                            <motion.a
                              initial={{
                                borderBottomWidth: "4px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "white",
                              }}
                              whileHover={{
                                borderBottomWidth: "0px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "white",
                                transition: { duration: 0.1, ease: "easeIn" },
                              }}
                              href={project.links!.Devpost!}
                              className="subtitle is-4"
                            >
                              Devpost
                            </motion.a>
                          )}
                        </div>
                        <div className="column is-one-third">
                          {project.links!.Website !== undefined && (
                            <motion.a
                              initial={{
                                borderBottomWidth: "4px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "white",
                              }}
                              whileHover={{
                                borderBottomWidth: "0px",
                                borderBottomStyle: "solid",
                                borderBottomColor: "white",
                                transition: { duration: 0.1, ease: "easeIn" },
                              }}
                              href={project.links!.Website!}
                              className="subtitle is-4"
                            >
                              Website
                            </motion.a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* {projects.map((project: Project, index: number) => {
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
        })} */}
      </section>
    </div>
  );
}
