import SkillIcon from "./components/utils/skillIcon"

import { ISkillIcon } from "./data/skills"

export const generateSVGFromTechStack = (
  techStack: ISkillIcon[],
  target: any
) => {
  return techStack.map((skillIcon: ISkillIcon) => (
    <SkillIcon
      icon={skillIcon.icon}
      iconName={skillIcon.iconName}
      singleton={target}
      key={skillIcon.iconName}
    />
  ))
}
