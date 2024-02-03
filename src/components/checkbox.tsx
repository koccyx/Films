import React from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { filterSlice } from '../state/slices/filter-slice';

interface SelectProps {
  sx?: SxProps<Theme>;
}

interface SelectInterface {
  text: string;
  value: string;
}

const options: SelectInterface[] = [
  { text: 'Action', value: 'Action' },
  { text: 'Drama', value: 'Drama' },
];

export default function CheckBox(props: SelectProps) {
  const { setGenre } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { genreList } = useAppSelector((state) => state.filterReducer);

  const setGenres = (genreList: SelectInterface[]) => {
    dispatch(setGenre(genreList));
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
      onChange={(
        e: React.SyntheticEvent<Element, Event>,
        newValue: SelectInterface[],
      ) => {
        setGenres(newValue);
      }}
    />
  );
}
