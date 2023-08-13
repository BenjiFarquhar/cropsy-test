import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

export const cropsyStore = configureStore({
  reducer: {},
});

export type AppDispatch = typeof cropsyStore.dispatch;
export type RootState = ReturnType<typeof cropsyStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
