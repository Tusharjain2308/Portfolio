import React from "react";
import { StickyScroll } from "../ui/Experience.jsx";
import { cn } from "../../utils/cn.js";
import img from '../../assets/about.png';
import img2 from '../../assets/education.png';

const content = [
  {
    title: "About Me",
    description:
      "I'm a passionate front-end developer and creative artist specializing in crafting visually stunning and responsive user interfaces using React.js, Tailwind CSS, and Vite. With a strong background in UI/UX design, DSA, and competitive programming, I bring ideas to life through innovative design, seamless user interactions, and efficient problem-solving.",
    content: (
      <div className="h-100% w-100% flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))]">
        <img
          src={img}
          alt="About Me"
          className="h-4/5 w-4/5 object-contain mb-4"
        />
      </div>
    ),
  },
  {
    title: "Education",
    description:
      "I'm currently in my 3rd year pursuing a degree in Computer Science and Engineering (CSE) at the Indian Institute of Information Technology (IIIT) Kota. My education here has provided me with a solid foundation in computer science principles and practical experience in software development.\n\nI completed my 12th grade from MB International School, Kota, with an impressive score of 94.4%. This achievement reflects my dedication and strong academic background.",
    content: (
      <div className="h-100% w-100% flex items-center justify-center text-white bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--indigo-500))]">
        <img
          src={img2}
          alt="Education"
          className="h-4/5 w-4/5  object-cover mb-4"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <div className="p-10 bg-black py-20">
      <StickyScroll content={content} />
    </div>
  );
}
