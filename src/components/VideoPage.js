import React from 'react'
import { useParams } from 'react-router'
import { useGetVideoByIdQuery } from '../features/MovieAPI';
import Loading from './Loading';

const VideoPage = () => {
  const { movie_id } = useParams();
  const { data, isLoading, isError, error } = useGetVideoByIdQuery(movie_id);
  console.log(data)
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h1>there is some error</h1>
  }
  return (
    <div >
      {data && <div >
        {/* <iframe
          src= frameborder="0"></iframe> */}

        <iframe width="1000" height="600" src={`https://www.youtube.com/embed/${data.results[0]?.key}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className='w-full py-3' allowFullScreen></iframe>
      </div>}

    </div>
  )
}

export default VideoPage