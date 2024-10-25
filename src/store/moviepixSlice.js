import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: []
}

export const moviepixSlice = createSlice({
  name: 'moviepix',
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload
    }
  }

})

export const { setBannerData } = moviepixSlice.actions

export default moviepixSlice.reducer