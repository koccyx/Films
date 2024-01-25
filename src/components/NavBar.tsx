import React from 'react';
import { Typography, Toolbar, Box, AppBar } from '@mui/material';
import { Link } from 'react-router-dom';
import ModalButton from './modal-button';
import ProfileButton from './profile-button';
import useToken from '../hooks/use-token';

export default function NavBar() {

  
  const [token] = useToken();
  
  
  return (
    <>
      <Box
        sx={{ display: 'flex', position: 'fixed', width: '100%', zIndex: 10 }}
      >
        <AppBar>
          <Toolbar>
            <Typography
              variant='h4'
              component='div'
              sx={{ flexGrow: 1, color: '#fff', textDecoration: 'none' }}
            >
              <Link to={'/'} style={{ color: '#fff', textDecoration: 'none' }}>
                Films
              </Link>
            </Typography>
            {token == '' ? <ModalButton /> : <ProfileButton />}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
