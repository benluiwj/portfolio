import { ReactElement, useState } from "react";
import { motion } from "framer-motion";
import { DarkMode } from "../../svg/theme/Darkmode";
import { Icon } from "../icons/Icon";
import { LightMode } from "../../svg/theme/Lightmode";

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

export function DarkModeToggle(): ReactElement<"button"> {
  const [isDark, setIsDark] = useState<Boolean>(false);
  return (
    <motion.button
      animate={isDark ? "moon" : "sun"}
      variants={variants}
      onClick={() => setIsDark(!isDark)}
    >
      {isDark ? <Icon icon={<DarkMode />} /> : <Icon icon={<LightMode />} />}
    </motion.button>
  );
}
