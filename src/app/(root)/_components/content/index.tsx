"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const Content = () => {
  return (
    <motion.div
      animate={{ opacity: [1, 0], zIndex: [50, -1] }}
      viewport={{ once: true }}
      transition={{
        ease: "easeInOut",
        delay: 3,
      }}
      className="fixed bg-black inset-0 flex justify-center items-center"
    >
      <div className="h-[54px] lg:h-[120px] overflow-hidden w-full flex justify-center">
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: [100, 0, 0, -100], opacity: [0, 1, 1, 0] }}
          viewport={{ once: true }}
          transition={{
            duration: 2.7,
            times: [0, 0.3, 0.6, 0.9],
            ease: "easeInOut",
          }}
          className="flex items-center gap-2"
        >
          <Image src="/logo.webp" alt="logo" height={55} width={55} />
          <span className="text-2xl lg:text-5xl text-color">
            Welcome to my Portfolio
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Content;
