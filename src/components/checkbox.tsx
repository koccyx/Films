import React, { Dispatch, useContext } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { SelectInterface } from '../state/filter-reducer';
import { SxProps, Theme } from '@mui/material/styles';
import { FilterContext } from '../state/Context';

interface SelectProps {
  sx?: SxProps<Theme>;
}

const options: SelectInterface[] = [
  { text: 'Action', value: 'Action' },
  { text: 'Drama', value: 'Drama' },
];

export default function CheckBox(props: SelectProps) {
  const {state, handleGenres} = useContext(FilterContext);


  return (
    <Autocomplete
      sx={{ width: '100%', ...props.sx }}
      multiple
      limitTags={2}
      id='multiple-limit-tags'
      options={options}
      isOptionEqualToValue={(option, value) => option.text == value.text}
      getOptionLabel={(option) => option.text}
      value={state.genreList}
      renderInput={(params) => (
        <TextField {...params} label='Genres:' placeholder='Favorites' />
      )}
      onChange={(
        e: React.SyntheticEvent<Element, Event>,
        newValue: SelectInterface[],
      ) => {
        handleGenres(newValue);
      }}
    />
  );
}

