export interface TextVariants {
  initial: {
    opacity: number;
  };
  enter: {
    opacity: number;
    top: number | string;
    transition: {
      duration: number;
      delay: number;
      ease: [number, number, number, number];
    };
    transitionEnd?: { top: string };
  };
  exit: {
    opacity: number;
    top: number | string;
    transition: {
      duration: number;
      delay: number;
      ease: [number, number, number, number];
    };
  };
}

export const text: TextVariants = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: { top: '47.5%' },
  },
  exit: {
    opacity: 1,
    top: '40%',
    transition: { duration: 0.5, delay: 0.4, ease: [0.33, 1, 0.68, 1] },
  },
};

export interface CurveVariants {
  initial: { d: string };
  enter: {
    d: string;
    transition: {
      duration: number;
      delay: number;
      ease: [number, number, number, number];
    };
  };
  exit: {
    d: string;
    transition: {
      duration: number;
      ease: [number, number, number, number];
    };
  };
}

export const curve = (
  initialPath: string,
  targetPath: string,
): CurveVariants => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
    },
  };
};

export interface TranslateVariants {
  initial: { top: string };
  enter: {
    top: string;
    transition: {
      duration: number;
      delay: number;
      ease: [number, number, number, number];
    };
    transitionEnd?: { top: string };
  };
  exit: {
    top: string;
    transition: {
      duration: number;
      ease: [number, number, number, number];
    };
  };
}

export const translate: TranslateVariants = {
  initial: {
    top: '-300px',
  },
  enter: {
    top: '-100vh',
    transition: { duration: 0.75, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
    transitionEnd: {
      top: '100vh',
    },
  },
  exit: {
    top: '-300px',
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
};
