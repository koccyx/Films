import React, { useContext, useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { SxProps, Theme } from '@mui/material/styles';
import { ErrorContext, UserContext } from '../state/Context';
import postFavorite from '../api/post-favorites';

interface FavoritesButtonInterface {
  sx?: SxProps<Theme>;
  id: number;
}

export default function FavoritesButton(props: FavoritesButtonInterface) {
  const { state, handleFavoriteFilms } = useContext(UserContext);

  const { handleError } = useContext(ErrorContext);

  const [isFavorite, setIsFavorite] = useState(
    state.favoriteFilms.includes(props.id),
  );

  useEffect(() => {
    setIsFavorite(state.favoriteFilms.includes(props.id));
  }, [state.favoriteFilms]);

  const starButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    handleFavoriteFilms(props.id);
    postFavorite(state.token, state.id, props.id, !isFavorite).then((data) => {
      try {
        if (!data.success) {

          throw new Error('Error favorites');
        }
      } catch (error: unknown) {
        handleError({errorText: 'Please check internet connection(', isError: true});
        console.log(error);
        handleFavoriteFilms(props.id);
      }
    });
  };

  return (
    <>
      <IconButton onClick={starButtonHandler}>
        <StarIcon sx={{ color: isFavorite ? '#FFB91D' : '', ...props.sx }} />
      </IconButton>
    </>
  );
}
