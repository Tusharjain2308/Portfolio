import React from "react";
import Vortex from "../ui/Particles"; // Adjust the import path based on your project structure

export function VortexDemo() {
  return (
    <div className="w-[calc(100%-4rem)] mx-auto rounded-md h-[30rem] overflow-hidden">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
          Come on! Let's Check my Projects
        </h2>
        <p className="text-white text-sm md:text-2xl max-w-xl mt-6 text-center">
          Explore the diverse range of projects I've worked on. 
        Dive in and discover how I can help bring your ideas to life!
        </p>
      </Vortex>
    </div>
  );
}
