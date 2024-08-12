"use client";

import { Locale } from "@/config";
import { setUserLocale, getUserLocale } from "@/services/locale";
import React, { useEffect, useState, useTransition } from "react";

const SwitchLanguge = () => {
  const [isPending, startTransition] = useTransition();
  const [localeValue, setLocaleValue] = useState<string>("");

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  useEffect(() => {
    async function fetchData() {
      const locale = await getUserLocale();
      setLocaleValue(locale);
    }
    fetchData();
  }, [isPending]);

  return (
    <div className="h-[48px] border border-[#222222] rounded-[10px] flex-center-row relative">
      <div
        style={{
          boxShadow: "0px 0px 2px 0.5px #70befabf",
          top: "50%",
          transform: "translateY(-50%)",
          left: localeValue === "en" ? "4px" : "48px",
        }}
        className="absolute h-9 w-11 rounded-[5px] duration-300"
      />
      <span
        onClick={() => onChange("en")}
        className={`w-12 text-color text-center cursor-pointer relative left-[2px] ${localeValue === "en" ? "opacity-100" : "opacity-40 hover:opacity-100 duration-300"}`}
      >
        EN
      </span>

      <span
        onClick={() => onChange("vi")}
        className={`w-12 text-color text-center cursor-pointer relative right-[2px] ${localeValue === "vi" ? "opacity-100" : "opacity-40"}`}
      >
        VN
      </span>
    </div>
  );
};

export default SwitchLanguge;
