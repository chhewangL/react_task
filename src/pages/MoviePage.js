import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetMovieByPageQuery } from '../features/MovieAPI';
import { imageUrl } from '../features/constants';
import Loading from '../components/Loading';

const MoviePage = () => {
  const nav = useNavigate();
  const { category, page } = useParams();
  const { error, data, isLoading, isError } = useGetMovieByPageQuery({ category, page });
  console.log(data)
  if (isLoading) {
    return <Loading />
  }
  if (error) {
    return <h1> something gone wrong</h1>
  }
  return (

    <>
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
      {/* <div className='my-[40px] flex justify-center'>
        <button disabled={data.page === 1 ? true : false} className={data.page === 1 ? 'rounded-md bg-gray-400 p-2 ' : 'rounded-md bg-gray-400 p-2 hover:scale-105'} ><h1>prev</h1></button>
        <h1 className='mx-2'>{data.page}</h1>
        <button className='rounded-md bg-gray-400 p-2 hover:scale-105' onClick={() => nav(`/movie/${category}/${data.page + 1}`)} >next</button>
      </div> */}
    </>
  )
}

export default MoviePage