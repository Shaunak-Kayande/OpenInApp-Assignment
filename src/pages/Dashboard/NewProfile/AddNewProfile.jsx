import React, { useState } from "react";
import Contact from "./Contact";
import Social from "./Social";

const AddNewProfile = ({ setAddProfile, setProfileData, setSearchParams }) => {
  const [currPage, setPage] = useState(1);

  return (
    <div className="bg-black z-50 bg-opacity-50 absolute inset-0 w-full h-full flex items-center justify-center">
      <div className="bg-white w-[544px]  rounded-2xl" id="add-new-profile">
        <div
          id="HeaderModuleRoot"
          className="flex flex-col justify-end gap-4 w-full h-16"
        >
          <div className="flex flex-row justify-between items-start mx-6">
            <div
              id="Title"
              className="text-xl font-['Figtree'] font-semibold leading-[32px] text-[#231f20] w-1/2"
            >
              Add New Profile
            </div>
            <button
              id="Button1"
              className="overflow-hidden flex flex-col w-8 shrink-0 items-center p-1 rounded-lg"
              onClick={() => setAddProfile(1)}
            >
              <img src="./images/close-icon.svg" id="Icon" className="w-6" />
            </button>
          </div>
          <div
            id="Divider"
            className="border-solid border-[#f2f2f2] h-px shrink-0 border-t border-b-0 border-x-0"
          />
        </div>

        <div className="flex flex-col  gap-2 w-full mt-5 px-6">
          <div className="self-center flex flex-row justify-between mb-1 w-2/3 items-start">
            <div
              id="InputTitle"
              className="font-['Figtree'] font-semibold leading-[24px] text-[#231f20] cursor-pointer"
            >
              Basic
            </div>
            <div
              id="InputTitle1"
              className="font-['Figtree'] font-semibold leading-[24px] text-[#231f20] cursor-pointer"
            >
              Contact
            </div>
          </div>
          <div className="flex flex-row justify-between space-x-12 items-start mb-8 ">
            <div
              className="bg-[#d9d9d9] w-1/2 h-1 rounded-[30px]"
              style={{
                backgroundColor: currPage === 1 ? "#3F84F8" : "#d9d9d9",
              }}
            />
            <div
              className="bg-[#d9d9d9] w-1/2 h-1 rounded-[30px]"
              style={{
                backgroundColor: currPage === 2 ? "#3F84F8" : "#d9d9d9",
              }}
            />
          </div>
          {currPage === 1 ? (
            <Contact
              setPage={setPage}
              setProfileData={setProfileData}
              setSearchParams={setSearchParams}
            />
          ) : (
            <Social
              setPage={setPage}
              setAddProfile={setAddProfile}
              setProfileData={setProfileData}
              setSearchParams={setSearchParams}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNewProfile;
