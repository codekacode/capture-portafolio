export const pageAnimation = {
  hidden: {
    opacity:0, 
    y:300,
  },
  show: {
    opacity:1,
    y:0, 
    transition: {
      duration:0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity:0,
    transition: {
      duration:0.5,
    },
  },
};

export const titleAnim = {
  hidden: {y:200},
  show: {
    y:0,
    transition:{
      duration:0.75, 
      ease: "easeOut"
    },
  },
};

// const container = {
//   hidden: {x:100},
//   show: {x:0, transition: {duration: 0.75, ease: "easeOut", staggerChildren: 1}}, // when: "afterChildren"
// };

export const fade = {
  hidden: {opacity:0},
  show: {
    opacity:1,
    transition: {
      ease: "easeOut",
      duration: 1
    },
  },
};

export const photoAnim = {
  hidden: {
    scale: 1.5, opacity: 0
  },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      ease: "easeOut",
      duration: 0.75,
    },
  },
};