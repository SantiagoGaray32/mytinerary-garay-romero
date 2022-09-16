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
    getCitiesById: builder.query({
      query: (id) => `/cities/${id}`,
    }),
    getCityByName: builder.query({
      query: (city) => `cities?city=${city}`,
    }),
    getCityByNameAndType: builder.query({
      query: ({ type, name }) => `cities?type=${type}&name=${name}`,
    }),
    getPostNewCity: builder.mutation({
      //PONER NOMBRES CLAROS, CAMBIAR GET EN LOS MUTATION
      query(payload) {
        return {
          url: "cities",
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Post"],
    }),
    //Itineraries
    getAllItineraries: builder.query({
      query: () => "/itineraries",
    }),
    getItineraryByName: builder.query({
      query: (itinerary) => `itineraries?itinerary=${itinerary}`,
    }),
    getItinerariesByCityId: builder.query({
      query: (id) => `itineraries?city=${id}`,
    }),
    getItinerariesByUserId: builder.query({
      query: (id) => `itineraries?user=${id}`,
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
    //Activities
    getActivitiesByItineraryId: builder.query({
      query: (id) => `activities?itinerary=${id}`,
    }),
    //Comments
    getCommentsByItineraryId: builder.query({
      query: (id) => `comments?itinerary=${id}`,
    }),
    //Users
    postUser: builder.mutation({
      query: (dataNewUser) => ({
        url: "/auth/signup",
        method: "POST",
        body: dataNewUser,
      }),
    }),
    postUserSingIn: builder.mutation({
      query: (user) => ({
        url: "/auth/signin",
        method: "POST",
        body: user,
      }),
    }),
    postUserSingOut: builder.mutation({
      query: (mail) => ({
        url: `/auth/signout/${mail}`,
        method: "PUT",
      }),
    }),
  }),
});

export default citiesAPI;
export const {
  useGetAllCitiesQuery,
  useGetCitiesByIdQuery,
  useGetCityByNameQuery,
  useGetCityByNameAndTypeQuery,
  useGetPostNewCityMutation,
  //Itineraries
  useGetAllItinerariesQuery,
  useGetItineraryByNameQuery,
  useGetItinerariesByCityIdQuery,
  useGetItinerariesByUserIdQuery,
  useGetPostNewItineraryMutation,
  //Activities
  useGetActivitiesByItineraryIdQuery,
  //Comments
  useGetCommentsByItineraryIdQuery,
  //Users
  usePostUserMutation,
  usePostUserSingInMutation,
  usePostUserSingOutMutation,
} = citiesAPI;
