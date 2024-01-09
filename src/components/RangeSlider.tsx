import React from 'react';
import { Slider, Typography, Box } from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';

interface SelectProps {
  sx?: SxProps<Theme>;
  handleYears: (years: number[]) => void;
  selectedYears: number[];
}

export default function RangeSlider(props: SelectProps) {
  const handleChange = (e: Event, newValue: number | number[]) => {
    props.handleYears(newValue as number[]);
  };

  

  return (
    <Box sx={{ ...props.sx }}>
      <Typography sx={{ pb: '35px' }} variant='h6'>
        Release date:
      </Typography>
      <Slider
        getAriaLabel={() => 'Temperature range'}
        value={props.selectedYears}
        onChange={handleChange}
        valueLabelDisplay='on'
        // getAriaValueText={valuetext}
        min={1950}
        max={2023}
      />
    </Box>
  );
}
