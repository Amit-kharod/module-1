"use client";
import { useAppDispatch } from "@/utils/reduxToolkit/hook";
import { resetGameLevel, setDropZone } from "@/utils/reduxToolkit/slice/2dGameSlice";
import React from "react";
import { GrPowerReset } from "react-icons/gr";

type Props = {};

const ResetBtn = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex h-11 w-12 cursor-pointer items-center justify-center rounded bg-[#FCD731]"
    onClick={()=>{
      dispatch(setDropZone());
    }}>
      <GrPowerReset className="h-7 w-7 text-black" 
      />
    </div>
  );
};

export default ResetBtn;
