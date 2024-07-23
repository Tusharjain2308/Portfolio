import React from "react";
import { ContainerScroll } from "../ui/Element2";
import myimg from "../../assets/img1.jpg";
import wavyBackground from "../../assets/wavy-background.svg"; // Import the SVG file
import { TypewriterEffectSmooth } from "../ui/Typewriter";

export function HeroScrollDemo() {
  const words = [
    {
      text: "➴ Welcome",
      className:
        "text-2xl md:text-3xl lg:text-5xl ",
    },
    {
      text: "To",
      className:
        "text-2xl md:text-3xl lg:text-5xl",
    },
    {
      text: "Tushar's",
      className:
        "text-3xl md:text-4xl lg:text-6xl text-pink-500 dark:text-pink-400",
    },
    {
      text: "Portfolio 💗",
      className:
        "text-3xl md:text-4xl lg:text-6xl text-blue-500 dark:text-blue-400",
    },
  ];

  return (
    <div className="relative flex flex-col overflow-hidden bg-black min-h-screen">
      <img
        src={wavyBackground}
        alt="Wavy Background"
        className="absolute top-40 left-0 w-full h-full object-cover z-0"
        style={{ height: "100vh" }}
      />

      <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center z-20 pt-20 text-center">
        <div className="flex flex-col items-center justify-center">
          <TypewriterEffectSmooth words={words.slice(0, 2)} />
          <TypewriterEffectSmooth words={words.slice(2)} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mt-20">
        <ContainerScroll>
          <div className="mx-auto rounded-2xl overflow-hidden h-full">
            <img
              src={myimg}
              alt="hero"
              className="object-cover h-full w-full"
            />
          </div>
        </ContainerScroll>
      </div>
    </div>
  );
}
