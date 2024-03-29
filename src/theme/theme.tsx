import { createTheme, Box, Card } from '@mui/material';
import styled from 'styled-components';

declare module '@mui/material/styles' {
  interface PaletteOptions {
    bgc?: {
      main: string;
    };
  }
}

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1190,
      lg: 1200,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: '#9a8dff',
    },
    secondary: {
      main: '#ff9a8d',
    },
    background: {
      paper: '#F3F8FF',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.variant === 'text' && {
            color: 'black',
          }),
        }),
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          position: 'static',
        },
      },
    },
  },
});

export const StyledBox = styled(Box)(() => {
  return {
    boxSizing: 'border-box',
    padding: '5px 10px',
    borderRadius: '7px',
    [theme.breakpoints.down('md')]: {
      width: '100%',
      padding: '5px 5px',
    },
  };
});

export const StyledCard = styled(Card)(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    maxWidth: '510px',
  };
});

export const StyledLoader = styled(Box)(() => ({
  width: '100%',
  height: '70vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    height: '40vh',
  },
}));

export const StyledAboutPage = styled(Box)(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

export const StyledModal = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '10px',
  width: '45%',
  minHeight: '200px',
  backgroundColor: 'white',
  borderRadius: '5px',
  boxShadow: '24',
  [theme.breakpoints.down('md')]: {
    width: '70%',
  },
}));
