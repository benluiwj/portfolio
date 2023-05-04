import { ReactElement, useState } from "react";
import "./Header.scss";
import "./Header.dark.scss";
import { Linkedin } from "../../svg/socials/Linkedin";
import { Github } from "../../svg/socials/Github";
import { Icon } from "../icons/Icon";

import { DarkModeToggle } from "../darkModeToggle/DarkModeToggle";
import { brandName, menuItems } from "../../data/header";

export function Header(): ReactElement<"div"> {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" aria-label="main navigation">
      <div className="navbar-brand">
        <h1 className="title is-1">{brandName}</h1>
        <div className="icon-wrapper">
          <DarkModeToggle />
          <Icon icon={<Linkedin />} />
          <Icon icon={<Github />} />
        </div>
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
          {menuItems.map((s: string) => {
            return (
              <div className="navbar-item" key={s}>
                <h3 className="subtitle is-3">{s}</h3>
              </div>
            );
          })}

          <div className="navbar-item">
            <div className="darkmode-wrapper">
              <DarkModeToggle />
            </div>
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
