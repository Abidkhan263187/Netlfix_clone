import { Box } from '@mui/material'
import React from 'react'
import { MovieType } from './MovieType'
import { useSelector } from 'react-redux'
import { Preview } from '../SectionThree/Preview'
import Loading from '../../Loading'

export const Movies = () => {
  const preview = useSelector((store) => store.preview)
  // console.log(preview)
  const api=process.env.REACT_APP_API
  return (
    <Box>

      <MovieType type="Now Playing" url={`https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US`} />

      <MovieType type="UpComing Movies" url={`https://api.themoviedb.org/3/movie/upcoming?&api_key=${api}&language=en-US`} />
      {/* <MovieType type="Television" url=`https://api.themoviedb.org/3/trending/tv/day?&api_key=${api}&language=en-US` /> */}

      <MovieType type="Action" url={`https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${api}`} />
      <MovieType type="Documentry" url={`https://api.themoviedb.org/3/discover/movie?with_genres=99&api_key=${api}&language=en-US` }/>
      <MovieType type="Comedy Movies" url={`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${api}&language=en-US`} />

      <MovieType type="Romance" url={`https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=${api}&language=en-US`} />
      <MovieType type="Horror" url={`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${api}&language=en-US`} />
    
      {preview && <Preview />}

    </Box>


  )
}
