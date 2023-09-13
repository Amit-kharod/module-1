import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
export interface CollectBattery {
    red: number,
    yellow: number,
    green: number,
    battery: number,
    totalCollect:number,
    totalBattery:number,
};
export interface gameLevelsInterface {
    level: number,
    activityTaskDescription : string,
    activityTaskDestination : string,
    workSpaceBlock : string[],
    dogStartPosition: [number,number],
    batteryPosition?:[number,number,string][],
    obstaclePosition?:[number,number,string][],
    obstacleImage?: string,
    batteryImage?:string[],
    collectedBattery?:CollectBattery
}

const gameLevelSlice = createSlice({
    name: "gameLevel",
    initialState : {gameLevel:0},
    reducers: {
        setGameLevel: (state)=>{
            state.gameLevel = state.gameLevel+1
        },
    }
});

export const {setGameLevel} = gameLevelSlice.actions;
export const getGameLevel = (state: RootState) => state.gameLevel.gameLevel;
export default gameLevelSlice;


