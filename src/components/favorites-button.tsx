import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { SxProps, Theme } from '@mui/material/styles';
import { postFavorite } from '../state/thunks/films-thunks';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { filmsSlice } from '../state/slices/films-slice';
import useUserInfo from '../hooks/use-user-info';

interface FavoritesButtonInterface {
  sx?: SxProps<Theme>;
  id: number;
}

export default function FavoritesButton(props: FavoritesButtonInterface) {
  const { favoriteFilms } = useAppSelector((state) => state.filmsReducer);
  const dispatch = useAppDispatch();
  const { setFavoriteFilm } = filmsSlice.actions;
  const { id, token } = useUserInfo();

  const [isFavorite, setIsFavorite] = useState(
    favoriteFilms.includes(props.id),
  );

  useEffect(() => {
    setIsFavorite(favoriteFilms.includes(props.id));
  }, [favoriteFilms]);

  const starButtonHandler = () => {
    dispatch(setFavoriteFilm(props.id));
    dispatch(
      postFavorite({
        token: token,
        filmId: props.id,
        isFavorite: !isFavorite,
        userId: id,
      }),
    );
  };

  return (
    <>
      <IconButton onClick={starButtonHandler}>
        <StarIcon sx={{ color: isFavorite ? '#FFB91D' : '', ...props.sx }} />
      </IconButton>
    </>
  );
}
