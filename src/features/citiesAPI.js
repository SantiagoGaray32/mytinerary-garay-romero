import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const citiesAPI = createApi({
  reducerPath: "citiesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
    getAllCities: builder.query({
      query: () => "/cities",
    }),
    getCityByName: builder.query({
      query: (city) => `cities?city=${city}`,
    }),
    getCityByNameAndType: builder.query({
      query: ({ type, name }) => `cities?type=${type}&name=${name}`,
    }),
    getPostNewCity: builder.mutation({
      query(payload) {
        return {
          url: "cities",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Post"],
    }),
    //Preguntar para mañana si debemos tener 2 createApi distintos para itinerios y cities
    getAllItineraries: builder.query({
      query: () => "/itineraries",
    }),
    getItineraryByName: builder.query({
      query: (itinerary) => `itineraries?itinerary=${itinerary}`,
    }),
    getItineraryByNameAndType: builder.query({
      query: ({ type, name }) => `itineraries?type=${type}&name=${name}`,
    }),
    getPostNewItinerary: builder.mutation({
      query(payload) {
        return {
          url: "itineraries",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Post"],
    }),
  }),
});

export default citiesAPI;
export const {
  useGetAllCitiesQuery,
  useGetCityByNameQuery,
  useGetCityByNameAndTypeQuery,
  useGetPostNewCityMutation,
  //Itineraries
  useGetAllItinerariesQuery,
  useGetItineraryByNameQuery,
  useGetItineraryByNameAndTypeQuery,
  useGetPostNewItineraryMutation,
} = citiesAPI;
