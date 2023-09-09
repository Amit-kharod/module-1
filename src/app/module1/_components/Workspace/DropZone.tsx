"use client";
import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import { PiArrowLeftFill as LeftArrow } from "react-icons/pi";
import {
  DroppableDownBlock,
  DroppableLeftBlock,
  DroppableRightBlock,
  DroppableUpBlock,
} from "../Blocks/DroppableBlocks";
import { RxCross2 as CrossIcon } from "react-icons/rx";
import { useAppDispatch, useAppSelector } from "@/utils/reduxToolkit/hook";
import { setBlocks } from "@/utils/reduxToolkit/slice/2dGameSlice";

type Props = {
  blockData: {
    index: number;
    direction: string | null;
  };
};

const DropZone = ({ blockData }: Props) => {
  const dispatch = useAppDispatch();
  const blockIndex = useAppSelector((state)=>state.game.blockIndex);
  const [block, setBlock] = useState<string | null>(null);
  const [{ isOver }, drop] = useDrop({
    accept: ["card","dustbin"],
    drop: ({ blockType }: any) => {
      dispatch(setBlocks({ index: blockData.index, direction: blockType }));
      console.log("BlockType: ", blockType);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  let content;
  if (block === "up") {
    content = <DroppableUpBlock />;
  } else if (block === "down") {
    content = <DroppableDownBlock />;
  } else if (block === "left") {
    content = <DroppableLeftBlock />;
  } else if (block === "right") {
    content = <DroppableRightBlock />;
  } else {
    content = <LeftArrow className="h-7 w-7" />;
  }

  useEffect(() => {
    setBlock(blockData.direction);
  }, [blockData.direction]);
  console.log("BlockIndex - ",blockIndex);
  return (
    <div
      className={`${(blockIndex===blockData.index)?'border-2 border-t-[3px] border-b-[3px] border-red-500':'border border-[#17FB99]'} relative flex h-11 w-11 items-center justify-center rounded 
      bg-white/25`}
      ref={drop}
    >
      {/*{block && (
        <CrossIcon
          className="absolute -right-2 -top-2 cursor-pointer rounded-full bg-red-500 text-xs hover:scale-125"
          onClick={() => setBlock("")}
        />
      )}*/}
      {content}
    </div>
  );
};

export default DropZone;
