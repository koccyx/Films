import { useEffect } from 'react';
import { Grid } from '@mui/material';
import Filters from '../components/filters';
import Films from '../components/films';
import { theme } from '../theme/theme';
import { useNavigate } from 'react-router-dom';
import useUserInfo from '../hooks/use-user-info';

export default function FilmsPage() {
  const { token } = useUserInfo();
  const navigate = useNavigate();

  useEffect(() => {
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
