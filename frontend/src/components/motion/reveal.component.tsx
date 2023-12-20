import React, { useRef, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface Props {
  children: React.ReactNode;
  width?: string;
  delay?: number;
}

export const Reveal = ({ children, width = "fit", delay = 0.7 }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} className={`relative w-${width} overflow-hidden`}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.7, delay: delay }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute opacity-30 top-4 left-0 bottom-4 right-0 bg-gradient-to-r from-teal-500 to-teal-700 z-20"
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.75, ease: "easeIn" }}
      />
    </div>
  );
};
