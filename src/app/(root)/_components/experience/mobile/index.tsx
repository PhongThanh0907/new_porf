import { useTranslations } from "next-intl";
import React from "react";
import Anpha from "../../../../../../public/logoanpha.png";
import Hasaki from "../../../../../../public/hasaki.jpg";
import Card from "@/components/Card";
import Image from "next/image";

const MobileExperience = () => {
  const t = useTranslations();
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
    <div className="lg:hidden pt-40 px-4 space-y-6">
      {EXPERIMENTS.map((exp, index) => (
        <div key={index} className="">
          <Card key={index}>
            <div className="pb-8 px-6">
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
                <span className="tracking-wider pl-2">{exp.teamSize}</span>
              </div>

              <div className="py-2">
                <span className="text-white underline tracking-wider">
                  Technology:
                </span>
                <span className="tracking-wider pl-2">{exp.technology}</span>
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
    </div>
  );
};

export default MobileExperience;
