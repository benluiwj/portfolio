import { ReactElement } from "react";
import { Project, projects, title } from "../../../data/projects";
import "./Projects.scss";

import HoverAttribute from "../../utils/attributeHover";
import SkillIcon from "../../utils/skillIcon";
import Tippy, { useSingleton } from "@tippyjs/react";
import { ISkillIcon } from "../../../data/skills";
import { motion } from "framer-motion";
import { headerVariants } from "../../../animations/variants/sectionHeader";

export default function Projects(): ReactElement<"div"> {
  const [source, target] = useSingleton({
    overrides: ["placement"],
  });
  return (
    <div className="projects" id="Projects">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <motion.div
            className="columns pb-6 mb-6 is-centered"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="column  is-one-third ">
              <motion.h1
                className="title is-1 has-text-centered"
                variants={headerVariants}
              >
                {title}
              </motion.h1>
            </div>
          </motion.div>
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
                          delay={500}
                          moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                        />
                        {project.techStack.map((skillIcon: ISkillIcon) => {
                          return (
                            <SkillIcon
                              icon={skillIcon.icon}
                              iconName={skillIcon.iconName}
                              singleton={target}
                              key={skillIcon.iconName}
                            />
                          );
                        })}
                      </div>
                      {project.links === undefined ? (
                        <p>Sorry, I have nothing to show for this project...</p>
                      ) : (
                        <div className="columns">
                          <div className="column is-one-third ">
                            {project.links!.Github !== undefined && (
                              <HoverAttribute
                                link={project.links!.Github!}
                                content="Github"
                                isThin={false}
                                className="subtitle is-4"
                              />
                            )}
                          </div>
                          <div className="column is-one-third">
                            {project.links!.Devpost !== undefined && (
                              <HoverAttribute
                                link={project.links!.Devpost!}
                                content="Devpost"
                                isThin={false}
                                className="subtitle is-4"
                              />
                            )}
                          </div>
                          <div className="column is-one-third">
                            {project.links!.Website !== undefined && (
                              <HoverAttribute
                                link={project.links!.Website!}
                                content="Website"
                                isThin={false}
                                className="subtitle is-4"
                              />
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
        </section>
      </section>
    </div>
  );
}
