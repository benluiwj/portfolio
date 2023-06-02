import { menuItems } from "../../data/header"
import HoverAttribute from "../utils/attributeHover"

export default function Footer() {
  return (
    <div className="column  ">
      <div className="columns is-multiline is-variable is-8 is-align-items-center">
        {menuItems.map((menuItem: string) => (
          <div className="column is-half is-full-mobile" key={menuItem}>
            <h4 className="subtitle is-4 has-text-centered ">
              <HoverAttribute
                link={"#" + menuItem}
                content={menuItem}
                isThin={true}
                className=""
                onClick={(
                  e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
                ) => {
                  let targetSection = document.getElementById(menuItem)
                  e.preventDefault()

                  targetSection &&
                    targetSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    })
                }}
              />
            </h4>
          </div>
        ))}
      </div>
    </div>
  )
}
