import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/Cards";
import portfolio from '../../assets/portfolio.png'
import gamer from '../../assets/gamer.png'
import near from '../../assets/near.png'
import fashion from '../../assets/fashion.png'

export function ProjectCardsDemo() {
  const cards = [
    {
      title: "PortFolio Website",
      description: "Portfolio made with React, Tailwind, Framer motion and Aceternity UI",
      imgSrc: portfolio,
      link: "https://twitter.com/mannupaaji",
    },
    {
      title: "Gamer's Nexus",
      description: "A platform providing the latest gaming news, reviews, and leaderboards, built using React.js, Tailwind CSS, Material UI, React Router DOM, Axios, and styled-components",
      imgSrc: gamer,
      link: "https://gamers-nexus-delta.vercel.app/",
    },
    {
      title: "Near By Me",
      description: "Empowering tourists with real-time, detailed local info on attractions, culture, and dining, built with React and integrated Here Maps API",
      imgSrc: near,
      link: "https://near-by-me.vercel.app/",
    },
    {
      title: "Fashion Finds",
      description: "A fashion trends app built with JavaScript, HTML, CSS, and PHP for dynamic functionality and seamless user experience",
      imgSrc: fashion,
      link: "https://tusharjain2308.github.io/Fashion_Finds/",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-2">
      {cards.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto h-auto rounded-xl p-6 border">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={card.imgSrc}
                alt="thumbnail"
                className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-4">
              <CardItem
                translateZ={20}
                as="a"
                href={card.link}
                target="_blank"
                className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
              >
                Try now →
              </CardItem>
              <CardItem
                translateZ={20}
                as="button"
                className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
              >
                Sign up
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
