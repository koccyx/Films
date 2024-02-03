import { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import ModalButton from '../components/modal-button';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../hooks/use-user-info';

export default function RegistrationPage() {
  const { token } = useUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
    if (token != '') {
      navigate('/');
    }
  }, [token]);

  return (
    <Box sx={{ color: 'black' }}>
      <Typography variant='h4'>
        Please log in to watch the movie list...
      </Typography>
      <ModalButton />
    </Box>
  );
}
