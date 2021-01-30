import React from 'react';
import loader from '../images/loader.svg'
import { Loader, Wrapper } from './styled';

export const Loading = () => {
  return (
<Wrapper>
  <Loader src={loader} />
</Wrapper>
  )
};