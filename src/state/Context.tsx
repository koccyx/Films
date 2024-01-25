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
  filmsReducer,
} from './FilmsReducer';

import {
  USER_ACTIONS,
  UserInterface,
  userReducer,
} from './UserReducer';

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

  return {
    state,
    handleGenres,
    handleYears,
    handleSort,
    handlePage,
    handleTotalPages,
  };
};

export const filtersDefaultState: FiltersState = {
  genreList: [],
  sortOption: { text: 'Popularity', value: 'popular' },
  selectedYears: [1970, 2023],
  page: 1,
  totalPages: 1,
};

export const FilterContext = createContext<FiltersContextInterface>({
  state: filtersDefaultState,
  handleGenres: (newValue: SelectInterface[]) => null,
  handleYears: (years: number[]) => null,
  handleSort: (sortBy: SelectInterface) => null,
  handlePage: (page: number) => null,
  handleTotalPages: (total_pages: number) => null,
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
  handleMail: (mail: string) => void;
  handleToken: (token: string) => void;
}

export const useUserContext = (initState: UserInterface) => {
  const [state, dispatch] = useReducer(userReducer, initState);

  const handleMail = (mail: string) => {
    dispatch({ type: USER_ACTIONS.SET_MAIL_ACTION, payload: mail });
  };

  const handleToken = (token: string) => {
    dispatch({ type: USER_ACTIONS.SET_TOKEN_ACTION, payload: token });
  };

  return { state, handleMail, handleToken };
};

export const userDefaultState: UserInterface = {
  mail: '',
  token: '',
};

export const UserContext = createContext<UserContextInterface>({
  state: userDefaultState,
  handleMail: (mail: string) => null,
  handleToken: (token: string) => null,
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
          {children}
        </UserContext.Provider>
      </FilterContext.Provider>
    </FilmsContext.Provider>
  );
}
