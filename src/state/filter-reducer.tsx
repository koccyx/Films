export enum ACTIONS {
  GENRES_ACTION = 'GENRES_ACTION',
  YEARS_ACTION = 'YEARS_ACTION',
  SORT_ACTION = 'SORT_ACTION',
  PAGE_ACTION = 'PAGE_ACTION',
  TOTAL_PAGE_ACTION = 'TOTAL_PAGE_ACTION',
  FILM_TITLE_ACTION = 'FILM_TITLE_ACTION',
}
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

export interface FiltersAction {
  type: ACTIONS;
  payload: SelectInterface | number[] | SelectInterface[] | number | string;
}

export function filterReducer(
  state: FiltersState,
  action: FiltersAction,
): FiltersState {
  switch (action.type) {
    case ACTIONS.GENRES_ACTION: {
      return {
        ...state,
        genreList: action.payload as SelectInterface[],
        page: 1,
      };
    }
    case ACTIONS.YEARS_ACTION: {
      return {
        ...state,
        selectedYears: action.payload as number[],
        page: 1,
      };
    }
    case ACTIONS.SORT_ACTION: {
      return {
        ...state,
        sortOption: action.payload as SelectInterface,
        page: 1,
      };
    }
    case ACTIONS.PAGE_ACTION: {
      return {
        ...state,
        page: action.payload as number,
      };
    }
    case ACTIONS.TOTAL_PAGE_ACTION: {
      return {
        ...state,
        totalPages: action.payload as number,
      };
    }
    case ACTIONS.FILM_TITLE_ACTION: {
      return {
        ...state,
        filmTitle: action.payload as string,
      };
    }
    default: {
      return state;
    }
  }
}
