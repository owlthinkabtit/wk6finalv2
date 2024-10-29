import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bannerData: [],
  imageURL: ""
}

export const moviepixSlice = createSlice({
  name: 'moviepix',
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload
    },
    setImageURL: (state, action) => {
      state.imageURL = action.payload
    }
  }

})

export const { setBannerData, setImageURL } = moviepixSlice.actions

export default moviepixSlice.reducer