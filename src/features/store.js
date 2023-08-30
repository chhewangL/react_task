import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./MovieAPI";



export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),

})