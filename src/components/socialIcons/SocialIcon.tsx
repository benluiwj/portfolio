import { ReactElement } from "react";
import "./SocialIcon.scss";

interface IconProps {
  icon: ReactElement<void, "svg">;
  href: string;
}

export function SocialIcon({
  icon,
  href,
}: IconProps): ReactElement<IconProps, "div"> {
  return (
    <div className="icon">
      <a href={href}>{icon}</a>
    </div>
  );
}
