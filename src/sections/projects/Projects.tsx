import { ReactElement } from "react"
import { Project, projects, title } from "../../data/projects"
import "./Projects.scss"

import Tippy, { useSingleton } from "@tippyjs/react"

import SectionTitle from "../../components/section/sectionTitle"

import "tippy.js/animations/shift-away.css"
import { generateSVGFromTechStack } from "../../utils"
import { projectLinks } from "../../components/section/projectLinks"

export default function Projects(): ReactElement<"div"> {
  const [source, target] = useSingleton({
    overrides: ["placement"],
  })
  return (
    <div className="projects" id="Projects">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <SectionTitle title={title} />
          <div className="columns is-multiline">
            {projects.map((project: Project, index: number) => {
              return (
                <div
                  className="column is-one-half-desktop is-half-tablet is-one-third-widescreen"
                  key={index}
                >
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
                      <div className="skill-icon-list">
                        <Tippy
                          singleton={source}
                          delay={50}
                          moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                          animation="shift-away"
                        />
                        {generateSVGFromTechStack(project.techStack, target)}
                      </div>
                      {projectLinks(project.links)}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </section>
    </div>
  )
}
