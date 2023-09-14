"use client";
import DndProviderContext from "@/utils/context/DndProviderContext";
import ActivityTask from "./_components/Activity Task/ActivityTask";
import Blocks from "./_components/Blocks/Blocks";
import NavbarMain from "./_components/Navbar/NavbarMain";
import WorkSpace from "./_components/Workspace/WorkSpace";
import Output from "./_components/Output/Output";
import Inventory from "./_components/Inventory/Inventory";
import { gameLevelsConfig } from "@/utils/constants/gameLevelConfig";
import { useAppSelector } from "@/utils/reduxToolkit/hook";
import { setDropZone } from "@/utils/reduxToolkit/slice/2dGameSlice";

export default function Module1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentGameLevel = useAppSelector((state)=>state.game.gameLevel);
  const {activityTaskDescription,activityTaskDestination,workSpaceBlock,collectedBattery} = gameLevelsConfig[currentGameLevel];
  return (
    <section className="h-screen w-screen bg-Erie-Black text-white overflow-x-none overflow-y-none">
      <NavbarMain />
      <div className="flex h-[90vh] w-full gap-[0.5%]">
        <DndProviderContext>
          <div className="flex w-[26.3%] flex-col border-r border-r-Lavender/30">
            <ActivityTask activityTaskDescription={activityTaskDescription} activityTaskDestination={activityTaskDestination}/>
            <Blocks />
          </div>
          <div className="flex w-[39.01%] flex-col">
            <WorkSpace/>
          </div>
          <div className="flex w-[33.95%] flex-col">
            <Output gameLevel={currentGameLevel}/>
            <Inventory collectBattery={collectedBattery}/>
          </div>
        </DndProviderContext>
      </div>
    </section>
  );
}
