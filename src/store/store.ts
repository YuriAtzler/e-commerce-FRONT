import { configureStore } from "@reduxjs/toolkit";

import bannerSlice from "./slices/bannerSlice";

export const store = configureStore({
  reducer: {
    banner: bannerSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
