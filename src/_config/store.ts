import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { rowsApi } from "../data/RowsRepo";

export const cropsyStore = configureStore({
  reducer: { [rowsApi.reducerPath]: rowsApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      rowsApi.middleware
    ),
});

export type AppDispatch = typeof cropsyStore.dispatch;
export type RootState = ReturnType<typeof cropsyStore.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
