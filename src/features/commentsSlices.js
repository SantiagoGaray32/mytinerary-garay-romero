import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: {},
    dropdown: {},
  },
  reducers: {
    setComments: (state, action) => {
      const { itineraryId, comments } = action.payload;
      state.comments[itineraryId] = comments; //{idIt: 5, comments: []}
    },
    toggleDropdown: (state, action) => {
      //action.payload = id || state.dropdown[action.payload] = !state.dropdown[action.payload];
      const itineraryId = action.payload;
      state.dropdown[itineraryId] = !state.dropdown[itineraryId];
    },
    createDropdown: (state, action) => {
      //action.payload = id, false
      const itineraryId = action.payload;
      state.dropdown[itineraryId] = false;
    },
  },
});

export const { setComments, toggleDropdown, createDropdown } =
  commentsSlice.actions;

export default commentsSlice.reducer;
