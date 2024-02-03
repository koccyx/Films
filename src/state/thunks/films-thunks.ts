import { createAsyncThunk } from '@reduxjs/toolkit';

export interface FilmsInterface {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
}

interface FetchFilmsArgumentsInterface {
  option: string;
  page: number;
  token: string;
}

export const fetchFilms = createAsyncThunk(
  'films/fetchFilms',
  async function (args: FetchFilmsArgumentsInterface) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${args.option}?language=en-US&page=${args.page}`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${args.token}`,
          },
        },
      );
      const data = await response.json();
      const films = data.results.map((elem: FilmsInterface) => ({
        title: elem.title,
        poster_path: elem.poster_path,
        vote_average: elem.vote_average,
        id: elem.id,
      }));

      return { films, pages: data.total_pages };
    } catch (error: unknown) {
      console.log(error);
      return { films: [], pages: 1 };
    }
  },
);

interface FetchFavoritesArgumentsInterface {
  accountId: number;
  token: string;
}

interface FavoritesInterface {
  id: number;
}

export const fetchFavorites = createAsyncThunk(
  'films/fetchFavorites',
  async function (args: FetchFavoritesArgumentsInterface) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${args.accountId}/favorite/movies`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              `Bearer ${args.token}`,
          },
        },
      );
      const data = await response.json();
      const favId = data.results.map((elem: FavoritesInterface) => elem.id);
      return favId;
    } catch (error: unknown) {
      console.warn(error);
      return [];
    }
  },
);

interface PostFavoriteArgumentsInterface {
  token: string;
  userId: number;
  filmId: number;
  isFavorite: boolean;
}

export interface PostData {
  isSuccess: boolean;
  id: number;
}

export const postFavorite = createAsyncThunk(
  'films/postFavorite',
  async function (args: PostFavoriteArgumentsInterface) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/account/${args.userId}/favorite`,
        {
          method: 'POST',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            Authorization: `Bearer ${args.token}`,
          },
          body: JSON.stringify({
            media_type: 'movie',
            media_id: args.filmId,
            favorite: args.isFavorite,
          }),
        },
      );
      const data = await response.json();

      return { isSuccess: data.success, id: args.filmId };
    } catch (error: unknown) {
      console.warn(error);
      return { isSuccess: false, id: args.filmId };
    }
  },
);

interface FindByTitleArgumentsInterface {
  token: string;
  title: string;
  page: number;
}

export const findByTitle = createAsyncThunk(
  'films/findByTitle',
  async function (args: FindByTitleArgumentsInterface) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${args.title}&include_adult=true&language=en-US&page=${args.page}'`,
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${args.token}`,
          },
        },
      );
      const data = await response.json();
      const films = data.results.map((elem: FilmsInterface) => ({
        title: elem.title,
        poster_path: elem.poster_path,
        vote_average: elem.vote_average,
        id: elem.id,
      }));

      return { films, pages: data.total_pages };
    } catch (error: unknown) {
      console.log(error);
      return { films: [], pages: 1 };
    }
  },
);
