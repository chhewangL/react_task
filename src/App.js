import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'

import RootLayout from './components/RootLayout'
import MovieByCategory from './components/MovieByCategory'
import Detail from './pages/Detail'
import VideoPage from './components/VideoPage'
import SearchPage from './pages/SearchPage'
import MoviePage from './pages/MoviePage'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path='/movie/:category' element={<MovieByCategory />} />
          <Route path='/movieDetails/:movie_id' element={<Detail />} />
          <Route path='/movieTrailer/:movie_id' element={<VideoPage />} />
          <Route path='/movieSearch/:query' element={<SearchPage />} />
          <Route path='/movie/:category/:page' element={<MoviePage />} />


        </Route>



      </Routes>
    </div>
  )
}

export default App