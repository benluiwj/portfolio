import { ReactElement } from "react";
import "./Header.scss";
import "./Header.dark.scss";
import { Linkedin } from "../../svg/socials/Linkedin";
import { Github } from "../../svg/socials/Github";
import { Icon } from "../icons/Icon";

import { DarkModeToggle } from "../darkModeToggle/DarkModeToggle";
import Menu from "../menu/Menu";
import { headerName } from "../../data/header";

export function Header(): ReactElement<"div"> {
  return (
    <div className="header">
      <div className="header-socials">
        <Icon icon={<Linkedin />} />
        <Icon icon={<Github />} />
        <DarkModeToggle />
      </div>
      <div className="header-name">
        <h1 className="title is-1">{headerName}</h1>
      </div>
      <Menu />
    </div>
  );
}
