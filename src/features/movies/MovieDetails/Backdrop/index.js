import React from 'react';
import Rates from '../../../../common/Rates';
import { Content, Image, Title, Wrapper } from './styled';

export const Backdrop = ({ backdrop, title, vote, voteAverage }) => {
  return (
    <Wrapper>
      <Image
        src={backdrop ?
          `https://image.tmdb.org/t/p/w1280/${backdrop}`:
          "coś poszło nie tak"
        }
        alt="image"
      />
      <Content>
      <Title>{title}</Title>
      <Rates
        vote={vote}
        voteAverage={voteAverage}
        backdrop={backdrop}
      />
      </Content>

    </Wrapper>
  );
};