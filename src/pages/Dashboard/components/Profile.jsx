import React, { useEffect, useState } from "react";
import AddNewProfile from "../NewProfile/AddNewProfile";
import { useSearchParams } from "react-router-dom";

const AddProfile = () => {
  const [addProfile, setAddProfile] = useState(1);
  const [profileData, setProfileData] = useState({});
  const [searchParams, setSearchParams] = useSearchParams({
    name: "",
    email: "",
    phone: "",
    insta: "",
    youtube: "",
    profile: "false",
  });
  // console.log(searchParams.get("name"));

  return (
    <div
      className="border-solid border-[#e0e0e0] shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col justify-center gap-4 w-full lg:w-1/2 h-64 items-center border-2 rounded-[20px]"
      id="Card8"
    >
      {searchParams.get("profile") === "false" ? (
        <div>
          <div
            className="bg-[#F5F5F5] flex flex-col cursor-pointer justify-center w-20 h-20 rounded-full shrink-0 items-center"
            id="Ellipse10"
            onClick={() => setAddProfile(2)}
          >
            <img src="./images/add-icon.svg" className="w-12" id="Controls" />
          </div>
          <div className="font-['Figtree'] font-semibold leading-[24px] text-[#858585]">
            Add Profile
          </div>
        </div>
      ) : (
        <div className="w-full h-full ml-6 sm:ml-14 mt-10 flex flex-col space-y-14 items-start justify-start">
          <div className="font-[Figtree] text-2xl font-semibold">
            {searchParams.get("name")}
          </div>
          <div className="grid grid-cols-2 w-full place-content-between font-[Figtree] text-sm underline">
            <div className="flex mb-2 items-center justify-start space-x-1">
              <div className="overflow-hidden bg-[#e9f9eb] flex w-6 h-6 px-1 py-1 items-center justify-center rounded-[184px]">
                <img src="./images/phone-icon.png" alt="" className="w-4" />
              </div>
              <div>{searchParams.get("phone")}</div>
            </div>
            {searchParams.get("insta") === "" ? (
              ""
            ) : (
              <div className="flex mb-2 items-center justify-start space-x-1">
                <div className="overflow-hidden bg-[#FFE9EC] flex w-6 h-6 px-1 py-1 items-center justify-center rounded-[184px]">
                  <img
                    src="./images/instagram-icon.png"
                    alt=""
                    className="w-4"
                  />
                </div>
                <div>{searchParams.get("insta").slice(10)}</div>
              </div>
            )}
            <div className="flex mb-2 items-center justify-start space-x-1">
              <div className="overflow-hidden bg-[#EBE6F9] flex w-6 h-6 px-1 py-1 items-center justify-center rounded-[184px]">
                <img src="./images/mail-icon.png" alt="" className="w-4" />
              </div>
              <div>{searchParams.get("email")}</div>
            </div>
            {searchParams.get("youtube") === "" ? (
              ""
            ) : (
              <div className="flex mb-2 items-center justify-start space-x-1">
                <div className="overflow-hidden bg-[#FFE9EC] flex w-6 h-6 px-1 py-1 items-center justify-center rounded-[184px]">
                  <img src="./images/youtube-icon.png" alt="" className="w-4" />
                </div>
                <div>{searchParams.get("youtube").slice(8)}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {addProfile === 1 ? (
        ""
      ) : (
        <AddNewProfile
          setAddProfile={setAddProfile}
          setProfileData={setProfileData}
          setSearchParams={setSearchParams}
        />
      )}
    </div>
  );
};

export default AddProfile;
