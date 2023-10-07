import { Box, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios'
import styles from './styles.module.css';
const formatGenres = (value) => {
  const arr = [];

  for (let i in value) {
    arr.push(value[i].name);
  }

  return arr;
}

export const TrendingMovie = () => {

  const [item, setMovie] = useState({})

  useEffect(() => {
    (async () => {
      const api=process.env.REACT_APP_API
      try {
        await axios.get(`https://api.themoviedb.org/4/discover/tv?with_networks=213&api_key=${api}&language=en-US`).
          then(({ data }) => {
            let randomChosen = Math.floor(Math.random() * (data.results.length - 1));
            let chosen = data.results[randomChosen];
            // console.log(chosen)
            setMovie(chosen)
          })
      } catch (error) {
        console.log(error, "error while getting deature movie")
      }
    })()
  }, [])
  return (
    <div>
      <section className={styles.featured} style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
      }}>
        <div className={styles.featuredVertical}>
          <div className={styles.featuredHorizontal}>
            <div className={styles.featuredName}>
              {item.name}
            </div>
            <div className={styles.featuredInfo}>
              <div className={styles.featuredPoints}>
                <span > {item.vote_average * 10}%</span>    Likes
              </div>

              <div className={styles.featuredSeasons}>
                <span>{item.vote_average} </span>  Rating
              </div>
              <div className={styles.featuredYear}>
                <span>{item.vote_count * 10}K</span>  <span style={{ color: "red" }}>Votes</span>
              </div>
            </div>
            <div className={styles.featuredDescription}>
              {item.overview}
            </div>
            <div className={styles.featuredButtons}>
              <Link to={`/watch`} className={styles.featuredWatchButton}>
                <div className={styles.featuredButton}>
                  <PlayArrowIcon />&nbsp;
                  <span>Play</span>
                </div>
              </Link>
              <Link href={`#`} className={styles.featuredMyListButton}>
                <div className={styles.featuredButton}>
                  <AddIcon />&nbsp;
                  <span>My List</span>
                </div>
              </Link>
            </div>
            <div className={styles.featuredGenres}>
              {/* <strong>Genres:</strong> {(item.genre_ids)}&nbsp;&nbsp;&nbsp; */}
              <strong>Release Date:</strong> {(item.first_air_date)}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
