import { ReactElement } from "react";
import "./Navbar.scss";
import "./Navbar.dark.scss";
import { Linkedin } from "../../svg/socials/Linkedin";
import { Github } from "../../svg/socials/Github";
import { Icon } from "../icons/Icon";
import { headerName, menuName } from "../../data/navbar";
import { DarkModeToggle } from "../darkModeToggle/DarkModeToggle";

export function Navbar(): ReactElement<"nav"> {
  return (
    <nav className="navbar">
      <div className="navbar-socials">
        <Icon icon={<Linkedin />} />
        <Icon icon={<Github />} />
        <DarkModeToggle />
      </div>
      <div className="navbar-name">
        <div className="navbar-header-text">{headerName}</div>
      </div>
      <div className="navbar-menu">
        <div className="navbar-menu-text">{menuName}</div>
      </div>
    </nav>
  );
}
