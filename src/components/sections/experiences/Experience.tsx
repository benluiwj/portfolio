import { ReactElement } from "react";
import { title, experiences, IExperience } from "../../../data/experience";

import "./Experience.scss";

import HoverAttribute from "../../utils/attributeHover";
import { Variants, motion } from "framer-motion";

const headerVariants: Variants = {
  offscreen: {
    y: -100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
};

export function Experience(): ReactElement<"div"> {
  return (
    <div className="experience" id="Experience">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <motion.div
            className="columns pb-6 mb-6 is-centered "
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
      </section>
    </div>
  );
}