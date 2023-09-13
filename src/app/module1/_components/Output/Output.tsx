"use client";
import React, { Dispatch, SetStateAction } from "react";
import Heading from "../Heading";
import GameMatrix from "./GameMatrix";

type Props = {
  gameLevel:number,
};

const Output = ({gameLevel}: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading
        headingName="Output"
        extraClass="flex items-center justify-center"
      />
      <GameMatrix gameLevel={gameLevel}/>
    </div>
  );
};

export default Output;
