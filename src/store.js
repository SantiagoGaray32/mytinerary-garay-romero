import { configureStore } from "@reduxjs/toolkit";
import citiesAPI from "./features/citiesAPI";
import { citiesSlice } from "./features/citiesSlices";
import { itinerariesSlice } from "./features/itinerariesSlices";
import { activitiesSlice } from "./features/activitiesSlices";
import { commentsSlice } from "./features/commentsSlices";
import { usersSlice } from "./features/usersSlices";

export default configureStore({
  reducer: {
    [citiesAPI.reducerPath]: citiesAPI.reducer, // ["pokemonApi"]: citiesAPI.reducer
    [citiesSlice.name]: citiesSlice.reducer,
    [itinerariesSlice.name]: itinerariesSlice.reducer,
    [activitiesSlice.name]: activitiesSlice.reducer, // ["activities"]: activitiesSlice.reducer
    [commentsSlice.name]: commentsSlice.reducer,
    [usersSlice.name]: usersSlice.reducer,
  },
  middleware: (getAllCities) =>
    getAllCities({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
