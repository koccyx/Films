import React, { useContext } from 'react';
import { Box, useTheme, Typography, Button, Pagination } from '@mui/material';
import { StyledBox } from '../theme/theme';
import SelectFilter from './SelectFilter';
import RangeSlider from './RangeSlider';
import CheckBox from './CheckBox';
import { FilterContext } from '../state/Context';

export default function Filters() {
  const theme = useTheme();

  const filters = useContext(FilterContext);

  const handleResetButton = () => {
    filters.handleGenres([]);
    filters.handlePage(1);
    filters.handleSort({ text: 'Popularity', value: 'popular' });
    filters.handleYears([1950, 2024]);
  };

  return (
    <StyledBox
      sx={{
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', mb: '15px' }}
      >
        <Typography variant='h4'>Filters</Typography>
        <Button onClick={handleResetButton} variant='text'>x</Button>
      </Box>
      <SelectFilter
        sx={{ mb: '40px' }}
        handleSort={filters.handleSort}
        sortOption={filters.state.sortOption}
      />
      <RangeSlider
        sx={{ mb: '30px' }}
        handleYears={filters.handleYears}
        selectedYears={filters.state.selectedYears}
      />
      <CheckBox
        sx={{ mb: '20px' }}
        handleGenres={filters.handleGenres}
        genreList={filters.state.genreList}
      />
      <Pagination
        count={filters.state.totalPages}
        sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        size='medium'
        page={filters.state.page}
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          filters.handlePage(value);
        }}
      />
    </StyledBox>
  );
}
