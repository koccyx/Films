export enum FILMS_ACTIONS {
  ADD_FILMS_ACTION = 'ADD_FILM',
}

export interface FilmsInterface {
  title: string;
  poster_path: string;
  vote_average: number;
  id: number;
}

export interface FilmsState {
  films: FilmsInterface[];
}

export interface FilmsAction {
  type: FILMS_ACTIONS;
  payload: FilmsInterface[];
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
    default: {
      return state;
    }
  }
}
