import { ReactElement } from "react"

import "./Contact.scss"
import { SocialIcon } from "../../components/socialIcons/SocialIcon"
import { Github } from "../../svg/socials/Github"
import { Linkedin } from "../../svg/socials/Linkedin"
import HoverAttribute from "../../components/utils/attributeHover"
import { ContactHeader, GetInTouch, FareWell } from "../../data/contact"

import { motion } from "framer-motion"
import { headerVariants } from "../../animations/variants/sectionHeader"
import { verticalLineVariants } from "../../animations/variants/verticalLine"
import { GithubURL, LinkedinURL } from "../../data/socials"
import Footer from "../../components/footer/Footer"

export default function Contact(): ReactElement<"div"> {
  return (
    <div className="contact" id="Contact">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <motion.div
            className="columns  is-variable is-multiline  is-8 "
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="column is-full pb-6 mb-6">
              <motion.h1
                className="subtitle is-3 has-text-centered"
                variants={headerVariants}
              >
                {ContactHeader}
              </motion.h1>
            </div>
            <div className="column ">
              <div className="block">
                <h2 className="title is-3 has-text-centered">{GetInTouch}</h2>
              </div>
              <div className="block">
                <h4 className="subtitle is-4 has-text-centered">
                  {FareWell}
                  <HoverAttribute
                    link="mailto:ben.luiwjie@gmail.com"
                    content="here"
                    isThin={true}
                    className=""
                  />
                </h4>
              </div>
              <div className="block is-flex is-justify-content-space-evenly">
                <SocialIcon icon={<Github />} href={GithubURL} />
                <SocialIcon icon={<Linkedin />} href={LinkedinURL} />
              </div>
            </div>
            <motion.div
              className="column is-narrow"
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div className="line" variants={verticalLineVariants} />
            </motion.div>
            <Footer />
          </motion.div>
        </section>
      </section>
    </div>
  )
}
