import { ReactElement } from "react";
import "../../styles/SkillIcon.scss";

import { TippyProps } from "@tippyjs/react";

import Tippy from "@tippyjs/react";

export interface Props extends TippyProps {
  icon: ReactElement<void, "svg">;
  iconName: string;
}

export default function SkillIcon({ icon, iconName, singleton }: Props) {
  return (
    <Tippy placement="bottom" singleton={singleton} content={iconName}>
      <div className="skill-icon">
        <div className="icon-text">
          <span className="icon has-text-info">{icon}</span>
        </div>
      </div>
    </Tippy>
  );
}
