import React from "react";
import useScrollToTop from "../../utils/scrolltotop";
import { PinContainer } from "../ui/Pin";
import { FaGithub, FaCode } from "react-icons/fa";
import githubBackground from '../../assets/gitprofile.png';
import leetcodeBackground from '../../assets/leetcode.png';

export function AnimatedPinDemo() {
  useScrollToTop();

  return (
    <div className="h-[40rem] w-full flex flex-col items-center justify-center mt-10 ">
      <h1 className="text-4xl font-bold text-slate-100 text-center items-center justify-center mb-6 mt-10 sm:mt-15">
        Check out more on my profiles
      </h1>

      <div className="flex flex-wrap gap-6 justify-center my-8 sm:mb-5">
        <PinContainer
          title="GitHub"
          href="https://github.com/Tusharjain2308"
          className="mb-6 sm:mb-0" 
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] relative group" style={{boxShadow: '0 0 20px 10px rgba(128, 0, 128, 0.5)'}}>
            <FaGithub className="absolute top-4 right-4 text-white text-4xl" />
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              GitHub
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Stores my Projects
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center relative group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all duration-300"
              style={{ backgroundImage: `url(${githubBackground})` }}
            >
              <FaGithub className="absolute bottom-4 left-4 text-white text-3xl" />
            </div>
          </div>
        </PinContainer>

        <PinContainer
          title="LeetCode"
          href="https://leetcode.com/u/tusharjn23/"
          className="sm:mt-5"
        >
          <div className="flex flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] relative group" style={{boxShadow: '0 0 20px 10px rgba(0, 0, 255, 0.5)'}}>
            <FaCode className="absolute top-4 right-4 text-white text-4xl" />
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100 ">
              LeetCode
            </h3>
            <div className="text-base !m-0 !p-0 font-normal ">
              <span className="text-slate-500">
                DSA Companion
              </span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center relative group-hover:shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300"
              style={{ backgroundImage: `url(${leetcodeBackground})` }}
            >
              <FaCode className="absolute bottom-4 left-4 text-white text-3xl" />
            </div>
          </div>
        </PinContainer>
      </div>
    </div>
  );
}
