import { Pagination as Paginator } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux-hooks';
import { filterSlice } from '../../../state/slices/filter-slice';

export default function Pagination() {
  const { setPage } = filterSlice.actions;
  const dispatch = useAppDispatch();
  const { page } = useAppSelector((state) => state.filterReducer);
  const { totalPages } = useAppSelector((state) => state.filmsReducer);


  const pageHandler = (e: React.ChangeEvent<unknown>, value: number) => {
    dispatch(setPage(value));
  };

  return (
    <Paginator
      count={totalPages}
      sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
      size='medium'
      page={page}
      onChange={pageHandler}
    />
  );
}
