import { ReactElement, useState } from "react";
import "./Header.scss";
import "./Header.dark.scss";
import { Linkedin } from "../../svg/socials/Linkedin";
import { Github } from "../../svg/socials/Github";
import { Icon } from "../icons/Icon";

import { DarkModeToggle } from "../darkModeToggle/DarkModeToggle";
import Menu from "../menu/Menu";
import { headerName } from "../../data/header";

export function Header(): ReactElement<"div"> {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const width: boolean = window.matchMedia("(max-width: 1024px)").matches;

  const handleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="title is-1">Ben</h1>

        <div className="navbar-brand-neighbor"></div>
        <button
          className={isOpen ? "navbar-burger is-active" : "navbar-burger"}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          onClick={handleNavBar}
        >
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
          <span aria-hidden="false"></span>
        </button>
      </div>
      <div
        className={isOpen ? "navbar-menu is-active" : "navbar-menu"}
        id="navbar"
      >
        <div className="navbar-end">
          <div className="navbar-item">
            <h3 className="subtitle is-3">test</h3>
          </div>
        </div>
      </div>
    </nav>
    // <div className="header">
    //   <div className="header-socials">
    //     <Icon icon={<Linkedin />} />
    //     <Icon icon={<Github />} />
    //     <DarkModeToggle />
    //   </div>
    //   <div className="header-name">
    //     <h1 className="title is-1">{headerName}</h1>
    //   </div>
    //   <Menu />
    // </div>
  );
}
