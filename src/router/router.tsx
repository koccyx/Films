import { createBrowserRouter } from 'react-router-dom';
import FilmsPage from '../pages/films_page';
import About from '../pages/about-page';
import RouteError from '../utils/route_error';
import FetchFilmInfo from '../utils/fetch-film-info';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <FilmsPage />,
    errorElement: <RouteError />,
  },
  {
    path: 'about/:filmId',
    element: <About />,
    errorElement: <RouteError />,
    loader: filmRouter,
  },
]);

async function filmRouter({params}:{params: any}) {
  return FetchFilmInfo(params.filmId as number);
}
