import { HeroParallax } from "../ui/Parallax";
import js from '../../assets/js.png';
import html from '../../assets/html.png';
import c from '../../assets/s.png';
import css from '../../assets/css.png';
import react from '../../assets/react.png';
import figma from '../../assets/figma.png';
import github from '../../assets/github.png';
import python from '../../assets/python.png';
import nodejs from '../../assets/nodejs.png';
import bootstrap from '../../assets/bootstrap.png';
import git from '../../assets/git.png';
import canva from '../../assets/canva.png';
import capcut from '../../assets/capcut.png';
import mongo from '../../assets/mongo.png';
import useScrollToTop from "../../utils/scrolltotop";

export function HeroParallaxDemo() {
  useScrollToTop();
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "Tailwind css",
    image: css,
  },
  {
    title: "Html",
    image: html,
  },
  {
    title: "Javascript",
    image: js,
  },
  {
    title: "C++",
    image: c,
  },
  {
    title: "Figma",
    image: figma,
  },
  {
    title: "Github",
    image: github,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "Figma",
    image: figma,
  },
  {
    title: "Python",
    image: python,
  },
  {
    title: "Bootstrap",
    image: bootstrap,
  },
  {
    title: "Git",
    image: git,
  },
  
  {
    title: "Nodejs",
    image: nodejs,
  },
  {
    title: "Canva",
    image: canva,
  },
  {
    title: "Capcut",
    image: capcut,
  },
  {
    title: "MongoDb",
    image: mongo,
  },
];
