import Image from "next/image";
import { TextData } from "./text-data";

export const CustomerInfo = () => {
  return (
    <aside className="pt-[22px] w-[649px]  pb-[25px] px-8 rounded-md bg-white">
      <h1 className="font-light text-cus-black text-[12px] leading-[16.8px] uppercase">
        Customer information
      </h1>
      <div className="pt-6 flex items-start gap-[71px]">
        <div>
          <div className="relative size-[139px] mb-4">
            <Image fill src={"/images/image.png"} alt="customer image" />
          </div>
          <TextData
            text="12345h"
            desc="customer number"
            classname="w-[120px]"
            align="text-center"
          />
        </div>
        <div className="flex flex-col gap-8 items-start">
          <TextData text="victor" desc="first name" />
          <TextData text="adebowale" desc="last name" />
          <TextData text="01/04/2023 09:22am" desc="verification time stamp" />
        </div>
        <div className="flex flex-col gap-8 items-start">
          <TextData text="nigeria" desc="country" />
          <TextData text="0902 234 5678" desc="phone number" />
        </div>
      </div>
    </aside>
  );
};
