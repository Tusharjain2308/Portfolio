import React, { useEffect, useState } from "react";
import VantaAnimation from "../../ui/Vantaanimation1";
import anime from "animejs";
import "../Hero3/Hero3.css";

const Hero1 = () => {
  useEffect(() => {
    const textWrapper = document.querySelector(".ml7 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline({loop:true}).add({
        targets: ".ml7 .letter",
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 800,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i,
      });
    }
  }, []);

  useEffect(() => {
    const textWrapper = document.querySelector(".ml2 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime.timeline({loop:true}).add({
        targets: ".ml2 .letter",
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [-180, 0],
        duration: 750,
        easing: "easeOutExpo",
        delay: (el, i) => 50 * i,
      });
    }
  }, []);

  useEffect(() => {
    const textWrapper = document.querySelector(".ml1 .letters");
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      anime
        .timeline({loop:true})
        .add({
          targets: ".ml1 .letter",
          scale: [0.3, 1],
          opacity: [0, 1],
          translateZ: 0,
          easing: "easeOutExpo",
          duration: 800,
          delay: (el, i) => 70 * (i + 1),
        })
        .add({
          targets: ".ml1 .line",
          scaleX: [0, 1],
          opacity: [0.5, 1],
          easing: "easeOutExpo",
          duration: 400,
          offset: "-=875",
          delay: (el, i, l) => 10 * (l - i),
        });
    }
  }, []);

  const loadNextHero = () => {
    console.log("loadNextHero called");
    setShowNextHero(true);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <VantaAnimation />

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-white transition-transform duration-300 overflow-x-hidden"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
          <h1 className="ml7">
            <span className="text-wrapper">
              <span className="letters">DESIGNER</span>
            </span>
          </h1>
          <h1 className="ml1">
            <span className="text-wrapper">
              <span className="line line1"></span>
              <span className="letters">DEVELOPER</span>
              <span className="line line2"></span>
            </span>
          </h1>
          <h1 className="ml2">
            <span className="text-wrapper">
              <span className="letters">CODER</span>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero1;
