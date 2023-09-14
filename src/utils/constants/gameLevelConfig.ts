import { gameLevelsInterface } from "../reduxToolkit/slice/2dGameLevelInterface";
import houseGifImage from '@/assets/destinationgif/housegif.gif';
import traingif from '@/assets/destinationgif/traingif.gif';
import buildinggif from '@/assets/destinationgif/buildinggif.gif';
import craftgif from '@/assets/destinationgif/craftgif.gif';

export const gameLevelsConfig : gameLevelsInterface[] = [
  {
    level:1,
    activityTaskDescription:"For his first assignment Gizmo has to reach the train station. ",
    activityTaskDestination:"Guide Gizmo to reach his destination at the train station.",
    workSpaceBlock:3,
    dogStartPosition: [4,3],
    dogEndPosition:[4,6,houseGifImage]
  },
  {
    level: 2,
    activityTaskDescription : "Gizmo's next objective is to board the train headed to Tech Town. ",
    activityTaskDestination :"Provide assistance to Gizmo in successfully catching the train bound for Tech Town.",
    workSpaceBlock : 2,
    dogStartPosition:[4,3],
    dogEndPosition:[4,1,traingif]
  },
  {
    level: 3,
    activityTaskDescription : "Within the technologically advanced Tech Town, Gizmo's next task involves reaching the city square, a location abundant with various amenities. ",
    activityTaskDestination :"Offer guidance to Gizmo to help him navigate his route to the bustling city square.",
    workSpaceBlock : 3,
    dogStartPosition:[4,1],
    dogEndPosition:[2,2,buildinggif]
  },
  {
    level: 4,
    activityTaskDescription : "Adjacent to the city square lies the famous Astral Market, known for its comprehensive collection of cutting-edge technological gadgets. Gizmo's subsequent task involves reaching this market ",
    activityTaskDestination :" Assist Gizmo by providing a navigational path to reach the Astral Market.",
    workSpaceBlock : 6,
    dogStartPosition:[4,3],
    dogEndPosition:[1,6,buildinggif]
  },
  {
    level: 5,
    activityTaskDescription : " Gizmo's mission within the Astral Market is to collect LEDs and dispatch them to the smart parcel box, which holds the capability to teleport the LEDs directly to Rhea. ",
    activityTaskDestination :"Help Gizmo in efficiently gathering the high-quality LEDs and arranging for their transportation through teleportation service.",
    workSpaceBlock : 20,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,craftgif],
    obstaclePosition:[[1,2,"electric"],[2,4,"brick"],[3,1,"rain"],[4,4,"rain"],[6,3,"brick"],[6,5,"electric"]],
    batteryPosition:[[1,6,"red"],[5,6,"green"],[2,2,"yellow"]],
  },
  {
    level: 6,
    activityTaskDescription : "Gizmo's upcoming assignment entails a journey to the outskirts, where factories are producing batteries. However, the presence of malfunctioning high-energy equipment poses a significant hazard, with the risk of frequent explosions. ",
    activityTaskDestination :"Assist Gizmo in safely collecting the batteries and organizing their dispatch using intelligent parcel boxes. ",
    workSpaceBlock : 12,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,''],
    obstaclePosition:[[1,3,"bomb"],[1,4,"factory"],[2,6,"factory"],[3,5,"bomb"],[6,3,"brick"],[6,5,"electric"]],
    batteryPosition:[[1,6,"red"],[5,6,"green"],[2,2,"yellow"]],
  },
  {
    level: 7,
    activityTaskDescription : "This mission takes Gizmo to a specific area of the town characterised by unpredictable rain. It's essential to avoid the rain, as when the wires come into contact with water, they become useless.",
    activityTaskDestination :"Provide guidance to Gizmo to collect and dispatch the wires while skillfully avoiding the rain . ",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,''],
    obstaclePosition:[[1,6,"rain"],[2,6,"rain"],[3,2,"rain"],[3,3,"rain"],[3,4,"rain"],[3,6,"rain"],[5,1,"rain"],[6,1,"rain"],[6,5,"rain"],[6,6,"rain"]],
    batteryPosition:[[1,1,"rod"],[4,6,"rod"]],
  },
  {
    level: 8,
    activityTaskDescription : "Gizmo's next mission involves navigating water bodies to retrieve a switch. To facilitate this task, Gizmo needs to obtain a boat. Once equipped with a boat, Gizmo's objective is to collect the switch without causing any disruption to the marine life inhabiting the waters.",
    activityTaskDestination :"Help Gizmo to secure the switch and dispatch it.  ",
    workSpaceBlock : 10,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,''],
    obstaclePosition:[[1,2,"octopus"],[1,5,"fish"],[2,1,"fish"],[2,3,"fish"],[3,1,"octopus"],[3,6,"octopus"],[5,4,"ship"]],
    batteryPosition:[[2,4,"switch"]],
  },
  {
    level: 9,
    activityTaskDescription : "In the city of walls there are many mystery boxes. Each box contains a mystery component. However, hidden among them is a grave danger: an atomic bomb.",
    activityTaskDestination :"Assist Gizmo to carefully collect and dispatch all the components without activating the bomb.   ",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,''],
    obstaclePosition:[[1,2,"wall"],[2,2,"wall"],[3,2,"wall"],[2,4,"wall"],[2,5,"wall"],[2,6,"wall"],[5,2,"wall"],[5,3,"wall"],[5,4,"wall"],[5,6,"wall"],[6,4,"wall"],[1,4,"hiddenBox"],[3,6,"hiddenBox"]],
  },
  {
    level: 10,
    activityTaskDescription : "For his upcoming mission, Gizmo is tasked with gathering wooden structure pieces. These pieces are located within an area enclosed by barbed wires that are constantly charged with electric current. ",
    activityTaskDestination :"Assist Gizmo to skillfully collect and dispatch the wooden sheets while carefully avoiding contact with the electrified wires. ",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,''],
    obstaclePosition:[[1,6,"wire"],[2,3,"wire"],[2,6,"wire"],[3,4,"wire"],[4,5,"wire"],[5,1,"wire"],[6,1,"wire"]],
    batteryPosition:[[3,5,"wooden"]],
  },
  {
    level: 11,
    activityTaskDescription : "In this mission, Gizmo is required to navigate through a bustling factory where a variety of tools are being manufactured. His goal is to locate and retrieve a toolbox containing all the necessary tools. However, caution must be exercised to ensure that Gizmo does not disrupt the operation of the heavy machinery that is diligently producing these quality tools.",
    activityTaskDestination :"Help Gizmo to navigate through the factory environment to collect and dispatch the toolbox without causing any disruptions.",
    workSpaceBlock : 18,
    dogStartPosition:[4,3],
    dogEndPosition:[6,3,''],
    obstaclePosition:[[1,6,"wire"],[2,3,"wire"],[2,6,"wire"],[3,4,"wire"],[4,5,"wire"],[5,1,"wire"],[6,1,"wire"]],
    batteryPosition:[[3,5,"wooden"]],
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
export function checkBatteryPosition(row: number, col: number, filterBatteryPosition: [number, number, string][],gameLevel:number) {
  
  // Use reduce with an explicitly typed accumulator
  const newBatteryPosition: [number, number, string][] = filterBatteryPosition.reduce((accumulator, position) => {
    if (position[0] === row && position[1] === col) {
      // If it's a match, store it in matchingBattery
  
    const collectedBattery = gameLevelsConfig[gameLevel]?.collectedBattery;
    if (collectedBattery) {
      if(position[2] === "red")
        collectedBattery.red = (collectedBattery.red || 0) + 1;
      else if(position[2] === "yellow")
        collectedBattery.yellow = (collectedBattery.yellow || 0) + 1;
      else if(position[2] === "green")
        collectedBattery.green = (collectedBattery.green || 0) + 1;
      else if(position[2] === "battery")
        collectedBattery.battery = (collectedBattery.battery || 0) + 1;
      collectedBattery.totalCollect += 1;
    } 
    } else {
      // If it's not a match, add it to the accumulator
      accumulator.push(position);
    }
    return accumulator;
  }, [] as [number, number, string][]); // Initialize the accumulator with the correct type

  console.log("Matching Battery Position: ", gameLevelsConfig[gameLevel]?.collectedBattery);
  console.log("New Battery Position: ", newBatteryPosition);
  
  return newBatteryPosition;
}


