import { useEffect, useState } from 'react';
import { StyledAboutPage } from '../../theme/theme';
import Loader from '../../utils/loader';
import { Box, Typography, useTheme } from '@mui/material';
import { useParams } from 'react-router-dom';
import FetchFilmInfo from '../../api/fetch-film-info';
import FavoritesButton from '../../components/buttons/favorites-button/favorites-button';
import useUserInfo from '../../hooks/use-user-info';
import { fetchFavorites } from '../../state/thunks/films-thunks';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { initialState } from './const';
import { FilmPage } from './types';
import { imgStyle } from './styles';

export default function About() {
  const [filmInfo, changeFilmInfo] = useState<FilmPage>(initialState);
  const theme = useTheme();
  const params = useParams();

  const dispatch = useAppDispatch();
  const { token, id } = useUserInfo();

  useEffect(() => {
    if (params.filmId && token) {
      FetchFilmInfo(params.filmId as unknown as number, token).then((data) => {
        changeFilmInfo(data);
      });
      dispatch(fetchFavorites({ token, accountId: id }));
    }
  }, [token]);

  return (
    <StyledAboutPage>
      {!filmInfo.title ? (
        <Loader />
      ) : (
        <>
          <Box
            component={'img'}
            src={`https://image.tmdb.org/t/p/original/${filmInfo.img}`}
            sx={imgStyle(theme)}
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
              <FavoritesButton
                sx={{ width: '40px', height: '40px' }}
                id={filmInfo.id}
              />
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
