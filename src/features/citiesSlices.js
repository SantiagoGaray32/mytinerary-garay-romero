import { createSlice } from "@reduxjs/toolkit";

const citiesInitialState = {
  cities: [],
  city: {},
  nameFilter: "",
  isLoading: false,
  hasErrors: false,
  newCityFormData: {
    city: "",
    country: "",
    photo: "",
    population: 0,
    foundation: "",
  },
};

export const citiesSlice = createSlice({
  name: "cities",
  initialState: citiesInitialState,
  reducers: {
    setCities: (state, action) => {
      state.cities = action.payload;
      state.isLoading = false;
    },
    setCity: (state, action) => {
      state.city = action.payload;
      state.isLoading = false;
    },
    setNameFilter: (state, action) => {
      state.nameFilter = action.payload;
    },
    setNewCityFormData: (state, action) => {
      state.newCityFormData = action.payload;
    },
    resetNewCityFormData: (state) => {
      state.newCityFormData = citiesInitialState.newCityFormData;
    },
  },
});

export const {
  setCities,
  setCity,
  setNameFilter,
  setNewCityFormData,
  resetNewCityFormData,
} = citiesSlice.actions;

export default citiesSlice.reducer;
