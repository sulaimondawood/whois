import Image from "next/image";
import React from "react";

export const Certification = () => {
  return (
    <div className="bg-white rounded-md mt-4 mb-[62px] py-[22px] pl-8">
      <h1 className="text-xs leading-[16.8px]  font-light text-cus-black">
        CERTIFICATION
      </h1>
      <div className="flex gap-[123px] items-center">
        <div className="w-[668px]">
          <div className="flex items-center text-wrap text-base font-normal uppercase">
            <span className="pr-1">I</span>
            <p className="border-b w-[200px] border-b-cus-black"></p>
            <span className="pl-1">
              hereby certify that the information presented for
            </span>
          </div>
          <p className="text-base font-normal uppercase">
            the above named customer for address verification is true and
            accurate.
          </p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <div className="border-b border-[#000000] w-[286px] "></div>
            <p className="uppercase pt-2 text-center text-[#667085] text-sm leading-[19.6px]">
              SIGNATURE & DATE
            </p>
          </div>
          <div className="relative w-[94px] h-[90px]">
            <Image fill src={"/images/datapro.png"} alt="data pro logo" />
          </div>
        </div>
      </div>
    </div>
  );
};
