import React from "react";

const TotalLikes = () => {
  return (
    <div
      className="border-solid border-[#e0e0e0] border-2 rounded-[20px] shadow-[3px_4px_11px_0px_rgba(98,_98,_98,_0.15)] h-32 flex flex-col items-start"
      id="TotalRevenues2"
    >
      <div
        className="flex flex-row justify-center gap-20 w-[237px] items-start py-4"
        id="Card2"
      >
        <div className="flex flex-col mt-1 gap-2 w-16 shrink-0 items-start">
          <div
            className="bg-[#ECA4A4] flex w-8 h-8 rounded-full items-center justify-center"
            id="Ellipse2"
          >
            <img src="./images/likes-icon.svg" className="w-4" />
          </div>
          <div className="flex flex-col gap-px w-16 items-start">
            <div className="text-xs font-['Lato']">Total Likes</div>
            <div className="text-2xl font-['Open_Sans'] font-bold">9,721</div>
          </div>
        </div>
        <div
          className="overflow-hidden bg-[#e9f9eb] self-end flex flex-col w-12 shrink-0 h-6 items-start pl-2 py-1 rounded-[34px]"
          id="Label1"
        >
          <div
            className="text-center text-xs font-['Figtree'] font-semibold tracking-[0.5] leading-[16px] uppercase text-[#3cc952]"
            id="LabelText1"
          >
            +1.4%
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalLikes;
