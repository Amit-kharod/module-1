"use client";
import DndProviderContext from "@/utils/context/DndProviderContext";
import { gameLevelsConfig } from "@/utils/constants/gameLevelConfig";
import { useAppSelector } from "@/utils/reduxToolkit/hook";
import SceneTour from "./component/SceneTour";
import { useState } from "react";
import { tourConfig } from "@/utils/tourConstant/tourCons";
import ConversationTour from "./component/ConversationTour";

export default function ResultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tourPart , setTourPart] = useState(1);
  return (
    <section className="h-screen w-screen">
     {(tourPart <= 3 ) && <SceneTour tourPart={tourPart} setTourPart ={setTourPart}/>}
     {(tourPart === 4) && <ConversationTour/>}
    </section>
  );
}
