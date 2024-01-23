import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'afda7641dbmshbb164e8a263a7d5p1ddd07jsn01fe1e2c535c');
                
            return headers; 
            },
        }),
    endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
}),
});

export const {
 useGetTopChartsQuery,
} = shazamCoreApi;
