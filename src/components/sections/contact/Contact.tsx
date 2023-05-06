import { ReactElement } from "react";

import "./Contact.scss";
import { Icon } from "../../icons/Icon";
import { Github } from "../../../svg/socials/Github";
import { Linkedin } from "../../../svg/socials/Linkedin";
import HoverAttribute from "../../utils/attributeHover";
import { ContactHeader, GetInTouch, FareWell } from "../../../data/contact";
import { menuItems } from "../../../data/header";

export default function Contact(): ReactElement<"div"> {
  return (
    <div className="contact" id="Contact">
      <section className="hero is-fullheight">
        <section className="section is-medium">
          <div className="columns  is-variable is-multiline  is-8 ">
            <div className="column is-full pb-6 mb-6">
              <h1 className="title is-1 has-text-centered">{ContactHeader}</h1>
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
                <Icon
                  icon={
                    <a href="https://github.com/benluiwj">
                      <Github />
                    </a>
                  }
                />
                <Icon
                  icon={
                    <a href="https://www.linkedin.com/in/benjaminluiwj/">
                      <Linkedin />
                    </a>
                  }
                />
              </div>
            </div>
            <div className="column is-narrow">
              <div className="line" />
            </div>
            <div className="column  is-flex ">
              <div className="columns is-multiline is-variable is-8">
                {menuItems.map((menuItem: string) => (
                  <div className="column is-half " key={menuItem}>
                    <h4 className="subtitle is-4 has-text-centered ">
                      <HoverAttribute
                        link={"#" + menuItem}
                        content={menuItem}
                        isThin={true}
                        className=""
                        onClick={(
                          e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                        ) => {
                          let targetSection = document.getElementById(menuItem);
                          e.preventDefault();

                          targetSection &&
                            targetSection.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                        }}
                      />
                    </h4>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
