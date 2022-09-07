import { createSlice } from "@reduxjs/toolkit";

export const itinerariesSlice = createSlice({
  name: "itinerary",
  initialState: {
    itineraries: [],
    nameFilter: "",
    isLoading: false,
    hasErrors: false,
  },
  reducers: {
    setItineraries: (state, action) => {
      state.itineraries = action.payload;
      state.isLoading = false;
    },
    setNameFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
  },
});
export const { setItineraries, setNameFilter } = itinerariesSlice.actions;

export default itinerariesSlice.reducer;
