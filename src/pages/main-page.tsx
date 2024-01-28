import React, { useEffect } from 'react';
import { Box, useTheme } from '@mui/material';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import useCookie from '../hooks/use-user-info';

export default function MainPage() {
  const curTheme = useTheme();

  // const [cooka, setCooka] = useCookie('max');

  // useEffect(()=> {
  //   setCooka('228');
  // },[]);

  // debugger;
  // console.log(cooka);
  
  return (
    <>
      <NavBar />
      <Box
        sx={{
          height: '100vh',
          backgroundColor: curTheme.palette.background.default,
          boxSizing: 'border-box',
          paddingTop: '55px',
        }}
      >
        <Box sx={{ padding: '20px 20px' }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}
