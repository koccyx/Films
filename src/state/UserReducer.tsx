export enum USER_ACTIONS {
  SET_MAIL_ACTION = 'SET_MAIL',
  SET_TOKEN_ACTION = 'SET_TOKEN',
}

export interface UserInterface {
  mail: string;
  token: string;
}


export interface UserAction {
  type: USER_ACTIONS;
  payload: string;
}

export function userReducer(
  state: UserInterface,
  action: UserAction,
): UserInterface {
  switch (action.type) {
    case USER_ACTIONS.SET_MAIL_ACTION: {
      return {
        ...state,
        mail: action.payload as string,
      };
    }
    case USER_ACTIONS.SET_TOKEN_ACTION: {
      return {
        ...state,
        token: action.payload as string,
      };
    }
    default: {
      return state;
    }
  }
}
