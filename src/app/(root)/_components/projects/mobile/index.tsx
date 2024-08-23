"use client";

import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { useTranslations } from "next-intl";

import Project01 from "../../../../../../public/project0.1.png";
import Project02 from "../../../../../../public/project0.2.png";
import Project03 from "../../../../../../public/project0.3.png";
import Project11 from "../../../../../../public/project1.1.png";
import Project12 from "../../../../../../public/project1.2.png";
import Project13 from "../../../../../../public/project1.3.png";
import Project21 from "../../../../../../public/project2.2.png";
import Project22 from "../../../../../../public/project2.3.png";
import Project23 from "../../../../../../public/project2.4.png";
import Project31 from "../../../../../../public/project3.1.png";
import Project32 from "../../../../../../public/project3.2.png";
import Project33 from "../../../../../../public/project3.3.png";
import Project41 from "../../../../../../public/project4.1.png";
import Project42 from "../../../../../../public/project4.2.png";
import Project43 from "../../../../../../public/project4.3.png";
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
    <div className="h-[520px] w-full bg-[#0f0f0f] border border-[#222222] rounded-2xl shadow-2xl p-4 item-card">
      <div
        style={{
          background:
            "radial-gradient(50% 50% at 50% 50%, #70befabf 0%, rgba(10, 10, 10, 0) 100%)",
        }}
        className="h-[1px] absolute top-0 left-0 right-0"
      />
      <div>
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
      </div>
    </div>
  );
};

const MobileProjects = () => {
  const t = useTranslations();
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
  return (
    <div className="px-4 space-y-6">
      {projects.map((project, index) => (
        <div key={`project-${index}`}>
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
        </div>
      ))}
    </div>
  );
};

export default MobileProjects;
