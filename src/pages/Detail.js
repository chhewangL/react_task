import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetMovieByDetailQuery } from '../features/MovieAPI';
import Loading from '../components/Loading';
import VideoPage from '../components/VideoPage';
import { imageUrl } from '../features/constants';

const Detail = () => {
  const { movie_id } = useParams();
  const nav = useNavigate();
  const { data, isLoading, isError, error } = useGetMovieByDetailQuery(movie_id);
  console.log(error);
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h1>there has been some error</h1>
  }
  return (
    <div style={{ backgroundImage: `url(${imageUrl}${data.backdrop_path})`, height: "550px", backgroundSize: "cover" }}>

      <div className="grid grid-cols-[1fr,1.5fr] mt-3 h-[550px]  font-serif items-center bg-black/50" >
        < div>
          <img src={`${imageUrl}${data.poster_path}`} alt="" className='w-[450px] h-[530px] mx-auto p-5' />

        </div >
        <div className=' text-white'>
          <h1 className=' text-[30px] font-bold'>{data.original_title}</h1>
          <h2>{data.tagline}</h2>
          <h3>Release Date: {data.release_date}</h3>
          <h4 className='underline'>OverView:</h4>
          <p className='pr-3'>{data.overview}</p>
          <br />

          <button className='bg-green-800 rounded-lg p-2 hover:scale-110' onClick={() => nav(`/movieTrailer/${data.id}`)}>Watch Trailer</button>

        </div>

      </div >

    </div>
  )
}

export default Detail