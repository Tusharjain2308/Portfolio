import React from "react";
import { useScroll, useTransform } from "framer-motion";
import GoogleGeminiEffect from "../ui/Gemini"; // Adjust the path if necessary
import { FlipWords } from "../ui/Intro";

export function GoogleGeminiEffectDemo() {
  const words = ["DESIGNER", "WEB-DEVELOPER", "CODER", "EDITOR"];
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  return (
    <>
    <div
      className="h-[300vh] bg-black w-full relative pt-40 overflow-clip"
      ref={ref}
    >
      <GoogleGeminiEffect
        pathLengths={[
          pathLengthFirst,
          pathLengthSecond,
          pathLengthThird,
          pathLengthFourth,
          pathLengthFifth,
        ]}
      />
    </div>

    <div className="h-[60rem] flex justify-center items-center px-4 bg-black">
      <div className="relative flex flex-col items-center text-2xl md:text-4xl lg:text-6xl font-normal text-white">
        <span>Hello, I am a</span>
        <div className="my-4 absolute top-14 whitespace-nowrap text-6xl md:text-8xl lg:text-10xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <FlipWords words={words} />
        </div>
      </div>
    </div>
    </>
  );
}