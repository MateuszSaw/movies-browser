import React from 'react';
import starIcon from '../images/star.svg';
import { VoteAverage, RatesWrapper, StarIcon, Votes, MaxPoint } from './styled';

const Rates = ({ vote, voteAverage, movies, backdrop }) => {
  return(
    <RatesWrapper movies={movies}>
      {voteAverage ?
      <>
       <StarIcon
       src={starIcon}
       backdrop={backdrop}
       />
       <VoteAverage movies={movies} backdrop={backdrop}>
       {voteAverage?.toLocaleString("pl-PL", {maximumFractionDigits: 1, minimumFractionDigits: 1})}
         </VoteAverage>
       {!movies &&
         <MaxPoint backdrop={backdrop}>/ 10</MaxPoint>
       }
        <Votes
          movies={movies}
          backdrop={backdrop}
        >
        {vote} votes</Votes>
      </>
      :
      <Votes
        movies={movies}
        backdrop={backdrop}
      >
      No votes yet</Votes>
      }
    </RatesWrapper>
  );
}

export default Rates;