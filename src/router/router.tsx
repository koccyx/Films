import { createBrowserRouter } from 'react-router-dom';
import FilmsPage from '../pages/films-page/films-page';
import About from '../pages/about-page/about-page';
import RouteError from '../pages/router-error-page/route-error';
import MainPage from '../pages/main-page/main-page';
import RegistrationPage from '../pages/registration-page/registration-page';

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
