import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "../../utils/cn.js";

export const TextGenerateEffect = ({ words, className, filter = true, duration = 0.8 }) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: 0.4,

        repeatType: "reverse"
      }
    );
  }, [scope.current]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-white text-black opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-light", className)}>
      <div className="mt-4">
        <div className="flex flex-col dark:text-white text-black sm:text-xl md:text-2xl lg:text-3xl items-center align-center leading-snug tracking-wide mb-10">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
