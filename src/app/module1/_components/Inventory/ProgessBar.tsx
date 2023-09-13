import { useAppSelector } from "@/utils/reduxToolkit/hook";
import { CollectBattery } from "@/utils/reduxToolkit/slice/2dGameLevelSlice";
import React, { useState } from "react";

type Props ={
  collectedCoins: number,
  totalBattery: number
}
const ProgressBarA = ({ collectedCoins, totalBattery }: Props) => {
    const progress = (collectedCoins / totalBattery) * 100; // Calculate the progress percentage
    console.log("Progress -   ",collectedCoins,totalBattery,progress);
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
  collectBattery:CollectBattery|undefined;
}
const ProgessBar = ({collectBattery}:ProgressBarProps) => {
  const collectedCoins = useAppSelector((state)=>state.batteryCollection.collectedBatteryNumber);
  const totalBattery = collectBattery?.totalBattery || 0; // Set your target number of coins
  return (
    <div className="p-4">
      <ProgressBarA collectedCoins={collectedCoins} totalBattery={totalBattery} />
    </div>
  );
};

export default ProgessBar;
