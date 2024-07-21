import React from "react";
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

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}

export const products = [
  {
    title: "JavaScript",
    link: "https://gomoonbeam.com",
    image: css,
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    image: html,
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    image: js,
  },
  {
    title: "Editorially",
    link: "https://editorially.org",
    image: c,
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    image: figma,
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    image: github,
  },
  {
    title: "Algochurn",
    link: "https://algochurn.com",
    image: react,
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    image: figma,
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    image: python,
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    image: bootstrap,
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    image: git,
  },
  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    image: nodejs,
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    image: canva,
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    image: capcut,
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    image: mongo,
  },
];
