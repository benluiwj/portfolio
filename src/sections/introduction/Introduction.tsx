import { ReactElement } from "react";
import "./Introduction.scss";
import "./Introduction.dark.scss";
import { elaboration, introduction } from "../../data/introduction";
import { motion } from "framer-motion";
import {
  introductionVariants,
  elaborationVariants,
} from "../../animations/variants/introduction";

export function Introduction(): ReactElement<"div"> {
  return (
    <div className="introduction " id="About">
      <section className="section is-large p-0">
        <motion.div
          className="columns"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop pb-6 mb-6">
            <motion.h1
              className="title is-1 is-size-1"
              variants={introductionVariants}
            >
              {introduction}
            </motion.h1>
          </div>
          <div className="column"></div>
        </motion.div>
        <motion.div
          className="columns"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="column "></div>
          <div className="column is-two-third">
            <motion.h3 className="subtitle is-4" variants={elaborationVariants}>
              {elaboration}
            </motion.h3>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
