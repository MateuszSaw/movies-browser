 import React from 'react';
 import  { Poster, Wrapper, TileContent, Description, Title, Subtitle, Details } from './styled';
 import camera from '../images/camera.svg';
  import Tags from '../Tags';
import Rates from '../Rates';

 const Tile = ({ title, poster, subtitle, description, details, vote, voteAverage, genresId, movies }) => {
   return (
    <Wrapper movies>
      <Poster
        movies={movies}
        noImage={!poster}
        src={poster ?
          `https://image.tmdb.org/t/p/w342/${poster}`:
          camera
        }
        alt={poster && title}/>
      <TileContent>
        <Title movies={movies}>{title}</Title>
        <Subtitle movies={movies}>
          {subtitle.slice(0,4)}
        </Subtitle>
        {details &&
          <Details>
            {details}
          </Details>
        }
        <Tags genresId={genresId}/>
        <Rates
          movies={movies}
          vote={vote}
          voteAverage={voteAverage}
        />
        { description &&
        <Description>
          {description}
        </Description>
        }
      </TileContent>
    </Wrapper>

   );
 };

 export default Tile;