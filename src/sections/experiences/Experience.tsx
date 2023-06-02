import { ReactElement } from "react"
import { title, experiences, IExperience } from "../../data/experience"

import "./Experience.scss"

import HoverAttribute from "../../components/utils/attributeHover"

import Tippy, { useSingleton } from "@tippyjs/react"
import { ISkillIcon } from "../../data/skills"
import SkillIcon from "../../components/utils/skillIcon"
import SectionTitle from "../../components/section/sectionTitle"

export function Experience(): ReactElement<"div"> {
  const [source, target] = useSingleton({
    overrides: ["placement"],
  })
  return (
    <div className="experience" id="Experience">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <SectionTitle title={title} />

          <div className="columns is-variable is-8 is-multiline">
            {experiences.map((value: IExperience, index: number) => {
              return (
                <div
                  className="column  is-one-half-desktop is-one-half-tablet"
                  key={index}
                >
                  <div className="block">
                    <h6 className="subtitle is-6">{"0" + (index + 1)}</h6>
                  </div>
                  <div className="block">
                    <HoverAttribute
                      link={value.companySite}
                      content={value.companyName}
                      isThin={false}
                      className="title is-2"
                    />
                  </div>
                  <div className="block">
                    <p className="subtitle is-6 is-grey">
                      {value.role} | {value.period}
                    </p>
                  </div>
                  <div className="block">
                    <h4 className="subtitle is-4">
                      {value.workDone.map((work: string, index: number) => (
                        <div className="experience-workdone" key={index}>
                          {" "}
                          {work}{" "}
                        </div>
                      ))}
                    </h4>
                  </div>
                  <div className="skill-icon-list">
                    <Tippy
                      singleton={source}
                      delay={50}
                      moveTransition="transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)"
                      animation="shift-away"
                    />
                    {value.techStack.map((skillIcon: ISkillIcon) => {
                      return (
                        <SkillIcon
                          icon={skillIcon.icon}
                          iconName={skillIcon.iconName}
                          singleton={target}
                          key={skillIcon.iconName}
                        />
                      )
                    })}
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
