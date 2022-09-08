import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    comments: [],
    dropdown: true,
  },
  reducers: {
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    setDropdown: (state, action) => {
      state.dropdown = action.payload;
    },
  },
});

export const { setComments, setDropdown } = commentsSlice.actions;

export default commentsSlice.reducer;
