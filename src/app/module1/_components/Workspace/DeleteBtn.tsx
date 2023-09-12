"use client"
import React from "react";
import dustbin from '../../../../assets/dustbin.svg';
import { useDrop } from "react-dnd";

type Props = {};

const DeleteBtn = (props: Props) => {
  const [{ isOver }, drop] = useDrop({
    accept: ["dustbin"],
    drop: ({ blockType }: any) => {
      console.log("BlockType: ", blockType);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return (
    <div className="h-12 w-12 p-2 border border border-[#9745F6] rounded-full bg-Erie-Black ml-28" ref={drop}>
      <img src={dustbin.src} alt="dustbin"/>
    </div>
  );
};

export default DeleteBtn;
