import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll, motion } from "framer-motion";
import { cn } from "../../utils/cn.js";

export const StickyScroll = ({ content, contentClassName }) => {
  const [activeCard, setActiveCard] = useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = ["var(--black)", "var(--black)", "var(--black)"];
  const linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div>
      <style jsx>{`
        .scrollbar-hidden::-webkit-scrollbar {
          display: none; /* For Chrome, Safari, and Opera */
        }

        .scrollbar-hidden {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
      `}</style>
      <motion.div
        animate={{
          backgroundColor: backgroundColors[0],
        }}
        className="h-[45rem] overflow-y-auto scrollbar-hidden bg-black flex justify-center relative space-x-10 rounded-md p-10"
        ref={ref}
      >
        <div className="relative flex items-start px-4">
          <div className="max-w-3xl">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-20 text-center">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-6xl font-bold text-slate-100"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl text-slate-300 max-w-sm mt-10 mx-auto"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-80 w-100 rounded-md bg-black sticky top-10 overflow-hidden",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};
