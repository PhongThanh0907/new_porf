import React from "react";
import TypeWrite from "../_components/TypeWrite";
import { useTranslations } from "next-intl";
import Background from "./_components/Background";

const AboutMobile = () => {
  const t = useTranslations();
  return (
    <section className="h-screen w-screen overflow-hidden lg:hidden">
      <div className="h-full w-full flex-center-row relative -top-6">
        <div className="relative z-10 text-center">
          <TypeWrite />
          <p className="text-md uppercase text-white tracking-[6px]">
            {t("job-name")}
          </p>
        </div>
      </div>

      <Background />

      <div
        className="absolute h-20 inset-x-0 -bottom-6 z-1"
        style={{
          background:
            "linear-gradient(rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.2) 49.6165%, rgba(10, 10, 10, 0.5) 74.9037%, rgb(10, 10, 10) 100%)",
        }}
      />
      <div
        className="absolute h-20 inset-x-0 -top-4 z-1 rotate-180"
        style={{
          background:
            "linear-gradient(rgba(10, 10, 10, 0) 0%, rgba(10, 10, 10, 0.2) 49.6165%, rgba(10, 10, 10, 0.5) 74.9037%, rgb(10, 10, 10) 100%)",
        }}
      />
    </section>
  );
};

export default AboutMobile;
