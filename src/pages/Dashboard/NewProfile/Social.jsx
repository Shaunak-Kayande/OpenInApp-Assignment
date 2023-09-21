import React, { useState } from "react";

const Social = ({
  setPage,
  setAddProfile,
  setProfileData,
  setSearchParams,
}) => {
  const [insta, setInsta] = useState("");
  const [youtube, setYoutube] = useState("");

  return (
    <div>
      <div
        id="InputTitle3"
        className="font-['Figtree'] leading-[24px] text-[#231f20] ml-0"
      >
        Instagram Link{" "}
        <div id="InputTitle2" className="text-[#999ca0] contents">
          (Optional)
        </div>
      </div>
      <div
        id="InputContainer"
        className="border-solid border-[#f2f2f2] bg-white self-stretch flex flex-col justify-center pl-4 h-12 shrink-0 items-start mb-4 mx-0 border rounded-lg"
      >
        <input
          id="PlaceholderText"
          className="font-['Figtree'] leading-[24px] text-[#999ca0] outline-none w-full"
          placeholder="Eg. ..instagram.com/username"
          onChange={(e) => {
            setInsta(e.target.value);
            setSearchParams(
              (prev) => {
                prev.set("insta", e.target.value);
                return prev;
              },
              { replace: true }
            );
          }}
        />
      </div>
      <div
        id="InputTitle5"
        className="font-['Figtree'] leading-[24px] text-[#231f20] mb-4 ml-0"
      >
        Youtube Link{" "}
        <div id="InputTitle4" className="text-[#999ca0] contents">
          (Optional)
        </div>
      </div>
      <div
        id="InputContainer1"
        className="border-solid border-[#f2f2f2] bg-white self-stretch flex flex-col justify-center pl-4 h-12 shrink-0 items-start mx-0 border rounded-lg"
      >
        <input
          id="PlaceholderText"
          className="font-['Figtree'] leading-[24px] text-[#999ca0] outline-none w-full"
          placeholder="Eg. ..youtube/username"
          onChange={(e) => {
            setYoutube(e.target.value);
            setSearchParams(
              (prev) => {
                prev.set("youtube", e.target.value);
                return prev;
              },
              { replace: true }
            );
          }}
        />
      </div>
      <div
        id="FooterModuleRoot"
        className="flex justify-end items-center w-full h-20 space-x-2"
      >
        <button
          id="ButtonText"
          className="text-center w-16 h-10 rounded-lg text-sm font-['Figtree'] font-semibold border border-solid border-[#999ca0]"
          onClick={() => setPage(1)}
        >
          Back
        </button>
        <button
          id="ButtonText"
          className="text-center bg-[#3e84f8] w-16 h-10 rounded-lg text-sm font-['Figtree'] font-semibold text-white"
          onClick={() => {
            setAddProfile(1);
            setProfileData({ ...{ insta: insta, youtube: youtube } });
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Social;
