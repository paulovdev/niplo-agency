export const appearAnimY = {
  animate: {
    opacity: 1,
    y: -10,
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
    },
  },
  initial: {
    opacity: 0,
    y: 0,
  },
};

export const appearOpacity = {
  animate: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  initial: { opacity: 0 },
  exit: { opacity: 0 },
};

export const textSlideAnim = {
  initial: { y: "300%" },
  animate: (i) => ({
    y: "0",
    transition: {
      duration: 0.75,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.075 * i,
    },
  }),
};
