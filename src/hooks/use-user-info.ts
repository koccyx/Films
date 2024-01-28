import { useContext, useEffect } from 'react';
import { UserContext } from '../state/Context';

export default function useUserInfo(): {
  id: number;
  token: string;
  setId: (id: number) => void;
  setToken: (token: string) => void;
} {
  const { state, handleId, handleToken } = useContext(UserContext);
  
  
  useEffect(() => {
    const cookieData = document.cookie
      .split(';')
      .map((elem) => elem.split('=').map((item) => item.trim()))
      .filter((elem) => elem[0] == 'token' || elem[0] == 'id');

    if (cookieData.length > 0) {
      cookieData.forEach((item) => {
        if (item[0] == 'token') {
          handleToken(item[1]);
        } else if (item[0] == 'id') {
          handleId(Number(item[1]));
        }
      });
    }
  }, []);
  
  const setToken = (token: string) => {
    document.cookie = `token=${token}; max-age=720000`;
    handleToken(token);
  };
  
  
  const setId = (id: number) => {
    document.cookie = `id=${id}; max-age=720000`;
    handleId(id);
  };

  return { id: state.id, token: state.token, setToken, setId };
}
