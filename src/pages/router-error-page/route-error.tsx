import { Box, Typography } from '@mui/material';
import { pageStyle } from './styles';

export default function RouteError() {
  return (
    <Box
      sx={pageStyle}
    >
      <Typography component='div' variant='h1' sx={{ color: 'violet' }}>
        404
      </Typography>
      <Typography component='div' variant='h2'>
        Wrong route((
      </Typography>
    </Box>
  );
}
