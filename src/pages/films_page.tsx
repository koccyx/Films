import React from 'react';
import { Grid } from '@mui/material';
import Filters from '../components/Filters';
import Films from '../components/Films';
import { theme } from '../theme/theme';

export default function FilmsPage() {
  return (
    <Grid container spacing={theme.spacing(4)}>
      <Grid item md={3} xs={12}>
        <Filters />
      </Grid>
      <Grid item md={9} xs={12}>
        <Films />
      </Grid>
    </Grid>
  );
}
