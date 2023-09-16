import { useAppSelector } from "@/utils/reduxToolkit/hook";
import React, { useState } from "react";

type Props ={
  collectedCoins: number,
  totalBattery: number|undefined
}
const ProgressBarA = ({ collectedCoins, totalBattery }: Props) => {
    const progress = totalBattery?((collectedCoins / totalBattery) * 100):0; // Calculate the progress percentage
    console.log({collectedCoins,totalBattery,progress})
    return (
      <div className="h-5">
        <div className="relative w-full h-5 bg-purple-300 rounded-[5.01px] shadow border border-purple-600">
          <div
           style={{ width: `${progress}%` }}
            className={`h-full absolute bg-purple-600 rounded-[5.01px] shadow`}
          ></div>
        </div>
      </div>
    );
  };

type ProgressBarProps ={
  collectInventory:any|undefined;
  totalBattery:number|undefined;
}
const ProgessBar = ({collectInventory,totalBattery}:ProgressBarProps) => {
  const collectedCoins = useAppSelector((state)=>state.batteryCollection.collectedBatteryNumber);
  console.log("Progress -  ",collectedCoins,totalBattery)
  return (
    <div className="p-4">
      <ProgressBarA collectedCoins={collectedCoins} totalBattery={totalBattery} />
    </div>
  );
};

export default ProgessBar;
