"use client";

import { cn } from "@/libs/utils";
import { motion } from "framer-motion";
import { useState } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "rounded-xl h-[48px] w-[166px] text-white relative border border-[#222222] overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 h-full w-full">
        <motion.div
          style={{
            filter: "blur(10px)",
          }}
          animate={{
            x: isHovered ? ["0%"] : ["-15%", "210%", "210%", "-15%", "-15%"],
            y: isHovered ? ["0%"] : ["-18%", "-18%", "120%", "120%", "-18%"],
          }}
          transition={{
            times: [0, 0.35, 0.5, 0.85, 1],
            repeat: isHovered ? undefined : Infinity,
            duration: 4,
            ease: "linear",
          }}
          className={`relative bg-[#72dcff] ${isHovered ? "h-full w-full duration-500" : "h-1/2 w-1/3"} `}
        />
      </div>

      <div className="z-10 bg-[#0f0f0f] absolute top-[1.5px] right-[1px] left-[1.5px] bottom-[1px] rounded-[12px] flex-center-row">
        {children}
      </div>
    </button>
  );
};

export default Button;

// #0f0f0f]
