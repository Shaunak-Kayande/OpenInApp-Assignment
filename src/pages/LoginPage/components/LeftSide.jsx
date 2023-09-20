import React from "react";

const LeftSide = () => {
  return (
    <div
      className="bg-[url(./left-side.png)] bg-cover self-start justify-between flex flex-col w-1/2 h-screen pl-20 py-16"
      id="LeftSide"
    >
      <div className="text-2xl font-['Poppins'] font-bold tracking-[0.36] leading-[29.4px] text-white mb-5">
        LOGO
      </div>
      <div className="text-6xl font-['Montserrat'] font-bold text-white ml-24 ">
        Board.
      </div>
      <div className="flex flex-row ml-16 gap-10 w-1/2 items-center ">
        <img src="./github-icon.svg" className="w-10" />
        <img src="./twitter-icon.svg" className="w-10" />
        <img src="./linkedin-icon.svg" className="w-12" />
        <img src="./discord-icon.svg" className="w-12" />
      </div>
    </div>
  );
};

export default LeftSide;
