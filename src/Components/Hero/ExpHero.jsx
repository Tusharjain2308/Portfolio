import React from "react";
import useScrollToTop from "../../utils/scrolltotop";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "../ui/Experience";
import img from '../../assets/about.jpg';
import img2 from '../../assets/education.jpg';
import img3 from '../../assets/success.jpg';

export function TracingBeamDemo() {
  useScrollToTop();
  return (
    <TracingBeam className="px-6 bg-black">
      <div className="h-full max-w-4xl mx-auto antialiased pt-4 relative pb-20">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-16 text-center">
            <p className={twMerge("text-5xl mb-6 text-white font-bold")}>
              {item.title}
            </p>

            <div className="text-lg prose text-white prose-lg dark:prose-invert mx-auto">
              {item?.image && (
                <img
                  src={item.image}
                  alt={item.alt}
                  className="rounded-lg mb-10 object-cover h-96 w-106 mx-auto"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const content = [
  {
    title: "About Me",
    description: (
      <>
        <p>
          I'm a passionate front-end developer and creative artist specializing in crafting visually stunning and responsive user interfaces using React.js, Tailwind CSS, and Vite. With a strong background in UI/UX design, DSA, and competitive programming, I bring ideas to life through innovative design, seamless user interactions, and efficient problem-solving.
        </p>
      </>
    ),
    image: img,
    alt: "About Me",
  },
  {
    title: "Education",
    description: (
      <>
        <p>
          I'm currently in my 3rd year pursuing a degree in Computer Science and Engineering (CSE) at the Indian Institute of Information Technology (IIIT) Kota. My education here has provided me with a solid foundation in computer science principles and practical experience in software development.
        </p>
        <p>
          I completed my 12th grade from MB International School, Kota, with an impressive score of 94.4%. This achievement reflects my dedication and strong academic background.
        </p>
      </>
    ),
    image: img2,
    alt: "Education",
  },
  {
    title: "Achievements and Responsibilities",
    description: (
      <>
        <p>
          I was among the top 15 nationalists in the HEREVolution hackathon by HERE Maps and Technologies at BITS Pilani. I have a CGPA of 8.4 and am a core member of the Artive and Cypher Club. Additionally, I serve as the General Secretary of the TechKnow Society at IIIT Kota and also I am a subject expert Freelancer at Chegg Inc from October 2023.
        </p>
      </>
    ),
    image: img3,
    alt: "Achievements",
  },
];
