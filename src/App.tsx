import React from 'react';
import { Box, Grid, useTheme, ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import NavBar from './components/NavBar';
import ContextProvider from './state/FilterContext';
import { defaultState } from './state/FilterContext';
import { filmsDefaultState } from './state/FilterContext';
// import FilmsPage from './pages/films_page';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';


function App() {
  const curTheme = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider
        defaultState={defaultState}
        filmsDefaultState={filmsDefaultState}
      >
      <NavBar />
        <Box
          sx={{
            height: '100vh',
            backgroundColor: curTheme.palette.background.default,
            boxSizing: 'border-box',
            paddingTop: '55px',
          }}
        >
          <Box sx={{ padding: '20px 20px' }}>
            <RouterProvider router={router}/>
            {/* <FilmsPage /> */}
          </Box>
        </Box>
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
