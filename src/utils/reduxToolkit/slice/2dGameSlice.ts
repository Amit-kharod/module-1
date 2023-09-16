import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { gameLevelsConfig } from "@/utils/constants/gameLevelConfig";

interface GameState {
  steps: number;
  lastIndex: number;
  blocks: { index: number; direction: string | null }[];
  collectedInventory:{info:string; image:any}[];
  play: boolean;
  blockIndex: number;
  gameLevel: number;
  result:string;
}

const initialState: GameState = {
  steps: 0,
  lastIndex: 0,
  blocks: [],
  collectedInventory:[],
  play: false,
  blockIndex: -1,
  gameLevel: 8,
  result:"pending",
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setBlocks: (
      state,
      action: PayloadAction<{
        index: number;
        direction: string;
      }>,
    ) => {
      const { index, direction } = action.payload;
      console.log(index, direction);
      // If already filled box then updation of direction.
      if (index < state.lastIndex) {
        state.blocks[index].direction = direction;
      } else {
        state.blocks[state.lastIndex++].direction = direction;
      }
    },

    setPlayState: (state, action: PayloadAction<{
      playState: boolean;
    }>) => {
      const { playState } = action.payload;
      state.play = playState;
    },

    setBlockIndex: (state) => {
      state.blockIndex = state.blockIndex + 1;
    },

    setGameLevel: (state) => {
      state.gameLevel = state.gameLevel + 1;
    },
    setGivenGameLevel:(state,action: PayloadAction<{
      gameLevel:number}>)=>{
        const {gameLevel} = action.payload;
        state.gameLevel = gameLevel;
    },
    resetGameLevel:(state)=>{
      state.blockIndex = -1;
      state.lastIndex = 0;
      state.steps = 0;
      state.play = false;
      state.collectedInventory = [];
      state.result = "pending";
      state.collectedInventory = []
    },

    setDropZone: (state) => {
      const currentGameLevel = state.gameLevel;
      const workspaceSize =
        currentGameLevel >= 0 && currentGameLevel < gameLevelsConfig.length
          ? gameLevelsConfig[currentGameLevel].workSpaceBlock
          : 0; // Default to 0 if game level is out of range

      // Create a new state object with the updated blocks array.
      return {
        ...state,
        blocks: Array.from({ length: workspaceSize }, (_, index) => ({
          index,
          direction: null,
        })),
      };
    },

    setCollectInventory: (state,action: PayloadAction<{
      info: string,
      image:any}>)=>{
        const {info,image} = action.payload;
        state.collectedInventory.push({info,image});
    },

    setGameResult: (state,action: PayloadAction<{
      result:string}>)=>{
        const {result} = action.payload;
        state.result = result;
      }
  },
});

export const {
  setBlocks,
  setPlayState,
  setBlockIndex,
  setGameLevel,
  resetGameLevel,
  setDropZone,
  setCollectInventory,
  setGameResult,
  setGivenGameLevel
} = gameSlice.actions;

export const getGameLevel = (state: RootState) => state.game.gameLevel;
export const getAllBlocks = (state: RootState) => state.game.blocks;

export default gameSlice;
