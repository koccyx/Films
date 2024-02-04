import { useEffect } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import FilmCard from '../film-card/film-card';
import Loader from '../../utils/loader';
import { useAppDispatch, useAppSelector } from '../../hooks/redux-hooks';
import {
  fetchFilms,
  fetchFavorites,
  findByTitle,
} from '../../state/thunks/films-thunks';
import useUserInfo from '../../hooks/use-user-info';

export default function Films() {
  const curTheme = useTheme();

  const dispatch = useAppDispatch();
  const { genreList, page, selectedYears, sortOption, filmTitle } = useAppSelector((state) => state.filterReducer);
  const { films, isLoading } = useAppSelector((state) => state.filmsReducer);

  const { token, id } = useUserInfo();

  useEffect(() => {
    if (filmTitle != '') {
      dispatch(findByTitle({ page: page, title: filmTitle, token }));
    } else if (token != '') {
      dispatch(fetchFilms({ option: sortOption.value, page, token }));
    }
  }, [genreList, selectedYears, sortOption, page, filmTitle]);

  useEffect(() => {
    if (id != 0) {
      dispatch(fetchFavorites({ accountId: id, token: token }));
    }
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Grid container spacing={curTheme.spacing(2)}>
            {films.map((film) => {
              return (
                <Grid
                  key={film.id}
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    minWidth: '285px',
                  }}
                >
                  <FilmCard
                    poster_path={film.poster_path}
                    title={film.title}
                    vote_average={film.vote_average}
                    id={film.id}
                  />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Box>
  );
}
