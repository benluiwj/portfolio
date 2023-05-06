import { Variants } from "framer-motion";

export const verticalLineVariants: Variants = {
  offscreen: {
    y: 300,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 1,
    },
  },
};
