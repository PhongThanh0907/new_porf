"use client";

import React, { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import NavbarV2 from "./_components/NavbarV2";

const Index = () => {
  const t = useTranslations();

  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 300 && currentScrollY > lastScrollY) {
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

  return (
    <motion.div
      animate={{ top: isScrolled ? 10 : -100 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex-center-row h-24 fixed top-0 inset-x-0 z-50"
    >
      <NavbarV2 />
    </motion.div>
  );
};

export default Index;
