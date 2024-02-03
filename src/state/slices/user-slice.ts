import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUserId } from '../thunks/user-thunks';

export interface UserState {
  token: string;
  userId: number;
}

const initialState: UserState = {
  token: '',
  userId: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUserId(state, action: PayloadAction<number>) {
      state.userId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchUserId.fulfilled,
      (state, action: PayloadAction<number>) => {
        console.log(action.payload);

        state.userId = action.payload;
      },
    );
  },
});

export default userSlice.reducer;
