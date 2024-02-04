import { FilmPage } from '../pages/about-page/types';

export interface genre {
  id: number;
  name: string;
}

export default async function FetchFilmInfo(
  movieId: number,
  token: string,
): Promise<FilmPage> {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
      {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization:
            `Bearer ${token}`,
        },
      },
    );
    const data = await response.json();
    const filmInfo: FilmPageInterface = {
      img: data.poster_path,
      averageVote: data.vote_average,
      country: data.production_countries[0].iso_3166_1,
      genres: data.genres.map((genre: genre) => genre.name),
      overview: data.overview,
      releaseYear: data.release_date.slice(0, 4),
      title: data.title,
      id: data.id,
    };

    return filmInfo;
  } catch (error: unknown) {
    console.warn(error);
    return {
      img: '',
      title: null,
      averageVote: 0,
      country: '',
      genres: [],
      overview: '',
      releaseYear: 0,
      id: 0,
    };
  }
}
