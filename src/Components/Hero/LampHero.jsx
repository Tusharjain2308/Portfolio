import React from "react";
import { motion } from "framer-motion";
import useScrollToTop from "../../utils/scrolltotop";
import { LampContainer } from "../ui/Lamp";

export function LampDemo() {
  useScrollToTop();
  return (
    <LampContainer height="h-screen">
      {/* <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 10 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-wide text-transparent text-white md:text-7xl"
      >
        About Me
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 10 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-center text-lg md:text-2xl text-slate-300 leading-relaxed max-w-4xl mx-auto"
      >
        I'm a passionate front-end developer and creative artist specializing in crafting visually stunning and responsive user interfaces using React.js, Tailwind CSS, and Vite. With a strong background in UI/UX design, DSA, and competitive programming, I bring ideas to life through innovative design, seamless user interactions, and efficient problem-solving.
      </motion.p> */}
    </LampContainer>
  );
}
