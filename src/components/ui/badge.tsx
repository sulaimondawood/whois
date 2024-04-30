import React from "react";

export const Badge = ({ verified = false }: { verified: boolean }) => {
  return (
    <div
      className={`${
        verified
          ? "text-[#027A48] bg-[#ECFDF3]"
          : "text-[#D92D20] bg-[#FFEFEE] "
      } py-3 px-4 flex justify-center items-center rounded-lg text-base leading-[22.4px] w-[108px] text-center h-[46px] capitalize font-medium`}
    >
      {verified ? "Verified" : "Failed"}
    </div>
  );
};
