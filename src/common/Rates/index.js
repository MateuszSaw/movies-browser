import React from 'react';
import { VoteAverage, RatesWrapper, Star, Votes, MaxPoint } from './styled';

const Rates = ({ vote, voteAverage, movies, backdrop }) => {
  return(
    <RatesWrapper movies={movies}>
      {voteAverage ?
      <>
       <Star
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