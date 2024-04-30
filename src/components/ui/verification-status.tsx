import React from "react";
import { Badge } from "./badge";
import { Verified } from "../svg-components/verified";
import { Failled } from "../svg-components/failled";

export const VerificationStatus = () => {
  // dynamic
  const status = false;
  return (
    <aside className="px-8 pb-10 pt-[22px] bg-white rounded-md w-[647px]">
      <div className="flex items-center justify-between">
        <h1 className="font-light text-cus-black text-[12px] leading-[16.8px] uppercase">
          Verification status
        </h1>
        <Badge verified={status} />
      </div>
      <div className="pt-1 flex flex-col gap-4">
        <div className="flex justify-between items-center py-3 px-6 border-b border-[#EAECF0]">
          <p className="text-base leading-[22.4px] font-normal">
            Valid address
          </p>
          {status ? <Verified /> : <Failled />}
        </div>
        <div className="flex justify-between items-center py-3 px-6 border-b border-[#EAECF0]">
          <p className="text-base leading-[22.4px] font-normal">
            Address building
          </p>
          {status ? <Verified /> : <Failled />}
        </div>
        <div className="flex justify-between items-center py-3 px-6 border-b border-[#EAECF0]">
          <p className="text-base leading-[22.4px] font-normal">
            Customer resides at the declared address
          </p>
          {false ? <Verified /> : <Failled />}
        </div>
      </div>
    </aside>
  );
};
