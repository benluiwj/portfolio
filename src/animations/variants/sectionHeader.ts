import { Variants } from "framer-motion";

export const headerVariants: Variants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.5,
    },
  },
};
