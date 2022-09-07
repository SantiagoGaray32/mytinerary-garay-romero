import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./features/citiesAPI";
import { citiesSlice } from "./features/citiesSlices";

export default configureStore({
  reducer: {
    [citiesAPI.reducerPath]: citiesAPI.reducer, // ["pokemonApi"]: citiesAPI.reducer
    [citiesSlice.name]: citiesSlice.reducer,
  },
  middleware: (getAllCities) =>
    getAllCities({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
