import { createBrowserRouter } from 'react-router-dom';
import FilmsPage from '../pages/films-menu';
import About from '../pages/about-page';
import RouteError from './route_error';
import MainPage from '../pages/main-page';
import RegistrationPage from '../pages/registration-page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    errorElement: <RouteError />,
    children: [
      {
        path: '/',
        element: <FilmsPage />,
        errorElement: <RouteError />,
      },
      {
        path: 'about/:filmId',
        element: <About />,
        errorElement: <RouteError />,
      },
      {
        path: 'registration',
        element: <RegistrationPage />,
        errorElement: <RouteError />,
      },
    ],
  },
]);

