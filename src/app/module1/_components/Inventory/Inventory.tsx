import React, { useEffect, useState } from "react";
import Heading from "../Heading";
import { CollectBattery } from "@/utils/reduxToolkit/slice/2dGameLevelInterface";
import RectangleBg from '@/assets/reactangleBg.png';
import ProgessBar from "./ProgessBar";
import { useAppSelector } from "@/utils/reduxToolkit/hook";

type Props = {
  collectBattery: CollectBattery | undefined;
};

const Inventory = ({ collectBattery }: Props) => {
  //Collected inventory
  const collectInventory = useAppSelector((state)=>state.game.collectedInventory);
  return (
    <div className="flex flex-col h-full w-full bg-Erie-Black overflow-x-hidden overflow-y-hidden">
      <Heading
        headingName="Inventory"
        extraClass="flex items-center justify-center"
      />
      <div className="mt-5 mx-auto overflow-y-auto w-[90%] h-60 bg-gradient-to-b from-slate-900 to-stone-950 shadow border border-black">
      <ProgessBar collectBattery={collectBattery}/>
      
       
      <div className="flex flex-wrap pt-2 px-4">
        {collectInventory && collectInventory.length>0 && <div className="relative flex flex-wrap">
          {collectInventory.map((image,ind)=>{
            console.log("image ",image);
            return (
              <div key={ind} className="h-20 w-20 relative mx-2">
                <div className="relative">
                  <img src={RectangleBg.src} alt="Rectangle Background" />
                  <img
                    src={image.image.src}
                    alt="Red LED"
                    className="absolute inset-0 m-auto"
                  />
                </div>
                <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs font-normal font-['Inter'] ">{image.info}</h1>
              </div>
            );
            
})}
        </div>}
      </div>
      </div>
    </div>
  );
};

export default Inventory;