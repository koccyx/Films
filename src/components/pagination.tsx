import React, { useContext } from 'react';
import { Pagination as Paginator }  from '@mui/material';
import { SxProps, Theme } from '@mui/material/styles';
import { FilterContext } from '../state/Context';

interface propsInterface {
  sx?: SxProps<Theme>;
}

export default function Pagination(props: propsInterface) {
  const {state, handlePage} = useContext(FilterContext);


  return (
    <Paginator
        count={state.totalPages}
        sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        size='medium'
        page={state.page}
        onChange={(event: React.ChangeEvent<unknown>, value: number) => {
          handlePage(value);
        }}
      /> 
  );
}
