import { ReactElement } from "react";
import {
  title,
  elaboration,
  experiences,
  IExperience,
} from "../../../data/experience";

import "./Experience.scss";

import { EventInfo, motion } from "framer-motion";

export function Experience(): ReactElement<"div"> {
  return (
    <div className="experience">
      <section className="section is-medium">
        <div className="columns pb-6 mb-6">
          <div className="column is-one-third">
            <h1 className="title is-1">{title}</h1>
          </div>
          <div className="column"></div>
          <div className="column">
            <div className="elaboration">{elaboration}</div>
          </div>
        </div>
        <div className="columns is-variable is-8">
          {experiences.map((value: IExperience, index: number) => {
            return (
              <div
                className="column  is-half-desktop is-half-tablet"
                key={index}
              >
                <div className="block">
                  <h6 className="subtitle is-6">{"0" + (index + 1)}</h6>
                </div>
                <div className="block">
                  <motion.a
                    initial={{
                      borderBottomWidth: "0px",
                      borderBottomStyle: "solid",
                      borderBottomColor: "white",
                    }}
                    whileHover={{
                      borderBottomWidth: "4px",
                      borderBottomStyle: "solid",
                      borderBottomColor: "white",
                      transition: { duration: 0.5, ease: "easeInOut" },
                    }}
                    href={value.companySite}
                    className="title is-2"
                  >
                    {value.companyName}
                  </motion.a>
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
