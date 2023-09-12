"use client";
import DndProviderContext from "@/utils/context/DndProviderContext";
import { gameLevelsConfig } from "@/utils/constants/gameLevelConfig";
import { useAppSelector } from "@/utils/reduxToolkit/hook";

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentGameLevel = useAppSelector((state)=>state.gameLevel.gameLevel);
  const {activityTaskDescription,activityTaskDestination,workSpaceBlock} = gameLevelsConfig[currentGameLevel];
  return (
    <section className="h-screen w-screen bg-Erie-Black text-white">
     <h1>Result</h1>
    </section>
  );
}
