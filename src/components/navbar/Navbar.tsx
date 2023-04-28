import { ReactElement } from "react";
import "./Navbar.scss";
import { Linkedin } from "../../svg/Linkedin";
import { Github } from "../../svg/Github";
import { Icon } from "../icons/Icon";

export function Navbar(): ReactElement<"nav"> {
  return (
    <nav className="navbar">
      <div className="navbar-socials">
        <Icon icon={<Linkedin />} />
        <Icon icon={<Github />} />
      </div>
      <div className="navbar-name">
        <div className="navbar-header-text">Ben</div>
      </div>
      <div className="navbar-menu">
        <p>Menu</p>
      </div>
    </nav>
  );
}
