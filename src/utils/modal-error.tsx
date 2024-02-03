import { StyledModal } from '../theme/theme';
import { Box, Typography, Button, useTheme, Modal } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { filmsSlice } from '../state/slices/films-slice';

export default function ModalError() {
  const { isError } = useAppSelector((state) => state.filmsReducer);
  const dispatch = useAppDispatch();
  const { setError } = filmsSlice.actions;

  const handleClose = () => {
    dispatch(setError(false));
  };

  const theme = useTheme();
  return (
    <Modal open={isError}>
      <StyledModal>
        <Box
          component={'form'}
          sx={{ display: 'flex', flexDirection: 'column', gap: '40px' }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
            }}
          >
            <Button
              sx={{ width: '40px', height: '40px', fontSize: '25px' }}
              onClick={handleClose}
            >
              X
            </Button>
          </Box>
          <Typography
            id='modal-modal-title'
            variant='h4'
            component='h2'
            sx={{ textAlign: 'center' }}
          >
            Problems with internet connection, please, try again
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              onClick={handleClose}
              sx={{ fontSize: '20px', color: theme.palette.primary.main }}
              type='submit'
            >
              CLOSE
            </Button>
          </Box>
        </Box>
      </StyledModal>
    </Modal>
  );
}
