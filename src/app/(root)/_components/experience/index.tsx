"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Anpha from "../../../../../public/logoanpha.png";
import Hasaki from "../../../../../public/hasaki.jpg";
import Card from "@/components/Card";
import Image from "next/image";

const Experience = () => {
  const t = useTranslations();
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const xContent1 = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);
  const rotateX1 = useTransform(scrollYProgress, [0, 1], ["0deg", "-20deg"]);
  const rotateY1 = useTransform(scrollYProgress, [0, 1], ["0deg", "60deg"]);
  const opacity1 = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  const xContent2 = useTransform(scrollYProgress, [0, 1], ["40%", "-100%"]);
  const rotateX2 = useTransform(scrollYProgress, [0, 1], ["20deg", "0deg"]);
  const rotateY2 = useTransform(scrollYProgress, [0, 1], ["40deg", "0deg"]);
  const opacity2 = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const EXPERIMENTS = [
    {
      title: "Frontend Developer",
      company_name: "Acom",
      icon: Anpha,
      teamSize: 8,
      date: t("June 2022 - August 2023"),
      technology:
        "Javascript, Typescript, ReactJS, Redux-saga, Redux Toolkit, TailwindCSS, Ant Design, MySQL, NodeJS,... ",
      points: [
        t("point-01"),
        t("point-02"),
        t("point-03"),
        t("point-04"),
        t("point-05"),
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Hasaki Beauty & Clinic",
      icon: Hasaki,
      teamSize: 8,
      date: t("August 2023 - Present"),
      technology:
        "Typescript, ReactJS, React-Query, Zustand, TailwindCSS, Ant Design, Vite,... ",
      points: [t("point-11"), t("point-12"), t("point-14"), t("point-15")],
    },
  ];

  return (
    <section ref={targetRef} className="h-[2200px] relative hidden lg:block">
      <div className="h-screen sticky top-0 overflow-hidden">
        <p className="text-[50px] text-light-blue text-center relative top-20">
          {t("work-experience")}
        </p>
        <div className="flex">
          <motion.div
            style={{
              x: xContent1,
              rotateX: rotateX1,
              rotateY: rotateY1,
              opacity: opacity1,
              scale: scale1,
              perspective: "1000px",
            }}
            className="flex flex-col gap-8 relative left-[25%] transform -translate-x-1/2 top-24"
          >
            {EXPERIMENTS.slice(0, 1).map((exp, index) => (
              <div key={index} className="w-[700px]">
                <Card key={index}>
                  <div className="pb-8 px-10">
                    <div className="flex-center-row">
                      <div
                        style={{
                          background:
                            "linear-gradient(90deg, #ffffff 0%, #70befa 100%)",
                          boxShadow: "0px 0px 5px 1px #70befabf",
                        }}
                        className="rounded-full w-[85px] h-[85px]"
                      >
                        <div
                          className="bg-[#0f0f0f] rounded-full h-full w-full flex-center-row"
                          style={{
                            boxShadow: "inset 0px 0px 5px 1px #70befabf",
                          }}
                        >
                          <Image
                            className="rounded-full"
                            height={82}
                            width={82}
                            src={exp.icon}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-2xl text-white tracking-wider mt-6">
                      {exp.title}
                    </p>
                    <div className="text-sm text-white leading-[150%] space-x-3 pb-2">
                      <span className="tracking-wider">{exp.company_name}</span>
                      <span>|</span>
                      <span className="tracking-wider">{exp.date}</span>
                    </div>

                    <div>
                      <span className="text-white underline tracking-wider">
                        Team Size:
                      </span>
                      <span className="tracking-wider pl-2">
                        {exp.teamSize}
                      </span>
                    </div>

                    <div className="py-2">
                      <span className="text-white underline tracking-wider">
                        Technology:
                      </span>
                      <span className="tracking-wider pl-2">
                        {exp.technology}
                      </span>
                    </div>

                    <ul className="list-disc space-y-2">
                      {exp.points.map((point, index) => (
                        <li
                          key={index}
                          className="text-white tracking-wider text-sm mx-4"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </motion.div>

          <motion.div
            style={{
              x: xContent2,
              rotateX: rotateX2,
              rotateY: rotateY2,
              opacity: opacity2,
              scale: scale2,
              perspective: "1000px",
            }}
            className="flex flex-col gap-8 relative left-[25%] transform -translate-x-1/2 top-24"
          >
            {EXPERIMENTS.slice(1, 2).map((exp, index) => (
              <div key={index} className="w-[700px]">
                <Card key={index}>
                  <div className="pb-8 px-10">
                    <div className="flex-center-row">
                      <div
                        style={{
                          background:
                            "linear-gradient(90deg, #ffffff 0%, #70befa 100%)",
                          boxShadow: "0px 0px 5px 1px #70befabf",
                        }}
                        className="rounded-full w-[85px] h-[85px]"
                      >
                        <div
                          className="bg-[#0f0f0f] rounded-full h-full w-full flex-center-row"
                          style={{
                            boxShadow: "inset 0px 0px 5px 1px #70befabf",
                          }}
                        >
                          <Image
                            className="rounded-full"
                            height={82}
                            width={82}
                            src={exp.icon}
                            alt="icon"
                          />
                        </div>
                      </div>
                    </div>

                    <p className="text-2xl text-white tracking-wider mt-6">
                      {exp.title}
                    </p>
                    <div className="text-sm text-white leading-[150%] space-x-3 pb-2">
                      <span className="tracking-wider">{exp.company_name}</span>
                      <span>|</span>
                      <span className="tracking-wider">{exp.date}</span>
                    </div>

                    <div>
                      <span className="text-white underline tracking-wider">
                        Team Size:
                      </span>
                      <span className="tracking-wider pl-2">
                        {exp.teamSize}
                      </span>
                    </div>

                    <div className="py-2">
                      <span className="text-white underline tracking-wider">
                        Technology:
                      </span>
                      <span className="tracking-wider pl-2">
                        {exp.technology}
                      </span>
                    </div>

                    <ul className="list-disc space-y-2">
                      {exp.points.map((point, index) => (
                        <li
                          key={index}
                          className="text-white tracking-wider text-sm mx-4"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
