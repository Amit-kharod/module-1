import { configureStore } from "@reduxjs/toolkit";
import gameSlice from "./slice/2dGameSlice";
import gameLevelSlice from "./slice/2dGameLevelSlice";

export const store = configureStore({
  reducer: {
    game: gameSlice.reducer,
    gameLevel: gameLevelSlice.reducer
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
