import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { gameLevelsConfig } from "@/utils/constants/gameLevelConfig";

interface GameState {
  steps: number;
  lastIndex: number;
  blocks: { index: number; direction: string | null }[];
  play: boolean;
  blockIndex: number;
  gameLevel: number;
}

const initialState: GameState = {
  steps: 0,
  lastIndex: 0,
  blocks: [],
  play: false,
  blockIndex: -1,
  gameLevel: 0,
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
    resetGameLevel:(state)=>{
      state.blockIndex = -1;
      state.lastIndex = 0;
      state.steps = 0;
      state.play = false;
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
  },
});

export const {
  setBlocks,
  setPlayState,
  setBlockIndex,
  setGameLevel,
  resetGameLevel,
  setDropZone,
} = gameSlice.actions;

export const getGameLevel = (state: RootState) => state.game.gameLevel;
export const getAllBlocks = (state: RootState) => state.game.blocks;

export default gameSlice;
