import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux-hooks';
import { userSlice } from '../state/slices/user-slice';

export default function useUserInfo(): {
  id: number;
  token: string;
  setId: (id: number) => void;
  setToken: (token: string) => void;
} {
  // const { state, handleId, handleToken } = useContext(UserContext);
  const dispatch = useAppDispatch();
  const { userId, token } = useAppSelector((state) => state.userReducer);
  const { setUserId, setToken } = userSlice.actions;

  useEffect(() => {
    const cookieData = document.cookie
      .split(';')
      .map((elem) => elem.split('=').map((item) => item.trim()))
      .filter((elem) => elem[0] == 'token' || elem[0] == 'id');

    if (cookieData.length > 0) {
      cookieData.forEach((item) => {
        if (item[0] == 'token') {
          dispatch(setToken(item[1]));
        } else if (item[0] == 'id') {
          dispatch(setUserId(Number(item[1])));
        }
      });
    }
  }, []);

  const setNewToken = (token: string) => {
    document.cookie = `token=${token}; max-age=720000`;
    dispatch(setToken(token));
  };

  const setId = (id: number) => {
    document.cookie = `id=${id}; max-age=720000`;
    dispatch(setUserId(id));
  };

  return { id: userId, token: token, setToken: setNewToken, setId };
}
