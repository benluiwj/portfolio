import { motion } from "framer-motion";
import { ReactElement } from "react";

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
  return (
    <motion.a
      initial={{
        borderBottomWidth: isThin ? "2px" : "4px",
      }}
      whileHover={{
        borderBottomWidth: "0px",
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
