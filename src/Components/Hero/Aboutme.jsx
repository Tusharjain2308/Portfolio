import { useState } from "react";
import myImage from "../../assets/img1.jpg";
import { motion } from "framer-motion";
import { ShootingStars } from "../ui/shooting-stars.jsx";
import { StarsBackground } from "../ui/stars-background.jsx";
import { Badge } from "../ui/badge.jsx";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs.jsx";
import { LucideAward, LucideGraduationCap, LucideUser } from "lucide-react";

export default function AboutMeSection() {
  const [activeTab, setActiveTab] = useState("about");
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Cosmic background */}
      <div className="absolute inset-0 z-0">
        <StarsBackground starDensity={0.0002} />
        <ShootingStars
          starColor="#9E00FF"
          trailColor="#2EB9DF"
          minDelay={2000}
          maxDelay={5000}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-8 md:py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          {/* Profile header */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            {/* <div className="relative w-40 h-40 md:w-48 md:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-purple-500/30 p-1">
              <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-purple-600 to-blue-400">
                <img
                  src={myImage}
                  alt="Profile Picture"
                  width={200}
                  height={200}
                  className="object-cover"
                />
              </div>
            </div> */}

            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
              Tushar Jain
            </h1>
            <p className="mt-2 text-xl text-gray-300">
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </motion.div>

          {/* Tabs navigation */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-3xl mx-auto"
          >
            <Tabs
              defaultValue="about"
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-3 mb-8 bg-gray-900/50 backdrop-blur-sm text-white">
                <TabsTrigger value="about" className="flex items-center gap-2">
                  <LucideUser size={16} />
                  <span className="hidden sm:inline">About</span>
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="flex items-center gap-2"
                >
                  <LucideGraduationCap size={16} />
                  <span className="hidden sm:inline">Education</span>
                </TabsTrigger>
                <TabsTrigger
                  value="achievements"
                  className="flex items-center gap-2"
                >
                  <LucideAward size={16} />
                  <span className="hidden sm:inline">Achievements</span>
                </TabsTrigger>
              </TabsList>

              {/* About Me Content */}
              {/* About Me Content */}
              <TabsContent value="about" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-800"
                >
                  <h2 className="text-2xl font-bold text-white mb-4">
                    About Me
                  </h2>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Hello! I'm Tushar Jain, a passionate developer and tech
                    enthusiast currently pursuing B.Tech in Computer Science and
                    Engineering at IIIT Kota. I specialize in crafting clean,
                    responsive UIs using React, Tailwind CSS, Framer Motion, and
                    love blending creativity with functionality to build
                    user-friendly web apps.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    A self-learner at heart, I actively explore areas like DSA,
                    data science, and UI/UX design. I've worked on projects
                    spanning gaming platforms, tourism guides, and
                    classification models, always aiming to push boundaries and
                    learn something new.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    I've represented my college in national hackathons like
                    Smart India Hackathon and HEREvolution Hackathon at BITS
                    PILANI. I was also the General Secretary of TechKnow Society
                    at IIIT Kota, which helped shape my skills in leadership,
                    teamwork, and communication.
                  </p>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    Whether it's building smooth UI animations, solving complex
                    problems, or exploring machine learning, I'm always excited
                    to create and grow with every opportunity.
                  </p>
                </motion.div>
              </TabsContent>

              {/* Education Content */}
              <TabsContent value="education" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-800"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Education Journey
                  </h2>

                  <div className="space-y-8">
                    {[
                      {
                        degree: "B.Tech in Computer Science and Engineering",
                        institution:
                          "Indian Institute of Information Technology, Kota",
                        period: "2022 - Present",
                        description:
                          "Current CGPA: 8.46. Relevant coursework includes Data Structures & Algorithms, Operating Systems, Computer Networks, Database Management Systems, Machine Learning, and Software Engineering. Core member of Artive, Cypher, and Kernel Club. Served as General Secretary of TechKnow Society.",
                      },
                      {
                        degree: "Class XII – PCM ",
                        institution: "MB International School, Kota",
                        period: "2021 - 2022",
                        description:
                          "Secured 94.6% in CBSE Board. Strong inclination towards Mathematics and Programming from early on.",
                      },
                      {
                        degree: "Class X – General Curriculum",
                        institution: "SMCP Sanskar Vidhy Bhavan, Bharuch",
                        period: "2019 - 2020",
                        description:
                          "Secured 94.4% in CBSE Board. Developed a foundational interest in technology and logical reasoning.",
                      },
                    ].map((edu, index) => (
                      <div
                        key={index}
                        className="relative pl-8 border-l border-purple-700/50"
                      >
                        <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2 top-1"></div>
                        <h3 className="text-xl font-semibold text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-blue-400">{edu.institution}</p>
                        <p className="text-gray-400 text-sm mb-2">
                          {edu.period}
                        </p>
                        <p className="text-gray-300">{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Achievements Content */}
              <TabsContent value="achievements" className="mt-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gray-900/30 backdrop-blur-md rounded-xl p-6 md:p-8 border border-gray-800"
                >
                  <h2 className="text-2xl font-bold text-white mb-6">
                    Achievements & Awards
                  </h2>

                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      {
                        title: "Smart India Hackathon Finalist",
                        organization: "Bharat Electronics Limited (BEL)",
                        year: "Dec 2024",
                        description:
                          "Qualified for Grand Finale (Problem Statement 1606) with project on micro-Doppler based target classification, held in Mumbai.",
                      },
                      {
                        title: "Top 15 Nationalist – HEREVolution Hackathon",
                        organization: "HERE Maps & BITS Pilani",
                        year: "2024",
                        description:
                          "Developed a real-time location-based solution, ranked among top 15 teams nationally.",
                      },
                      {
                        title: "AWS Certified Cloud Practitioner",
                        organization: "Amazon Web Services",
                        year: "2024",
                        description:
                          "Successfully completed AWS Cloud Practitioner certification from GeeksForGeeks, validating foundational cloud computing and AWS service knowledge.",
                      },
                      {
                        title: "Knight Badge – LeetCode",
                        organization: "LeetCode",
                        year: "2024",
                        description:
                          "Achieved Knight badge on LeetCode with 500+ problems solved and a rating of 1860, demonstrating strong problem-solving skills.",
                      },
                      {
                        title: "Chegg Subject Expert – Mathematics",
                        organization: "Chegg India",
                        year: "2023 - Present",
                        description:
                          "Freelancing as a subject expert helping students globally in solving advanced mathematical problems.",
                      },
                      {
                        title: "Core Club Member & Tech Leader",
                        organization: "IIIT Kota",
                        year: "2022 - Present",
                        description:
                          "General Secretary at TechKnow Society, member of Artive and Cypher Club, actively organizing tech events and sessions.",
                      },
                    ].map((achievement, index) => (
                      <div
                        key={index}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-5 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-3">
                          <div className="mt-1 p-2 bg-purple-900/30 rounded-full">
                            <LucideAward className="w-5 h-5 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">
                              {achievement.title}
                            </h3>
                            <p className="text-blue-400 text-sm">
                              {achievement.organization}
                            </p>
                            <p className="text-gray-400 text-xs mb-2">
                              {achievement.year}
                            </p>
                            <p className="text-gray-300 text-sm">
                              {achievement.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </TabsContent>
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
