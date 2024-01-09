import React from 'react';
import { Card, Typography, Box, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { FilmsInterface } from '../state/FilmsReducer';
import { Link } from 'react-router-dom';

export default function FilmCard(props: FilmsInterface) {
  const starButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    debugger;
    e.stopPropagation();
    console.log('ees');
  };

  return (
    <Card
      sx={{
        d: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '510px',
      }}
    >
      <Link
        to={`about/${props.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
          alt='Film image'
          style={{ width: '100%', height: '270px', paddingBottom: '10px' }}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            pb: '10px',
            px: '10px',
          }}
        >
          <Box>
            <Typography variant='h5'>{props.title}</Typography>
            <Typography
              variant='h6'
              sx={{ fontSize: '15px', fontWeight: '400', color: 'grey' }}
            >
              Rate: {props.vote_average}
            </Typography>
          </Box>
          <IconButton onClick={starButtonHandler}>
            <StarIcon />
          </IconButton>
        </Box>
      </Link>
    </Card>
  );
}
