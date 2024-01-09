import { createTheme, Box } from '@mui/material';
import styled from 'styled-components';
import RouteError from '../utils/route_error';

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
      md: 1150,
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

