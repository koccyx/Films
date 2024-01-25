import React from 'react';
import { Box, Typography } from '@mui/material';
import ModalButton from '../components/modal-button';

export default function RegistrationPage() {
  return (
    <Box sx={{color: 'black'}}>
      <Typography variant='h4'>
        Please log in to watch the movie list...
      </Typography>
      <ModalButton />
    </Box>
  );
}
