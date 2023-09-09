import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface gameLevelsInterface {
    level: number,
    activityTaskDescription : string,
    activityTaskDestination : string,
    workSpaceBlock : string[]
}

const gameLevelSlice = createSlice({
    name: "gameLevel",
    initialState : {gameLevel:1},
    reducers: {
        setGameLevel: (state)=>{
            state.gameLevel = state.gameLevel+1
        }
    }
});

export const {setGameLevel} = gameLevelSlice.actions;
export const getGameLevel = (state: RootState) => state.gameLevel.gameLevel;
export default gameLevelSlice;


