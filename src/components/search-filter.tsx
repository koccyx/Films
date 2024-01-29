import React, { useContext } from 'react';
import { InputLabel, Box, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FilterContext } from '../state/Context';

interface SelectProps {
  sx?: SxProps<Theme>;
}

export default function SearchFilter(props: SelectProps) {
  const filterContext = useContext(FilterContext);

  return (
    <Box sx={{ ...props.sx }}>
      <InputLabel>Movie title:</InputLabel>
      <TextField sx={{width: '100%'}} placeholder='Title' value={filterContext.state.filmTitle} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        filterContext.handleFilmTitle(e.target.value);
      }}/>
    </Box>
  );
}
