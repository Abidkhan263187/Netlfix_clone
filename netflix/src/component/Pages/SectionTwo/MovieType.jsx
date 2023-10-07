import { Box, Typography } from '@mui/material';
import axios from 'axios';
import './MovieRow.css';
import React, { useEffect, useState } from 'react';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useDispatch } from 'react-redux'
import { currentMovie, similarMovies } from '../../Redux/api';
import { AllowCurrentMovie } from '../../Redux/action';

export const MovieType = ({ type, url }) => {
  const api=process.env.REACT_APP_API
  const [items, setMovie] = useState([]);
  const [scrollX, setScrollX] = useState(0);

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setMovie(response.data.results);
        // console.log(response.data.results)
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollX(x);
  };

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = items.length * 200;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  }

  
  const handleClick = (id) => {
    dispatch(currentMovie(id,api))
    dispatch(similarMovies(id,api))
    dispatch(AllowCurrentMovie(true))
  }


  return (
    <Box>
      <div className="movieRow">
        <Typography variant="h5" ml={5} sx={{ textAlign: 'start',fontWeight:"700" }}>
          {type}
        </Typography>
        <div className="movieRow--left" onClick={handleLeftArrow}>
          <NavigateBeforeIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--right" onClick={handleRightArrow}>
          <NavigateNextIcon style={{ fontSize: 50 }} />
        </div>
        <div className="movieRow--listarea">
          {items && items.length > 0 && (
            <div
              className="movieRow--list"
              style={{
                marginLeft: scrollX,
                width: `${items.length * 200}px`, // here we have to set the width in pixels
              }}
            >
              {items.map((item, key) => (
                <div key={key} className="movieRow--item">
                  <img
                    onClick={() => handleClick(item.id)}
                    src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                    alt={item.original_title}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

    </Box>
  );
};
