import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const itinerariesAPI = createApi({
  reducerPath: "itinerariesAPI",

  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
  }),
  endpoints: (builder) => ({
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

export default itinerariesAPI;
export const {
  useGetAllItinerariesQuery,
  useGetItineraryByNameQuery,
  useGetItineraryByNameAndTypeQuery,
  useGetPostNewItineraryMutation,
} = itinerariesAPI;
