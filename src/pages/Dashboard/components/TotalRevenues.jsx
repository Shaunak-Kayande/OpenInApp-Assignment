import React, { useEffect, useState } from "react";
import { fetchDashboardData } from "../../../setup/api/dashboardData";

const TotalRevenues = () => {
  const [dashboardData, setDashboardData] = useState({});

  useEffect(() => {
    fetchDashboardData()
      .then((data) => setDashboardData(data.revenues))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div
      className="border-solid border-[#e0e0e0] border-2 rounded-[20px] shadow-[3px_4px_11px_0px_rgba(98,_98,_98,_0.15)] h-32 flex flex-col items-start"
      id="TotalRevenues1"
    >
      <div
        className="flex flex-row justify-between px-4 w-full   items-center"
        id="Card1"
      >
        <div className="flex flex-col gap-2 w-1/2 items-start mt-5 mb-1">
          <div
            className="bg-[#7FCD93] flex w-8 h-8 rounded-full items-center justify-center"
            id="Ellipse1"
          >
            <img src="./images/revenue-icon.svg" className="w-4" />
          </div>
          <div className="self-stretch flex flex-col ml-0 gap-px items-start">
            <div className="text-xs font-['Lato'] ">Total Revenues</div>
            <div className="text-md md:text-xl h-5 font-['Open_Sans'] font-bold">
              {dashboardData.length == 0 ? "0" : dashboardData.total}
            </div>
          </div>
        </div>
        <div
          className="overflow-hidden bg-[#e9f9eb] self-center xl:self-end flex flex-col w-12  h-6 items-center py-1 rounded-[34px]"
          id="Label"
        >
          <div
            className="text-center text-xs font-['Figtree'] font-semibold tracking-[0.5] leading-[16px] uppercase text-[#3cc952]"
            id="LabelText"
          >
            {dashboardData.length == 0 ? "0" : dashboardData.gain}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenues;
