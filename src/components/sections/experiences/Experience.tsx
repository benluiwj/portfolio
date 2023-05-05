import { ReactElement } from "react";
import { title, experiences, IExperience } from "../../../data/experience";

import "./Experience.scss";

import { motion } from "framer-motion";
import HoverAttribute from "../../utils/attributeHover";

export function Experience(): ReactElement<"div"> {
  return (
    <div className="experience" id="Experience">
      <section className="section is-medium">
        <div className="columns pb-6 mb-6 is-centered ">
          <div className="column  is-one-third ">
            <h1 className="title is-1 has-text-centered">{title}</h1>
          </div>
        </div>
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
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
