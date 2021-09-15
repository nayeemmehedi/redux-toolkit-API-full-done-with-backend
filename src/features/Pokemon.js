
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const pokemon = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4500/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => `redux`,
    }),
     getPokemonByOther: builder.query({
      query: (id) => {
       
        return {
          url :`redux/${id}`, 
          method: 'GET'
        }



      }
    }),
    getUpdateData: builder.mutation({
      query: (value) => {
        const {id , ...data} = value
       
       
        return {
          url :`redux/${id}`, 
          method: 'PATCH',
           body: data,
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
            
          },
                }



      }
    }),

    getDeleteData: builder.mutation({
      query: (id) => {
       
       
       
        return {
          url :`redux/${id}`, 
          method: 'DELETE',
           
                }



      }
    }),




  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetPokemonByNameQuery,useGetPokemonByOtherQuery,useGetUpdateDataMutation,useGetDeleteDataMutation } = pokemon