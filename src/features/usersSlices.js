import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  user: {},
  itineraries: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState: userInitialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setItineraries: (state, action) => {
      state.itineraries = action.payload;
    },
    signOut: () => userInitialState,
  },
});

export const { setUser, setItineraries, signOut } = usersSlice.actions;

export default usersSlice.reducer;