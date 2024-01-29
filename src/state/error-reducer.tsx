export enum ERROR_ACTIONS {
  SET_ERROR = 'SET_ERROR',
}

export interface ErrorInterface {
  isError: boolean;
  errorText: string;
}

export interface ErrorAction {
  type: ERROR_ACTIONS;
  payload: ErrorInterface;
}

export function errorReducer(
  state: ErrorInterface,
  action: ErrorAction,
): ErrorInterface {
  switch (action.type) {
    case ERROR_ACTIONS.SET_ERROR: {
      return {
        ...state,
        isError: action.payload.isError,
        errorText: action.payload.errorText,
      };
    }
    default: {
      return state;
    }
  }
}
