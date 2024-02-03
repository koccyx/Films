import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SelectInterface {
  text: string;
  value: string;
}

export interface FiltersState {
  genreList: SelectInterface[];
  sortOption: SelectInterface;
  selectedYears: number[];
  page: number;
  totalPages: number;
  filmTitle: string;
}

const initialState: FiltersState = {
  genreList: [],
  sortOption: { text: 'popular', value: 'popular' },
  selectedYears: [1970, 2023],
  page: 1,
  totalPages: 1,
  filmTitle: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setGenre(state, action: PayloadAction<SelectInterface[]>) {
      state.genreList = action.payload;
      state.page = 1;
    },
    setYears(state, action: PayloadAction<number[]>) {
      state.selectedYears = action.payload;
      state.page = 1;
    },
    setSortOptions(state, action: PayloadAction<SelectInterface>) {
      state.sortOption = action.payload;
      state.page = 1;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setTotalPages(state, action: PayloadAction<number>) {
      state.totalPages = action.payload;
    },
    setFilmTitle(state, action: PayloadAction<string>) {
      state.filmTitle = action.payload;
      state.page = 1;
    },
  },
});

export default filterSlice.reducer;
