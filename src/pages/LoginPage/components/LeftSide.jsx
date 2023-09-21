import React from "react";

const LeftSide = () => {
  return (
    <div
      className=" bg-cover bg-right-bottom self-start justify-between items-start flex flex-col w-1/3 lg:w-1/2 h-full md:pl-5 lg:pl-20 py-16"
      id="HomeLeftSide"
    >
      <div className="text-base px-10 md:px-0 md:text-2xl font-['Poppins'] font-bold tracking-[0.36] leading-[29.4px] text-white mb-5">
        LOGO
      </div>
      <div className="hidden md:block text-4xl lg:text-6xl font-['Montserrat'] font-bold text-white ml-10 lg:ml-24 ">
        Board.
      </div>
      <div className="hidden md:flex  lg:flex-row lg:ml-16 gap-4 lg:gap-10 w-1/2 items-start lg:items-center ">
        <img src="./github-icon.svg" className="w-6 lg:w-10" />
        <img src="./twitter-icon.svg" className="w-6 lg:w-10" />
        <img src="./linkedin-icon.svg" className="w-7 lg:w-12" />
        <img src="./discord-icon.svg" className="w-7 lg:w-12" />
      </div>
    </div>
  );
};

export default LeftSide;
