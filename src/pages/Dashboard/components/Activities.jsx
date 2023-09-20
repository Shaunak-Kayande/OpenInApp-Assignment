import React, { useEffect, useState } from "react";
import { fetchActivityData } from "../../../setup/api/activityData";

const Activities = () => {
  const [activityData, setActivityData] = useState([]);

  useEffect(() => {
    // Fetch activity data when the component mounts
    fetchActivityData()
      .then((data) => setActivityData(data))
      .catch((error) => console.error(error));
  }, []);

  // const activityArr = [
  //   { user: 500, guest: 400 },
  //   { user: 360, guest: 450 },
  //   { user: 300, guest: 400 },
  //   { user: 405, guest: 340 },
  // ];
  // console.log(activityData);

  return (
    <div
      className="border-solid border-[#e0e0e0] shadow-[4px_4px_20px_0px_rgba(0,_0,_0,_0.1)] bg-white flex flex-col justify-center gap-8 pt-8 pb-6 px-8 border-2 rounded-[20px]"
      id="Card4"
    >
      <div className="flex flex-row justify-between items-start ml-2 mr-8">
        <div className="flex flex-col gap-1 items-start">
          <div className="text-lg font-['Montserrat'] font-bold">
            Activities
          </div>
          <div className="text-sm font-['Montserrat'] text-[#858585]">
            May - June 2021
          </div>
        </div>
        <div className="self-end flex flex-row mb-2 gap-10 items-start">
          <div className="flex flex-row gap-3 w-16 shrink-0 items-center">
            <div
              className=" w-3 h-3 bg-[#EE8484] rounded-full"
              id="Ellipse4"
            ></div>
            <div className="text-sm font-['Lato']">Guest</div>
          </div>
          <div className="flex flex-row gap-3 w-16 shrink-0 items-center">
            <div
              className=" w-3 h-3 bg-[#98D89E] rounded-full"
              id="Ellipse4"
            ></div>
            <div className="text-sm font-['Lato']">User</div>
          </div>
        </div>
      </div>
      <div className="flex flex-row ml-2 gap-4 items-start">
        <div className="flex flex-col justify-between w-6 shrink-0 h-[212px] items-start">
          <div className="text-sm font-['Lato'] text-[#858585]">500</div>
          <div className="text-sm font-['Lato'] text-[#858585]">400</div>
          <div className="text-sm font-['Lato'] text-[#858585]">300</div>
          <div className="text-sm font-['Lato'] text-[#858585]">200</div>
          <div className="text-sm font-['Lato'] text-[#858585]">100</div>
          <div className="text-sm font-['Lato'] text-[#858585] self-end">0</div>
        </div>
        <div className="flex flex-row mt-2 gap-1 w-[890px] items-start">
          <div className="flex flex-col gap-1 w-[881px]">
            <div className="relative flex flex-col justify-end items-end pt-20 h-52 ">
              <div className="absolute z-10 inset-0 flex flex-col justify-between">
                <div
                  className="border-solid border-[#eaeaea] w-[881px] h-px border-t border-b-0 border-x-0"
                  id="Line"
                />
                <div
                  className="border-solid border-[#eaeaea] w-[881px] h-px border-t border-b-0 border-x-0"
                  id="Line1"
                />
                <div
                  className="border-solid border-[#eaeaea] w-[881px] h-px border-t border-b-0 border-x-0"
                  id="Line2"
                />
                <div
                  className="border-solid border-[#eaeaea] w-[881px] h-px border-t border-b-0 border-x-0"
                  id="Line3"
                />
                <div
                  className="border-solid border-[#eaeaea] w-[881px] h-px border-t border-b-0 border-x-0"
                  id="Line4"
                />
                <div
                  className="border-solid border-[#eaeaea] w-[881px] h-px border-t border-b-0 border-x-0"
                  id="Line5"
                />
              </div>
              {activityData.length === 0 ? (
                ""
              ) : (
                <div className="flex items-end justify-around w-full z-20">
                  <div className="flex items-end space-x-2">
                    <div
                      className="w-10 h-32 bg-[#98D89E] rounded-md "
                      id="w1-u"
                      style={{ height: activityData[0].user * 0.416 }}
                    ></div>
                    <div
                      className="w-10 h-32 bg-[#EE8484] rounded-md"
                      id="w1-g"
                      style={{ height: activityData[0].guest * 0.416 }}
                    ></div>
                  </div>
                  <div className="flex items-end space-x-2">
                    <div
                      className="w-10 h-32 bg-[#98D89E] rounded-md "
                      id="w2-u"
                      style={{ height: activityData[1].user * 0.416 }}
                    ></div>
                    <div
                      className="w-10 h-32 bg-[#EE8484] rounded-md"
                      id="w2-g"
                      style={{ height: activityData[1].guest * 0.416 }}
                    ></div>
                  </div>
                  <div className="flex items-end space-x-2">
                    <div
                      className="w-10 h-32 bg-[#98D89E] rounded-md "
                      id="w3-u"
                      style={{ height: activityData[2].user * 0.416 }}
                    ></div>
                    <div
                      className="w-10 h-32 bg-[#EE8484] rounded-md"
                      id="w3-g"
                      style={{ height: activityData[2].guest * 0.416 }}
                    ></div>
                  </div>
                  <div className="flex items-end space-x-2">
                    <div
                      className="w-10 h-32 bg-[#98D89E] rounded-md "
                      id="w4-u"
                      style={{ height: activityData[3].user * 0.416 }}
                    ></div>
                    <div
                      className="w-10 h-32 bg-[#EE8484] rounded-md"
                      id="w4-g"
                      style={{ height: activityData[3].guest * 0.416 }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-around w-full ">
              <div className="text-sm font-['Lato'] text-[#858585]">Week 1</div>
              <div className="text-sm font-['Lato'] text-[#858585]">Week 2</div>
              <div className="text-sm font-['Lato'] text-[#858585]">Week 3</div>
              <div className="text-sm font-['Lato'] text-[#858585]">Week 4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activities;
