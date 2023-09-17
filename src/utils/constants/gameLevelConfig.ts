import { gameLevelsInterface } from "../reduxToolkit/slice/2dGameLevelInterface";
import houseGifImage from '@/assets/destinationgif/housegif.gif';
import traingif from '@/assets/destinationgif/traingif.gif';
import buildinggif from '@/assets/destinationgif/buildinggif.gif';
import craftgif from '@/assets/destinationgif/craftgif.gif';
import cafegif from '@/assets/obstaclegif/cafegif.gif';
import bombgif from '@/assets/obstaclegif/bombgif.gif';
import pollutedfactorygif from '@/assets/destinationgif/pollutedfactorygif.gif';
import raingif from '@/assets/obstaclegif/raingif.gif';
import rod from '@/assets/rod.svg'
import octopusgif from '@/assets/obstaclegif/octopusgif.gif';
import fishgif from '@/assets/obstaclegif/fishgif.gif';
import shipgif from '@/assets/obstaclegif/shipgif.gif';
import switchgif from '@/assets/batterygif/switchgif.gif';
import redled from '@/assets/redLED.svg';
import yellowled from '@/assets/yellowLED.svg';
import greenled from '@/assets/greenLED.svg';
import brick from '@/assets/brick.svg';
import mystryboxgif from '@/assets/batterygif/mystryboxgif.gif';
import sparkgif from '@/assets/obstaclegif/sparkgif.gif';
import woodengif from '@/assets/obstaclegif/woodgif.gif';
import carpentrygif from '@/assets/batterygif/carpentrygif.gif';
import bottlemachinerygif from '@/assets/obstaclegif/bottlemachinerygif.gif';
import chakrigif from '@/assets/obstaclegif/chakrigif.gif';
import mapgif from '@/assets/destinationgif/mapgif.gif';
import ilandgif from '@/assets/obstaclegif/ilandgif.gif';
import treegif from '@/assets/obstaclegif/treegif.gif';
import runwaygif from '@/assets/destinationgif/rynwaygif.gif';
import dronegif from '@/assets/destinationgif/dronegif.gif';
import aeroplanegif from '@/assets/obstaclegif/aeroplanegif.gif';
import mirrorhousegif from '@/assets/obstaclegif/mirrorhousegif.gif';
import { setCollectInventory } from "../reduxToolkit/slice/2dGameSlice";
import { Dispatch } from "react";
import { AnyAction } from "@reduxjs/toolkit";

