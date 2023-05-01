import { ReactElement, useState } from "react";
import "./Menu.scss";
import "./Menu.dark.scss";
import { menuName } from "../../data/header";

export default function Menu(): ReactElement<"button"> {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <button className="menu">
      {isOpen ? <div></div> : <div>{menuName}</div>}
    </button>
  );
}
