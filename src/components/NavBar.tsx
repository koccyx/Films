import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <Box sx={{ display: 'flex', position: 'fixed', width: '100%', zIndex: 10 }}>
      <AppBar>
        <Toolbar>
            <Typography
              variant='h4'
              component='div'
              sx={{ flexGrow: 1, color: '#fff' }}
            >
              {/* <Link to={'/'}> */}
                Films
              {/* </Link> */}
            </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
