import React from 'react';
import loaderGif from '../img/loader.gif';
import { StyledLoader } from '../theme/theme';
export default function Loader() {
  return (
    <StyledLoader>
      <img src={loaderGif} alt='loader' />
    </StyledLoader>
  );
}
