import React from "react";
import Heading from "../Heading";
import { CollectBattery } from "@/utils/reduxToolkit/slice/2dGameLevelSlice";
import RectangleBg from '@/assets/reactangleBg.png';
import redled from '@/assets/redLED.svg';
import yellowled from '@/assets/yellowLED.svg';
import greenled from '@/assets/greenLED.svg';
import ProgessBar from "./ProgessBar";

type Props = {
  collectBattery: CollectBattery | undefined;
};

const Inventory = ({ collectBattery }: Props) => {
  return (
    <div className="flex flex-col h-full w-full bg-Erie-Black overflow-x-hidden overflow-y-hidden">
      <Heading
        headingName="Inventory"
        extraClass="flex items-center justify-center"
      />
      <div className="mt-5 mx-auto overflow-y-auto w-[90%] h-60 bg-gradient-to-b from-slate-900 to-stone-950 shadow border border-black">
      <ProgessBar collectBattery={collectBattery}/>
      
       
      <div className="flex flex-wrap  items-center justify-center pt-2">
        {collectBattery && collectBattery.red && <div className="relative">
          <img src={RectangleBg.src} alt="Rectangle Background" className="relative" />
          <img src={redled.src} alt="Red LED" className="absolute inset-0 m-auto" />
          <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs font-normal font-['Inter'] ">Red led</h1>
        </div>}
        {collectBattery && collectBattery.yellow && <div className="relative">
          <img src={RectangleBg.src} alt="Rectangle Background" className="relative" />
          <img src={yellowled.src} alt="Yellow LED" className="absolute inset-0 m-auto" />
          <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs font-normal font-['Inter'] ">Yellow led</h1>
        </div>}
        {collectBattery && collectBattery.green && <div className="relative">
          <img src={RectangleBg.src} alt="Rectangle Background" className="relative" />
          <img src={greenled.src} alt="green LED" className="absolute inset-0 m-auto" />
          <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs font-normal font-['Inter'] ">Green led</h1>
        </div>}
        {collectBattery && collectBattery.battery && <div className="relative">
          <img src={RectangleBg.src} alt="Rectangle Background" className="relative" />
          <img src={redled.src} alt="Red LED" className="absolute inset-0 m-auto" />
          <h1 className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-xs font-normal font-['Inter'] ">Battery</h1>
        </div>}
      </div>
      </div>
    </div>
  );
};

export default Inventory;