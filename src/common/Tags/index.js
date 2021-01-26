import React from 'react';
import { StyledTags, TagsItem } from './styled';

const Tags = ({ genresId }) => {
  return(
    <StyledTags>
      <TagsItem >Action</TagsItem>
      <TagsItem >Adventure</TagsItem>
      <TagsItem >Drama</TagsItem>
    </StyledTags>
  )
};

export default Tags;