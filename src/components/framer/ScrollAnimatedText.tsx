'use client';
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollAnimatedTextProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

function ScrollAnimatedText({ children, delay = 0, className = "" }: ScrollAnimatedTextProps) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.15"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 1]);
  const x = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [-200, 0, 0, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        x,
      }}
      initial={{ opacity: 0, x: -200 }}
      transition={{
        duration: 5,
        delay: delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={`block ${className}`}
    >
      {children}
    </motion.div>
  );
}

export default ScrollAnimatedText;
