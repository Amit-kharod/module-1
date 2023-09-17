"use client";
import SceneTour from "./component/SceneTour";
import { useState,Suspense } from "react";
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
