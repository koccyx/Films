/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useReducer } from 'react';
import {
  FiltersState,
  filterReducer,
  ACTIONS,
  SelectInterface,
} from './FilterReducer';

import {
  FILMS_ACTIONS,
  FilmsInterface,
  FilmsState,
  FilmsAction,
  filmsReducer,
} from './FilmsReducer';


interface ContextProviderProps {
  children: ReactNode;
  defaultState: FiltersState;
  filmsDefaultState: FilmsState;
}


export interface FiltersContextInterface {
  state: FiltersState;
  handleGenres: (newValue: SelectInterface[]) => void;
  handleYears: (years: number[]) => void;
  handleSort: (sortBy: SelectInterface) => void;
  handlePage: (page: number) => void;
  handleTotalPages: (total_pages: number) => void;
}

export const useFiltersContext = (initState: FiltersState) => {
  const [state, dispatch] = useReducer(filterReducer, initState);

  const handleGenres = (newValue: SelectInterface[]) => {
    dispatch({ type: ACTIONS.GENRES_ACTION, payload: newValue });
  };

  const handleYears = (years: number[]) => {
    dispatch({ type: ACTIONS.YEARS_ACTION, payload: years });
  };

  const handleSort = (sortBy: SelectInterface) => {
    dispatch({ type: ACTIONS.SORT_ACTION, payload: sortBy });
  };

  const handlePage = (page: number) => {
    dispatch({ type: ACTIONS.PAGE_ACTION, payload: page });
  };
  const handleTotalPages = (total_pages: number) => {
    dispatch({ type: ACTIONS.TOTAL_PAGE_ACTION, payload: total_pages });
  };

  return { state, handleGenres, handleYears, handleSort, handlePage, handleTotalPages };
};

export const defaultState: FiltersState = {
  genreList: [],
  sortOption: { text: 'Popularity', value: 'popular' },
  selectedYears: [1970, 2023],
  page: 1,
  totalPages: 1,
};

export const FilterContext = createContext<FiltersContextInterface>({
  state: defaultState,
  handleGenres: (newValue: SelectInterface[]) => null,
  handleYears: (years: number[]) => null,
  handleSort: (sortBy: SelectInterface) => null,
  handlePage: (page: number) => null,
  handleTotalPages: (total_pages: number) => null,
});


interface FilmsContextProviderProps {//dsdsdsd
  children: ReactNode;
  defaultState: FilmsState;
}

export interface FilmsContextInterface {
  state: FilmsState;
  handleFilms: (films: FilmsInterface[]) => void;
}

export const useFilmsContext = (initState: FilmsState) => {
  const [state, dispatch] = useReducer(filmsReducer, initState);

  const handleFilms = (newValue: FilmsInterface[]) => {
    dispatch({type: FILMS_ACTIONS.ADD_FILMS_ACTION, payload: newValue});
  };

  return { state, handleFilms };
};

export const filmsDefaultState: FilmsState = {
  films: [],
};

export const FilmsContext = createContext<FilmsContextInterface>({
  state: filmsDefaultState,
  handleFilms: (films: FilmsInterface[]) => null,
});


export default function ContextProvider({
  children,
  defaultState,
  filmsDefaultState,
}: ContextProviderProps) {
  return (
    <FilmsContext.Provider value={{...useFilmsContext(filmsDefaultState)}}>
      <FilterContext.Provider value={{ ...useFiltersContext(defaultState) }}>
        {children}
      </FilterContext.Provider>
    </FilmsContext.Provider>
  );
}
