import React from "react";

const TotalTransactions = () => {
  return (
    <div
      className="border-solid border-[#e0e0e0] border-2 rounded-[20px] shadow-[3px_4px_11px_0px_rgba(98,_98,_98,_0.15)] h-32 flex flex-col items-start"
      id="TotalRevenues1"
    >
      <div
        className="flex flex-row justify-center pb-5 gap-12 w-[250px] h-32 shrink-0 items-center"
        id="Card1"
      >
        <div className="flex flex-col gap-2 w-1/2 items-start mt-5 mb-1">
          <div
            className="bg-[#DEBF85] flex w-8 h-8 rounded-full items-center justify-center"
            id="Ellipse1"
          >
            <img src="./images/total-transactions-icon.svg" className="w-4" />
          </div>
          <div className="self-stretch flex flex-col ml-0 gap-px items-start">
            <div className="text-xs font-['Lato']">Total Transactions</div>
            <div className="text-xl font-['Open_Sans'] font-bold">1520</div>
          </div>
        </div>
        <div
          className="overflow-hidden bg-[#e9f9eb] self-end flex flex-col w-12 shrink-0 h-6 items-center py-1 rounded-[34px]"
          id="Label"
        >
          <div
            className="text-center text-xs font-['Figtree'] font-semibold tracking-[0.5] leading-[16px] uppercase text-[#3cc952]"
            id="LabelText"
          >
            +1.7%
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalTransactions;
