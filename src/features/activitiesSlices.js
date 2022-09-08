import { createSlice } from "@reduxjs/toolkit";

export const activitiesSlice = createSlice({
  name: "activities",
  initialState: {
    activities: [],
  },
  reducers: {
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
  },
});

export const { setActivities } = activitiesSlice.actions;

export default activitiesSlice.reducer;
