import { configureStore } from '@reduxjs/toolkit'
import moviepixReducer from './moviepixSlice'

export const store = configureStore({
  reducer: {
    moviepixData: moviepixReducer
  },
})