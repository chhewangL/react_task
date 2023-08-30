import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { accessToken } from './constants'



export const movieApi = createApi({
  reducerPath: 'movieApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  endpoints: (builder) => ({


    getMovieByCategory: builder.query({
      query: (query) => ({

        url: `/movie/${query}`,
        headers: {
          'Authorization': accessToken
        },
        params: {
          page: 1,
          api_key: '68e77e245a9cfe2aadec584d477cd968'
        }
      })
    }),

    getMovieByDetail: builder.query({
      query: (query) => ({
        url: `/movie/${query}?api_key=68e77e245a9cfe2aadec584d477cd968`,
        header: {
          'Authorization': accessToken,

        },
        params: {
          page: 1
        }
      })
    }),

    getVideoById: builder.query({
      query: (id) => ({
        url: `/movie/${id}/videos?api_key=68e77e245a9cfe2aadec584d477cd968`,
        herader: {
          'Authorization': accessToken

        }

      })
    }),
    getMoviesBySearch: builder.query({
      query: (query) => ({
        url: '/search/movie',
        header: {
          'Authorization': accessToken
        },
        params: {
          query,
          api_key: '68e77e245a9cfe2aadec584d477cd968'

        }
      })
    }),
    getMovieByPage: builder.query({
      query: (query) => ({
        url: `/movie/${query.category}?api_key=68e77e245a9cfe2aadec584d477cd968`,
        header: {
          'Authentication': accessToken
        },
        params: {

          page: query.page


        }
      })
    })



  })
})

export const { useGetMovieByCategoryQuery, useGetMovieByDetailQuery, useGetVideoByIdQuery, useGetMoviesBySearchQuery, useGetMovieByPageQuery } = movieApi
