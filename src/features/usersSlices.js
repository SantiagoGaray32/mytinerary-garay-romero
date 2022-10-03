import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  user: {},
  itineraries: [],
  isLoading: false,
  hasErrors: false,
  newUserFormData:{
     name:"",
     lastName:"", 
     email:"", 
     password:"", 
     photo:"", 
     country:"", 
  }
  
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
    setNewUserFormData: (state, action) => {
      state.newUserFormData = action.payload;
    },
    resetNewUserFormData: (state) => {
      state.newUserFormData = userInitialState.newUserFormData;
    }
  },
});

export const { setUser, setItineraries, signOut, setNewUserFormData, resetNewUserFormData } = usersSlice.actions;

export default usersSlice.reducer;