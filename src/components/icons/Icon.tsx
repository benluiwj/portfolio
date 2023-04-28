import { ReactElement } from "react";
import "./Icon.scss";

interface IconProps {
  icon: ReactElement<void, "svg">;
}

export function Icon({ icon }: IconProps): ReactElement<IconProps, "div"> {
  return <div className="icon">{icon}</div>;
}
