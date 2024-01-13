import React, { useEffect, useContext, useState } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import FilmCard from './FilmCard';
import { FilmsContext } from '../state/FilterContext';
import { fetchFilms } from '../utils/fetchFilms';
import { FiltersContextInterface, FilterContext } from '../state/FilterContext';
import Loader from '../utils/loader';

export default function Films() {
  const filters: FiltersContextInterface = useContext(FilterContext);
  const curTheme = useTheme();

  const filtersContext = useContext(FilterContext);
  const filmsContext = useContext(FilmsContext);

  useEffect(() => {
    filmsContext.handleLoading(true);
    fetchFilms(filters.state.sortOption.value, filters.state.page).then(
      (data) => {
        filmsContext.handleFilms(data.films);
        filtersContext.handleTotalPages(data.pages);
        console.log(data.films);
        if (data.films.length) filmsContext.handleLoading(false);
      },
    );
  }, [
    filtersContext.state.genreList,
    filtersContext.state.selectedYears,
    filtersContext.state.sortOption,
    filtersContext.state.page,
  ]);

  return (
    <Box>
      {filmsContext.state.isLoading ? (
        <Loader />
      ) : (
        <Grid container spacing={curTheme.spacing(2)}>
          {filmsContext.state.films.map((film) => {
            return (
              <Grid
                key={film.title}
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
      )}
    </Box>
  );
}
