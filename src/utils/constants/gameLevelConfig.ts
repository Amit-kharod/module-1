import { gameLevelsInterface } from "../reduxToolkit/slice/2dGameLevelSlice";

export const gameLevelsConfig : gameLevelsInterface[] = [
  {
    level: 1,
    activityTaskDescription : "Gizmo arrives at the compound and notices the drone hovering in the air, positioned a short distance away.",
    activityTaskDestination :"Assist Gizmo to reach the drone.",
    workSpaceBlock : ["up","up","up"],
    dogStartPosition:[4,3],
    obstaclePosition:[[1,2,"electric"],[2,4,"brick"],[3,1,"rain"],[4,4,"rain"],[6,3,"brick"],[6,5,"electric"]],
    batteryPosition:[[6,1,"red"],[4,1,"green"],[4,6,"yellow"]],
    collectedBattery:
      {
        red:1,
        yellow: 1,
        green:0,
        battery: 0,
        totalCollect:0,
        totalBattery:3
      }
  },
  {
    level: 2,
    activityTaskDescription : "Gizmo's next objective is to board the train headed to Tech Town.",
    activityTaskDestination :"Provide assistance to Gizmo in successfully catching the train bound for Tech Town.",
    workSpaceBlock : ["left","up"],
    dogStartPosition:[4,3],
  },
  {
    level: 3,
    activityTaskDescription : "Within the technologically advanced Tech Town, Gizmo's next task involves reaching the city square, a location abundant with various amenities.",
    activityTaskDestination :" Offer guidance to Gizmo to help him navigate his route to the bustling city square.",
    workSpaceBlock : ["left","up","right"],
    dogStartPosition:[4,3],
  },
  {
    level: 4,
    activityTaskDescription : "Gizmo arrives at the compound and notices the drone hovering in the air, positioned a short distance away.",
    activityTaskDestination :"Assist Gizmo to reach the drone.",
    workSpaceBlock : ["left","up","up","up","up","right"],
    dogStartPosition:[4,3],
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
// export function checkBatteryPosition(row:number,col:number,filterBatteryPosition:[number,number,string][])
// {
//   const newBatteryPosition = filterBatteryPosition.filter((position) => !(position[0] === row && position[1] === col));
//  console.log("NewBatteryPosition:  ",newBatteryPosition);
//   return newBatteryPosition;
// }
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


