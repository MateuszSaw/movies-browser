import React from 'react';
import  { Poster, Wrapper, TileContent, Description, Title, Subtitle, ContentWrapper } from './styled';
import camera from '../images/camera.svg';
import Tags from '../Tags';
import Rates from '../Rates';
import MetaData from '../MetaData';

const Tile = ({
  title,
  poster,
  subtitle,
  vote,
  voteAverage,
  genresId,
  production,
  releaseDate,
  description,
  movies,
  metaDataOnMobile,
  birthPlace,
  birthDate,
  personDetails,
}) => {
  return (
    <Wrapper
      movies={movies}
      personDetails={personDetails}
    >
    <Poster
      movies={movies}
      noImage={!poster}
      src={poster ?
        `https://image.tmdb.org/t/p/w342/${poster}`:
        camera
      }
      alt={poster && title}/>
    <TileContent movies={movies}>
        <ContentWrapper movies={movies} metaDataOnMobile={metaDataOnMobile}>
          <Title movies={movies}>{title}</Title>
          {subtitle &&
            <Subtitle movies={movies}>
                {subtitle.slice(0,4)}
            </Subtitle>
          }
          {!movies && production ?
            <MetaData
              production = {production}
              releaseDate = {releaseDate}
            />
            :
            !movies &&
            <MetaData
              personDetails={personDetails}
              birthPlace = {birthPlace}
              birthDate = {birthDate}
            />
          }

          {genresId &&
            <Tags genresId={genresId}/>
          }
        </ContentWrapper>
        <Rates
            personDetails={personDetails}
            movies={movies}
            vote={vote}
            voteAverage={voteAverage}
        />
    </TileContent>
    {description &&
      <Description>
        {description}
      </Description>
    }
    </Wrapper>
  );
};

 export default Tile;