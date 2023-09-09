import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface GameState {
  steps: number;
  lastIndex: number;
  blocks: { index: number; direction: string | null }[];
}

const initialState: GameState = {
  steps: 0,
  lastIndex : 0,
  // make an array of 18 elements, each element is an object with index and direction properties with
  // index from 0 to 17 and direction set to null
  blocks: Array.from({ length: 18 }, (_, index) => ({
    index: index,
    direction: null,
  })),
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
      //If already filled box then updation of direction.
      if(index < state.lastIndex){
        state.blocks[index].direction = direction;
      }
      else{
        state.blocks[state.lastIndex++].direction = direction;
      }
      console.log("Array - ",state.blocks);
    },
  },
});

export const { setBlocks } = gameSlice.actions;

export const getAllBlocks = (state: RootState) => state.game.blocks;

export default gameSlice;
