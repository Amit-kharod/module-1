"use client";
import React from "react";
import Heading from "../Heading";
import GameMatrix from "./GameMatrix";

type Props = {};

const Output = (props: Props) => {
  return (
    <div className="flex h-full w-full flex-col bg-Erie-Black">
      <Heading
        headingName="Output"
        extraClass="flex items-center justify-center"
      />
      <GameMatrix/>
    </div>
  );
};

export default Output;
