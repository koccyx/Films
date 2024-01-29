export enum USER_ACTIONS {
  SET_ID_ACTION = 'SET_ID',
  SET_TOKEN_ACTION = 'SET_TOKEN',
  SET_FILMS_ACTION = 'SET_FILMS',
  SET_ARRAY_FILMS_ACTION = 'SET_FAVORITE_FILMS',
}

export interface UserInterface {
  id: number;
  token: string;
  favoriteFilms: number[];
}

export interface UserAction {
  type: USER_ACTIONS;
  payload: string | number | number[];
}

export function userReducer(
  state: UserInterface,
  action: UserAction,
): UserInterface {
  switch (action.type) {
    case USER_ACTIONS.SET_ID_ACTION: {
      return {
        ...state,
        id: action.payload as number,
      };
    }
    case USER_ACTIONS.SET_TOKEN_ACTION: {
      return {
        ...state,
        token: action.payload as string,
      };
    }
    case USER_ACTIONS.SET_FILMS_ACTION: {
      const selectedFilm = action.payload as number;
      // debugger;
      if (!state.favoriteFilms.includes(selectedFilm)) {
        return {
          ...state,
          favoriteFilms: [...state.favoriteFilms, selectedFilm],
        };
      } else {
        return {
          ...state,
          favoriteFilms: state.favoriteFilms.filter((item) => {
            return item != selectedFilm;
          }),
        };
      }
    }
    case USER_ACTIONS.SET_ARRAY_FILMS_ACTION: {
      return {
        ...state,
        favoriteFilms: [...action.payload as number[]],
      };
    }
    default: {
      return state;
    }
  }
}
