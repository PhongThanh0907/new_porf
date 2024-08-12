import React from "react";
import TypeWrite from "./_components/TypeWrite";
import { useTranslations } from "next-intl";
import Background from "./_components/Background";

const About = () => {
  const t = useTranslations();

  return (
    <section className="text-center h-screen w-screen flex-center-row">
      <div className="relative z-10">
        <TypeWrite />
        <p className="text-lg uppercase text-gray-400 tracking-[6px]">
          {t("job-name")}
        </p>
      </div>
      <Background />
    </section>
  );
};

export default About;
