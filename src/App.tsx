import { ThemeProvider } from '@mui/material';
import { theme } from './theme/theme';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { setupStore } from './state/store';
function App() {
  const store = setupStore();

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
