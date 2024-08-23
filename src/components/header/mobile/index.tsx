"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import Image from "next/image";
import ButtonMenuBar from "./_components/ButtonMenuBar";
import Language from "@/components/header/_components/Language";
import Link from "next/link";

const MobileHeader = () => {
  const t = useTranslations();
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openButtonMenu, setOpenButtonMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(!lastScrollY);

      if (currentScrollY > lastScrollY || currentScrollY === 0) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsScrolled(true);
  }, []);

  const items = [
    {
      title: t("About"),
      link: "#about",
    },
    {
      title: t("Experience"),
      link: "#experience",
    },
    {
      title: t("Skills"),
      link: "#skills",
    },
    {
      title: t("Project"),
      link: "#project",
    },
    {
      title: t("Contact"),
      link: "#contact",
    },
    {
      title: t("Get CV"),
      link: "https://drive.google.com/file/d/1RWmeKjTIVVdzBSrHd9E07CXxLfCwOroy/view?usp=sharing",
    },
  ];

  return (
    <motion.div
      animate={{ top: isScrolled ? 10 : -100 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex-center-row h-24 fixed top-0 inset-x-0 z-40"
    >
      <div className="flex-between w-screen h-24 px-4">
        <div className="flex">
          <div className="flex items-center gap-2">
            <Image src="/logo.webp" alt="logo" height={36} width={36} />
            <span className="text-color text-2xl">Portfolio</span>
          </div>
        </div>

        <div className="flex gap-4 relative items-center">
          <Language />
          <div
            id="button-menu"
            ref={buttonRef}
            onClick={() => setOpenButtonMenu(!openButtonMenu)}
          >
            <ButtonMenuBar open={openButtonMenu} />
          </div>
        </div>
      </div>

      <motion.div
        animate={{ left: openButtonMenu ? 0 : 500 }}
        transition={{ type: "spring", stiffness: 180 }}
        className={`z-50 fixed left-[500px] inset-0 h-screen bg-black rounded-md flex flex-col overflow-hidden`}
      >
        <div className="flex justify-between px-4 pt-10 pb-4">
          <div className="flex items-center gap-2">
            <Image src="/logo.webp" alt="logo" height={36} width={36} />
            <span className="text-color text-2xl">Portfolio</span>
          </div>

          <div
            id="button-menu"
            ref={buttonRef}
            onClick={() => setOpenButtonMenu(!openButtonMenu)}
          >
            <ButtonMenuBar open={openButtonMenu} />
          </div>
        </div>
        <div className="px-4">
          {items.map((item, index) => (
            <div key={index} className="relative w-full py-6">
              <Link
                onClick={() => setOpenButtonMenu(false)}
                className="absolute left-[10px] opacity-100 hover-item"
                href={item.link}
                // style={{ transition: `all ${item.delay}ms` }}
              >
                <p className="relative inline-block group text-lg text-white">
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MobileHeader;
