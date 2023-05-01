import { ReactElement } from "react";
import "./Introduction.scss";
import { elaboration, introduction } from "../../data/introduction";

export function Introduction(): ReactElement<"div"> {
  return (
    <div className="introduction">
      <div className="columns">
        <div className="column is-half">
          <h3 className="title is-3">{introduction}</h3>
        </div>
        <div className="column"></div>
      </div>
      <div className="columns">
        <div className="column "></div>
        <div className="column is-two-third">
          <h5 className="subtitle is-5">{elaboration}</h5>
        </div>
      </div>
    </div>
  );
}
