import { createSlice } from "@reduxjs/toolkit";

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
    },
    resetBatteryCollection:(state)=>{
      state.collectedBatteryNumber = 0;
    }
  },
});

export const {setBatteryCollection, resetBatteryCollection} = batteryCollectionSlice.actions;


export default batteryCollectionSlice;
