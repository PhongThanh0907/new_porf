"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useCallback, useState } from "react";

const NavbarV2 = () => {
  const t = useTranslations();
  const [isHoveredItem, setIsHoveredItem] = useState<number | null>(null);
  const [opacity, setOpacity] = useState(false);

  const handleMouseEnter = useCallback((index: number) => {
    setIsHoveredItem(index);
    setOpacity(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHoveredItem(null);
    setOpacity(false);
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
    <div className="w-[682px] relative h-[48px] flex-center-row border border-[#222222] rounded-[10px] bg-[#0f0f0f]">
      <div className="relative w-[672px] h-[46px]">
        <motion.div
          style={{
            boxShadow: "0px 0px 2px 0.5px #70befabf",
            left: `${((isHoveredItem || 0) - 1) * 112}px`,
            top: "50%",
            transform: "translateY(-50%)",
          }}
          animate={{
            left:
              isHoveredItem !== null
                ? `${(isHoveredItem - 1) * 112}px`
                : undefined,
          }}
          transition={{
            duration: 0.3,
            ease: "linear",
          }}
          className={`absolute w-28 h-9 rounded-md border border-transparent ${opacity ? "opacity-100" : "opacity-0"}`}
        />
        <ul
          onMouseLeave={handleMouseLeave}
          className="flex h-full w-full items-center justify-center relative z-10"
        >
          {items.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              className="flex-center group h-full"
            >
              <Link
                href={item.link}
                className={`group-hover:text-color text-gray-500 duration-300 w-28 text-center h-full flex-center-row`}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavbarV2;
