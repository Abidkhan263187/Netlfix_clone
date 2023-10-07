import React from 'react';
import Logo from "../Images/nt_logo.svg";
import '../SectionTwo/Login.css';
import { GoogleLoginButton } from '../GoogleLoginButton';
import { Box, Typography } from '@mui/material';

export const Login = () => (
  <div id="login_main">
    <div className="login_logo">
      <img src={Logo} alt="Netflix Logo" />
    </div>
    <div className="container">
      <div className="login">
        <Typography variant="h4" color="red" gutterBottom>NETFLIX LOGIN</Typography>
        <Typography variant="subtitle1" gutterBottom> Sign in to your Netflix account </Typography>
        <Box id="login_google_box"> <GoogleLoginButton /> </Box>
        <Typography variant="body2"> This page is protected by Google reCAPTCHA to ensure you're not a bot.</Typography>
      </div>
    </div>
  </div>
);
