import React from 'react'
import { useGetMoviesBySearchQuery } from '../features/MovieAPI'
import { useNavigate, useParams } from 'react-router'
import Loading from '../components/Loading';
import { imageUrl } from '../features/constants';

const SearchPage = () => {
  const nav = useNavigate();
  const { query } = useParams();
  const { data, isLoading, isError, error } = useGetMoviesBySearchQuery(query);
  console.log(data)

  if (isLoading) {
    <Loading />
  }
  if (isError) {
    return <h1>{error.data.status_message}</h1>
  }
  if (data?.results?.length === 0) {
    return <h1 className='text-center p-2 text-red-600 font-bold'>keyword didnot matched</h1>
  }

  return (
    <div className='grid grid-cols-4 gap-5  mt-4 px-2 sm:grid-cols-2 '>
      {data && data.results.map((movie) => {
        return <div key={movie.id} className='p-4 shadow-2xl cursor-pointer rounded-lg hover:scale-110 hover:duration-75' onClick={() => nav(`/movieDetails/${movie.id}`)}>
          <img src={`${imageUrl}${movie.poster_path}`} alt="" className='w-full h-[400px]' />
          <h1 className='text-center font-bold font-serif'>{movie.original_title}</h1>
          <h2 className='font-semibold'>Release date: {movie.release_date}</h2>
          <h3>Overview:</h3>
          <p className='px-2'>{movie.overview.substring(0, 100) + '...'}</p>

        </div>
      })}
    </div>
  )
}

export default SearchPage