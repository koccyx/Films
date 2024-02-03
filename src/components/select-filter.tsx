import { InputLabel, Box, MenuItem } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import Select from '@mui/material/Select';
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
  { text: 'Top rate', value: 'top_rated' },
  { text: 'Popularity', value: 'popular' },
];

export default function SelectFilter(props: SelectProps) {
  const { setSortOptions } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { sortOption } = useAppSelector((state) => state.filterReducer);

  const setSort = (elem: SelectInterface) => {
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
            onClick={() => {
              setSort(elem);
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
