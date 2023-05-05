import { ReactElement } from "react";

import "./Contact.scss";
import { Icon } from "../icons/Icon";
import { Github } from "../../svg/socials/Github";
import { Linkedin } from "../../svg/socials/Linkedin";
import HoverAttribute from "../utils/attributeHover";
import {
  ContactHeader,
  GetInTouch,
  FareWell,
  MenuItems,
} from "../../data/contact";

export default function Contact(): ReactElement<"div"> {
  return (
    <div className="contact" id="Contact">
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
              <Icon icon={<Github />} />
              <Icon icon={<Linkedin />} />
            </div>
          </div>
          <div className="column is-narrow">
            <div className="line" />
          </div>
          <div className="column  ">
            <div className="columns is-multiline">
              {MenuItems.map((menuItem: string, index: number) => (
                <div className="column is-half" key={index}>
                  <h4 className="subtitle is-4 has-text-centered">
                    <HoverAttribute
                      link={"#" + menuItem}
                      content={menuItem}
                      isThin={true}
                      className=""
                    />
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
