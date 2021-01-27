import React from 'react';
import starIcon from '../images/star.svg';
import { VoteAverage, RatesWrapper, StarIcon, Votes } from './styled';

const Rates = ({ vote, voteAverage, movies }) => {
  return(
    <RatesWrapper movies={movies}>
      {voteAverage ?
      <>
       <StarIcon src={starIcon}></StarIcon>
       <VoteAverage movies={movies}>{voteAverage}</VoteAverage>
       {!movies &&
         <Votes>/ 10</Votes>
       }
       <Votes movies={movies}>{vote} votes</Votes>
      </>
      :
      <Votes movies={movies}>No votes yet</Votes>

      }
    </RatesWrapper>
  );
}

export default Rates;