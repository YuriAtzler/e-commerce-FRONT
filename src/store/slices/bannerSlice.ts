import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BannerState {
  position: number;
}

const initialState = { position: 0 } as BannerState;

const bannerSlice = createSlice({
  name: "banner",
  initialState,
  reducers: {
    changeBannerAuto(state) {
      if (state.position + 1 > 3) state.position = 0;
      else state.position++;
    },
    changeBanner(state, action: PayloadAction<number>) {
      state.position = action.payload;
    },
  },
});

export const { changeBanner, changeBannerAuto } = bannerSlice.actions;
export default bannerSlice.reducer;
