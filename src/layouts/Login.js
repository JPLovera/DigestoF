import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import Fondo from '../assets/fotos/06.jpg'

const Login = () => {
  return (
    <Box sx={{display:'flex', height:'100vh', flexDirection:'column', backgroundImage: `url(${Fondo})`, backgroundSize:'cover'}}>
      <Outlet/>
    </Box>
  )
}

export default Login
