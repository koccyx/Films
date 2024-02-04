import { InputLabel, Box, MenuItem } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Select from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { filterSlice } from '../../../state/slices/filter-slice';
import { Select as SelectType } from './types';
import { options } from './const';

interface SelectProps {
  sx?: SxProps<Theme>;
}

export default function SelectFilter(props: SelectProps) {
  const { setSortOptions } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { sortOption } = useAppSelector((state) => state.filterReducer);

  const sortHandler = (elem: SelectType) => {
    dispatch(setSortOptions(elem));
  };

  return (
    <Box sx={{ ...props.sx }}>
      <InputLabel>Sort By:</InputLabel>
      <Select value={sortOption.value}>
        {options.map((elem) => (
          <MenuItem
            key={elem.value}
            value={elem.value}
            onClick={() => sortHandler(elem)}
          >
            {elem.text}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
