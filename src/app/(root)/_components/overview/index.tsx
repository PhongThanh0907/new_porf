import Card from "@/components/Card";
import { useTranslations } from "next-intl";
import React from "react";

const Overview = () => {
  const t = useTranslations();
  return (
    <section className="h-screen w-screen">
      <div className="grid grid-cols-2 gap-10 pt-10">
        <Card>
          <div className="px-10 pb-10">
            <h1 className="text-[50px] text-light-blue text-center">
              Overview
            </h1>
            <p className="tracking-widest leading-[150%] pt-3">
              {t("text-overview")}
            </p>
            <div className="pt-4 space-y-2">
              <div>
                <span className="text-white tracking-wider underline">
                  {t("short-term")}:
                </span>{" "}
                <span className="tracking-wider">{t("text-short-term")}</span>
              </div>

              <div>
                <span className="text-white tracking-wider underline">
                  {t("long-term")}:
                </span>{" "}
                <span className="tracking-wider">{t("text-long-term")}</span>
              </div>
            </div>
          </div>
        </Card>
        <Card>
          <h1 className="text-2xl text-white">Test</h1>
        </Card>
      </div>
    </section>
  );
};

export default Overview;
