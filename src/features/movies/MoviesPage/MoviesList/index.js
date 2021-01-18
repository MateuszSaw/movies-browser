import React from 'react';
import ListMovieTile from '../../../../common/tiles/ListMovieTile';
import { List } from './styled';

const MoviesList = () => {
  return(
    <List>
     <ListMovieTile />
     <ListMovieTile />
     <ListMovieTile />
     <ListMovieTile />
     <ListMovieTile />
     <ListMovieTile />
     <ListMovieTile />
     <ListMovieTile />
    </List>
  );
};

export default MoviesList;