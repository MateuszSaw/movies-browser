import React from 'react';
import { useSelector } from 'react-redux';
import { selectGenres } from '../../features/genres/genresSlice';
import { StyledTags, TagsItem } from './styled';

const Tags = ({ genresId }) => {
  const genresList = useSelector(selectGenres);

  return(
    <StyledTags>
      { genresId?.map(genre =>
        <TagsItem key={genre.name || genre}>
          { genre.name ||
          genresList.genres[genresList.genres.findIndex(({ id }) => id === genre)].name}
        </TagsItem>
      )}
    </StyledTags>
  )
};

export default Tags;