export enum FILMS_ACTIONS {
  ADD_FILMS_ACTION = 'ADD_FILM',
  LOADING_FILM_ACTION = 'IS_LOADING',
}

export interface FilmsInterface {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
}

export interface FilmsState {
  films: FilmsInterface[];
  isLoading: boolean;
}

export interface FilmsAction {
  type: FILMS_ACTIONS;
  payload: FilmsInterface[] | boolean;
}

export function filmsReducer(
  state: FilmsState,
  action: FilmsAction,
): FilmsState {
  switch (action.type) {
    case FILMS_ACTIONS.ADD_FILMS_ACTION: {
      return {
        ...state,
        films: action.payload as FilmsInterface[],
      };
    }
    case FILMS_ACTIONS.LOADING_FILM_ACTION: {
      return {
        ...state,
        isLoading: action.payload as boolean,
      };
    }
    default: {
      return state;
    }
  }
}
