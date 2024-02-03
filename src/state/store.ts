import { combineReducers, configureStore } from '@reduxjs/toolkit';
import filterSlice from './slices/filter-slice';
import filmsSlice from './slices/films-slice';
import userSlice from './slices/user-slice';

const rootReducer = combineReducers({
  filterReducer: filterSlice,
  filmsReducer: filmsSlice,
  userReducer: userSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
