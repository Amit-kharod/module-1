import { gameLevelsInterface } from "../reduxToolkit/slice/2dGameLevelSlice";

export const gameLevelsConfig : gameLevelsInterface[] = [
    {
      level: 1,
      activityTaskDescription : "Gizmo arrives at the compound and notices the drone hovering in the air, positioned a short distance away.",
      activityTaskDestination :"Assist Gizmo to reach the drone.",
      workSpaceBlock : ["up","up","up"],
      dogStartPosition:[4,3],
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