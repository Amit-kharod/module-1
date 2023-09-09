import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

type Props = {};

const PlayBtn = (props: Props) => {
  return (
    <div className="flex h-11 w-32 cursor-pointer items-center justify-center rounded bg-[#17FB99]">
      <div className="flex items-center gap-1 text-black">
        <BsFillPlayFill className="h-7 w-7" />
        <span className=" text-lg font-bold">Play</span>
      </div>
    </div>
  );
};

export default PlayBtn;
