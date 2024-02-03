import { Slider, Typography, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { filterSlice } from '../state/slices/filter-slice';

interface SelectProps {
  sx?: SxProps<Theme>;
}

export default function RangeSlider(props: SelectProps) {
  const { setYears } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { selectedYears } = useAppSelector((state) => state.filterReducer);

  const handleChange = (e: Event, newValue: number | number[]) => {
    dispatch(setYears(newValue as number[]));
  };

  return (
    <Box sx={{ ...props.sx }}>
      <Typography sx={{ pb: '35px' }} variant='h6'>
        Release date:
      </Typography>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={selectedYears}
        onChange={handleChange}
        valueLabelDisplay='on'
        min={1950}
        max={2023}
      />
    </Box>
  );
}
