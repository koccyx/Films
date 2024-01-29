import React, { useContext } from 'react';
import { InputLabel, Box, MenuItem } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FiltersAction, SelectInterface } from '../state/filter-reducer';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FilterContext } from '../state/Context';

interface SelectProps {
  sx?: SxProps<Theme>;
  // handleSort: (sortBy: SelectInterface) => void;
  // sortOption: SelectInterface;
}

const options: SelectInterface[] = [
  { text: 'Top rate', value: 'top_rated'},
  { text: 'Popularity', value: 'popular'},
];

export default function SelectFilter(props: SelectProps) {

  const {state,handleSort } = useContext(FilterContext);
  return (
    <Box sx={{ ...props.sx }}>
      <InputLabel>Sort By:</InputLabel>
      <Select value={state.sortOption.value}>
        {options.map((elem) => (
          <MenuItem
            key={elem.value}
            value={elem.value}
            onClick={() => {
              handleSort(elem);
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
