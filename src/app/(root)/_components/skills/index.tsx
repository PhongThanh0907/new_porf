"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import BallCanvas from "@/components/canvas/Ball";
import Nextjs from "../../../../../public/technologies/nextjs.png";
import ANTD from "../../../../../public/technologies/antd.png";
import GIT from "../../../../../public/technologies/git.png";
import JAVASCRIPT from "../../../../../public/technologies/javascript.png";
import MONGO from "../../../../../public/technologies/mongodb.png";
import NODE from "../../../../..//public/technologies/nodejs.png";
import REACT from "../../../../../public/technologies/reactjs.png";
import REDUX from "../../../../../public/technologies/redux.png";
import TAILWIND from "../../../../../public/technologies/tailwind.png";
import TYPESCRIPT from "../../../../../public/technologies/typescript.png";
import MU from "../../../../../public/technologies/mui.png";
import R from "../../../../../public/technologies/reactquery.png";
import Zustand from "../../../../../public/technologies/zustand.png";
import Nest from "../../../../../public/technologies/nestjs.png";
import Mysql from "../../../../../public/technologies/mysql.png";

import Image from "next/image";

const Skills = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isClient) {
    return null;
  }

  const getRandomY = () => {
    return Math.floor(Math.random() * 100) - 30;
  };
  const TECHNOLOGIES = [
    { name: "NextJS", icon: <Image src={Nextjs} alt="icon" /> },
    { name: "Typescript", icon: <Image src={TYPESCRIPT} alt="icon" /> },
    { name: "Javascript", icon: <Image src={JAVASCRIPT} alt="icon" /> },
    { name: "React", icon: <Image src={REACT} alt="icon" /> },
    { name: "Tailwind", icon: <Image src={TAILWIND} alt="icon" /> },
    { name: "MUI", icon: <Image src={MU} alt="icon" /> },
    { name: "Ant Design", icon: <Image src={ANTD} alt="icon" /> },
    { name: "Redux", icon: <Image src={REDUX} alt="icon" /> },
    { name: "React Query", icon: <Image src={R} alt="icon" /> },
    { name: "Zustand", icon: <Image src={Zustand} alt="icon" /> },
    { name: "Git", icon: <Image src={GIT} alt="icon" /> },
    { name: "NestJS", icon: <Image src={Nest} alt="icon" /> },
    { name: "MongoDB", icon: <Image src={MONGO} alt="icon" /> },
    { name: "MySQL", icon: <Image src={Mysql} alt="icon" /> },
    { name: "NodeJS", icon: <Image src={NODE} alt="icon" /> },
  ];

  return (
    <div
      id="skills"
      className="grid grid-cols-3 py-32 lg:flex lg:flex-row lg:flex-wrap justify-center gap-x-4 gap-y-8 lg:gap-x-10 lg:gap-y-10 max-w-7xl mx-auto "
    >
      {TECHNOLOGIES.map((technology, index) => (
        <motion.div
          initial={{
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ opacity: 1 }}
          animate={{
            y: [0, getRandomY(), 0],
            transition: {
              y: {
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
              },
            },
          }}
          className={`w-20 h-20 lg:w-28 lg:h-28 moveUpDown ml-4 lg:ml-0`}
          key={technology.name}
        >
          <BallCanvas icon={technology.icon} />
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
