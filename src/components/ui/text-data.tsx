import React from "react";

export const TextData = ({
  text,
  desc,
  classname,
  align,
}: {
  text: string;
  desc: string;
  classname?: string;
  align?: string;
}) => {
  return (
    <div className={classname && classname}>
      <h1
        className={`${
          align ? `${align} pb-[2px]` : "text-left"
        } text-cus-black text-base capitalize leading-[22.4px] font-medium pb-1`}
      >
        {text}
      </h1>
      <p className="text-xs leading-[16.8px] font-normal uppercase text-cus-gray">
        {desc}
      </p>
    </div>
  );
};
