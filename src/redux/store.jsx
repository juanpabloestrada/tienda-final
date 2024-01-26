import { configureStore } from '@reduxjs/toolkit'
import bazarReducer from "./bazarSlice"

export default configureStore({
  reducer: {
    bazar: bazarReducer,
  }
})