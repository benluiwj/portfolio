import { ReactElement } from "react";

import "./Drawer.scss";

type Props = {
  toggleDrawer: () => void;
};

export function Drawer({ toggleDrawer }: Props): ReactElement<"nav"> {
  return (
    <nav className="drawer">
      <p>hello there</p>
    </nav>
  );
}
