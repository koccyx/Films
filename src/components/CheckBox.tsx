import React, { Dispatch } from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { SelectInterface } from '../state/FilterReducer';
import { SxProps, Theme } from '@mui/material/styles';

interface SelectProps {
  handleGenres: (newValue: SelectInterface[]) => void;
  genreList: SelectInterface[];
  sx?: SxProps<Theme>;
}

export default function CheckBox(props: SelectProps) {
  return (
    <Autocomplete
      sx={{ width: '100%', ...props.sx }}
      multiple
      limitTags={2}
      id='multiple-limit-tags'
      options={options}
      isOptionEqualToValue={(option, value) => option.text == value.text}
      getOptionLabel={(option) => option.text}
      value={props.genreList}
      renderInput={(params) => (
        <TextField {...params} label='Genres:' placeholder='Favorites' />
      )}
      onChange={(
        e: React.SyntheticEvent<Element, Event>,
        newValue: SelectInterface[],
      ) => {
        props.handleGenres(newValue);
      }}
    />
  );
}

const options: SelectInterface[] = [
  { text: 'Action', value: 'Action' },
  { text: 'Drama', value: 'Drama' },
];
