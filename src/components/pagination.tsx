import { Pagination as Paginator } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks/redux-hooks';
import { filterSlice } from '../state/slices/filter-slice';

export default function Pagination() {
  const { setPage } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.filterReducer);
  const { totalPages } = useAppSelector((state) => state.filmsReducer);

  const setCurrentPage = (page: number) => {
    dispatch(setPage(page));
  };

  return (
    <Paginator
      count={totalPages}
      sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      size='medium'
      page={page}
      onChange={(event: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
      }}
    />
  );
}
