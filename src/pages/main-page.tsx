import React from 'react';
import { Box, useTheme } from '@mui/material';
import NavBar from '../components/navbar';
import { Outlet } from 'react-router-dom';
import ModalError from '../utils/modal-error';

export default function MainPage() {
  const curTheme = useTheme();

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
      <ModalError />
    </>
  );
}
