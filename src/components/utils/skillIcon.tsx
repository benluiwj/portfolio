import { ReactElement } from "react";
import "../../styles/SkillIcon.scss";
import Tippy from "@tippyjs/react";
import { TippyProps } from "@tippyjs/react";
import "tippy.js/animations/shift-away-extreme.css";

export interface Props extends TippyProps {
  icon: ReactElement<void, "svg">;
  iconName: string;
}

export default function SkillIcon({ icon, iconName, singleton }: Props) {
  return (
    <div className="skill-icon">
      <Tippy
        content={iconName}
        placement="bottom"
        singleton={singleton}
        animation="shift-away-extreme"
        duration={250}
        delay={10}
      >
        <div className="icon-text">
          <span className="icon has-text-info">{icon}</span>
        </div>
      </Tippy>
    </div>
  );
}
