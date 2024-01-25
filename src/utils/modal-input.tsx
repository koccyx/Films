import React from 'react';
import { StyledModal } from '../theme/theme';
import { Box, Typography, Button, TextField, useTheme } from '@mui/material';

interface PropsInterface {
  handleClose: () => void;
  submitHandler: (e: React.SyntheticEvent) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  input: string;
  isError?: boolean;
  topText?: string;
  errorText?: string;
  placeholder?: string;
}

export default function ModalInput(props: PropsInterface) {

  const theme = useTheme();
  return (
    <StyledModal>
      <Box component={'form'} onSubmit={props.submitHandler}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            paddingBottom: '30px',
          }}
        >
          <Typography id='modal-modal-title' variant='h4' component='h2'>
            {props.topText || 'Input Smth'}
          </Typography>
          <Button
            sx={{ width: '40px', height: '40px', fontSize: '25px' }}
            onClick={props.handleClose}
          >
            X
          </Button>
        </Box>
        <TextField
          error={props.isError}
          helperText={props.isError && `Invalid ${props.errorText || 'smth'}, please, try again...`}
          sx={{ width: '100%', mb: '20px' }}
          variant={'outlined'}
          label={props.placeholder || 'smth'}
          value={props.input}
          onChange={props.onChangeInput}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            sx={{ fontSize: '20px', color: theme.palette.primary.main }}
            type='submit'
          >
            REQUEST
          </Button>
        </Box>
      </Box>
    </StyledModal>
  );
}
