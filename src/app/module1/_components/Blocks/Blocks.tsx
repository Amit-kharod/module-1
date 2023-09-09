import React from "react";
import Heading from "../Heading";
import {
  DroppableDownBlock,
  DroppableLeftBlock,
  DroppableRightBlock,
  DroppableUpBlock,
} from "./DroppableBlocks";

type Props = {};

const Blocks = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading headingName="Blocks" icon="BsTerminal" extraClass="px-8" />
      <div className=" -mt-5 flex h-full w-full items-center justify-center">
        <div className="flex gap-2.5">
          {/* These are Blocks part block, which can be drag and drop to empty box. */}
          <DroppableLeftBlock />
          <DroppableUpBlock />
          <DroppableDownBlock />
          <DroppableRightBlock />
        </div>
      </div>
    </div>
  );
};

export default Blocks;
