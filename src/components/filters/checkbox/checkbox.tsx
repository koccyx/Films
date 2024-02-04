import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { filterSlice } from '../../../state/slices/filter-slice';
import { Select } from './types';
import { options } from './const';


interface props {
  sx?: SxProps<Theme>;
}

export default function CheckBox(props: props) {
  const { setGenre } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { genreList } = useAppSelector((state) => state.filterReducer);


  const autoCompleteHandler = (
    e: React.SyntheticEvent<Element, Event>,
    newValue: Select[],
  ) => {
    dispatch(setGenre(newValue));
  };

  return (
    <Autocomplete
      sx={{ width: '100%', ...props.sx }}
      multiple
      limitTags={2}
      id='multiple-limit-tags'
      options={options}
      isOptionEqualToValue={(option, value) => option.text == value.text}
      getOptionLabel={(option) => option.text}
      value={genreList}
      renderInput={(params) => (
        <TextField {...params} label='Genres:' placeholder='Favorites' />
      )}
      onChange={autoCompleteHandler}
    />
  );
}
