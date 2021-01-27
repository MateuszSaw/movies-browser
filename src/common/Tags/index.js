import React from 'react';
import { useSelector } from 'react-redux';
import { selectGenres } from '../../features/movies/moviesSlice';
import { StyledTags, TagsItem } from './styled';

const Tags = ({ genresId }) => {
  const genresList = useSelector(selectGenres);

  return(
    <StyledTags>
      {genresId.map(genre =>
        <TagsItem key={genre}>
          {genresList.genres[genresList.genres.findIndex(({ id }) => id === genre)].name}
        </TagsItem>
      )}
    </StyledTags>
  )
};

export default Tags;