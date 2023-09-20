import React, { useEffect, useState } from "react";
import { fetchTopProductsData } from "../../../setup/api/topProductsData";

const TopProducts = () => {
  const [topProductsData, setTopProductsData] = useState({});

  useEffect(() => {
    // Fetch top products data when the component mounts
    fetchTopProductsData()
      .then((data) => setTopProductsData(data))
      .catch((error) => console.error(error));
  }, []);

  const green = topProductsData["Basic Tees"];
  const red = topProductsData["Super Hoodies"];
  const yellow = topProductsData["Custom Short Pants"];

  const r = 3.6 * red;
  const y = 3.6 * red + 3.6 * yellow;
  const g = 3.6 * red + 3.6 * yellow + 3.6 * green;
  const redPer = r.toString() + "deg";
  const yellowPer = y.toString() + "deg";
  const greenPer = g.toString() + "deg";

  const piechart = {
    backgroundImage: `conic-gradient( from 95deg, #ee8484 0deg, #ee8484 ${redPer}, #f6dc7d ${redPer}, #f6dc7d ${yellowPer}, #98d89e ${yellowPer}, #98d89e ${greenPer})`,
  };

  // const [redPer, setRed] = useState("");
  // const [greenPer, setGreen] = useState("");
  // const [yellowPer, setYellow] = useState("");

  // const [piechart, setPiechart] = useState({});

  // useEffect(() => {
  //   const r = 3.6 * red;
  //   const y = 3.6 * red + 3.6 * yellow;
  //   const g = 3.6 * red + 3.6 * yellow + 3.6 * green;
  //   setRed(r.toString() + "deg");
  //   setGreen(g.toString() + "deg");
  //   setYellow(y.toString() + "deg");
  //   console.log(redPer, yellowPer, greenPer);

  //   setPiechart({
  //     backgroundImage: `conic-gradient( from 95deg, #ee8484 0deg, #ee8484 ${redPer}, #f6dc7d ${redPer}, #f6dc7d ${yellowPer}, #98d89e ${yellowPer}, #98d89e ${greenPer})`,
  //   });
  //   console.log(piechart);
  // }, []);

  return (
    <div
      className="border-solid border-[#e0e0e0] shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-row space-x-16 w-1/2 h-[256px] items-start justify-start pt-8 px-4 border-2 rounded-[20px]"
      id="Card6"
    >
      {/* Left side */}
      <div className="self-start flex flex-col space-y-6 items-start justify-start ml-6">
        <div className="text-lg font-['Montserrat'] font-bold ">
          Top products
        </div>

        {/* Pie chart */}
        <div
          className="relative flex items-center justify-center"
          id="outer-circle"
          style={piechart}
        >
          <div className="" id="inner-circle"></div>
        </div>
      </div>

      {/* Right side */}
      <div className="self-start flex flex-col space-y-5 items-start justify-start mb-8">
        <div className="text-xs font-['Montserrat'] text-[#858585] mb-1 mt-1 text-right self-end">
          May - June 2021
        </div>

        {/* Basic Tees */}
        <div className="flex flex-row gap-2 w-full items-start">
          <div
            className="mt-1 w-3 h-3 bg-[#98D89E] rounded-full shrink-0"
            id="Ellipse6"
          ></div>
          <div className="flex flex-col gap-1 w-full shrink-0 items-start">
            <div className="text-sm font-['Montserrat'] font-bold">
              Basic Tees
            </div>
            <div className="text-xs font-['Lato'] text-[#858585]">
              {topProductsData["Basic Tees"]}%
            </div>
          </div>
        </div>

        {/* Custom Short Pants */}
        <div className="flex flex-row gap-2 w-full items-start">
          <div
            className="mt-1 w-3 h-3 bg-[#F6DC7D] rounded-full shrink-0"
            id="Ellipse6"
          ></div>
          <div className="flex flex-col gap-1 w-full shrink-0 items-start">
            <div className="text-sm font-['Montserrat'] font-bold">
              Custom Short Pants
            </div>
            <div className="text-xs font-['Lato'] text-[#858585]">
              {topProductsData["Custom Short Pants"]}%
            </div>
          </div>
        </div>

        {/* Super Hoodies */}
        <div className="flex flex-row gap-2 w-full items-start">
          <div
            className="mt-1 w-3 h-3 bg-[#EE8484] rounded-full shrink-0"
            id="Ellipse6"
          ></div>
          <div className="flex flex-col gap-1 w-[107px] items-start">
            <div className="text-sm font-['Montserrat'] font-bold">
              Super Hoodies
            </div>
            <div className="text-xs font-['Lato'] text-[#858585]">
              {topProductsData["Super Hoodies"]}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
