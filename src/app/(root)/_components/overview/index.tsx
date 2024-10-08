import Card from "@/components/Card";
import GridGlobe from "@/components/GridGlobe";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Overview = () => {
  const t = useTranslations();
  return (
    <section
      id="about"
      className="h-full lg:h-screen w-screen relative flex lg:flex-row flex-col items-center px-4 lg:px-0"
    >
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-10 pt-10">
        <Card>
          <div className="px-6 lg:px-10 pb-10">
            <h1 className="text-[40px] lg:text-[50px] text-light-blue text-center">
              {t("Overview")}
            </h1>
            <p className="tracking-widest leading-[150%] pt-6">
              {t("text-overview")}
            </p>
            <div className="pt-8 space-y-4">
              <div>
                <span className="text-white tracking-wider underline">
                  {t("short-term")}:
                </span>{" "}
                <span className="tracking-wider">{t("text-short-term")}</span>
              </div>

              <div>
                <span className="text-white tracking-wider underline">
                  {t("long-term")}:
                </span>{" "}
                <span className="tracking-wider">{t("text-long-term")}</span>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex flex-col gap-6">
          <Card>
            <div className="h-44 lg:h-36 overflow-hidden relative">
              <p className="text-white text-xl text-center">
                {t("communication")}
              </p>
              <GridGlobe />
            </div>
          </Card>

          <Card>
            <div className="hero-img w-[90%] lg:w-[540px] h-56 mb-10 mx-auto lg:mx-10 overflow-hidden rounded-lg">
              <Image
                src="/hero-bg.jpg"
                alt="hero"
                width={540}
                height={1080}
                className="w-full h-full object-cover hover:scale-110 duration-300"
              />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Overview;
