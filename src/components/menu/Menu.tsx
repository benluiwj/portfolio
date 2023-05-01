import { ReactElement, useState } from "react";
import "./Menu.scss";
import "./Menu.dark.scss";
import { closeMenu, openMenu } from "../../data/header";
import { Drawer } from "./drawer/Drawer";

export default function Menu(): ReactElement<"div"> {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button className="button" onClick={toggleDrawer}>
        {isOpen ? closeMenu : openMenu}
      </button>
      {isOpen && <Drawer toggleDrawer={toggleDrawer} />}
    </div>
  );
}
