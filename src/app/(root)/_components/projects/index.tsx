"use client";

import React, { useRef, useState } from "react";

import { useScroll, useTransform, motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Tilt from "react-parallax-tilt";

import Project01 from "../../../../../public/project0.1.png";
import Project02 from "../../../../../public/project0.2.png";
import Project03 from "../../../../../public/project0.3.png";
import Project11 from "../../../../../public/project1.1.png";
import Project12 from "../../../../../public/project1.2.png";
import Project13 from "../../../../../public/project1.3.png";
import Project21 from "../../../../../public/project2.2.png";
import Project22 from "../../../../../public/project2.3.png";
import Project23 from "../../../../../public/project2.4.png";
import Project31 from "../../../../../public/project3.1.png";
import Project32 from "../../../../../public/project3.2.png";
import Project33 from "../../../../../public/project3.3.png";
import Project41 from "../../../../../public/project4.1.png";
import Project42 from "../../../../../public/project4.2.png";
import Project43 from "../../../../../public/project4.3.png";
import Image, { StaticImageData } from "next/image";
import TextTruncate from "@/components/TextTruncate";

const ItemProject = ({
  title,
  description,
  tags,
  img,
}: {
  index: number;
  title: string;
  description: string;
  functionRole: string;
  technology: string[];
  role: string;
  team: number;
  img: StaticImageData[];
  tags: {
    name: string;
    color: string;
  }[];
}) => {
  const [image, setImage] = useState(img[0]);

  return (
    <div className="h-[520px] w-[440px] bg-[#0f0f0f] border border-[#222222] rounded-2xl shadow-2xl p-4 item-card">
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #70befabf 0%, rgba(10, 10, 10, 0) 100%)",
        }}
        className="h-[1px] absolute top-0 left-0 right-0"
      />
      <motion.div>
        <div className="relative w-full h-[240px] z-10">
          <Image
            src={image}
            alt="project_image"
            className="w-full h-full rounded border border-gray-500 object-cover"
          />

          <div className="grid grid-cols-3 gap-8 pt-4 pb-4">
            {img.map((image, index) => (
              <Image
                onClick={() => setImage(image)}
                src={image}
                alt="img"
                key={index}
                className="w-full h-full rounded border border-gray-500 object-cover cursor-pointer"
              />
            ))}
          </div>

          <div className="absolute inset-0 flex justify-end m-3">
            <div
              onClick={() =>
                window.open("https://github.com/PhongThanh0907", "_blank")
              }
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <Image
                width={20}
                height={20}
                src="/github.png"
                alt="SourceCode"
                className="w-1/2 h-1/2 object-contain bg-white rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
          <TextTruncate text={description} />
        </div>

        <div className="mt-4 flex flex-wrap gap-2 absolute bottom-5">
          {tags.map((tag) => (
            <p
              key={`${title}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const Projects = () => {
  const t = useTranslations();
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: targetRef });

  const projects = [
    {
      title: "OMS Hasaki",
      description: t("des-project-01"),
      functionRole: t("role-project-01"),

      technology: [
        "ReactJS",
        "Typescript",
        "Zustand",
        "Ant Design",
        "TailwindCSS",
      ],
      role: "Frontend Developer",
      team: 8,
      img: [Project31, Project32, Project33],
      tags: [
        {
          name: "reactjs",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-[#00FFFF]",
        },
        {
          name: "MUI",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "react-query",
          color: "text-orange-500",
        },
        {
          name: "zustand",
          color: "text-yellow-500",
        },
      ],
    },
    {
      title: "OMS-WMS Integration Project",
      description: t("des-project-02"),

      functionRole: t("role-project-02"),
      technology: [
        "ReactJS",
        "Javascript",
        "Redux-Toolkit",
        "Ant Design",
        "SocketIO",
        "TailwindCSS",
      ],
      role: "Frontend Developer",
      team: 8,
      img: [Project01, Project02, Project03],
      tags: [
        {
          name: "react",
          color: "text-blue-500",
        },
        {
          name: "javascript",
          color: "text-[#00FFFF]",
        },
        {
          name: "socket-io",
          color: "text-[#ADFF2F]",
        },
        {
          name: "redux-toolkit",
          color: "text-yellow-500",
        },
        {
          name: "antd",
          color: "text-green-500",
        },
        {
          name: "tailwind",
          color: "text-purple-500",
        },
      ],
    },

    {
      title: "Human Resource Management",
      description: t("des-project-03"),
      functionRole: t("role-project-03"),
      technology: [
        "ReactJS",
        "Typescript",
        "Redux-Toolkit",
        "Ant Design",
        "TailwindCSS",
      ],
      role: "Frontend Developer",
      team: 4,
      img: [Project11, Project12, Project13],
      tags: [
        {
          name: "reactjs",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-[#00FFFF]",
        },
        {
          name: "antd",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "redux-toolkit",
          color: "text-yellow-500",
        },
      ],
    },

    {
      title: "Admin KPI",
      description: t("des-project-04"),
      functionRole: t("role-project-04"),

      technology: [
        "ReactJS",
        "Typescript",
        "Redux-Toolkit",
        "MUI",
        "SocketIO",
        "TailwindCSS",
      ],
      role: "Fullstack Developer",
      team: 4,
      img: [Project21, Project22, Project23],
      tags: [
        {
          name: "reactjs",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-[#00FFFF]",
        },
        {
          name: "MUI",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "redux-toolkit",
          color: "text-yellow-500",
        },
        {
          name: "nestjs",
          color: "text-purple-500",
        },
        {
          name: "react-query",
          color: "text-orange-500",
        },
      ],
    },

    {
      title: "CDP Hasaki",
      description: t("des-project-05"),
      functionRole: t("role-project-05"),
      technology: ["ReactJS", "Typescript", "Zustand", "MUI", "TailwindCSS"],
      role: "Frontend Developer",
      team: 8,
      img: [Project41, Project42, Project43],
      tags: [
        {
          name: "reactjs",
          color: "text-blue-500",
        },
        {
          name: "typescript",
          color: "text-[#00FFFF]",
        },
        {
          name: "MUI",
          color: "text-[#ADFF2F]",
        },
        {
          name: "tailwind",
          color: "text-green-500",
        },
        {
          name: "react-query",
          color: "text-orange-500",
        },
      ],
    },
  ];

  const opacity1 = useTransform(scrollYProgress, [0, 0.4], [1, 0.3]);
  const scale1 = useTransform(scrollYProgress, [0, 0.28], [1, 0.5]);

  const opacity2 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.3, 1, 0.3]);
  const scale2 = useTransform(scrollYProgress, [0, 0.25, 0.5], [0.5, 1, 0.5]);

  const opacity3 = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0.3, 1, 0.3]
  );
  const scale3 = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0.5, 1, 0.5]
  );

  const opacity4 = useTransform(scrollYProgress, [0.5, 0.75, 1], [0.3, 1, 0.3]);
  const scale4 = useTransform(scrollYProgress, [0.5, 0.75, 1], [0.5, 1, 0.5]);

  const opacity5 = useTransform(scrollYProgress, [0.75, 1], [0.3, 1]);
  const scale5 = useTransform(scrollYProgress, [0.75, 1], [0.5, 1]);

  return (
    <section
      id="project"
      ref={targetRef}
      className="h-[2200px] relative hidden lg:block"
    >
      <div className="h-screen sticky top-0 overflow-hidden">
        <div
          className="absolute w-36 inset-y-0 left-0 z-20"
          style={{
            transform: "rotate(180deg)",
            background:
              "linear-gradient(to right, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.5) 49.6165%, rgb(10, 10, 10) 100%)",
          }}
        />
        <div
          className="absolute w-36 inset-y-0 right-0 z-20"
          style={{
            background:
              "linear-gradient(to right, rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.5) 49.6165%, rgb(10, 10, 10) 100%)",
          }}
        />
        <p className="text-[50px] text-light-blue text-center relative top-20">
          {t("projects")}
        </p>
        <p className="text-center relative top-[86px] w-[80%] mx-auto tracking-wider">
          {t("sub-project")}
        </p>

        <motion.div
          className="absolute top-[32%] left-[50%] transform -translate-x-1/2 z-10 flex gap-20"
          style={{
            x: useTransform(scrollYProgress, [0, 1], [`-8.5%`, `-91%`]),
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={`project-${index}`}
              style={{
                // eslint-disable-next-line react-hooks/rules-of-hooks
                opacity:
                  index === 0
                    ? opacity1
                    : index === 1
                      ? opacity2
                      : index === 2
                        ? opacity3
                        : index === 3
                          ? opacity4
                          : index === 4
                            ? opacity5
                            : 1,
                scale:
                  index === 0
                    ? scale1
                    : index === 1
                      ? scale2
                      : index === 2
                        ? scale3
                        : index === 3
                          ? scale4
                          : index === 4
                            ? scale5
                            : 1,
              }}
            >
              <Tilt
                key={`project-${index}`}
                glareEnable={true}
                glareMaxOpacity={0.5}
                glareColor="#6b7280"
                glarePosition="all"
                glareBorderRadius="16px"
              >
                <ItemProject index={index} {...project} />
              </Tilt>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
