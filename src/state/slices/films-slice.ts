import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  fetchFilms,
  fetchFavorites,
  postFavorite,
  findByTitle,
  PostData,
} from '../thunks/films-thunks';

interface FetchedDate {
  films: FilmsInterface[];
  pages: number;
}

export interface FilmsInterface {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
}

export interface FilmsState {
  films: FilmsInterface[];
  favoriteFilms: number[];
  isLoading: boolean;
  totalPages: number;
  isError: boolean;
}

const initialState: FilmsState = {
  films: [],
  isLoading: true,
  totalPages: 1,
  favoriteFilms: [],
  isError: false,
};

export const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setFilms(state, action: PayloadAction<FilmsInterface[]>) {
      state.films = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    setFavoriteFilm(state, action: PayloadAction<number>) {
      const selectedFilm = action.payload;
      if (!state.favoriteFilms.includes(selectedFilm)) {
        state.favoriteFilms = [...state.favoriteFilms, selectedFilm];
      } else {
        state.favoriteFilms = state.favoriteFilms.filter((item) => {
          return item != selectedFilm;
        });
      }
    },
    setError(state, action: PayloadAction<boolean>) {
      state.isError = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.films = action.payload.films;
      state.totalPages = action.payload.pages;
    });
    builder.addCase(fetchFilms.rejected, (state) => {
      state.isError = true;
    });
    builder.addCase(fetchFavorites.fulfilled, (state, action) => {
      state.favoriteFilms = action.payload;
    });
    builder.addCase(
      postFavorite.fulfilled,
      (state, action: PayloadAction<PostData>) => {
        if (action.payload.isSuccess) {
          state.isError = false;
        } else {
          state.isError = true;
          if (state.favoriteFilms.includes(action.payload.id)) {
            state.favoriteFilms = state.favoriteFilms.filter(
              (item) => item != action.payload.id,
            );
          } else {
            state.favoriteFilms = [...state.favoriteFilms, action.payload.id];
          }
        }
      },
    );

    builder.addCase(
      findByTitle.fulfilled,
      (state, action: PayloadAction<FetchedDate>) => {
        state.films = action.payload.films;
        state.totalPages = action.payload.pages;
        state.isLoading = false;
      },
    );
    builder.addCase(findByTitle.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(findByTitle.rejected, (state) => {
      state.isError = true;
    });
  },
});

export default filmsSlice.reducer;
