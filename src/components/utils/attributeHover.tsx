import { motion } from "framer-motion";
import { ReactElement, useEffect } from "react";
import { useThemeContext } from "../../context/themeContext";

export type Props = {
  link: string;
  content: string;
  isThin: boolean;
  className: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
};

export default function HoverAttribute({
  link,
  content,
  isThin,
  className,
  onClick,
}: Props): ReactElement<"a"> {
  console.log(link);
  const { isDarkMode } = useThemeContext();
  console.log(isDarkMode);

  return (
    <motion.a
      initial={{
        borderBottomWidth: isThin ? "2px" : "4px",
        // borderBottomStyle: "solid",
        // borderBottomColor: isDarkMode ? "white" : "black",
      }}
      whileHover={{
        borderBottomWidth: "0px",
        // borderBottomStyle: "solid",
        // borderBottomColor: isDarkMode ? "white" : "black",
        transition: { duration: 0.1, ease: "easeIn" },
      }}
      href={link}
      className={className}
      onClick={onClick}
    >
      {content}
    </motion.a>
  );
}
