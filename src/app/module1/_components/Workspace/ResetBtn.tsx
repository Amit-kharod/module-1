import React from "react";
import { GrPowerReset } from "react-icons/gr";

type Props = {};

const ResetBtn = (props: Props) => {
  return (
    <div className="flex h-11 w-12 cursor-pointer items-center justify-center rounded bg-[#FCD731]">
      <GrPowerReset className="h-7 w-7 text-black" />
    </div>
  );
};

export default ResetBtn;
