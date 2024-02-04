import { InputLabel, Box, TextField } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { filterSlice } from '../../../state/slices/filter-slice';

interface SelectProps {
  sx?: SxProps<Theme>;
}

export default function SearchFilter(props: SelectProps) {
  const { setFilmTitle } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { filmTitle } = useAppSelector((state) => state.filterReducer);

  const setTitle = (title: string) => {
    dispatch(setFilmTitle(title));
  };

  return (
    <Box sx={{ ...props.sx }}>
      <InputLabel>Movie title:</InputLabel>
      <TextField
        sx={{ width: '100%' }}
        placeholder='Title'
        value={filmTitle}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}
      />
    </Box>
  );
}
