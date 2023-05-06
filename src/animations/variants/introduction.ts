import { Variants } from "framer-motion";

export const introductionVariants: Variants = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};

export const elaborationVariants: Variants = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "easeIn",
      duration: 0.8,
    },
  },
};
