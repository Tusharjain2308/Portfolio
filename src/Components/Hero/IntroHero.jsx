import React from "react";
import { FlipWords } from "../ui/Intro";

export function FlipWordsDemo() {
  const words = ["DESIGNER", "WEB-DEVELOPER", "CODER", "EDITOR"];

  return (
    <div className="h-[60rem] flex justify-center items-center px-4 bg-black">
      <div className="relative flex flex-col items-center text-2xl md:text-4xl lg:text-6xl font-normal text-white">
        <span className="text-xl md:text-2xl lg:text-4xl">Hello, I am a</span>
        <div className="my-4 absolute top-1/2 transform -translate-y-1/2 whitespace-nowrap text-6xl md:text-8xl lg:text-10xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
          <FlipWords words={words} />
        </div>
      </div>
    </div>
  );
}
