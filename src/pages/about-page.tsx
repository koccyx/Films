import React, { useContext, useEffect, useState } from 'react';
import { FilmPageInterface } from '../utils/fetch-film-info';
import { StyledAboutPage } from '../theme/theme';
import Loader from '../utils/loader';
import { Box, Typography, useTheme, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';
import FetchFilmInfo from '../utils/fetch-film-info';
import { UserContext } from '../state/Context';

const initialState: FilmPageInterface = {
  img: '',
  title: null,
  averageVote: 0,
  country: '',
  genres: [],
  overview: '',
  releaseYear: 0,
};

export default function About() {
  const [filmInfo, changeFilmInfo] = useState<FilmPageInterface>(initialState);
  const theme = useTheme();
  const params = useParams();
  const userContext = useContext(UserContext);

  useEffect(() => {
    if (params.filmId)
      FetchFilmInfo(params.filmId as unknown as number, userContext.state.token).then((data) =>
        changeFilmInfo(data),
      );
  }, []);

  return (
    <StyledAboutPage>
      {!filmInfo.title ? (
        <Loader />
      ) : (
        <>
          <Box
            component={'img'}
            src={`https://image.tmdb.org/t/p/original/${filmInfo.img}`}
            sx={{
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
            }}
          />
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            <Box
              sx={{
                display: 'flex',

                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <Typography variant='h3'>
                {filmInfo.title} ({filmInfo.releaseYear})
              </Typography>
              <IconButton sx={{ width: '40px', height: '40px' }}>
                <StarIcon sx={{ width: '45px', height: '45px' }} />
              </IconButton>
            </Box>
            <Box>
              <Typography variant='h4' sx={{ paddingBottom: '10px' }}>
                Details:
              </Typography>
              <Box
                sx={{
                  '& > *': {
                    paddingBottom: '10px',
                  },
                }}
              >
                <Typography variant='h5'>
                  Year: {filmInfo.releaseYear}
                </Typography>
                <Typography variant='h5'>
                  Average vote: {filmInfo.averageVote}
                </Typography>
                <Typography variant='h5'>
                  Genres: {filmInfo.genres.join(', ')}
                </Typography>
                <Typography variant='h5'>
                  Country: {filmInfo.country}
                </Typography>
              </Box>
            </Box>
            <Typography variant='h6' sx={{}}>
              {filmInfo.overview}
            </Typography>
          </Box>
        </>
      )}
    </StyledAboutPage>
  );
}
