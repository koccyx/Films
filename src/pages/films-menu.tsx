import React, {useEffect} from 'react';
import { Grid } from '@mui/material';
import Filters from '../components/Filters';
import Films from '../components/Films';
import { theme } from '../theme/theme';
import useToken from '../hooks/use-token';
import { redirect, useNavigate } from 'react-router-dom';

export default function FilmsPage() {
  const [token] = useToken();
  const navigate = useNavigate();
  useEffect(() => {
    console.log(token);
    
    if (token == '') {
      navigate('/registration');
    }
  }, [token]);

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
