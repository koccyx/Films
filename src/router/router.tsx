import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FilmsPage from '../pages/films_page';
import About from '../pages/about';
import RouteError from '../utils/route_error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FilmsPage />,
    errorElement: <RouteError />,
  },
  {
    path: 'about/:filmId',
    element: <About />,
  },
]);
