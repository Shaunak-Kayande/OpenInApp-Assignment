import React from "react";

const AddProfile = () => {
  return (
    <div
      className="border-solid border-[#e0e0e0] shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col justify-center gap-4 w-1/2 h-64 items-center border-2 rounded-[20px]"
      id="Card8"
    >
      <div
        className="bg-[#F5F5F5] flex flex-col justify-center w-20 h-20 rounded-full shrink-0 items-center"
        id="Ellipse10"
      >
        <img src="./images/add-icon.svg" className="w-12" id="Controls" />
      </div>
      <div className="font-['Figtree'] font-semibold leading-[24px] text-[#858585]">
        Add Profile
      </div>
    </div>
  );
};

export default AddProfile;
