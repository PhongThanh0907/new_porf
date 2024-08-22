import React from "react";
import TypeWrite from "./_components/TypeWrite";
import { useTranslations } from "next-intl";
import Background from "./_components/Background";
import Image from "next/image";
import Navbar from "@/components/header/_components/Navbar";
import Button from "@/components/Button";
import Language from "@/components/header/_components/Language";
import Link from "next/link";

const About = () => {
  const t = useTranslations();

  return (
    <section className="text-center h-screen w-screen flex-center-row overflow-hidden">
      <div className="flex-between w-screen h-24 absolute top-0 inset-x-0 z-10">
        <div className="flex">
          <div className="flex items-center gap-2">
            <Image src="/logo.webp" alt="logo" height={36} width={36} />
            <span className="text-color text-2xl">Portfolio</span>
          </div>
        </div>

        <Navbar />

        <div className="flex gap-2 relative">
          <div className="absolute -left-[90%] top-0">
            <Language />
          </div>
          <Button className="w-32">
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1RWmeKjTIVVdzBSrHd9E07CXxLfCwOroy/view?usp=sharing"
            >
              <span className="text-color">{t("get-cv")}</span>
            </Link>
          </Button>
        </div>
      </div>

      <div className="relative z-10">
        <TypeWrite />
        <p className="text-lg uppercase text-white tracking-[6px]">
          {t("job-name")}
        </p>
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

export default About;
