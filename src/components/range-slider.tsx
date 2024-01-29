import React, { useContext } from 'react';
import { Slider, Typography, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FilterContext } from '../state/Context';

interface SelectProps {
  sx?: SxProps<Theme>;
}

export default function RangeSlider(props: SelectProps) {
  const {state, handleYears} = useContext(FilterContext);

  const handleChange = (e: Event, newValue: number | number[]) => {
    handleYears(newValue as number[]);
  };


  return (
    <Box sx={{ ...props.sx }}>
      <Typography sx={{ pb: '35px' }} variant='h6'>
        Release date:
      </Typography>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={state.selectedYears}
        onChange={handleChange}
        valueLabelDisplay='on'
        min={1950}
        max={2023}
      />
    </Box>
  );
}
