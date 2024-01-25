import React from 'react';
import { InputLabel, Box, MenuItem } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FiltersAction, SelectInterface } from '../state/FilterReducer';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface SelectProps {
  sx?: SxProps<Theme>;
  handleSort: (sortBy: SelectInterface) => void;
  sortOption: SelectInterface;
}

const options: SelectInterface[] = [
  { text: 'Top rate', value: 'top_rated' },
  { text: 'Popularity', value: 'popular' },
];

export default function SelectFilter(props: SelectProps) {
  return (
    <Box sx={{ ...props.sx }}>
      <InputLabel>Sort By:</InputLabel>
      <Select value={props.sortOption.value}>
        {options.map((elem) => (
          <MenuItem
            key={elem.value}
            value={elem.value}
            onClick={() => {
              props.handleSort(elem);
              return;
            }}
          >
            {elem.text}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
