import { motion } from "framer-motion";
import { ReactElement } from "react";

export type Props = {
  link: string;
  content: string;
  isThin: boolean;
  className: string;
};

export default function HoverAttribute({
  link,
  content,
  isThin,
  className,
}: Props): ReactElement<"a"> {
  return (
    <motion.a
      initial={{
        borderBottomWidth: isThin ? "2px" : "4px",
        borderBottomStyle: "solid",
        borderBottomColor: "white",
      }}
      whileHover={{
        borderBottomWidth: "0px",
        borderBottomStyle: "solid",
        borderBottomColor: "white",
        transition: { duration: 0.1, ease: "easeIn" },
      }}
      href={link}
      className={className}
    >
      {content}
    </motion.a>
  );
}