export const gameLevelsConfig : gameLevelsInterface[] = [
  {
    level:1,
    activityTaskDescription:"For his first assignment Gizmo has to reach the train station. ",
    activityTaskDestination:"Guide Gizmo to reach his destination at the train station.",
    workSpaceBlock:18,
    dogStartPosition: [4,3],
    dogEndPosition:[4,6,houseGifImage],
    winStar:[{steps:3,battery:0,star:3},{steps:6,battery:0,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 2,
    activityTaskDescription : "Gizmo's next objective is to board the train headed to Tech Town. ",
    activityTaskDestination :"Provide assistance to Gizmo in successfully catching the train bound for Tech Town.",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[4,1,traingif],
    winStar:[{steps:2,battery:0,star:3},{steps:4,battery:0,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 3,
    activityTaskDescription : "Within the technologically advanced Tech Town, Gizmo's next task involves reaching the city square, a location abundant with various amenities. ",
    activityTaskDestination :"Offer guidance to Gizmo to help him navigate his route to the bustling city square.",
    workSpaceBlock : 18,
    dogStartPosition:[4,1],
    dogEndPosition:[2,2,buildinggif],
    winStar:[{steps:3,battery:0,star:3},{steps:5,battery:0,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 4,
    activityTaskDescription : "Adjacent to the city square lies the famous Astral Market, known for its comprehensive collection of cutting-edge technological gadgets. Gizmo's subsequent task involves reaching this market ",
    activityTaskDestination :" Assist Gizmo by providing a navigational path to reach the Astral Market.",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[1,6,buildinggif],
    winStar:[{steps:6,battery:0,star:3},{steps:9,battery:0,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 5,
    activityTaskDescription : " Gizmo's mission within the Astral Market is to collect LEDs and dispatch them to the smart parcel box, which holds the capability to teleport the LEDs directly to Rhea. ",
    activityTaskDestination :"Help Gizmo in efficiently gathering the high-quality LEDs and arranging for their transportation through teleportation service.",
    workSpaceBlock : 20,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],
    obstaclePosition:[[1,2,cafegif],[2,4,cafegif],[3,1,cafegif],[4,4,cafegif],[6,5,cafegif],[6,6,cafegif]],
    batteryPosition:[[1,6,redled],[5,6,greenled],[2,2,yellowled]],
    totalBattery:3,
    winStar:[{steps:20,battery:3,star:3},{steps:20,battery:2,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 6,
    activityTaskDescription : "Gizmo's upcoming assignment entails a journey to the outskirts, where factories are producing batteries. However, the presence of malfunctioning high-energy equipment poses a significant hazard, with the risk of frequent explosions. ",
    activityTaskDestination :"Assist Gizmo in safely collecting the batteries and organizing their dispatch using intelligent parcel boxes. ",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],    
    obstaclePosition:[[1,3,bombgif],[3,5,bombgif],[4,2,bombgif],[6,6,bombgif]],
    batteryPosition:[[1,4,pollutedfactorygif],[2,6,pollutedfactorygif],[3,6,pollutedfactorygif],[4,1,pollutedfactorygif],[6,5,pollutedfactorygif]],
    totalBattery:5,
    winStar:[{steps:12,battery:5,star:3},{steps:15,battery:5,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 7,
    activityTaskDescription : "This mission takes Gizmo to a specific area of the town characterised by unpredictable rain. It's essential to avoid the rain, as when the wires come into contact with water, they become useless.",
    activityTaskDestination :"Provide guidance to Gizmo to collect and dispatch the wires while skillfully avoiding the rain . ",
    workSpaceBlock : 20,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],
    obstaclePosition:[[1,6,raingif],[2,6,raingif],[3,2,raingif],[3,3,raingif],[3,4,raingif],[3,6,raingif],[5,1,raingif],[6,1,raingif],[6,5,raingif],[6,6,raingif]],
    batteryPosition:[[1,1,rod],[4,6,rod]],
    totalBattery:2,
    winStar:[{steps:18,battery:2,star:3},{steps:18,battery:1,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 8,
    activityTaskDescription : "Gizmo's next mission involves navigating water bodies to retrieve a switch. To facilitate this task, Gizmo needs to obtain a boat. Once equipped with a boat, Gizmo's objective is to collect the switch without causing any disruption to the marine life inhabiting the waters.",
    activityTaskDestination :"Help Gizmo to secure the switch and dispatch it.  ",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],
    obstaclePosition:[[1,2,octopusgif],[1,5,fishgif],[2,1,fishgif],[2,3,fishgif],[3,1,octopusgif],[3,6,octopusgif],[5,4,shipgif]],
    batteryPosition:[[2,4,switchgif]],
    totalBattery:1,
    winStar:[{steps:10,battery:1,star:3},{steps:15,battery:1,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 9,
    activityTaskDescription : "In the city of walls there are many mystery boxes. Each box contains a mystery component. However, hidden among them is a grave danger: an atomic bomb.",
    activityTaskDestination :"Assist Gizmo to carefully collect and dispatch all the components without activating the bomb.   ",
    workSpaceBlock : 20,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],
    obstaclePosition:[[1,2,brick],[2,2,brick],[3,2,brick],[2,4,brick],[2,5,brick],[2,6,brick],[5,2,brick],[5,3,brick],[5,4,brick],[5,6,brick],[6,4,brick]],
    batteryPosition:[[1,3,mystryboxgif],[3,6,mystryboxgif],[6,1,mystryboxgif]],
    totalBattery:3,
    winStar:[{steps:12,battery:3,star:3},{steps:20,battery:2,star:2},{steps:1000,battery:1,star:1}]
  },
  {
    level: 10,
    activityTaskDescription : "For his upcoming mission, Gizmo is tasked with gathering wooden structure pieces. These pieces are located within an area enclosed by barbed wires that are constantly charged with electric current. ",
    activityTaskDestination :"Assist Gizmo to skillfully collect and dispatch the wooden sheets while carefully avoiding contact with the electrified wires. ",
    workSpaceBlock : 20,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],
    obstaclePosition:[[1,6,sparkgif],[2,3,sparkgif],[2,6,sparkgif],[3,4,sparkgif],[4,5,sparkgif],[5,1,sparkgif],[6,1,sparkgif]],
    batteryPosition:[[3,5,woodengif]],
    totalBattery:1,
    winStar:[{steps:16,battery:1,star:3},{steps:20,battery:1,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 11,
    activityTaskDescription : "In this mission, Gizmo is required to navigate through a bustling factory where a variety of tools are being manufactured. His goal is to locate and retrieve a toolbox containing all the necessary tools. However, caution must be exercised to ensure that Gizmo does not disrupt the operation of the heavy machinery that is diligently producing these quality tools.",
    activityTaskDestination :"Help Gizmo to navigate through the factory environment to collect and dispatch the toolbox without causing any disruptions.",
    workSpaceBlock : 20,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],
    obstaclePosition:[[1,4,bottlemachinerygif],[1,6,bottlemachinerygif],[2,2,bottlemachinerygif],[2,3,bottlemachinerygif],[2,6,bottlemachinerygif],[3,1,bottlemachinerygif],[4,2,bottlemachinerygif],[4,5,bottlemachinerygif]],
    batteryPosition:[[3,4,carpentrygif]],
    totalBattery:1,
    winStar:[{steps:18,battery:1,star:3},{steps:20,battery:1,star:2},{steps:1000,battery:0,star:1}]
  },
  {
    level: 12,
    activityTaskDescription : "Having successfully gathered all the components, Gizmo's next step is to return to Rhea. However, he finds himself lost in the town due to the numerous adventures he embarked upon. Fortunately, there's a map of the town available in a nearby shop. But the landscape around is filled with quicksand and the shops are about to close. ",
    activityTaskDestination :"Guide Gizmo through the shortest route, ensuring he reaches the shops before they close.",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[1,6,mapgif],
    obstaclePosition:[[1,1,chakrigif],[1,2,chakrigif],[1,5,chakrigif],[3,5,chakrigif],[4,1,chakrigif],[4,4,chakrigif],[6,3,chakrigif],[6,6,chakrigif]],
    winStar:[{steps:6,battery:0,star:3},{steps:9,battery:0,star:2},{steps:12,battery:0,star:1}]
  },
  {
    level: 13,
    activityTaskDescription : "Gizmo scans the map and realises that he needs to cross the river by boat and subsequently catch a train to meet Rhea. As it is starting to get dark,the last boat will soon depart.     ",
    activityTaskDestination :"Guide Gizmo to take the shortest possible route to reach the boat.",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[1,2,shipgif],
    obstaclePosition:[[1,4,ilandgif],[1,5,ilandgif],[2,1,ilandgif],[2,2,ilandgif],[4,5,ilandgif],[4,6,ilandgif],[5,1,ilandgif],[5,2,ilandgif]],
    winStar:[{steps:4,battery:0,star:3},{steps:7,battery:0,star:2},{steps:10,battery:0,star:1}]
  },
  {
    level: 14,
    activityTaskDescription : "Gizmo makes his way to the train station, only to discover that he's missed the last train of the day. Gizmo reaches out to Rhea, conveying his inability to return without assistance. Rhea then plans to deploy a drone that will transport Gizmo back to her location. However, for this plan to work, Gizmo must relocate himself into a nearby runway.",
    activityTaskDestination :"Leading Gizmo to the designated runway so that he can be transported back to Rhea using the drone.",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[6,6,runwaygif],
    obstaclePosition:[[1,6,treegif],[2,2,shipgif],[2,6,ilandgif],[4,4,traingif]],
    winStar:[{steps:5,battery:0,star:3},{steps:8,battery:0,star:2},{steps:10,battery:0,star:1}]
  },
  {
    level: 15,
    activityTaskDescription : "Gizmo arrives at the compound and notices the drone hovering in the air, positioned a short distance away. ",
    activityTaskDestination :"Assist Gizmo to reach the drone.",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[2,5,dronegif],
    obstaclePosition:[[1,2,aeroplanegif],[2,4,aeroplanegif],[3,1,aeroplanegif],[3,4,aeroplanegif],[6,3,aeroplanegif],[6,5,aeroplanegif],[6,1,mirrorhousegif]],
    winStar:[{steps:4,battery:0,star:3},{steps:7,battery:0,star:2},{steps:10,battery:0,star:1}]
  },
]


export function checkObstaclePosition(row:number,col:number,obstaclePosition:[number,number,string][]|undefined):boolean
{
  if(obstaclePosition)
  {
    return obstaclePosition.some((position) => position[0] === row && position[1] === col);
  }
  return false;
}
export function checkBatteryPosition(row: number, col: number, filterBatteryPosition: [number, number, string][],dispatch: Dispatch<AnyAction>) {
  
  // Use reduce with an explicitly typed accumulator
  const newBatteryPosition: [number, number, string][] = filterBatteryPosition.reduce((accumulator, position) => {
    if (position[0] === row && position[1] === col) {
      // If it's a match, store it in matchingBattery
      dispatch(setCollectInventory({info:"",image:position[2]}));
    } else {
      // If it's not a match, add it to the accumulator
      accumulator.push(position);
    }
    return accumulator;
  }, [] as [number, number, string][]); // Initialize the accumulator with the correct type

  console.log("New Battery Position: ", newBatteryPosition);
  
  return newBatteryPosition;
}


