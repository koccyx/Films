import { useContext, useEffect } from 'react';
import { UserContext } from '../state/Context';

export default function useToken(): [string, (newToken: string) => void] {
  const { state, handleToken } = useContext(UserContext);

  useEffect(() => {
    const item = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token') as string) : ''; 
    
    handleToken(item);
  }, []);

  const setNewToken = (newToken: string) => {
    handleToken(newToken);
    localStorage.setItem('token', JSON.stringify(newToken));
  };

  return [state.token, setNewToken];
}
