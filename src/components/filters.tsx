import { Box, useTheme, Typography } from '@mui/material';
import { StyledBox } from '../theme/theme';
import SelectFilter from './select-filter';
import RangeSlider from './range-slider';
import CheckBox from './checkbox';
import SearchFilter from './search-filter';
import Pagination from './pagination';
export default function Filters() {
  const theme = useTheme();

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
      </Box>
      <SearchFilter sx={{ mb: '30px' }} />
      <SelectFilter sx={{ mb: '40px' }} />
      <RangeSlider sx={{ mb: '30px' }} />
      <CheckBox sx={{ mb: '20px' }} />
      <Pagination />
    </StyledBox>
  );
}
