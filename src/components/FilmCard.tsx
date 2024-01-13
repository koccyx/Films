import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { FilmsInterface } from '../state/FilmsReducer';
import { Link } from 'react-router-dom';
import { StyledCard } from '../theme/theme';
import { useLoaderData } from 'react-router-dom';

export default function FilmCard(props: FilmsInterface) {
  const starButtonHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.stopPropagation();
    console.log('ees');
  };

  
  

  return (
    <StyledCard
      sx={{
        '&:hover': {
          WebkitBoxShadow: '0px 0px 21px 21px rgba(117, 100, 213, 0.2)',
          MozBoxShadow: '0px 0px 21px 21px rgba(117, 100, 213, 0.2)',
          boxShadow: '0px 0px 21px 21px rgba(117, 100, 213, 0.2)',
        },
      }}
    >
      <Link
        to={`about/${props.id}`}
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${props.poster_path}`}
          alt='Film image'
          style={{ width: '100%', height: '300px', paddingBottom: '10px', objectFit: 'cover' }}
        />
      </Link>
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
        <Link
          to={`about/${props.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
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
        </Link>
        <IconButton onClick={starButtonHandler}>
          <StarIcon />
        </IconButton>
      </Box>
    </StyledCard>
  );
}
