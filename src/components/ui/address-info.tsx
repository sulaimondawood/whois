import React from "react";
import { TextData } from "./text-data";
import { Visible } from "../svg-components/visible";

export const AddressInfo = () => {
  return (
    <aside className="pt-[22px] w-[649px] h-[330px]  pb-[82px] px-8 rounded-md bg-white">
      <h1 className="font-light text-cus-black text-[12px] leading-[16.8px] uppercase">
        Address information
      </h1>

      <div className="flex gap-[137px] items-start pt-6 ">
        <div className="flex flex-col gap-[29.5px]">
          <TextData
            text="25 Abule-Oja road, Akoka, Yaba"
            desc="Current address"
          />
          <TextData text="Somolu" desc="lga" />

          <div>
            <div className="flex gap-1 items-start">
              <div
                className={`text-[13px] relative  text-[#027A48] capitalize leading-[18.2px] font-normal pb-[5px]`}
              >
                View Map URL
                <div className="absolute -top-[2px] -right-6">
                  <Visible />
                </div>
              </div>
            </div>
            <p className="text-xs leading-[16.8px] font-normal uppercase text-cus-gray">
              MAP URL
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-[29.5px]">
          <TextData text="Lagos" desc="State" />
          <TextData text="University of Lagos" desc="NEARBY LANDMARK" />
          <div>
            <div className="flex gap-1 items-start">
              <div
                className={`text-[13px] relative  text-[#027A48] capitalize leading-[18.2px] font-normal pb-[5px]`}
              >
                View Electricity Bill
                <div className="absolute -top-[2px] -right-6">
                  <Visible />
                </div>
              </div>
            </div>
            <p className="text-xs leading-[16.8px] font-normal uppercase text-cus-gray">
              MAP URL
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
