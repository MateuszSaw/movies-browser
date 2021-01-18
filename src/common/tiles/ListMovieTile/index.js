import React from 'react';
import {  AverageRate, Poster, RatesWrapper, StarIcon, Subtitle, Title } from '../styled';
import { Wrapper, Content, StyledLink} from './styled';
import poster from '../../images/poster.jpg';
import Tags from '../../Tags';
import star from '../../images/star.svg'
import { toMovieDetails } from '../../../routes';

const ListMovieTile = () => {
return(
  <StyledLink to={toMovieDetails()}>
    <Wrapper>
      <Poster listTile src={poster} alt=""/>
      <Content>
      <Title listTile>Mulan long title long titlemulan long title long</Title>
      <Subtitle listTile>2020</Subtitle>
      <Tags />
      <RatesWrapper>
            <StarIcon src={star} alt='' />
            <AverageRate>7.8</AverageRate>
            <AverageRate>/10</AverageRate>
            <AverageRate>335 votes</AverageRate>
      </RatesWrapper>
      </Content>
    </Wrapper>
  </StyledLink>
);
}

export default ListMovieTile;

