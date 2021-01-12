 import React from 'react';
 import  { StyledTile, Poster, TileContent, Description, Title, Subtitle, Details, DetailsCategory, RatesWrapper, AverageRate, StarIcon } from './styled';
 import poster from '../images/poster.jpg';
 import star from '../images/star.svg'
  import Tags from '../Tags';

 const Tile = ({ pogrubienie }) => {
   return (
    <StyledTile>
      <Poster src={poster} alt=""/>
      <TileContent>
        <Title>Mulan</Title>
        <Subtitle>2020</Subtitle>
        <Details>
          <DetailsCategory>Production:</DetailsCategory>China, United States of America <br />
          <DetailsCategory>Release date:</DetailsCategory>24.10.2020
        </Details>
        <Tags />
        <RatesWrapper>
          <StarIcon src={star} alt='' />
          <AverageRate>7.8</AverageRate>
          <AverageRate>/10</AverageRate>
          <AverageRate>335 votes</AverageRate>

        </RatesWrapper>

        <Description>
          A young Chinese maiden disguises herself as a male warrior in order to save her father.
          Disguises herself as a male warrior in order to save her father.
          A young Chinese maiden disguises herself as a male warrior in order to save her father.
        </Description>
      </TileContent>
    </StyledTile>

   );
 };

 export default Tile;