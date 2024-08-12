import React from "react";
import Navbar from "./_components/Navbar";
import Language from "./_components/Language";
import Image from "next/image";
import Button from "../Button";

const Index = () => {
  return (
    <div className="flex-between w-screen h-24 fixed top-0 inset-x-0">
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
          <span className="text-color">Get my CV</span>
        </Button>
      </div>
    </div>
  );
};

export default Index;
