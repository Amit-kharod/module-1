import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface batteryCollectState {
  collectedBatteryNumber :number
}
const initialState: batteryCollectState = {
  collectedBatteryNumber:0
};

const batteryCollectionSlice = createSlice({
  name: "batteryCollection",
  initialState,
  reducers: {
    setBatteryCollection:(state)=>{
      state.collectedBatteryNumber = state.collectedBatteryNumber+1;
    }
  },
});

export const {setBatteryCollection } = batteryCollectionSlice.actions;


export default batteryCollectionSlice;
