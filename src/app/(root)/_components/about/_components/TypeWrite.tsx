"use client";

import { useTranslations } from "next-intl";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const TypeWrite = () => {
  const t = useTranslations();

  const [text, count] = useTypewriter({
    words: [`${t("welcome")}`, `${t("name")}`, `${t("work")}`],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div>
      <h1 className="text-3xl lg:text-[80px] lg:leading-[96px] text-color my-2 py-2 uppercase">
        <span>{text}</span>
        <Cursor cursorColor="#70befa" />
      </h1>
    </div>
  );
};

export default TypeWrite;
