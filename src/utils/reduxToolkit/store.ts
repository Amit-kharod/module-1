import { configureStore } from "@reduxjs/toolkit";
import gameSlice, { setDropZone } from "./slice/2dGameSlice";
import batteryCollectionSlice from "./slice/batteryCollectionSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    batteryCollection: batteryCollectionSlice.reducer
  },
});

store.dispatch(setDropZone());
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
