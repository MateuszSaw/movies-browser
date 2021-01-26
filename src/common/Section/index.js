import React from 'react';
import { Body, Header, Wrapper } from './styled';

export const Section = ({ title, body }) => {
  return (
    <Wrapper>
      <Header>
        {title}
      </Header>
      <Body>
        {body}
      </Body>
    </Wrapper>
  );
};

export default Section;