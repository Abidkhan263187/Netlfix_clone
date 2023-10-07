import React, { useEffect, useState } from 'react'
import { Typography, Box, Paper } from '@mui/material';
import { MovieCreationOutlined as MovieCreationOutlinedIcon } from '@mui/icons-material';
import Loading from '../../Loading';
import Logo from "../Images/nt_logo.svg";
import { useNavigate } from 'react-router-dom';

export const Watch = () => {
  const navigate=useNavigate()
    const [load, setload] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setload(false)
      }, 2000)
    }, [])

    const style = {
      position: 'absolute',
      width: '100px',
      height: '100px',
      top: '0',
      left: '0',
    };
  return (
    <>
    <Box id="login_logo" style={style}>
    <img src={Logo} alt="Netflix Logo" onClick={()=>navigate('/')} />
    </Box>
    {load ? <Loading/> : <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
    <Paper elevation={3} sx={{ padding: '16px', textAlign: 'center' }}>
      <MovieCreationOutlinedIcon fontSize="large" color="error" />
      <Typography variant="h6" color="error" mt={2}>
        Video not found
      </Typography>
      <img
        src="https://webartdevelopers.com/blog/wp-content/uploads/2021/05/404-error-page-svg-animation.gif" 
        alt="Video not found"
        style={{ maxWidth: '100%', marginTop: '16px' }}
      />
    </Paper>
  </Box>}
  </>
  )
}
