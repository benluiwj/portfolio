import { ReactElement } from "react";
import "./Introduction.scss";
import "./Introduction.dark.scss";
import { elaboration, introduction } from "../../../data/introduction";

export function Introduction(): ReactElement<"div"> {
  return (
    <div className="introduction ">
      <section className="section is-large mb-6">
        <div className="columns">
          <div className="column is-three-quarters-mobile is-two-thirds-tablet is-half-desktop ">
            <h1 className="title is-1 is-size-1">{introduction}</h1>
          </div>
          <div className="column"></div>
        </div>
        <div className="columns">
          <div className="column "></div>
          <div className="column is-two-third">
            <h3 className="subtitle is-3">{elaboration}</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
