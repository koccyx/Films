import React, { useContext } from 'react';
import { StyledModal } from '../theme/theme';
import { Box, Typography, Button, useTheme, Modal } from '@mui/material';
import { ErrorContext } from '../state/Context';

export default function ModalError() {
  const errorContext = useContext(ErrorContext);

  const handleClose = () => {
    errorContext.handleError({errorText: '', isError: false});
  };

  const theme = useTheme();
  return (
    <Modal open={errorContext.state.isError}>
      <StyledModal>
        <Box component={'form'} sx={{display: 'flex', flexDirection: 'column', gap: '40px'}}>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              // paddingBottom: '30px',
            }}
          >
            <Button
              sx={{ width: '40px', height: '40px', fontSize: '25px' }}
              onClick={handleClose}
            >
              X
            </Button>
          </Box>
          <Typography id='modal-modal-title' variant='h4' component='h2' sx={{textAlign: 'center'}}>
            {errorContext.state.errorText}
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
