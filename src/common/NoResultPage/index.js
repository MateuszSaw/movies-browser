import React from 'react';
import { Header } from '../Header';
import { Wrapper, StyledNoResults } from './styled';

export const NoResultPage = ({ query }) => {
  return (
    <>
      <Header>
        Sorry, there are no results for "{query}"
      </Header>
      <Wrapper>
        <StyledNoResults />
      </Wrapper>
    </>
  )
};