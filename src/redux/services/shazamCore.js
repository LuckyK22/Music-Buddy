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
    getTopCharts: builder.query({ query: () => '/charts/country?country_code=IN' }),
}),
});

export const {
 useGetTopChartsQuery,
} = shazamCoreApi;


// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://shazam-core.p.rapidapi.com/v1/charts/country',
//   params: {country_code: 'IN'},
//   headers: {
//     'X-RapidAPI-Key': 'afda7641dbmshbb164e8a263a7d5p1ddd07jsn01fe1e2c535c',
//     'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }