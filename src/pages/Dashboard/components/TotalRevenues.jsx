import React from "react";

const TotalRevenues = () => {
  return (
    <div
      className="border-solid border-[#e0e0e0] border-2 rounded-[20px] shadow-[3px_4px_11px_0px_rgba(98,_98,_98,_0.15)] h-32 flex flex-col items-start"
      id="TotalRevenues"
    >
      <div
        className=" flex flex-row justify-center pb-4 gap-5 w-[250px] items-center"
        id="Card"
      >
        <div className="flex flex-col gap-2 w-1/2 items-start mt-5 mb-1">
          <div
            className="bg-[#7FCD93] flex w-8 h-8 rounded-full items-center justify-center"
            id="Ellipse"
          >
            <img src="./images/revenue-icon.svg" className="w-5" />
          </div>
          <div className="self-stretch flex flex-col ml-0 gap-px items-start">
            <div className="text-xs font-['Lato']">Total Revenues</div>
            <div className="text-xl font-['Open_Sans'] font-bold">
              $2,129,430
            </div>
          </div>
        </div>
        <div className="self-end flex flex-row space-x-2 w-16 shrink-0 items-start">
          <img
            src="./images/down-arrow.svg"
            className="self-end w-2 shrink-0"
          />
          <div
            className="overflow-hidden bg-[#e9f9eb] flex flex-col w-12 shrink-0 h-6 items-center py-1 rounded-[34px]"
            id="Label3"
          >
            <div
              className="text-center text-xs font-['Figtree'] font-semibold tracking-[0.5] leading-[16px] uppercase text-[#3cc952]"
              id="LabelText3"
            >
              +2.5%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalRevenues;
