"use client";
import React from "react";
import { useDrag } from "react-dnd";
import { PiArrowDownFill as DownArrow } from "react-icons/pi";
import { PiArrowUpFill as UpArrow } from "react-icons/pi";
import { PiArrowLeftFill as LeftArrow } from "react-icons/pi";
import { PiArrowRightFill as RightArrow } from "react-icons/pi";
import { useAppDispatch } from "@/utils/reduxToolkit/hook";
import { setBlocks } from "@/utils/reduxToolkit/slice/2dGameSlice";

type Props = {};

export const DroppableUpBlock = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { blockType: "up" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useAppDispatch();

  return (
    <button
      className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black"
      ref={drag}
      onClick={()=>dispatch(setBlocks({ index: 1000, direction: "up" }))}
    >
      <UpArrow className="h-7 w-7" />
    </button>
  );
};

export const DroppableDownBlock = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { blockType: "down" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black"
      ref={drag}
      onClick={()=>dispatch(setBlocks({ index: 1000, direction: "down" }))}
    >
      <DownArrow className="h-7 w-7" />
    </button>
  );
};

export const DroppableLeftBlock = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { blockType: "left" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black"
      ref={drag}
      onClick={()=>dispatch(setBlocks({ index: 1000, direction: "left" }))}
    >
      <LeftArrow className="h-7 w-7" />
    </button>
  );
};

export const DroppableRightBlock = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "card",
    item: { blockType: "right" },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));
  const dispatch = useAppDispatch();
  return (
    <button
      className="flex h-11 w-11 items-center justify-center rounded bg-Spiro-Disco text-black"
      ref={drag}
      onClick={()=>dispatch(setBlocks({ index: 1000, direction: "right" }))}
    >
      <RightArrow className="h-7 w-7" />
    </button>
  );
};
