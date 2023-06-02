import { Links } from "../../data/projects"
import HoverAttribute from "../utils/attributeHover"

export const projectLinks = (links: Links) => {
  const noLinkApology = "Sorry, I have nothing to show for this project..."
  const { devpost, github, website, total } = links
  if (total === 0) {
    return <p>{noLinkApology}</p>
  }

  const columnStyle =
    "column " +
    (total === 3 ? "is-one-third" : total === 2 ? "is-half" : "") +
    " has-text-centered"
  const githubProjectLink = projectLink(github, "Github", columnStyle)
  const devpostProjectLink = projectLink(devpost, "Devpost", columnStyle)
  const websiteProjectLink = projectLink(website, "Website", columnStyle)
  return (
    <div className="columns">
      {githubProjectLink}
      {devpostProjectLink}
      {websiteProjectLink}
    </div>
  )
}

const projectLink = (
  link: string | undefined,
  name: string,
  columnStyle: string
) =>
  link !== undefined && (
    <div className={columnStyle}>
      <HoverAttribute
        link={link}
        content={name}
        isThin={false}
        className="subtitle is-4"
      />
    </div>
  )
