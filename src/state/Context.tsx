/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactNode, createContext, useReducer } from 'react';
import {
  FiltersState,
  filterReducer,
  ACTIONS,
  SelectInterface,
} from './filter-reducer';

import {
  FILMS_ACTIONS,
  FilmsInterface,
  FilmsState,
  filmsReducer,
} from './films-reducer';

import {
  USER_ACTIONS,
  UserInterface,
  userReducer,
} from './user-reducer';

import {
  ERROR_ACTIONS,
  ErrorInterface,
  errorReducer,
} from './error-reducer';

interface ContextProviderProps {
  children: ReactNode;
  filtersDefaultState: FiltersState;
  filmsDefaultState: FilmsState;
  userDefaultState: UserInterface;
}

export interface FiltersContextInterface {
  state: FiltersState;
  handleGenres: (newValue: SelectInterface[]) => void;
  handleYears: (years: number[]) => void;
  handleSort: (sortBy: SelectInterface) => void;
  handlePage: (page: number) => void;
  handleTotalPages: (total_pages: number) => void;
  handleFilmTitle: (filmTitle: string) => void;
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
  const handleFilmTitle = (filmTitle: string) => {
    dispatch({ type: ACTIONS.FILM_TITLE_ACTION, payload: filmTitle });
  };

  return {
    state,
    handleGenres,
    handleYears,
    handleSort,
    handlePage,
    handleTotalPages,
    handleFilmTitle,
  };
};

export const filtersDefaultState: FiltersState = {
  genreList: [],
  sortOption: { text: 'popular', value: 'popular'},
  selectedYears: [1970, 2023],
  page: 1,
  totalPages: 1,
  filmTitle: '',
};

export const FilterContext = createContext<FiltersContextInterface>({
  state: filtersDefaultState,
  handleGenres: (newValue: SelectInterface[]) => null,
  handleYears: (years: number[]) => null,
  handleSort: (sortBy: SelectInterface) => null,
  handlePage: (page: number) => null,
  handleTotalPages: (total_pages: number) => null,
  handleFilmTitle: (filmTitle: string) => null,
});

interface FilmsContextProviderProps {
  children: ReactNode;
  defaultState: FilmsState;
}

export interface FilmsContextInterface {
  state: FilmsState;
  handleFilms: (films: FilmsInterface[]) => void;
  handleLoading: (isLoading: boolean) => void;
}

export const useFilmsContext = (initState: FilmsState) => {
  const [state, dispatch] = useReducer(filmsReducer, initState);

  const handleFilms = (newValue: FilmsInterface[]) => {
    dispatch({ type: FILMS_ACTIONS.ADD_FILMS_ACTION, payload: newValue });
  };

  const handleLoading = (isLoading: boolean) => {
    dispatch({ type: FILMS_ACTIONS.LOADING_FILM_ACTION, payload: isLoading });
  };

  return { state, handleFilms, handleLoading };
};

export const filmsDefaultState: FilmsState = {
  films: [],
  isLoading: true,
};

export const FilmsContext = createContext<FilmsContextInterface>({
  state: filmsDefaultState,
  handleFilms: (films: FilmsInterface[]) => null,
  handleLoading: (isLoading: boolean) => null,
});


interface UserContextProviderProps {
  children: ReactNode;
  defaultState: FilmsState;
}

export interface UserContextInterface {
  state: UserInterface;
  handleId: (id: number) => void;
  handleToken: (token: string) => void;
  handleFavoriteFilms: (film: number) => void;
  handleArrayFavoriteFilms: (films: number[]) => void;
}

export const useUserContext = (initState: UserInterface) => {
  const [state, dispatch] = useReducer(userReducer, initState);

  const handleId = (id: number) => {
    dispatch({ type: USER_ACTIONS.SET_ID_ACTION, payload: id });
  };

  const handleToken = (token: string) => {
    dispatch({ type: USER_ACTIONS.SET_TOKEN_ACTION, payload: token });
  };

  const handleFavoriteFilms = (film: number) => {
    dispatch({ type: USER_ACTIONS.SET_FILMS_ACTION, payload: film });
  };

  const handleArrayFavoriteFilms = (films: number[]) => {
    dispatch({ type: USER_ACTIONS.SET_ARRAY_FILMS_ACTION, payload: films });
  };

  return { state, handleId, handleToken, handleFavoriteFilms, handleArrayFavoriteFilms };
};

export const userDefaultState: UserInterface = {
  id: 0,
  token: '',
  favoriteFilms: [],
};

export const UserContext = createContext<UserContextInterface>({
  state: userDefaultState,
  handleId: (id: number) => null,
  handleToken: (token: string) => null,
  handleFavoriteFilms: (film: number) => null,
  handleArrayFavoriteFilms: (films: number[]) => null,
});


//======================================================



interface ErrorContextProviderProps {
  children: ReactNode;
  defaultState: ErrorInterface;
}

export interface ErrorContextInterface {
  state: ErrorInterface;
  handleError: (error: ErrorInterface) => void,
}

export const useErrorContext = (initState: ErrorInterface) => {
  const [state, dispatch] = useReducer(errorReducer, initState);

  const handleError = (error: ErrorInterface) => {
    dispatch({ type: ERROR_ACTIONS.SET_ERROR, payload: error });
  };


  return { state, handleError};
};

const errorDefaultState: ErrorInterface = {
  errorText: '',
  isError: false,
};

export const ErrorContext = createContext<ErrorContextInterface>({
  state: errorDefaultState,
  handleError: (error: ErrorInterface) => null,
});


export default function ContextProvider({
  children,
  filtersDefaultState,
  filmsDefaultState,
  userDefaultState,
}: ContextProviderProps) {
  return (
    <FilmsContext.Provider value={{ ...useFilmsContext(filmsDefaultState) }}>
      <FilterContext.Provider value={{ ...useFiltersContext(filtersDefaultState) }}>
        <UserContext.Provider value={{...useUserContext(userDefaultState)}}>
          <ErrorContext.Provider value={{...useErrorContext(errorDefaultState)}}>
            {children}
          </ErrorContext.Provider>
        </UserContext.Provider>
      </FilterContext.Provider>
    </FilmsContext.Provider>
  );
}
