"use client";
import React from "react";
import Heading from "../Heading";
import DropZone from "./DropZone";
import PlayBtn from "./PlayBtn";
import ResetBtn from "./ResetBtn";
import { useAppSelector } from "@/utils/reduxToolkit/hook";
import { getAllBlocks } from "@/utils/reduxToolkit/slice/2dGameSlice";
import { getGameLevel } from "@/utils/reduxToolkit/slice/2dGameLevelSlice";
import DeleteBtn from "./DeleteBtn";

type Props = {};

const WorkSpace = (props: Props) => {
  const allBlocks = useAppSelector(getAllBlocks);
  const gameLevel = useAppSelector(getGameLevel);
  console.log("Game Level  - ",gameLevel);
  const blockIndex = useAppSelector((state)=>state.game.blockIndex);
  const blocks = useAppSelector((state)=>state.game.blocks);
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading
        headingName="Workspace"
        extraClass="flex items-center justify-center"
      />
      <div className="flex h-full w-full flex-col items-center justify-between bg-[#292F35] p-10 py-20">
        <p className="font-OpenSans text-sm font-light">
        Gizmo Will Move {blocks[blockIndex]?.direction}
        </p>
        <div className="grid grid-cols-6 grid-rows-3 gap-3">
          {allBlocks.map((block) => (
            <DropZone key={block.index} blockData={block} />
          ))}
        </div>
        <div className="flex">
          <div className="flex gap-5">
          <PlayBtn />
          <ResetBtn />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default WorkSpace;
