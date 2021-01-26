 import React from 'react';
 import  {  Poster, Wrapper, TileContent, Description, Title, Subtitle, Details, DetailsCategory, RatesWrapper, AverageRate, StarIcon } from './styled';
 import star from '../images/star.svg'
  import Tags from '../Tags';

 const Tile = ({ title, poster, description, subtitle, details, vote, voteAverage, genresId }) => {
   return (
    <Wrapper movies>
      <Poster
        movies
        src={poster ? `https://image.tmdb.org/t/p/w342/${poster}` : "No image Here"}
        alt={title}/>
      <TileContent>
        <Title movies>{title}</Title>
        <Subtitle movies>
          {subtitle.slice(0,4)}
        </Subtitle>
        {!!details ||
          <Details>
            {details}
          </Details>
        }
        <Tags genresId={genresId}/>
        <RatesWrapper>
          <StarIcon src={star} alt='' />
          <AverageRate>{vote}</AverageRate>
          <AverageRate>/10</AverageRate>
          <AverageRate>{voteAverage} votes</AverageRate>
        </RatesWrapper>
        {!!description ||
        <Description>
          {description}
        </Description>
        }
      </TileContent>
    </Wrapper>

   );
 };

 export default Tile;