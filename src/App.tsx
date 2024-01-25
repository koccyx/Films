import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import ContextProvider, { userDefaultState, filmsDefaultState, filtersDefaultState } from './state/Context';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <ContextProvider
        filtersDefaultState={filtersDefaultState}
        filmsDefaultState={filmsDefaultState}
        userDefaultState={userDefaultState}
      >
        <RouterProvider router={router} />
      </ContextProvider>
    </ThemeProvider>
  );
}

export default App;
