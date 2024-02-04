import { Theme } from '@mui/material';

export const imgStyle =  (theme: Theme) => ({
  maxWidth: '400px',
  maxHeight: '500px',
  [theme.breakpoints.down('md')]: {
    width: '300px',
    height: '450px',
  },
  [theme.breakpoints.down('sm')]: {
    width: '280px',
    height: '400px',
  },
});