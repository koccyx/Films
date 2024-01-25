import React from 'react';
import { Box, Typography } from '@mui/material';

export default function RouteError() {
  return (
    <Box
      sx={{
        width: '100%',
        height: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontWeight: '900',
      }}
    >
      <Typography component='div' variant='h1' sx={{ color: 'violet' }}>
        404
      </Typography>
      <Typography component='div' variant='h2'>
        Wrong route((
      </Typography>
    </Box>
  );
}
