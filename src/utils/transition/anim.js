export const expand = {
  initial: {
    top: 0,
    transition: {
      duration: 1,
      delay: 1,
    },
  },

  enter: (i) => ({
    top: "100vh",

    transition: {
      duration: 1,
      delay: 0.2 * i,
      ease: [0.115, 0.61, 0.2, 1.4],
    },

    transitionEnd: {
      height: "0",
      top: "0",
    },
  }),
};

export const opacity = {
  initial: {
    opacity: 1,
  },

  enter: {
    opacity: 0,
  },

  exit: {
    opacity: 0.5,
  },
};
