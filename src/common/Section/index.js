import React from 'react';
import { Body, Header, Wrapper } from './styled';

export const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Header>
        {title}
      </Header>
      <Body>
        {children}
      </Body>
    </Wrapper>
  );
};

export default Section;