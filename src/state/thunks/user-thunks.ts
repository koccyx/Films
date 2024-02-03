import { createAsyncThunk } from '@reduxjs/toolkit';

interface fetchIdAgumentsInterface {
  token: string;
}

export const fetchUserId = createAsyncThunk(
  'user/fetchUserId',
  async function (args: fetchIdAgumentsInterface) {
    try {
      const response = await fetch(
        'https://api.themoviedb.org/3/account/account_id',
        {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization:
              `Bearer ${args.token}`,
          },
        },
      );
      const data = await response.json();
      return data.id as number;
    } catch (error: unknown) {
      console.warn(error);
      return 0;
    }
  },
);
