import React, { useEffect, useContext } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import FilmCard from './film-card';
import { FilmsContext } from '../state/Context';
import { fetchFilms } from '../api/fetch-films';
import {
  FiltersContextInterface,
  FilterContext,
  UserContext,
} from '../state/Context';
import Loader from '../utils/loader';
import FetchFavorites from '../api/fetch-favorites';
import { fetchFilmsByTitle } from '../api/fetch-exact-film';
import ModalError from '../utils/modal-error';

export default function Films() {
  const filters: FiltersContextInterface = useContext(FilterContext);
  const curTheme = useTheme();

  const userContext = useContext(UserContext);
  const filtersContext = useContext(FilterContext);
  const filmsContext = useContext(FilmsContext);

  useEffect(() => {
    filmsContext.handleLoading(true);
    if (filtersContext.state.filmTitle != '') {
      fetchFilmsByTitle(
        filtersContext.state.page,
        userContext.state.token,
        filtersContext.state.filmTitle,
      ).then((data) => {
        filmsContext.handleFilms(data.films);
        filtersContext.handleTotalPages(data.pages);
        if (data.films.length) filmsContext.handleLoading(false);
      });
    } else {
      fetchFilms(
        filters.state.sortOption.value,
        filters.state.page,
        userContext.state.token,
      ).then((data) => {
        filmsContext.handleFilms(data.films);
        filtersContext.handleTotalPages(data.pages);
        if (data.films.length) filmsContext.handleLoading(false);
      });
    }
  }, [
    filtersContext.state.genreList,
    filtersContext.state.selectedYears,
    filtersContext.state.sortOption,
    filtersContext.state.page,
    filtersContext.state.filmTitle,
  ]);

  useEffect(() => {
    if (userContext.state.id != 0) {
      FetchFavorites(userContext.state.token, userContext.state.id).then(
        (data) => {
          userContext.handleArrayFavoriteFilms(data);
        },
      );
    }
  }, []);

  return (
    <Box>
      {filmsContext.state.isLoading ? (
        <Loader />
      ) : (
        <>
        <Grid container spacing={curTheme.spacing(2)}>
          {filmsContext.state.films.map((film) => {
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
