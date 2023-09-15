"use client"
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { useAppSelector,useAppDispatch } from '@/utils/reduxToolkit/hook';
import {setPlayState} from '@/utils/reduxToolkit/slice/2dGameSlice';

type Props = {};

const PlayBtn = (props: Props) => {
  const isGamePlay = useAppSelector((state) => state.game.play);
  const dispatch = useAppDispatch();

  return (
    <div className="flex h-11 w-32 cursor-pointer items-center justify-center rounded bg-[#17FB99]"  onClick={()=>{
      !isGamePlay && dispatch(setPlayState({playState: true}));
    }} >
      <div className="flex items-center gap-1 text-black">
        <BsFillPlayFill className="h-7 w-7" />
        <span className=" text-lg font-bold"
        >Play</span>
      </div>
    </div>
  );
};

export default PlayBtn;
