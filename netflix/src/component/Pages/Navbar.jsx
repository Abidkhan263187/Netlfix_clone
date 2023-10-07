import { Box, Button, Menu, MenuItem } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SearchIcon from '@mui/icons-material/Search';
import '../style.css'
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const user = JSON.parse(sessionStorage.getItem('user')) || ""
  const navigate = useNavigate()
  const [scrolling, setScrolling] = useState(null);
  const [anchorEl, setAnchorEl] = useState(false);
  const [age, setAge] = useState('');
  const open = Boolean(anchorEl);

  const handleClick = (event) => { setAnchorEl(event.currentTarget); };
  const handleClose = () => { setAnchorEl(null); };

  const handleLogout = () => {
    sessionStorage.setItem('user', JSON.stringify(''))
    handleClose()
    window.location.href = "/login"
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) { setScrolling(true); }
    else { setScrolling(false); }
  };


  const [anchorEl2, setAnchorEl2] = useState(null);
  const handleClick2 = (event) => { setAnchorEl2(event.currentTarget);};
  const handleClose2 = () => {setAnchorEl2(null);};

  return (
    <Box className={`navbar ${scrolling ? 'scrolled' : ''}`} id="navbar">
      <Box id="nav_left">
       
        <Box id="logo"> <img src='https://netflix-clone-one-gamma.vercel.app/_next/static/images/logo-ccbd5398cf84c392e091455a1f9fb4fe.png' alt='logo' /> </Box>
       
        <Box id="nav_leftTwo" >
          <p>Home</p>
          <p>Tv Shows</p>
          <p>Movies</p>
          <p>Recently Added</p>
          <p>My List</p>
        </Box>
      </Box>

      <Box id="nav_right">
        <Box id="nv_fst">
          <input type="text" placeholder='search' /><SearchIcon />
        </Box>
        <Box id="nv_scnd">
          <Box><CardGiftcardIcon /></Box>
          <Box><NotificationsActiveIcon /> </Box>

          <img
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}

            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="admin" />

        </Box>

        <Box >
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
          >
            {user && <MenuItem onClick={handleClose}>{user}</MenuItem>}

            <MenuItem onClick={handleLogout}>{user ? 'Logout' : 'Login'}</MenuItem>
          </Menu>
        </Box>

      </Box>



      <Box id="mob_nav">

        <Box id="logo"> <img src='https://netflix-clone-one-gamma.vercel.app/_next/static/images/logo-ccbd5398cf84c392e091455a1f9fb4fe.png' alt='logo' /> </Box>
        <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick2}
        variant="contained"
        color="error"
        style={{fontWeight:'600'}}
      >
        Menu
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl2}
        keepMounted
        open={Boolean(anchorEl2)}
        onClose={handleClose2}
      >
        <MenuItem    onClick={handleClose2} id="mob_menu_list">Home</MenuItem>
        <MenuItem    onClick={handleClose2} id="mob_menu_list">Tv Shows</MenuItem>
        <MenuItem    onClick={handleClose2} id="mob_menu_list">Movies</MenuItem>
        <MenuItem    onClick={handleClose2} id="mob_menu_list">Recently Added</MenuItem>
        <MenuItem    onClick={handleClose2} id="mob_menu_list">My List</MenuItem>
          {user && <MenuItem style={{backgroundColor:"red"}} onClick={handleClose}>{user}</MenuItem>}

            <MenuItem id="mob_menu_list" onClick={handleLogout}>{user ? 'Logout' : 'Login'}</MenuItem>
      </Menu>
    </div>
      </Box>
    </Box>
  )
}
