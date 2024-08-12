"use client";

import { motion } from "framer-motion";
import { useCallback, useState } from "react";

const Navbar = () => {
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

  const items = ["About", "Experience", "Skills", "Project", "Contact"];

  return (
    <div className="w-[570px] relative h-[48px] flex-center-row border border-[#222222] rounded-[10px]">
      <div className="relative w-[560px] h-[46px]">
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
          className={`absolute w-28 h-9 rounded-md  border border-transparent z-[-1] ${opacity ? "opacity-100" : "opacity-0"}`}
        />
        <ul
          onMouseLeave={handleMouseLeave}
          className="flex h-full w-full items-center justify-center"
        >
          {items.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => handleMouseEnter(index + 1)}
              className="flex-center group h-full"
            >
              <div
                className={`group-hover:text-color text-gray-500 duration-300 w-28 text-center h-full flex-center-row`}
              >
                {item}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
